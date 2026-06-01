'use client';
import { useState, useRef, useEffect, FormEvent } from 'react';
import s from './SupportChatBot.module.css';

type Message = { id: string; role: 'user' | 'bot'; text: string; escalated?: boolean };
type TriageEntry = {
  id: string; ts: string; message: string;
  category: string; priority: string; confidence: number;
  needsEscalation: boolean; recommendedAction: string; status: string;
  emailEscalated: boolean;
};

const PRESETS = [
  { label: '💳 Double charge', text: 'I was charged twice for my hoodie order, need help urgently' },
  { label: '↩️ Return jacket',  text: 'I want to return my jacket — bought it last week' },
  { label: '✨ Love my shirt',  text: "Just received my linen shirt and it's incredible!" },
];

const EMAIL_RE = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/;

function priorityClass(p: string, styles: Record<string, string>) {
  if (p === 'urgent') return styles.logPriorityUrgent;
  if (p === 'high')   return styles.logPriorityHigh;
  if (p === 'medium') return styles.logPriorityMedium;
  return styles.logPriorityLow;
}

export default function SupportChatBot() {
  const [open, setOpen]       = useState(false);
  const [tab, setTab]         = useState<'chat' | 'logs'>('chat');
  const [messages, setMessages] = useState<Message[]>([]);
  const [logs, setLogs]       = useState<TriageEntry[]>([]);
  const [input, setInput]     = useState('');
  const [loading, setLoading] = useState(false);
  const sessionId = useRef(`tw-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ id: 'init', role: 'bot', text: "Hi! I'm the ThreadWave support assistant. How can I help you today?" }]);
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async (text: string) => {
    const msg = text.trim();
    if (!msg || loading) return;
    setInput('');
    setLoading(true);
    setMessages(prev => [...prev, { id: `u-${Date.now()}`, role: 'user', text: msg }]);

    // Detect email in message so n8n can use it
    const detectedEmail = EMAIL_RE.exec(msg)?.[0] ?? '';

    try {
      const res = await fetch('/api/support-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: msg,
          sessionId: sessionId.current,
          history: messages.map(m => ({ role: m.role, text: m.text })),
          ...(detectedEmail ? { userEmail: detectedEmail } : {}),
        }),
      });
      if (!res.ok) throw new Error('upstream');
      const data = await res.json();

      const emailEscalated = !!data.emailEscalated;

      setMessages(prev => [...prev, {
        id: `b-${Date.now()}`, role: 'bot',
        text: data.reply || "I'm having trouble responding right now. Please try again.",
        escalated: emailEscalated,
      }]);
      setLogs(prev => [{
        id: `log-${Date.now()}`,
        ts: new Date().toLocaleTimeString(),
        message: msg,
        category: data.category || '—',
        priority: data.priority || '—',
        confidence: typeof data.confidence === 'number' ? data.confidence : 0,
        needsEscalation: !!data.needsEscalation,
        recommendedAction: data.recommendedAction || '—',
        status: data.status || '—',
        emailEscalated,
      }, ...prev]);
    } catch {
      setMessages(prev => [...prev, { id: `err-${Date.now()}`, role: 'bot', text: 'Network error — please try again.' }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const onSubmit = (e: FormEvent) => { e.preventDefault(); send(input); };

  const handleClose = () => {
    setOpen(false);
    setMessages([]);
    setLogs([]);
    setInput('');
  };

  return (
    <div className={s.wrap}>
      <div className={`${s.panel} ${open ? '' : s.panelClosed}`}>
        {/* Header */}
        <div className={s.header}>
          <div>
            <div className={s.headerTitle}>ThreadWave Support</div>
            <div className={s.headerSub}>Gemini · n8n · Notion</div>
          </div>
          <div className={s.tabs}>
            <button className={`${s.tab} ${tab === 'chat' ? s.tabActive : ''}`} onClick={() => setTab('chat')}>Chat</button>
            <button className={`${s.tab} ${tab === 'logs' ? s.tabActive : ''}`} onClick={() => setTab('logs')}>
              Logs{logs.length > 0 ? ` (${logs.length})` : ''}
            </button>
          </div>
        </div>

        {/* Chat Tab */}
        {tab === 'chat' && (
          <>
            <div className={s.messages}>
              {messages.map(m => (
                <div key={m.id}>
                  <div className={m.role === 'bot' ? s.msgBot : s.msgUser}>{m.text}</div>
                  {m.escalated && (
                    <div className={s.escalatedBadge}>✉ Escalation raised · check your inbox</div>
                  )}
                </div>
              ))}
              {loading && <div className={s.msgBot}><span className={s.thinking}>Thinking…</span></div>}
              <div ref={bottomRef} />
            </div>
            <div className={s.presets}>
              {PRESETS.map(p => (
                <button key={p.label} className={s.chip} onClick={() => send(p.text)} disabled={loading}>{p.label}</button>
              ))}
            </div>
            <form className={s.inputRow} onSubmit={onSubmit}>
              <input ref={inputRef} className={s.input} type="text" value={input}
                onChange={e => setInput(e.target.value)} disabled={loading}
                placeholder="Ask about your order…" autoComplete="off" />
              <button className={s.sendBtn} type="submit" disabled={loading || !input.trim()}>→</button>
            </form>
          </>
        )}

        {/* Logs Tab */}
        {tab === 'logs' && (
          <div className={s.logs}>
            {logs.length === 0 ? (
              <div className={s.logsEmpty}>
                <div className={s.logsEmptyIcon}>⚡</div>
                <div>No triage events yet.</div>
                <div style={{ opacity: 0.5, marginTop: 4 }}>Send a message to see the pipeline fire.</div>
              </div>
            ) : logs.map(log => (
              <div key={log.id} className={s.logEntry}>
                <div className={s.logTs}>{log.ts} · n8n → Gemini Flash Lite</div>
                <div className={s.logMsg}>"{log.message}"</div>
                <div className={s.logGrid}>
                  <div><span className={s.logLabel}>category  </span><span className={s.logCategory}>{log.category}</span></div>
                  <div><span className={s.logLabel}>priority  </span><span className={priorityClass(log.priority, s)}>{log.priority}</span></div>
                  <div><span className={s.logLabel}>confidence </span><span className={s.logConfidence}>{Math.round(log.confidence * 100)}%</span></div>
                  <div><span className={s.logLabel}>action    </span><span className={s.logAction}>{log.recommendedAction}</span></div>
                  <div className={s.logEscalRow}>
                    <span className={s.logLabel}>escalation </span>
                    <span className={log.needsEscalation ? s.logEscalYes : s.logEscalNo}>
                      {log.needsEscalation ? '⚠ yes → Telegram alert' : '✓ auto-handled'}
                    </span>
                  </div>
                  {log.emailEscalated && (
                    <div className={s.logEscalRow}>
                      <span className={s.logLabel}>email     </span>
                      <span className={s.logEmailSent}>✉ escalation sent</span>
                    </div>
                  )}
                </div>
                <span className={`${s.logStatus} ${log.status === 'resolved' ? s.logStatusResolved : s.logStatusEscalated}`}>
                  {log.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <button className={s.fab} type="button" onClick={() => open ? handleClose() : setOpen(true)}>
        {open ? '✕' : '💬'}
      </button>
    </div>
  );
}

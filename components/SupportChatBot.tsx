'use client';
import { useState, useRef, useEffect, FormEvent } from 'react';

type Message = {
  id: string;
  role: 'user' | 'bot';
  text: string;
};

type TriageEntry = {
  id: string;
  ts: string;
  message: string;
  category: string;
  priority: string;
  confidence: number;
  needsEscalation: boolean;
  recommendedAction: string;
  status: string;
};

const PRESETS = [
  { label: '💳 Double charge', text: 'I was charged twice for my hoodie order, need help urgently' },
  { label: '↩️ Return jacket', text: 'I want to return my jacket, bought it last week' },
  { label: '✨ Love my shirt', text: 'Just received my linen shirt — absolutely love it!' },
];

export default function SupportChatBot() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<'chat' | 'logs'>('chat');
  const [messages, setMessages] = useState<Message[]>([]);
  const [logs, setLogs] = useState<TriageEntry[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const sessionId = useRef(`tw-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        id: 'init',
        role: 'bot',
        text: "Hi! I'm the ThreadWave support assistant. How can I help you today?",
      }]);
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

    try {
      const res = await fetch('/api/support-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg, sessionId: sessionId.current }),
      });

      if (!res.ok) throw new Error('upstream');
      const data = await res.json();

      setMessages(prev => [...prev, {
        id: `b-${Date.now()}`,
        role: 'bot',
        text: data.reply || "I'm having trouble responding right now. Please try again.",
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
      }, ...prev]);
    } catch {
      setMessages(prev => [...prev, {
        id: `err-${Date.now()}`,
        role: 'bot',
        text: 'Network error — please try again.',
      }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const onSubmit = (e: FormEvent) => { e.preventDefault(); send(input); };

  const priorityColor = (p: string) =>
    p === 'urgent' ? '#ff6b6b' : p === 'high' ? '#ffa94d' : '#74c0fc';

  return (
    <div className="fixed right-4 bottom-4 z-[5000] flex flex-col items-end pointer-events-none">

      {/* Panel */}
      <div className={`pointer-events-auto flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right rounded-2xl bg-white border border-black/10 shadow-[0_24px_60px_rgba(10,20,40,0.18)] ${open ? 'w-[min(380px,calc(100vw-32px))] opacity-100 scale-100 mb-3' : 'w-0 h-0 opacity-0 scale-0 mb-0'}`}>

        {/* Header */}
        <div className="bg-[#111827] text-white px-5 py-3 flex items-center justify-between gap-3 flex-shrink-0">
          <div>
            <div className="text-[14px] font-bold leading-none tracking-tight">ThreadWave Support</div>
            <div className="text-[11px] text-white/50 mt-1">Gemini · n8n · Notion</div>
          </div>
          <div className="flex gap-1 bg-white/10 rounded-lg p-0.5">
            {(['chat', 'logs'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all border-none cursor-pointer ${tab === t ? 'bg-white text-[#111827]' : 'bg-transparent text-white/60 hover:text-white'}`}>
                {t === 'chat' ? 'Chat' : `Logs${logs.length > 0 ? ` (${logs.length})` : ''}`}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Tab */}
        {tab === 'chat' && (
          <>
            <div className="flex-1 h-[280px] px-4 py-3 overflow-y-auto flex flex-col gap-2 bg-[#fafaf9]">
              {messages.map(m => (
                <div key={m.id} className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed break-words ${m.role === 'bot' ? 'bg-white border border-black/8 text-[#111] self-start rounded-bl-sm' : 'bg-[#111827] text-white self-end rounded-br-sm'}`}>
                  {m.text}
                </div>
              ))}
              {loading && (
                <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-[13px] bg-white border border-black/8 self-start">
                  <span className="text-gray-400">Thinking<span className="animate-pulse">...</span></span>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Preset chips */}
            <div className="flex gap-1.5 px-3 py-2 border-t border-black/5 overflow-x-auto flex-shrink-0">
              {PRESETS.map(p => (
                <button key={p.label} onClick={() => send(p.text)} disabled={loading}
                  className="flex-shrink-0 text-[11px] px-2.5 py-1.5 bg-[#f0ede8] hover:bg-[#e8e4de] rounded-full text-[#333] font-medium transition-colors disabled:opacity-40 whitespace-nowrap border-none cursor-pointer">
                  {p.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={onSubmit} className="flex gap-2 px-3 py-3 border-t border-black/10 bg-white flex-shrink-0">
              <input ref={inputRef} type="text" value={input} onChange={e => setInput(e.target.value)}
                disabled={loading} placeholder="Ask about your order..."
                className="flex-1 px-3 py-2.5 rounded-xl border border-black/15 text-[13px] outline-none focus:border-[#111827] bg-white disabled:bg-gray-50"
                autoComplete="off" />
              <button type="submit" disabled={loading || !input.trim()}
                className="bg-[#111827] hover:bg-[#1e293b] text-white px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-colors disabled:opacity-40 border-none cursor-pointer">
                →
              </button>
            </form>
          </>
        )}

        {/* Logs Tab */}
        {tab === 'logs' && (
          <div className="h-[380px] overflow-y-auto bg-[#0d1117] p-3 font-mono text-[11px]">
            {logs.length === 0 ? (
              <div className="text-[#666] text-center mt-10">
                <div className="text-2xl mb-2">⚡</div>
                <div>No triage events yet.</div>
                <div className="opacity-50 mt-1">Send a message to see the pipeline fire.</div>
              </div>
            ) : logs.map(log => (
              <div key={log.id} className="mb-3 border border-[#21262d] rounded-lg p-3 bg-[#161b22]">
                <div className="text-[#8b949e] mb-1.5">{log.ts} · n8n → Gemini Flash Lite</div>
                <div className="text-[#c9d1d9] italic truncate mb-2">"{log.message}"</div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 mb-2">
                  <div><span className="text-[#8b949e]">category  </span><span className="text-[#3fb950]">{log.category}</span></div>
                  <div><span className="text-[#8b949e]">priority  </span><span style={{ color: priorityColor(log.priority) }}>{log.priority}</span></div>
                  <div><span className="text-[#8b949e]">confidence </span><span className="text-[#79c0ff]">{Math.round(log.confidence * 100)}%</span></div>
                  <div><span className="text-[#8b949e]">action    </span><span className="text-[#d2a8ff]">{log.recommendedAction}</span></div>
                </div>
                <div className="mb-2">
                  <span className="text-[#8b949e]">escalation </span>
                  <span style={{ color: log.needsEscalation ? '#ff7b72' : '#3fb950' }}>
                    {log.needsEscalation ? '⚠ yes → Telegram alert' : '✓ auto-handled'}
                  </span>
                </div>
                <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${log.status === 'resolved' ? 'bg-[#0a280c] text-[#3fb950]' : 'bg-[#280a0a] text-[#ff7b72]'}`}>
                  {log.status}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FAB */}
      <button type="button" onClick={() => setOpen(!open)}
        className="pointer-events-auto h-14 w-14 rounded-full bg-[#111827] text-white shadow-[0_16px_40px_rgba(15,23,42,0.3)] transition-all hover:scale-105 hover:bg-[#1e293b] flex items-center justify-center text-xl border-none cursor-pointer">
        {open ? '✕' : '💬'}
      </button>
    </div>
  );
}

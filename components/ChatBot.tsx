'use client';
import { useState, useRef, useEffect, FormEvent } from 'react';

type SessionState = {
  id: string;
  intent_detected: boolean;
  has_time: boolean;
  has_name: boolean;
  service_request: string;
  preferred_time: string;
  name: string;
  step: string;
};

type Message = {
  id: string;
  type: 'user' | 'assistant';
  text: string;
  bookingLink?: string;
  previewUrl?: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState<SessionState>({
    id: Math.random().toString(36).slice(2, 12),
    intent_detected: false,
    has_time: false,
    has_name: false,
    service_request: '',
    preferred_time: '',
    name: '',
    step: 'greet',
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ id: 'g1', type: 'assistant', text: 'Hi! I’m your GarvinLabs booking agent. What service or topic are you looking to discuss?' }]);
      setSession(s => ({ ...s, step: 'asked-intent' }));
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading) return;
    const text = inputVal;
    setInputVal('');
    setIsLoading(true);
    setMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', text }]);
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session, message: text }),
      });
      const data = await res.json();
      if (data.session) setSession(data.session);
      
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        type: 'assistant', 
        text: data.reply || 'Sorry, I did not understand that.',
        bookingLink: data.bookingLink || undefined
      }]);
    } catch(err) {
      setMessages(prev => [...prev, { id: Date.now().toString(), type: 'assistant', text: 'Network error. Please try again.' }]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        type: 'assistant', 
        text: data.success ? 'Booking confirmed. Notification sent to the team.' : 'Could not send confirmation email.',
        previewUrl: data.previewUrl || undefined
      }]);
    } catch(err) {
      setMessages(prev => [...prev, { id: Date.now().toString(), type: 'assistant', text: 'Confirmation failed.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-[5000] flex flex-col items-end pointer-events-none">
      <div className={`pointer-events-auto flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right rounded-[24px] bg-white border border-black/10 shadow-[0_24px_60px_rgba(10,20,14,0.10)] ${isOpen ? 'w-[min(360px,calc(100vw-32px))] opacity-100 scale-100 mb-4' : 'w-0 h-0 opacity-0 scale-0 mb-0'}`}>
        <div className="bg-[#00A859] text-white px-5 py-[18px] font-sans tracking-tight">
          <strong className="block text-lg font-bold leading-none tracking-tight">Booking Agent</strong>
          <p className="text-[13px] opacity-90 m-0 mt-1">GarvinLabs assistant</p>
        </div>
        
        <div className="h-[340px] p-5 overflow-y-auto flex flex-col gap-3 text-sm font-sans bg-white">
          {messages.map((m) => (
            <div key={m.id} className={`max-w-[85%] px-4 py-3 rounded-[20px] leading-relaxed break-words ${m.type === 'assistant' ? 'bg-[#f4f6f2] text-[#0a0a0a] self-start rounded-bl-md' : 'bg-[#0a0a0a] text-white self-end rounded-br-md'}`}>
              <div dangerouslySetInnerHTML={{ __html: m.text }} />
              {m.bookingLink && (
                <div className="mt-3 flex flex-col gap-2">
                  <a href={m.bookingLink} target="_blank" rel="noreferrer" className="text-[#047857] font-bold underline decoration-2 underline-offset-2 hover:text-[#00A859]">Open booking page</a>
                  <button type="button" onClick={handleConfirm} disabled={isLoading} className="mt-2 w-full bg-[#00A859] hover:bg-[#047857] text-white font-semibold py-2 px-3 rounded-xl transition-colors disabled:opacity-50">
                    Confirm booking
                  </button>
                </div>
              )}
              {m.previewUrl && (
                <div className="mt-2">
                  <a href={m.previewUrl} target="_blank" rel="noreferrer" className="text-[#047857] font-semibold underline text-xs">View email preview</a>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t border-black/10 bg-white">
          <input 
            ref={inputRef}
            type="text" 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            disabled={isLoading}
            placeholder="Type your message..." 
            className="flex-1 px-[14px] py-3 rounded-xl border border-black/15 text-sm outline-none focus:border-[#00A859] disabled:bg-gray-50"
            autoComplete="off"
          />
          <button type="submit" disabled={isLoading} className="bg-[#00A859] hover:bg-[#047857] text-white font-semibold px-4 py-3 rounded-xl transition-colors disabled:opacity-50 border-none cursor-pointer">
            Send
          </button>
        </form>
      </div>

      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto h-[60px] w-[60px] cursor-pointer rounded-full border-none bg-[#00A859] text-white font-bold text-[15px] shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition-all hover:scale-105 hover:bg-[#047857] flex items-center justify-center"
      >
        {isOpen ? 'Close' : 'Chat'}
      </button>
    </div>
  );
}

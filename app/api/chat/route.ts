import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, session: incomingSession } = body || {};

    let session = incomingSession || {
      id: Math.random().toString(36).slice(2, 12),
      intent_detected: false,
      has_time: false,
      has_name: false,
      service_request: '',
      preferred_time: '',
      name: '',
      step: 'greet'
    };

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
    const BOOKING_URL = process.env.BOOKING_URL || 'https://calendly.com/labs_garvin/15min';

    const normalizeText = (text: string) => (text || '').trim().toLowerCase();

    const detectIntent = (text: string, sess: any) => {
      const normalized = normalizeText(text);
      if (!normalized) return;
      const services = ['consulting', 'implementation', 'system', 'build', 'diagnostic', 'call', 'meeting', 'teardown', 'appointment'];
      if (services.some(word => normalized.includes(word))) {
        sess.intent_detected = true;
        sess.service_request = normalized;
      }
    };

    const detectTime = (text: string, sess: any) => {
      const normalized = normalizeText(text);
      if (!normalized) return;
      const timePatterns = [
        /\\b\\d{1,2}(am|pm)\\b/, /\\btomorrow\\b/, /\\bthis (morning|afternoon|evening)\\b/, 
        /\\bnext (monday|tuesday|wednesday|thursday|friday|saturday|sunday)\\b/, 
        /\\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\\b/, 
        /\\bnext week\\b/, /\\bthis week\\b/
      ];
      if (timePatterns.some((re) => re.test(normalized))) {
        sess.has_time = true;
        sess.preferred_time = text.trim();
      }
    };

    const detectName = (text: string, sess: any) => {
      const normalized = normalizeText(text);
      if (!normalized) return;
      if (normalized.includes('my name is') || normalized.includes('i am') || normalized.includes("it's") || normalized.includes('im ')) {
        const nameMatch = text.match(/(?:my name is|i am|i'm|im|it['’]s)\\s+([A-Za-z]+(?:\\s+[A-Za-z]+)?)/i);
        if (nameMatch) {
          sess.name = nameMatch[1].trim();
          sess.has_name = true;
        }
      } else if (sess.step === 'ask-name' && text.split(' ').length < 4) {
        sess.name = text.trim();
        sess.has_name = true;
      }
    };

    const makeAssistantReply = (sess: any, userMsg: string) => {
      if (!sess.intent_detected) detectIntent(userMsg, sess);
      if (!sess.has_time) detectTime(userMsg, sess);
      if (!sess.has_name) detectName(userMsg, sess);

      if (!sess.intent_detected) {
        sess.step = 'ask-intent';
        return 'What kind of consultation or service are you looking for?';
      }

      if (!sess.has_time) {
        sess.step = 'ask-time';
        return 'Got it. Is there a specific day or time that works best for you?';
      }

      if (!sess.has_name) {
        sess.step = 'ask-name';
        return 'Great. Could I get your name so I can reserve the slot?';
      }

      if (sess.step !== 'booking-link') {
        sess.step = 'booking-link';
        return `Perfect, ${sess.name}. I found a booking page for your request at ${sess.preferred_time}. Please use this link to confirm your appointment.`;
      }

      return 'Once you book, tap Confirm so I can notify the team.';
    };

    const generateGeminiReply = async (prompt: string) => {
      if (!GEMINI_API_KEY) return null;
      try {
        const endpoint = 'https://generativeai.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
        const res = await fetch(`${endpoint}?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.3, maxOutputTokens: 256 },
            systemInstruction: {
              parts: [{ text: 'You are GarvinLabs booking receptionist. Keep answers short, one or two sentences. You represent GarvinLabs, an AI consulting firm. Ask only what is needed to complete the booking.' }]
            }
          })
        });
        if (!res.ok) return null;
        const data = await res.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
        return text ? text.trim() : null;
      } catch (err) {
        return null;
      }
    };

    let assistant = makeAssistantReply(session, message || '');
    if (GEMINI_API_KEY && session.step !== 'booking-link') {
        const prompt = `User said: "${message || 'Hello'}"\\nOur fallback reply is: "${assistant}"\\nState step: ${session.step}. Only ask the appropriate follow-up question.`;
        const geminiReply = await generateGeminiReply(prompt);
        if (geminiReply) assistant = geminiReply;
    }

    return NextResponse.json({ 
      session, 
      reply: assistant, 
      bookingLink: session.step === 'booking-link' ? BOOKING_URL : null 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

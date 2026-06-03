"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Types
interface Message {
  id: string;
  sender: "user" | "agent" | "system";
  text: string;
  timestamp: string;
}

interface LogEntry {
  time: string;
  message: string;
  type: "orchestrator" | "success" | "info" | "agent" | "warning";
}

interface PresetCase {
  label: string;
  subject: string;
  text: string;
  category: string;
  priority: string;
  sentiment: string;
  confidence: number;
  mockLogs: { delay: number; message: string; type: LogEntry["type"] }[];
  reply: string;
}

const THREADWAVE_PRESETS: PresetCase[] = [
  {
    label: "Duplicate Charge",
    subject: "Charged twice for my order",
    text: "Hi,\n\nI just noticed my card was charged twice for order #55123: two transactions of $74.00 each. Please refund the duplicate charge immediately.\n\nThanks",
    category: "Billing",
    priority: "🔴 Urgent",
    sentiment: "Very Negative",
    confidence: 1.00,
    mockLogs: [
      { delay: 300, message: "Phase 1: IMAP Trigger polling 'garvinclaw@gmail.com'...", type: "orchestrator" },
      { delay: 600, message: "Phase 1: Intercepted 1 unread email from 'astrongamer001@gmail.com'. Subject: 'Charged twice for my order'", type: "info" },
      { delay: 1000, message: "Phase 1: Dispatching Slack/Telegram notification: '📩 New ticket received'", type: "info" },
      { delay: 1400, message: "Phase 2: Notion KB Lookup running... Querying category 'Billing' in DB [65f6597a...]", type: "info" },
      { delay: 1800, message: "Phase 2: Matched Threadwave Policy: 'Duplicate Transaction Dispute Procedures'", type: "success" },
      { delay: 2200, message: "Phase 2: Executing Gemini 2.5 Flash (Model: gemini-2.5-flash)... Injecting matched policy prompt.", type: "orchestrator" },
      { delay: 2800, message: "Phase 2: Gemini classification response parsed: [Category: Billing] [Priority: Urgent] [Confidence: 1.00]", type: "success" },
      { delay: 3200, message: "Routing Engine: Evaluating confidence >= 0.90 (PASS) & priority = Urgent (ESCALATE REQUIRED)", type: "warning" },
      { delay: 3600, message: "Telegram Bot: Dispatched 🚨 PRIORITY ALERT (Category: Billing, Priority: Urgent) to Garvin's chat [1310071709]", type: "warning" },
      { delay: 4000, message: "Notion Log: Appending ticket detail to Support Tickets DB [ace5ce14...] with status [New] and action [Resolve/Escalate]", type: "success" },
      { delay: 4400, message: "SMTP Gate: Creating ready-to-send draft email in 'garvinclaw' inbox for manual review.", type: "agent" },
      { delay: 4800, message: "SMTP Gate: Auto-dispatched customer receipt acknowledgment via Gmail SMTP.", type: "success" }
    ],
    reply: `Hi, thank you for reaching out to ThreadWave Support.

We've received your message and are escalating it to our **Billing team**. A representative will follow up with you shortly regarding the duplicate charge on order #55123.

*   **Ticket Category:** Billing
*   **Assigned Priority:** 🔴 Urgent
*   **Ticket Status:** Escalated for Review`
  },
  {
    label: "App Crashes",
    subject: "App crashes every time I open order history",
    text: "Hi,\n\nThe ThreadWave app keeps crashing as soon as I tap on \"Order History\". Tried reinstalling, still the same. iPhone 15, iOS 18.\n\nPlease fix this.",
    category: "Bug",
    priority: "🟠 High",
    sentiment: "Negative",
    confidence: 0.98,
    mockLogs: [
      { delay: 300, message: "Phase 1: IMAP Trigger polling 'garvinclaw@gmail.com'...", type: "orchestrator" },
      { delay: 600, message: "Phase 1: Intercepted 1 unread email from 'astrongamer001@gmail.com'. Subject: 'App crashes every time I open order history'", type: "info" },
      { delay: 1000, message: "Phase 2: Notion KB Lookup running... Querying category 'Bug' in DB [65f6597a...]", type: "info" },
      { delay: 1400, message: "Phase 2: Matched Threadwave Policy: 'App & Website Technical Support Guidelines'", type: "success" },
      { delay: 1800, message: "Phase 2: Executing Gemini 2.5 Flash... Injecting tech policy templates.", type: "orchestrator" },
      { delay: 2400, message: "Phase 2: Gemini response parsed: [Category: Bug] [Priority: High] [Confidence: 0.98]", type: "success" },
      { delay: 2800, message: "Routing Engine: Evaluating priority = High (ESCALATE REQUIRED)", type: "warning" },
      { delay: 3200, message: "Telegram Bot: Dispatched 🚨 PRIORITY ALERT & 🐛 BUG ALERT to Developer alert channel", type: "warning" },
      { delay: 3600, message: "Notion Log: Appending ticket to Support Tickets DB [ace5ce14...] with status [New] and action [Route Engineering]", type: "success" },
      { delay: 4100, message: "SMTP Gate: Drafted engineering briefing and saved to labs mailbox. Auto-dispatched customer acknowledgment.", type: "success" }
    ],
    reply: `Hi, thank you for reaching out to ThreadWave Support.

We've received your message and are escalating it to our **Engineering team**. A developer is investigating the crash on iOS 18 order history, and a representative will follow up with you shortly.

*   **Ticket Category:** Bug / Technical Issue
*   **Assigned Priority:** 🟠 High
*   **Ticket Status:** Escalated to Engineering`
  },
  {
    label: "Return Policy",
    subject: "What is your return policy?",
    text: "Hi,\n\nI bought a jacket last week and it doesn't suit me. Can I return it? How long do I have and do I pay for shipping?",
    category: "Returns",
    priority: "🟡 Medium",
    sentiment: "Neutral",
    confidence: 0.98,
    mockLogs: [
      { delay: 300, message: "Phase 1: IMAP Trigger polling 'garvinclaw@gmail.com'...", type: "orchestrator" },
      { delay: 600, message: "Phase 1: Intercepted 1 unread email from 'astrongamer001@gmail.com'. Subject: 'What is your return policy?'", type: "info" },
      { delay: 1000, message: "Phase 2: Notion KB Lookup running... Querying category 'Returns' in DB [65f6597a...]", type: "info" },
      { delay: 1400, message: "Phase 2: Matched Threadwave Policy: '30-Day Return & Exchange Rules'", type: "success" },
      { delay: 1800, message: "Phase 2: Executing Gemini 2.5 Flash... Injecting Return guidelines context.", type: "orchestrator" },
      { delay: 2400, message: "Phase 2: Gemini response parsed: [Category: Returns] [Priority: Medium] [Confidence: 0.98]", type: "success" },
      { delay: 2800, message: "Routing Engine: Evaluating confidence (0.98) >= Auto-Reply Gate (0.90) and needsEscalation = FALSE", type: "success" },
      { delay: 3200, message: "Routing Engine: Autonomous resolution pathway unlocked. Proceeding with auto-reply.", type: "success" },
      { delay: 3600, message: "Notion Log: Appending ticket to Support Tickets DB [ace5ce14...] with status [Resolved] and action [Resolve]", type: "success" },
      { delay: 4100, message: "SMTP Gate: Auto-dispatched return guidelines directly to customer 'astrongamer001@gmail.com' via Gmail SMTP.", type: "agent" },
      { delay: 4500, message: "Telegram Bot: No notifications sent (Resolved autonomously, zero agent friction)", type: "info" }
    ],
    reply: `Hi there! Thank you for reaching out to ThreadWave.

You may return your jacket within 30 days of purchase, provided it remains in its original, unworn condition with tags attached. Return shipping costs are the responsibility of the customer.

*   **Ticket Category:** Returns
*   **Assigned Priority:** 🟡 Medium
*   **Confidence Score:** 98% (Auto-Resolved)`
  },
  {
    label: "Brand Compliment",
    subject: "Love the new collection!",
    text: "Hi,\n\nI just received my order and the fabrics are incredible. Absolutely love the new summer shirts collection! Keep it up.",
    category: "General",
    priority: "🟢 Low",
    sentiment: "Positive",
    confidence: 1.00,
    mockLogs: [
      { delay: 300, message: "Phase 1: IMAP Trigger polling 'garvinclaw@gmail.com'...", type: "orchestrator" },
      { delay: 600, message: "Phase 1: Intercepted 1 unread email from 'astrongamer001@gmail.com'. Subject: 'Love the new collection!'", type: "info" },
      { delay: 1000, message: "Phase 2: Notion KB Lookup running... Querying category 'General' in DB [65f6597a...]", type: "info" },
      { delay: 1300, message: "Phase 2: Matched Threadwave Policy: 'Feedback & Positive Sentiment Responses'", type: "success" },
      { delay: 1700, message: "Phase 2: Executing Gemini 2.5 Flash... Injecting brand tone guidelines.", type: "orchestrator" },
      { delay: 2200, message: "Phase 2: Gemini response parsed: [Category: Compliment] [Priority: Low] [Confidence: 1.00]", type: "success" },
      { delay: 2600, message: "Routing Engine: Confidence (1.00) >= 0.90 (Autonomous Resolution Enabled)", type: "success" },
      { delay: 3000, message: "Notion Log: Appending ticket to Support Tickets DB with status [Closed] and action [Resolve]", type: "success" },
      { delay: 3400, message: "SMTP Gate: Auto-dispatched thank-you message directly to customer via Gmail SMTP.", type: "agent" }
    ],
    reply: `Hi there! Thank you so much for the kind words!

We're thrilled to hear that you love our new summer shirts collection and the quality of the fabrics. Reviews like yours keep our team motivated. We've added a note of appreciation to our design crew! Enjoy your shirts!

*   **Ticket Category:** Compliment
*   **Assigned Priority:** 🟢 Low
*   **Confidence Score:** 100% (Auto-Resolved)`
  }
];

const CATALOG_PRODUCTS = [
  {
    id: "p1",
    title: "Organic Cotton Hoodie",
    price: 74.00,
    desc: "100% French Terry cotton. Heavyweight structured fit. Pre-shrunk finish.",
    badge: "Bestseller",
    toast: "Duplicate charge scenario (order #55123) is mapped to this $74.00 item!",
    image: "/website-images/threadwave_hoodie.png"
  },
  {
    id: "p2",
    title: "Minimalist Daily Jacket",
    price: 120.00,
    desc: "Windproof and water-repellent shell with recycled filling.",
    badge: "New Arrival",
    toast: "Return policy scenario is mapped to this jacket inquiry!",
    image: "/website-images/threadwave_jacket.png"
  },
  {
    id: "p3",
    title: "Summer Linen Shirt",
    price: 58.00,
    desc: "Breathable, open-weave premium linen. Relaxed resort-style collar.",
    badge: "Featured",
    toast: "Compliment scenario is mapped to this shirt collection!",
    image: "/website-images/threadwave_shirt.png"
  },
  {
    id: "p4",
    title: "Everyday Denim Jeans",
    price: 85.00,
    desc: "Straight-fit daily jeans dyed in organic indigo wash.",
    badge: null,
    toast: "Added Denim Jeans to cart.",
    image: "/website-images/threadwave_jeans.png"
  }
];

export function DemoClient() {
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"chat" | "logs">("chat");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState<number>(1);
  const [logTriggerPulsing, setLogTriggerPulsing] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isProcessing]);

  // Auto-scroll logs
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Load welcome message on mount
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "system",
        text: `Connected to ThreadWave Support AI (Modular Triage V1.10). Click a preset scenario below or type a query to trigger the triage pipeline.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setLogs([]);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleAddToCart = (product: typeof CATALOG_PRODUCTS[0]) => {
    setCartCount((c) => c + 1);
    triggerToast(`Added ${product.title} to shopping bag. ${product.toast ? `💡 ${product.toast}` : ""}`);
  };

  const handlePresetClick = (text: string) => {
    if (isProcessing) return;
    setUserInput(text);
  };

  const handleClearLogs = () => {
    setLogs([]);
  };

  const executeSimulation = async (inputStr: string) => {
    if (!inputStr.trim() || isProcessing) return;

    setIsProcessing(true);
    setLogs([]);
    setLogTriggerPulsing(true);

    // Add user message
    const userMsgId = Math.random().toString();
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        sender: "user",
        text: inputStr,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    setUserInput("");

    // Identify if the input matches any preset exactly or keyword matching
    const matchingPreset = THREADWAVE_PRESETS.find(
      (p) => inputStr.trim().toLowerCase().includes(p.label.toLowerCase()) || 
             p.text.toLowerCase().includes(inputStr.trim().toLowerCase()) ||
             inputStr.trim().toLowerCase().includes(p.subject.toLowerCase())
    );

    let activePreset: PresetCase;

    if (matchingPreset) {
      activePreset = matchingPreset;
    } else {
      // Dynamic fallback for custom user inputs
      const text = inputStr.toLowerCase();
      let category = "General";
      let priority = "🟢 Low";
      let sentiment = "Neutral";
      let intent = "Question";
      let responseMsg = "";
      let mockLogsList: { delay: number; message: string; type: LogEntry["type"] }[] = [];

      if (text.includes("ship") || text.includes("deliver") || text.includes("track") || text.includes("late")) {
        category = "Shipping";
        priority = "🟠 High";
        sentiment = "Negative";
        intent = "Order Status";
        responseMsg = `Hi, thank you for reaching out to ThreadWave Support.

We've received your query regarding shipping coordinates. Under our policies, standard shipping takes 3-5 business days. Your ticket has been logged and escalated to our **Shipping desk** to check on delivery delays.

*   **Ticket Category:** Shipping
*   **Assigned Priority:** 🟠 High
*   **Ticket Status:** Escalated for Review`;
        mockLogsList = [
          { delay: 300, message: "Phase 1: IMAP Trigger polling...", type: "orchestrator" },
          { delay: 600, message: "Phase 1: Intercepted custom email. Subject: 'Shipping inquiry'", type: "info" },
          { delay: 1000, message: "Phase 2: Notion KB Lookup for 'Shipping'...", type: "info" },
          { delay: 1400, message: "Phase 2: Matched Policy: 'Standard Delivery & Shipment Delay Policy'", type: "success" },
          { delay: 1800, message: "Phase 2: Executing Gemini 2.5 Flash classification...", type: "orchestrator" },
          { delay: 2400, message: `Phase 2: Gemini response: [Category: Shipping] [Priority: High] [Confidence: 0.95]`, type: "success" },
          { delay: 2800, message: "Routing Engine: High priority routing triggered. Alerts dispatched.", type: "warning" },
          { delay: 3200, message: "Telegram Bot: Sent 🚨 PRIORITY ALERT to shipping channel.", type: "warning" },
          { delay: 3600, message: "Notion Log: Logged to Support Tickets DB [ace5ce14...] with status [New] / [Escalate]", type: "success" },
          { delay: 4000, message: "SMTP Gate: Saved escalation draft to Labs inbox.", type: "success" }
        ];
      } else if (text.includes("refund") || text.includes("charge") || text.includes("bill") || text.includes("money") || text.includes("pay")) {
        category = "Billing";
        priority = "🔴 Urgent";
        sentiment = "Angry";
        intent = "Refund Request";
        responseMsg = `Hi, thank you for reaching out to ThreadWave Support.

We've received your request regarding payment/refund issues. Because this concerns billing discrepancies, we have escalated this ticket immediately to our **Billing team**. A representative will verify your transactions and get back to you shortly.

*   **Ticket Category:** Billing
*   **Assigned Priority:** 🔴 Urgent
*   **Ticket Status:** Escalated to Billing`;
        mockLogsList = [
          { delay: 300, message: "Phase 1: IMAP Trigger polling...", type: "orchestrator" },
          { delay: 600, message: "Phase 1: Intercepted custom email. Subject: 'Payment Issue'", type: "info" },
          { delay: 1000, message: "Phase 2: Notion KB Lookup for 'Billing'...", type: "info" },
          { delay: 1400, message: "Phase 2: Matched Policy: 'Billing Discrepancy & Refund Policy'", type: "success" },
          { delay: 1800, message: "Phase 2: Executing Gemini 2.5 Flash...", type: "orchestrator" },
          { delay: 2400, message: `Phase 2: Gemini response: [Category: Billing] [Priority: Urgent] [Confidence: 0.97]`, type: "success" },
          { delay: 2800, message: "Routing Engine: Urgent priority alert triggered. Dispatching notifications.", type: "warning" },
          { delay: 3200, message: "Telegram Bot: Sent 🚨 PRIORITY ALERT to billing channel.", type: "warning" },
          { delay: 3600, message: "Notion Log: Appended to Support Tickets DB [ace5ce14...] with status [New] / [Route Billing]", type: "success" },
          { delay: 4000, message: "SMTP Gate: Created draft email in garvinclaw mailbox for manual authorization.", type: "success" }
        ];
      } else if (text.includes("size") || text.includes("fit") || text.includes("swap") || text.includes("exchange")) {
        category = "Sizing";
        priority = "🟡 Medium";
        sentiment = "Neutral";
        intent = "Exchange";
        responseMsg = `Hi, thank you for reaching out to ThreadWave Support.

If you are looking to exchange your item for a different size, our exchange portal is open for 30 days from purchase. We have logged your request. If your item is unworn and has original tags attached, you are eligible for a prepaid exchange label.

*   **Ticket Category:** Sizing / Exchange
*   **Assigned Priority:** 🟡 Medium
*   **Confidence Score:** 92% (Auto-Resolved)`;
        mockLogsList = [
          { delay: 300, message: "Phase 1: IMAP Trigger polling...", type: "orchestrator" },
          { delay: 600, message: "Phase 1: Intercepted email. Subject: 'Sizing inquiry'", type: "info" },
          { delay: 1000, message: "Phase 2: Notion KB Lookup for 'Sizing'...", type: "info" },
          { delay: 1400, message: "Phase 2: Matched Policy: 'Size Exchanges & Fit Guides'", type: "success" },
          { delay: 1800, message: "Phase 2: Executing Gemini 2.5 Flash...", type: "orchestrator" },
          { delay: 2400, message: `Phase 2: Gemini response: [Category: Sizing] [Priority: Medium] [Confidence: 0.92]`, type: "success" },
          { delay: 2800, message: "Routing Engine: Confidence (0.92) >= 0.90 (Autonomous Resolution Approved)", type: "success" },
          { delay: 3200, message: "Notion Log: Appended ticket in Support Tickets DB [ace5ce14...] with status [Resolved]", type: "success" },
          { delay: 3600, message: "SMTP Gate: Sent size exchange guidelines directly to customer via SMTP.", type: "agent" }
        ];
      } else {
        responseMsg = `Hi there, thank you for contacting ThreadWave support!

We have logged your query in our ticketing database. One of our support representatives will review it against our store policies and follow up with you soon.

*   **Ticket Category:** General
*   **Assigned Priority:** 🟢 Low
*   **Ticket Status:** Logged in Queue`;
        mockLogsList = [
          { delay: 300, message: "Phase 1: IMAP Trigger polling...", type: "orchestrator" },
          { delay: 600, message: "Phase 1: Intercepted custom email. Subject: 'General Inquiry'", type: "info" },
          { delay: 1000, message: "Phase 2: Notion KB Lookup for 'General'...", type: "info" },
          { delay: 1400, message: "Phase 2: Matched Policy: 'Standard Support Guidelines'", type: "success" },
          { delay: 1800, message: "Phase 2: Running Gemini 2.5 Flash classification...", type: "orchestrator" },
          { delay: 2400, message: `Phase 2: Gemini response: [Category: General] [Priority: Low] [Confidence: 0.94]`, type: "success" },
          { delay: 2800, message: "Routing Engine: Low priority triage check. No alerts sent.", type: "info" },
          { delay: 3200, message: "Notion Log: Logged to Support Tickets DB [ace5ce14...] with status [New] and action [Pending Review]", type: "success" }
        ];
      }

      activePreset = {
        label: "Custom",
        subject: "Custom Request",
        text: inputStr,
        category,
        priority,
        sentiment,
        confidence: 0.95,
        mockLogs: mockLogsList,
        reply: responseMsg
      };
    }

    // Schedule logs execution
    let logTimeoutIds: NodeJS.Timeout[] = [];
    activePreset.mockLogs.forEach((logItem) => {
      const timeoutId = setTimeout(() => {
        const timeStr = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        });
        setLogs((prev) => [
          ...prev,
          {
            time: timeStr,
            message: logItem.message,
            type: logItem.type
          }
        ]);
      }, logItem.delay);
      logTimeoutIds.push(timeoutId);
    });

    // Schedule the final answer delivery
    const finalDelay = activePreset.mockLogs[activePreset.mockLogs.length - 1].delay + 500;
    const finalTimeoutId = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "agent",
          text: activePreset.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsProcessing(false);
      setLogTriggerPulsing(false);
    }, finalDelay);

    logTimeoutIds.push(finalTimeoutId);

    return () => {
      logTimeoutIds.forEach((id) => clearTimeout(id));
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeSimulation(userInput);
  };

  return (
    <div className="store-layout">
      {/* Announcement Bar */}
      <div className="store-announcement-bar">
        FREE SHIPPING ON ORDERS OVER $75 • 30-DAY HASSLE-FREE RETURNS
      </div>

      {/* Store Navigation Bar */}
      <header className="store-header">
        <div className="store-header-inner">
          <div className="store-logo">
            THREAD<span>WAVE</span>
          </div>

          <nav className="store-nav">
            <a href="#catalog" className="store-nav-link">Shop All</a>
            <a href="#catalog" className="store-nav-link">Collections</a>
            <a href="/" className="store-nav-link" style={{ borderLeft: "1px solid #CBD5E1", paddingLeft: "1.5rem", color: "#6366F1", fontWeight: 600 }}>
              ← Return to GarvinLabs
            </a>
          </nav>

          <div className="store-actions">
            <button className="store-cart-btn" onClick={() => triggerToast("Checkout simulation: Your shopping bag contains the selected items!")}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                width={20}
                height={20}
                aria-hidden="true"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="store-cart-badge">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Toast Notification Container */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            top: "5rem",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#1F2937",
            color: "#FFFFFF",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            zIndex: 1000,
            fontSize: "0.85rem",
            fontWeight: "500",
            textAlign: "center",
            maxWidth: "90%",
            border: "1px solid #374151"
          }}
        >
          {toastMessage}
        </div>
      )}

      {/* Store Hero Banner */}
      <section className="store-hero">
        <div className="store-hero-inner">
          <div className="store-hero-content">
            <div className="store-hero-eyebrow">ThreadWave Basics</div>
            <h1 className="store-hero-title">Minimalist Essentials. Maximum Comfort.</h1>
            <p className="store-hero-subtitle">
              Designed for everyday movement. Sustainably crafted with 100% organic cotton, recycled fibers, and zero plastic packaging.
            </p>
            <div className="store-hero-ctas">
              <a href="#catalog" className="btn-primary" style={{ backgroundColor: "#4F46E5" }}>
                Shop New Arrivals
              </a>
              <button className="btn-secondary" onClick={() => { setIsChatOpen(true); triggerToast("Threadwave Support AI widget opened!"); }}>
                Chat with Support
              </button>
            </div>
          </div>
          <div className="store-hero-visual">
            <Image
              src="/website-images/threadwave_hero.png"
              alt="ThreadWave Sustainable Summer Collection"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="store-hero-overlay">
              <h3>Summer Collection Active</h3>
              <p>Lightweight hoodies, linen resort shirts, and raw denim.</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Catalog Grid */}
      <section className="store-section" id="catalog">
        <h2 className="store-section-title">Summer Essentials</h2>
        <div className="store-product-grid">
          {CATALOG_PRODUCTS.map((prod) => (
            <article key={prod.id} className="store-product-card">
              <div className="product-image-container">
                {prod.badge && (
                  <span className="product-card-badge">{prod.badge}</span>
                )}
                <Image
                  src={prod.image}
                  alt={prod.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="product-card-details">
                <div>
                  <h3 className="product-card-title">{prod.title}</h3>
                  <p className="product-card-desc">{prod.desc}</p>
                </div>
                <div className="product-card-footer">
                  <span className="product-card-price">${prod.price.toFixed(2)}</span>
                  <button
                    className="product-card-btn"
                    onClick={() => handleAddToCart(prod)}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Floating Chatbot Widget Trigger Button */}
      <button
        className="chat-widget-trigger"
        onClick={() => {
          setIsChatOpen((o) => !o);
          setUnreadCount(0);
        }}
        aria-label="Toggle ThreadWave AI Support Chatbot"
      >
        {isChatOpen ? (
          // Close Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            width={24}
            height={24}
            aria-hidden="true"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          // Message Bubble Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            width={24}
            height={24}
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        {unreadCount > 0 && !isChatOpen && (
          <span className="chat-trigger-badge" />
        )}
      </button>

      {/* Floating Chatbot Widget Panel */}
      {isChatOpen && (
        <section className="chat-widget-panel" aria-label="ThreadWave Customer Support Center">
          <div className="chat-widget-header">
            <div className="chat-header-main">
              <div className="chat-header-title">
                <span 
                  className="agent-dot-pulse" 
                  style={{ color: logTriggerPulsing ? "#F59E0B" : "#10B981" }} 
                />
                <div>
                  <h3>ThreadWave AI Assistant</h3>
                  <div className="chat-header-status">
                    <span>V1.10 Ingestion &amp; Triage</span>
                  </div>
                </div>
              </div>
              <button 
                className="chat-header-close" 
                onClick={() => setIsChatOpen(false)}
                aria-label="Minimize Support Panel"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  width={18}
                  height={18}
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Support vs. Triage Logs Tabs */}
            <div className="chat-widget-tabs">
              <button
                className="chat-tab-btn"
                onClick={() => setActiveTab("chat")}
                data-active={activeTab === "chat"}
              >
                Customer Chat
              </button>
              <button
                className="chat-tab-btn"
                onClick={() => setActiveTab("logs")}
                data-active={activeTab === "logs"}
                style={{ position: "relative" }}
              >
                Triage Logs (Backend)
                {logTriggerPulsing && (
                  <span 
                    style={{
                      position: "absolute",
                      top: "2px",
                      right: "6px",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#F59E0B",
                      display: "inline-block"
                    }}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Widget Body Container */}
          <div className="chat-widget-body">
            {activeTab === "chat" ? (
              /* TAB 1: Support Chat Bubbles */
              <div className="chat-messages" style={{ flex: 1, padding: "1.25rem" }}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`msg-wrapper msg-wrapper--${msg.sender}`}
                  >
                    {msg.sender !== "system" && (
                      <div className="msg-meta">
                        <span>{msg.sender === "user" ? "You" : "ThreadWave AI"}</span>
                        <span>{msg.timestamp}</span>
                      </div>
                    )}
                    <div 
                      className={`msg-bubble msg-bubble--${msg.sender}`}
                      style={
                        msg.sender === "agent" 
                          ? { borderLeft: "3px solid #4F46E5", borderRight: "none", borderTop: "none" } 
                          : msg.sender === "user"
                          ? { backgroundColor: "#1E293B", color: "#FFFFFF" }
                          : undefined
                      }
                    >
                      <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </div>
                  </div>
                ))}
                {isProcessing && (
                  <div className="msg-wrapper msg-wrapper--agent">
                    <div className="msg-meta">
                      <span>ThreadWave AI</span>
                      <span className="chat-panel-status">Running classification...</span>
                    </div>
                    <div className="msg-bubble msg-bubble--agent" style={{ opacity: 0.6 }}>
                      Parsing order query and executing Notion logic...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            ) : (
              /* TAB 2: Retro Terminal Triage Logs */
              <div 
                className="logs-console" 
                style={{ 
                  flex: 1, 
                  background: "#090D16", 
                  padding: "1.25rem", 
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#94A3B8"
                }}
              >
                {logs.length > 0 ? (
                  <>
                    <div style={{ color: "#475569", marginBottom: "0.5rem", borderBottom: "1px dashed #1E293B", paddingBottom: "0.25rem" }}>
                      -- THREADWAVE TRIAGE BACKEND RUN TRACE --
                    </div>
                    {logs.map((log, idx) => (
                      <div key={idx} className="log-entry">
                        <span className="log-time" style={{ color: "#334155" }}>[{log.time}]</span>
                        <span className={`log-message log-message--${log.type}`}>
                          {log.message}
                        </span>
                      </div>
                    ))}
                    {isProcessing && (
                      <div className="log-entry" style={{ opacity: 0.4 }}>
                        <span className="log-time">[...]</span>
                        <span className="log-message log-message--info">
                          Syncing Notion logging tables...
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="log-empty-state">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width={32}
                      height={32}
                      aria-hidden="true"
                      style={{ color: "#1E293B" }}
                    >
                      <rect x={2} y={3} width={20} height={14} rx={2} />
                      <path d="M6 21h12M12 17v4" />
                    </svg>
                    <p style={{ color: "#475569" }}>Triage Console Idle</p>
                    <p style={{ fontSize: "0.725rem", color: "#334155", maxWidth: "220px", margin: "0.25rem auto" }}>
                      Triage logs record Notion updates and Telegram alert triggers when a query executes.
                    </p>
                  </div>
                )}
                <div ref={logsEndRef} />
              </div>
            )}
          </div>

          {/* Widget Footer Area (Input + Preset Buttons) */}
          <div className="chat-widget-footer">
            {activeTab === "chat" && (
              <div className="presets-container">
                <span className="presets-label" style={{ color: "#4F46E5", fontSize: "0.725rem" }}>Inquiry Presets:</span>
                {THREADWAVE_PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="preset-pill"
                    onClick={() => handlePresetClick(preset.text)}
                    disabled={isProcessing}
                    style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem" }}
                  >
                    {preset.label}
                  </button>
                ))}
                <p style={{ fontSize: "0.7rem", color: "#475569", margin: "0.35rem 0 0", width: "100%" }}>
                  Want to test the real thing? Email{" "}
                  <a href="mailto:garvinclaw@gmail.com" style={{ color: "#6366F1" }}>
                    garvinclaw@gmail.com
                  </a>
                  {" "}and the live pipeline will triage it.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="chat-widget-input-wrapper">
              <input
                type="text"
                className="chat-widget-input"
                placeholder={isProcessing ? "Triage running..." : "Ask Support about shipping, returns, order fit..."}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={isProcessing}
              />
              <button
                type="submit"
                className="chat-widget-send"
                disabled={isProcessing || !userInput.trim()}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  width={14}
                  height={14}
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}

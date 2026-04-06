import { Globe, Workflow, Code, Brain } from "lucide-react";

export const services = [
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    tagline: "Revenue-Ready Websites",
    shortDescription:
      "Marketing websites, landing pages, and e-commerce stores that actually convert visitors into customers.",
    description:
      "We build fast, beautiful, conversion-optimized websites using Next.js and modern frameworks. Every site is designed to generate leads, build trust, and grow your revenue — not just look good.",
    features: [
      "Conversion-optimized landing pages",
      "Marketing websites with SEO built-in",
      "E-commerce stores and product pages",
      "Mobile-first responsive design",
      "Performance-optimized (90+ Lighthouse)",
      "Analytics and tracking setup",
    ],
    proof: [
      "Badi Bandi: Website delivered → client returned for a SaaS deal",
      "NetPractice Campus: Campaign landing page with WhatsApp funnel",
      "Dental Revenue Engine: 938 personalized pages at Rs 91 total cost",
    ],
    keywords: [
      "website development Pune",
      "Next.js developer India",
      "landing page design",
      "marketing website",
      "e-commerce development",
    ],
    priceRange: "Starting at Rs 60,000",
  },
  {
    slug: "n8n-automation",
    icon: Workflow,
    title: "n8n Automation",
    tagline: "Automated Growth Pipelines",
    shortDescription:
      "Workflow automation, lead gen pipelines, CRM integrations, and WhatsApp bots that run while you sleep.",
    description:
      "We design and build automation workflows using n8n that eliminate repetitive tasks, capture leads automatically, and connect your tools. From WhatsApp bots to CRM pipelines — if it can be automated, we build it.",
    features: [
      "Lead generation and nurture sequences",
      "WhatsApp and email automation",
      "CRM and tool integrations",
      "Data sync between platforms",
      "Booking and reminder workflows",
      "Custom webhook-based pipelines",
    ],
    proof: [
      "SparringPlayer: 7-automation roadmap for a sports booking marketplace",
      "Dental Revenue Engine: Automated outreach to 938 leads",
      "Cummins India: 40% faster workflow turnaround with Power Automate",
    ],
    keywords: [
      "n8n automation India",
      "workflow automation",
      "WhatsApp bot developer",
      "lead generation automation",
      "CRM integration",
    ],
    priceRange: "Starting at Rs 20,000",
  },
  {
    slug: "software-development",
    icon: Code,
    title: "Software Development",
    tagline: "Custom Software, Built to Scale",
    shortDescription:
      "Full-stack web apps, SaaS platforms, and mobile apps — built by a dedicated team, delivered fast.",
    description:
      "We build custom software products — from SaaS platforms to mobile apps — with a 4-person development team. You get enterprise-quality code at freelance speed. Full-stack TypeScript, Flutter, Supabase, Firebase — whatever your product needs.",
    features: [
      "SaaS platform development",
      "Mobile apps (Flutter — iOS + Android)",
      "Full-stack web applications",
      "Database design and API architecture",
      "User authentication and payments",
      "Deployment, CI/CD, and monitoring",
    ],
    proof: [
      "ThrottleApp: 300+ organic downloads, zero ad spend",
      "Badi Bandi SaaS: Full platform MVP for logistics",
      "25+ projects delivered across 5+ industries",
    ],
    keywords: [
      "SaaS development India",
      "Flutter app developer",
      "full-stack developer Pune",
      "custom software development",
      "web application development",
    ],
    priceRange: "Starting at Rs 1,50,000",
  },
  {
    slug: "ai-consulting",
    icon: Brain,
    title: "AI Consulting",
    tagline: "AI Strategy & Implementation",
    shortDescription:
      "AI strategy, Claude MCP agents, and intelligent workflows — so you can work smarter, not harder.",
    description:
      "We help businesses understand where AI fits, then build it. From AI-powered workflows and Claude MCP agents to chatbot integrations and automated content pipelines — we bridge the gap between AI hype and real business value.",
    features: [
      "AI readiness assessment and strategy",
      "Claude MCP agent development",
      "AI-powered workflow automation",
      "Chatbot and conversational AI",
      "Content and data pipeline automation",
      "Team training on AI tools",
    ],
    proof: [
      "AI-enabled delivery: 2-3x faster project completion using Claude Code",
      "Enterprise AI consulting at Invecto Technologies",
      "Custom MCP agent workflows for internal operations",
    ],
    keywords: [
      "AI consulting India",
      "Claude MCP developer",
      "AI strategy consultant",
      "AI automation",
      "chatbot development",
    ],
    priceRange: "Starting at Rs 50,000",
  },
] as const;

export type Service = (typeof services)[number];

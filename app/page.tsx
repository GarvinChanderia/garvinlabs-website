import Image from "next/image";
import LanguageSelector from "@/components/LanguageSelector";

export default function Home() {
  return (
    <main className="dot-grid">
      {/* Navigation */}
      <nav className="navbar container">
        <div className="logo-group">
          <Image src="/logo-icon.svg" alt="GarvinLabs Icon" width={32} height={32} />
          <Image src="/logo-wordmark.svg" alt="GarvinLabs" width={140} height={32} />
        </div>
        <div className="nav-links">
          <a href="#triage">AI Support Triage</a>
          <a href="#lab">The Lab</a>
          <a href="#profile">Profile</a>
          <div className="nav-actions">
            <LanguageSelector />
            <a href="https://calendly.com/labs-garvin/30min" className="btn-primary">Book a Strategy Call</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container section hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            I Architect Agentic AI Systems so your team can focus on what matters.
          </h1>
          <p className="hero-subtitle">
            Hi, I'm <strong>Garvin</strong>. I help scaling brands eliminate the <strong>"Manual Tax"</strong> by installing intelligent decision layers. Stop triaging emails and start accelerating growth.
          </p>
          <div className="hero-ctas">
            <a href="https://calendly.com/labs-garvin/30min" className="btn-primary btn-large">Book a Strategy Call</a>
            <a href="#triage" className="btn-secondary btn-large">See the System</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-visual-box">
             <Image 
                src="/hero-diagram.png" 
                alt="Connective Tissue Architecture" 
                fill 
                style={{ objectFit: 'cover' }}
                priority
              />
          </div>
        </div>
      </section>

      {/* The Bottleneck / Problem */}
      <section id="triage" className="problem-section">
        <div className="container section text-center narrow-container">
          <h2 className="section-title">Your team deserves to work on high-value problems.</h2>
          <p className="section-subtitle">
            Every hour your best employees spend triaging a support inbox is an hour lost to growth. I build systems that handle the noise, so your customers get faster responses and your team stays focused on high-impact tickets.
          </p>
          <div className="feature-grid">
            <div className="card">
              <h3 className="feature-label">Speed</h3>
              <p>Faster response times for every customer.</p>
            </div>
            <div className="card">
              <h3 className="feature-label">Value</h3>
              <p>Common queries automated, humans focus on complex tickets.</p>
            </div>
            <div className="card">
              <h3 className="feature-label">Sanity</h3>
              <p>A team that isn't burnt out by repetitive manual work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Wedge: Support Triage */}
      <section className="container section triage-section">
        <div className="card triage-card">
          <div className="badge">The Flagship Wedge</div>
          <h2 className="section-title">Your Support Inbox is a Growth Killer. Stop Paying the Manual Tax.</h2>
          <p className="triage-text">
            We start with the biggest bottleneck: your support inbox. My 14-day Triage deployment installs an agentic "brain" that categorizes, prioritizes, and drafts responses based on your unique business logic.
          </p>
          <ul className="check-list">
            <li>
              <span className="check-icon">✓</span> <strong>Human-in-the-loop:</strong> AI does the lifting, team does the thinking.
            </li>
            <li>
              <span className="check-icon">✓</span> <strong>Instant Prioritization:</strong> Urgent issues flagged in minutes.
            </li>
            <li>
              <span className="check-icon">✓</span> <strong>Ready Drafts:</strong> Responses prepared before you even click open.
            </li>
          </ul>
          <a href="https://calendly.com/labs-garvin/30min" className="btn-primary">Book a Deployment Call</a>
        </div>
        <div className="triage-visual-container">
          <div className="triage-visual-box">
             <div className="image-wrapper">
                <Image 
                  src="/triage-diagram-v2.png" 
                  alt="Agentic Triage Workflow" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
             </div>
             <p className="image-caption">
               <strong>The Intelligent Prism:</strong> Chaotic inbound data (emails, tickets) converges into a single decision layer, outputting as prioritized, structured actions ready for execution.
             </p>
          </div>
        </div>
      </section>

      {/* The Lab (Demos) Section */}
      <section id="lab" className="lab-section">
        <div className="container section">
          <div className="text-center mb-4">
            <h2 className="section-title">The Lab (Demos)</h2>
            <p className="muted-text">High-transparency walkthroughs of autonomous agentic systems.</p>
          </div>
          <div className="card centered-card max-900">
            <h3 className="demo-title">ThreadWave Triage Proof-of-Concept</h3>
            <p className="demo-desc">
              Watch how we took 1,000+ support emails and turned them into a structured, prioritized database in under 2 seconds per email using n8n and Gemini 1.5 Pro.
            </p>
            <div className="video-placeholder">
              <p>[Video Player Placeholder: ThreadWave Triage Demo]</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Profile Section */}
      <section id="profile" className="profile-section">
        <div className="container section profile-grid">
          <div className="profile-image-box">
             <Image 
                src="/garvin-architect.png" 
                alt="Garvin Chanderia" 
                fill 
                className="grayscale-image"
              />
          </div>
          <div className="profile-content">
            <h2 className="profile-name">Garvin Chanderia<br/><span className="profile-title">Enterprise AI Architect</span></h2>
            <p className="profile-bio">
              As an experienced <strong>Enterprise Architecture Consultant</strong>, I've seen firsthand how fragile automation scripts fail at scale. I founded GarvinLabs to bring rigorous, fault-tolerant system design to the world of Agentic AI. I don't just write prompts; I build the connective tissue that allows your business to scale indefinitely without the overhead of manual operations.
            </p>
            <div className="profile-ctas">
              <a href="https://linkedin.com/in/garvinchanderia" target="_blank" rel="noopener noreferrer" className="btn-linkedin">
                Connect on LinkedIn
              </a>
              <a href="mailto:labs.garvin@gmail.com" className="btn-outline">
                labs.garvin@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="logo-group mb-1">
              <Image src="/logo-icon.svg" alt="GarvinLabs" width={24} height={24} />
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--ink)' }}>GarvinLabs</span>
            </div>
            <p className="footer-tagline">
              Eliminating the Manual Tax through high-rigour AI architecture.
            </p>
            <div className="system-status">
              <span className="status-dot"></span> Systems Operational
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Systems</h4>
            <ul className="footer-links-list">
              <li><a href="#triage">AI Support Triage</a></li>
              <li><a href="#profile">Autonomous Agents</a></li>
              <li><a href="#lab">The Lab (Demos)</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links-list">
              <li><a href="https://linkedin.com/in/garvinchanderia" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:labs.garvin@gmail.com">Email Support</a></li>
              <li><a href="https://calendly.com/labs-garvin/30min">Book a Strategy Call</a></li>
            </ul>
          </div>
        </div>
        
        <div className="container footer-bottom">
          <div className="copyright">© 2026 GarvinLabs. Architected by Garvin.</div>
          <div className="legal-links">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

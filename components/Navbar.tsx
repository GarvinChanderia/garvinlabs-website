"use client";

import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="site-nav">
      <div className="container">
        <div className="nav-inner">
          <a href="#" className="logo" onClick={close}>
            Garvin
            <em>
              Labs<span style={{ color: "var(--green)" }}>.</span>
            </em>
          </a>
          <ul className={`nav-links${open ? " open" : ""}`} id="navLinks">
            <li>
              <a href="#problem" onClick={close}>The Problem</a>
            </li>
            <li>
              <a href="#offers" onClick={close}>Offers</a>
            </li>
            <li>
              <a href="#proof" onClick={close}>Proof</a>
            </li>
            <li>
              <a href="#faq" onClick={close}>FAQ</a>
            </li>
            <li>
              <a href="#cta" className="btn btn-green" onClick={close}>Book a Diagnostic</a>
            </li>
          </ul>
          <button
            type="button"
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

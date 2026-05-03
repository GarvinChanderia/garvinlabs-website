"use client";

import { useState, useEffect } from "react";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "hi", name: "हिन्दी" },
  { code: "zh-CN", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "ar", name: "العربية" },
  { code: "pt", name: "Português" },
  { code: "it", name: "Italiano" },
];

export default function LanguageSelector() {
  const [selected, setSelected] = useState("en");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if Google Translate is ready
    const checkInterval = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        setIsReady(true);
        clearInterval(checkInterval);
      }
    }, 1000);

    return () => clearInterval(checkInterval);
  }, []);

  const handleTranslate = (langCode: string) => {
    setSelected(langCode);
    
    const triggerTranslation = () => {
      const googleCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (googleCombo) {
        googleCombo.value = langCode;
        googleCombo.dispatchEvent(new Event("change"));
        
        // Also set the cookie as a backup/persistent method
        document.cookie = `googtrans=/en/${langCode}; path=/`;
        document.cookie = `googtrans=/en/${langCode}; domain=.vercel.app; path=/`;
      }
    };

    if (isReady) {
      triggerTranslation();
    } else {
      // If not ready, wait a bit and try once
      setTimeout(triggerTranslation, 1000);
    }
  };

  return (
    <div className="language-selector-container">
      <select 
        value={selected} 
        onChange={(e) => handleTranslate(e.target.value)}
        className="custom-select"
        disabled={!isReady && selected === "en"}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name} {!isReady && lang.code !== 'en' ? '(Loading...)' : ''}
          </option>
        ))}
      </select>
      
      {/* 
        Keep it in the DOM but absolutely off-screen.
        Ensure it has some size so the script doesn't think it's 'hidden'.
      */}
      <div 
        id="google_translate_element" 
        style={{ 
          position: 'fixed', 
          top: '-100px', 
          left: '-100px',
          width: '1px',
          height: '1px',
          opacity: 0.01,
          pointerEvents: 'none',
          zIndex: -1
        }}
      ></div>
    </div>
  );
}

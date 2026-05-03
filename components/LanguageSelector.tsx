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

  const handleTranslate = (langCode: string) => {
    setSelected(langCode);
    
    // We try multiple ways to find the hidden Google dropdown
    const googleCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event("change"));
    } else {
      console.error("Google Translate combo not found. Is the widget initialized?");
      // Attempt to trigger it by clicking the 'G' icon if we were using the old UI, 
      // but here we just need the combo to exist.
    }
  };

  return (
    <div className="language-selector-container">
      <select 
        value={selected} 
        onChange={(e) => handleTranslate(e.target.value)}
        className="custom-select"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      
      {/* 
        CRITICAL: We keep the Google element in the DOM and "visible" to the script,
        but hidden from the user. display:none often prevents initialization.
      */}
      <div 
        id="google_translate_element" 
        style={{ 
          position: 'absolute', 
          top: '-9999px', 
          left: '-9999px',
          opacity: 0,
          pointerEvents: 'none',
          height: 0,
          overflow: 'hidden'
        }}
      ></div>
    </div>
  );
}

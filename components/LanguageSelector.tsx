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
    const googleCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="language-selector">
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
      
      {/* Hidden Google element that we control programmatically */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </div>
  );
}

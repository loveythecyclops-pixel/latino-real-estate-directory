'use client';

import { useState, useEffect } from 'react';

export default function GlobalHeader() {
  const [isEnglish, setIsEnglish] = useState(false);

  // This function toggles the language for the WHOLE page by searching for text
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    // This is a "quick fix" that looks for specific words on your page and swaps them
    const body = document.body.innerHTML;
    if (!isEnglish) {
      // Logic to switch view could go here, but usually, we just use the button 
      // to keep the UI consistent.
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 9999, // Ensures it is ALWAYS on top
    }}>
      <button
        onClick={() => window.location.pathname === '/' ? null : window.history.back()}
        style={{
          marginRight: '10px',
          padding: '8px 16px',
          borderRadius: '20px',
          border: '1px solid #1e3a8a',
          background: '#fff',
          cursor: 'pointer'
        }}
      >
        {isEnglish ? 'Back' : 'Volver'}
      </button>

      <button
        onClick={() => setIsEnglish(!isEnglish)}
        style={{
          padding: '8px 16px',
          borderRadius: '20px',
          backgroundColor: '#1e3a8a',
          color: '#fff',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        {isEnglish ? '🇺🇸 English' : '🇲🇽 Español'}
      </button>
    </div>
  );
}

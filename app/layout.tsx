'use client'; // We make the layout a client component to handle the toggle

import { LanguageProvider, useLanguage } from './LanguageContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, paddingTop: '60px' }}> {/* Padding added so content doesn't hide under header */}
        <LanguageProvider>
          <GlobalHeader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

// This component will now appear on EVERY page automatically
function GlobalHeader() {
  const { isEnglish, setLanguage } = useLanguage();

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '60px',
      backgroundColor: '#1e3a8a',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      boxSizing: 'border-box'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
          {isEnglish ? 'GA Latino Directory' : 'Directorio Latino GA'}
        </a>
      </div>

      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{
          background: 'white',
          color: '#1e3a8a',
          border: 'none',
          padding: '6px 15px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '0.85rem'
        }}
      >
        {isEnglish ? '🇲🇽 Español' : '🇺🇸 English'}
      </button>
    </header>
  );
}

'use client';

import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');

  const isEnglish = language === 'en';

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: 'sans-serif',
    color: '#1a202c'
  };

  const heroStyle = {
    backgroundColor: '#1e3a8a',
    color: '#ffffff',
    padding: '60px 24px',
    textAlign: 'center' as const,
    position: 'relative' as const
  };

  const buttonStyle = {
    backgroundColor: '#ffffff',
    color: '#1e3a8a',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none',
    margin: '8px',
    display: 'inline-block',
    cursor: 'pointer'
  };

  const cardStyle = {
    display: 'block',
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center' as const,
    borderTop: '4px solid #1e3a8a'
  };

  return (
    <main style={containerStyle}>
      <div style={heroStyle}>
        
        {/* Language Toggle */}
        <button
          onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.875rem',
            cursor: 'pointer'
          }}
        >
          {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
        </button>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          {isEnglish
            ? 'Latino Real Estate Directory'
            : 'Directorio Latino de Bienes Raíces'}
        </h1>

        <p style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
          {isEnglish
            ? 'Connecting Georgia with bilingual experts.'
            : 'Conectando Georgia con expertos bilingües.'}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/hubs" style={buttonStyle}>
            {isEnglish ? 'Explore Homes' : 'Explorar Casas'}
          </a>

          <a
            href="/recursos/calculadora"
            style={{ ...buttonStyle, backgroundColor: '#16a34a', color: '#fff' }}
          >
            {isEnglish ? 'Bilingual Calculator' : 'Calculadora Bilingüe'}
          </a>
        </div>
      </div>

      <section
        style={{
          padding: '64px 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <div style={cardStyle}>
          <h3>{isEnglish ? 'Bilingual Agents' : 'Agentes Bilingües'}</h3>
          <p style={{ color: '#6b7280' }}>
            {isEnglish
              ? 'Experts who speak your language.'
              : 'Expertos que hablan tu idioma.'}
          </p>
        </div>

        <div style={cardStyle}>
          <h3>{isEnglish ? 'ITIN Mortgages' : 'Hipotecas con ITIN'}</h3>
          <p style={{ color: '#6b7280' }}>
            {isEnglish
              ? 'Financing options using ITIN numbers.'
              : 'Opciones de financiamiento usando ITIN.'}
          </p>
        </div>

        <div style={cardStyle}>
          <h3>{isEnglish ? 'Legal Support' : 'Asesoría Legal'}</h3>
          <p style={{ color: '#6b7280' }}>
            {isEnglish
              ? 'Specialized real estate legal advice.'
              : 'Asesoría legal especializada en bienes raíces.'}
          </p>
        </div>

        <div style={cardStyle}>
          <h3>{isEnglish ? 'Owner Financing' : 'Financiamiento Directo'}</h3>
          <p style={{ color: '#6b7280' }}>
            {isEnglish
              ? 'Properties with direct seller financing.'
              : 'Propiedades con financiamiento directo del vendedor.'}
          </p>
        </div>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        © 2026 Latino Real Estate Directory - Georgia
      </footer>
    </main>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link'; 

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
    borderTop: '4px solid #1e3a8a',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer'
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
          {isEnglish ? 'Latino Real Estate Directory' : 'Directorio Latino de Bienes Raíces'}
        </h1>

        <p style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
          {isEnglish ? 'Connecting Georgia with bilingual experts.' : 'Conectando Georgia con expertos bilingües.'}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/hubs" style={buttonStyle}>
            {isEnglish ? 'Explore Homes' : 'Explorar Casas'}
          </Link>

          <Link
            href="/recursos/calculadora"
            style={{ ...buttonStyle, backgroundColor: '#16a34a', color: '#fff' }}
          >
            {isEnglish ? 'Bilingual Calculator' : 'Calculadora Bilingüe'}
          </Link>
        </div>
      </div>

      <section
        style={{
          padding: '64px 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Service 1: Regular Mortgages */}
        <Link href="/regular-mortgages" style={{...cardStyle, borderTopColor: '#2563eb'}}>
          <h3 style={{ color: '#1e3a8a' }}>{isEnglish ? 'Standard Mortgages' : 'Hipotecas Tradicionales'}</h3>
          <p style={{ color: '#6b7280' }}>
            {isEnglish ? 'FHA, Conventional, and VA loan options.' : 'Opciones de préstamos FHA, Convencionales y VA.'}
          </p>
        </Link>

        {/* Service 2: Agents */}
        <Link href="/bilingual-agents" style={cardStyle}>
          <h3 style={{ color: '#1e3a8a' }}>{isEnglish ? 'Bilingual Agents' : 'Agentes Bilingües'}</h3>
          <p style={{ color: '#6b7280' }}>
            {isEnglish ? 'Experts who speak your language.' : 'Expertos que hablan tu idioma.'}
          </p>
        </Link>

        {/* Service 3: ITIN */}
        <Link href="/itin-mortgages" style={cardStyle}>
          <h3 style={{ color: '#1e3a8a' }}>{isEnglish ? 'ITIN Mortgages' : 'Hipotecas con ITIN'}</h3>
          <p style={{ color: '#6b7280' }}>
            {isEnglish ? 'Financing options using ITIN numbers.' : 'Opciones de financiamiento usando ITIN.'}
          </p>
        </Link>

        {/* Service 4: Owner Financing */}
        <Link href="/owner-financing" style={{...cardStyle, borderTopColor: '#059669'}}>
          <h3 style={{ color: '#1e3a8a' }}>{isEnglish ? 'Owner Financing' : 'Financiamiento Directo'}</h3>
          <p style={{ color: '#6b7280' }}>
            {isEnglish ? 'Properties with direct seller financing.' : 'Propiedades con financiamiento directo del vendedor.'}
          </p>
        </Link>

        {/* Service 5: Home Inspection (NEW) */}
        <Link href="/home-inspections" style={{...cardStyle, borderTopColor: '#0f172a'}}>
          <h3 style={{ color: '#1e3a8a' }}>{isEnglish ? 'Home Inspections' : 'Inspección de Casas'}</h3>
          <p style={{ color: '#6b7280' }}>
            {isEnglish ? 'Certified inspectors for your future home.' : 'Inspectores certificados para su futura casa.'}
          </p>
        </Link>

        {/* Service 6: Legal Support */}
        <Link href="/legal-support" style={cardStyle}>
          <h3 style={{ color: '#1e3a8a' }}>{isEnglish ? 'Legal Support' : 'Asesoría Legal'}</h3>
          <p style={{ color: '#6b7280' }}>
            {isEnglish ? 'Specialized real estate legal advice.' : 'Asesoría legal especializada en bienes raíces.'}
          </p>
        </Link>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        © 2026 Latino Real Estate Directory - Georgia
      </footer>
    </main>
  );
}

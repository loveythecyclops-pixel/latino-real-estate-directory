'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const [hovered, setHovered] = useState<number | null>(null);

  const isEnglish = language === 'en';

  const services = [
    {
      slug: 'agentes',
      titleEn: 'Bilingual Agents',
      titleEs: 'Agentes Bilingües',
      descEn: 'Experts who speak your language.',
      descEs: 'Expertos que hablan tu idioma.',
    },
    {
      slug: 'itin',
      titleEn: 'ITIN Mortgages',
      titleEs: 'Hipotecas con ITIN',
      descEn: 'Financing options using ITIN numbers.',
      descEs: 'Opciones de financiamiento usando ITIN.',
    },
    {
      slug: 'legal',
      titleEn: 'Legal Support',
      titleEs: 'Asesoría Legal',
      descEn: 'Specialized real estate legal advice.',
      descEs: 'Asesoría legal especializada en bienes raíces.',
    },
    {
      slug: 'owner-financing',
      titleEn: 'Owner Financing',
      titleEs: 'Financiamiento Directo',
      descEn: 'Properties with direct seller financing.',
      descEs: 'Propiedades con financiamiento directo del vendedor.',
    },
  ];

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: 'sans-serif',
    color: '#1a202c',
  };

  const heroStyle = {
    backgroundColor: '#1e3a8a',
    color: '#ffffff',
    padding: '60px 24px',
    textAlign: 'center' as const,
    position: 'relative' as const,
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
    cursor: 'pointer',
  };

  const cardBaseStyle = {
    display: 'block',
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center' as const,
    borderTop: '4px solid #1e3a8a',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  return (
    <main style={containerStyle}>
      {/* HERO */}
      <div style={heroStyle}>
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
            cursor: 'pointer',
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

      {/* SERVICES */}
      <section
        style={{
          padding: '64px 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {services.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <div
              style={{
                ...cardBaseStyle,
                transform:
                  hovered === index ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow:
                  hovered === index
                    ? '0 10px 20px rgba(0,0,0,0.15)'
                    : '0 4px 6px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3>
                {isEnglish ? service.titleEn : service.titleEs}
              </h3>
              <p style={{ color: '#6b7280' }}>
                {isEnglish ? service.descEn : service.descEs}
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '40px',
          textAlign: 'center',
          color: '#6b7280',
        }}
      >
        © 2026 Latino Real Estate Directory - Georgia
      </footer>
    </main>
  );
}

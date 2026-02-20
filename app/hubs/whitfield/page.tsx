'use client';
<<<<<<< HEAD
=======

import { useState } from 'react';
>>>>>>> ba6232ff24ffc3c343ab9d99c7d3e91e3b872e6f
import Link from 'next/link';

export default function CobbPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';
  const color = '#1e3a8a'; // Cobb Blue (Corporate/Professional)

  const neighborhoods = [
    { 
      name: 'Marietta (South Cobb Dr)', 
      en: 'The cultural heart of Cobb. High density of Mexican and Central American businesses. Known for "Fair Oaks" and active commercial corridors.', 
      es: 'El corazón cultural de Cobb. Alta densidad de negocios mexicanos y centroamericanos. Conocido por "Fair Oaks" y corredores comerciales.', 
      highlight: { en: 'Latino Hub', es: 'Núcleo Latino' } 
    },
    { 
      name: 'Smyrna / Mableton', 
      en: 'Diverse area popular for young professionals. Offers excellent access to the Silver Comet Trail and quick commutes to Midtown Atlanta.', 
      es: 'Área diversa popular para jóvenes profesionales. Ofrece acceso al Silver Comet Trail y viajes cortos a Midtown Atlanta.', 
      highlight: { en: 'Commuter Hub', es: 'Para Viajeros' } 
    },
    { 
      name: 'Austell / Powder Springs', 
      en: 'More affordable entry point for families. Features suburban subdivisions with larger lots and growing Latino-focused services.', 
      es: 'Punto de entrada más económico para familias. Ofrece subdivisiones suburbanas con terrenos grandes y servicios para latinos.', 
      highlight: { en: 'Best Value', es: 'Mejor Valor' } 
    },
    { 
      name: 'Kennesaw / Acworth', 
      en: 'Northern Cobb area with a growing student population at KSU. Mix of modern subdivisions and established communities.', 
      es: 'Zona norte de Cobb con creciente población estudiantil en KSU. Mezcla de subdivisiones modernas y comunidades establecidas.', 
      highlight: { en: 'Growth Area', es: 'Zona de Crecimiento' } 
    }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Language Toggle Button */}
      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{
          position: 'fixed', top: '20px', right: '20px', zIndex: 100,
          padding: '10px 20px', borderRadius: '30px', backgroundColor: 'white',
          color: color, border: `2px solid ${color}`, fontWeight: 'bold', cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
      </button>

      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>
          {isEnglish ? '← All Latino Hubs' : '← Todos los Núcleos Latinos'}
        </Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🍑</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>Cobb County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>
          {isEnglish ? 'Metro Atlanta • The Westside Hub' : 'Metro de Atlanta • El Núcleo del Oeste'}
        </p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>15.8%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Latino Population' : 'Población Latina'}</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Marietta</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'County Seat' : 'Sede del Condado'}</div></div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>

        {/* Neighborhoods Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>
            {isEnglish ? '🏡 Key Neighborhoods' : '🏡 Vecindarios Clave'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {neighborhoods.map((n) => (
              <div key={n.name} style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '20px', borderLeft: `4px solid ${color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h3 style={{ fontWeight: '700', color: '#1e293b', margin: 0 }}>{n.name}</h3>
                  <span style={{ backgroundColor: color, color: 'white', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '20px' }}>
                    {isEnglish ? n.highlight.en : n.highlight.es}
                  </span>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  {isEnglish ? n.en : n.es}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Market Stats Feb 2026 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>
            {isEnglish ? '🏠 February 2026 Market' : '🏠 Mercado de Febrero 2026'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: isEnglish ? 'Median Home Price' : 'Precio Medio', value: '$410,000', note: isEnglish ? 'Stable demand' : 'Demanda estable' },
              { label: isEnglish ? 'ITIN Lending' : 'Préstamos ITIN', value: 'Moderate', note: isEnglish ? 'Established local banks' : 'Bancos locales establecidos' },
              { label: isEnglish ? 'Days on Market' : 'Días en Mercado', value: '77', note: isEnglish ? 'Negotiation power' : 'Poder de negociación' },
              { label: isEnglish ? 'Avg Rent' : 'Renta Promedio', value: '$1,750', note: isEnglish ? 'Strong rental pool' : 'Fuerte mercado de renta' },
            ].map((f) => (
              <div key={f.label} style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color }}>{f.value}</div>
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem', margin: '4px 0' }}>{f.label}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{f.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div style={{ backgroundColor: color, borderRadius: '16px', padding: '40px', textAlign: 'center', color: 'white' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>
            {isEnglish ? 'Connect with Cobb Experts' : 'Contacte Expertos en Cobb'}
          </h3>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>
            {isEnglish ? 'Find the right neighborhood and ITIN mortgage program today.' : 'Encuentre el vecindario ideal y programas ITIN hoy mismo.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
              {isEnglish ? 'ITIN Guide' : 'Guía de ITIN'}
            </Link>
            <Link href="/bilingual-agents" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>
              {isEnglish ? 'Find Agent' : 'Buscar Agente'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

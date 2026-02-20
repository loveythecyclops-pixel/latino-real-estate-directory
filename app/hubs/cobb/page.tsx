'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CobbPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';
  const color = '#059669';

  const neighborhoods = [
    { 
      name: 'Smyrna (South)', 
      en: 'Most concentrated Latino area in Cobb. High density near South Cobb Drive. Growing Latino-owned business corridor.', 
      es: 'La zona con mayor concentración latina en Cobb. Alta densidad cerca de South Cobb Drive. Corredor comercial en crecimiento.', 
      highlight: { en: 'Most Latino', es: 'Más Latino' } 
    },
    { 
      name: 'Austell', 
      en: 'Affordable community in western Cobb. Strong working-class Latino families. Multiple trailer park and apartment communities.', 
      es: 'Comunidad asequible en el oeste de Cobb. Familias latinas trabajadoras. Varias comunidades de casas móviles y apartamentos.', 
      highlight: { en: 'Affordable', es: 'Económico' } 
    },
    { 
      name: 'Marietta (South)', 
      en: 'Along Cobb Pkwy. Growing Latino presence. Older established neighborhoods with good value and mixed income levels.', 
      es: 'A lo largo de Cobb Pkwy. Presencia latina en crecimiento. Vecindarios establecidos con buen valor y niveles de ingresos mixtos.', 
      highlight: { en: 'Growing', es: 'Creciendo' } 
    },
    { 
      name: 'Mableton', 
      en: 'Suburban single-family homes. Better school options. Recently incorporated as a city in 2023.', 
      es: 'Casas unifamiliares suburbanas. Mejores opciones escolares. Recientemente incorporada como ciudad en 2023.', 
      highlight: { en: 'Suburban', es: 'Suburbano' } 
    },
  ];
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', position: 'relative' }}>
      
      {/* Floating Language Toggle */}
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
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #047857 0%, #059669 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>
          {isEnglish ? '← All Latino Hubs' : '← Todos los Núcleos Latinos'}
        </Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🏘️</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>Cobb County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>
          {isEnglish ? 'Metro Atlanta • Smyrna, Marietta & Austell' : 'Metro Atlanta • Smyrna, Marietta y Austell'}
        </p>
        
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>111,000+</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Latino Residents' : 'Residentes Latinos'}</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>15%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Population' : 'De la Población'}</div></div>
        </div>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
        
        {/* Neighborhoods */}
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
        {/* Real Estate Facts 2026 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>
            {isEnglish ? '🏠 Cobb Real Estate Facts (2026)' : '🏠 Datos de Bienes Raíces en Cobb (2026)'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: isEnglish ? 'Median Home Price' : 'Precio Medio', value: '$345,000', note: isEnglish ? 'Current Market' : 'Mercado Actual' },
              { label: isEnglish ? 'ITIN Mortgage' : 'Hipoteca ITIN', value: 'Active', note: isEnglish ? 'Available in Cobb' : 'Disponible en Cobb' },
              { label: isEnglish ? 'Rental Demand' : 'Demanda de Renta', value: 'High', note: isEnglish ? 'South Cobb' : 'Sur de Cobb' },
              { label: isEnglish ? 'Schools' : 'Escuelas', value: 'CCSD', note: isEnglish ? 'Top-Tier ESOL' : 'ESOL de nivel superior' },
            ].map((f) => (
              <div key={f.label} style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color }}>{f.value}</div>
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem', margin: '4px 0' }}>{f.label}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{f.note}</div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA */}
        <div style={{ backgroundColor: color, borderRadius: '16px', padding: '40px', textAlign: 'center', color: 'white' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>
            {isEnglish ? 'Find Your Home in Cobb' : 'Encuentre su casa en Cobb'}
          </h3>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>
            {isEnglish ? 'Talk to a bilingual agent specialized in ITIN and Owner Financing.' : 'Hable con un agente bilingüe especializado en ITIN y Financiamiento del Dueño.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
              {isEnglish ? 'Find ITIN Lenders' : 'Prestamistas ITIN'}
            </Link>
            <Link href="/bilingual-agents" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>
              {isEnglish ? 'Bilingual Agents' : 'Agentes Bilingües'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

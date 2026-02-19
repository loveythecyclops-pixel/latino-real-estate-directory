'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DekalbPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';
  const color = '#7c3aed'; // Deep Purple for DeKalb

  const neighborhoods = [
    { 
      name: 'Doraville', 
      en: 'Highest Hispanic concentration in the metro area at 56%. The cultural heart of Latino DeKalb, anchored by Buford Highway markets.', 
      es: 'La mayor concentración hispana del área metro con un 56%. El corazón cultural del DeKalb latino, anclado por los mercados de Buford Highway.', 
      highlight: { en: 'Most Latino', es: 'Más Latino' } 
    },
    { 
      name: 'Chamblee', 
      en: 'International city with a strong Latino business community along Buford Hwy. Great MARTA rail access to the city.', 
      es: 'Ciudad internacional con una fuerte comunidad empresarial latina. Excelente acceso al tren MARTA hacia la ciudad.', 
      highlight: { en: 'International', es: 'Internacional' } 
    },
    { 
      name: 'Tucker', 
      en: 'Suburban eastern DeKalb with growing Latino families and better school ratings. More stable property values.', 
      es: 'Suburbio del este de DeKalb con familias latinas en crecimiento y mejores calificaciones escolares. Valores de propiedad estables.', 
      highlight: { en: 'Suburban', es: 'Suburbano' } 
    },
    { 
      name: 'Lithonia', 
      en: 'Far southeastern DeKalb. Very affordable homes for first-time buyers using ITIN. Emerging community presence.', 
      es: 'Extremo sureste de DeKalb. Casas muy asequibles para compradores por primera vez que usan ITIN. Comunidad emergente.', 
      highlight: { en: 'Affordable', es: 'Económico' } 
    },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Language Toggle */}
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
      <div style={{ background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>
          {isEnglish ? '← All Latino Hubs' : '← Todos los Núcleos Latinos'}
        </Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🌆</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>DeKalb County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>
          {isEnglish ? 'Metro Atlanta • The Famous Buford Highway Corridor' : 'Metro Atlanta • El Famoso Corredor de Buford Highway'}
        </p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>56%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'In Doraville' : 'En Doraville'}</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Buford Hwy</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Latino Heart' : 'Corazón Latino'}</div></div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
        
        {/* Neighborhood Grid */}
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

        {/* Schools Breakdown */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>
            {isEnglish ? '🎓 Schools & ESOL' : '🎓 Escuelas y ESOL'}
          </h2>
          <div style={{ backgroundColor: '#f5f3ff', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#5b21b6', fontWeight: '600', marginBottom: '16px' }}>
              {isEnglish ? 'DeKalb County District offers specialized bilingual support at these core hubs:' : 'El Distrito de DeKalb ofrece apoyo bilingüe especializado en estos centros principales:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {['Cross Keys High', 'Chamblee Charter', 'Tucker High', 'Clarkston High'].map((school) => (
                <div key={school} style={{ backgroundColor: 'white', borderRadius: '8px', padding: '12px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <span style={{ fontWeight: '600', color: '#1e293b' }}>{school}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2026 Real Estate Stats */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>
            {isEnglish ? '🏠 2026 DeKalb Real Estate Facts' : '🏠 Datos de Bienes Raíces 2026'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: isEnglish ? 'Median Home Price' : 'Precio Medio', value: '$311,000', note: isEnglish ? 'Up 1.6% YoY' : 'Subió 1.6% anual' },
              { label: isEnglish ? 'MARTA Access' : 'Acceso MARTA', value: 'High', note: isEnglish ? 'Doraville/Chamblee' : 'Estaciones activas' },
              { label: isEnglish ? 'Rent Demand' : 'Demanda de Renta', value: 'Max', note: isEnglish ? 'Buford Highway' : 'Muy alta demanda' },
              { label: isEnglish ? 'ITIN Eligibility' : 'Elegibilidad ITIN', value: 'Verified', note: isEnglish ? 'Local Specialists' : 'Especialistas locales' },
            ].map((f) => (
              <div key={f.label} style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color }}>{f.value}</div>
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem', margin: '4px 0' }}>{f.label}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{f.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <div style={{ backgroundColor: color, borderRadius: '16px', padding: '40px', textAlign: 'center', color: 'white' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>
            {isEnglish ? 'Find Your Home in DeKalb' : 'Encuentre su hogar en DeKalb'}
          </h3>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>
            {isEnglish ? 'The Buford Highway corridor moves fast. Get pre-approved for ITIN today.' : 'El corredor de Buford Highway se mueve rápido. Obtenga su pre-aprobación ITIN hoy.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
              {isEnglish ? 'ITIN Lenders' : 'Prestamistas ITIN'}
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

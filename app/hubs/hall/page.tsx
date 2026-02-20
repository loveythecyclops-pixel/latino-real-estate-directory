'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HallPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';
  const color = '#dc2626'; // Hall County Red

  const neighborhoods = [
    { 
      name: 'Gainesville (City Center)', 
      en: 'The heart of the "Poultry Capital." High density of Latino-owned businesses, authentic markets, and walking distance to the historic square and local industries.', 
      es: 'El corazón de la "Capital Avícola". Alta densidad de negocios latinos, mercados auténticos y cercanía a la plaza histórica e industrias locales.', 
      highlight: { en: 'Most Latino', es: 'Más Latino' } 
    },
    { 
      name: 'Oakwood', 
      en: 'A rapidly growing suburb focused on affordability. Home to UNG Gainesville and popular for families looking for starter homes and bilingual school options.', 
      es: 'Suburbio en rápido crecimiento enfocado en la asequibilidad. Hogar de UNG Gainesville y popular para familias que buscan casas iniciales.', 
      highlight: { en: 'Top Choice', es: 'Gran Opción' } 
    },
    { 
      name: 'Flowery Branch', 
      en: 'Southeastern Hall. Offers safe, established subdivisions near Lake Lanier. A higher price point but popular for its excellent dual-immersion elementary schools.', 
      es: 'Sureste de Hall. Ofrece subdivisiones seguras cerca del Lago Lanier. Precios más altos pero popular por sus escuelas de inmersión dual.', 
      highlight: { en: 'Family Hub', es: 'Para Familias' } 
    },
    { 
      name: 'Murrayville / Clermont', 
      en: 'North Hall rural areas. Offers mountain views and larger lots of land. Ideal for those seeking a country feel or space for independent workshops.', 
      es: 'Áreas rurales del norte de Hall. Ofrece vistas a la montaña y terrenos grandes. Ideal para un ambiente de campo o espacio para talleres.', 
      highlight: { en: 'Rural/Land', es: 'Campo/Tierra' } 
    }
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

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #991b1b 0%, #dc2626 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>
          {isEnglish ? '← All Latino Hubs' : '← Todos los Núcleos Latinos'}
        </Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🌄</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>Hall County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>
          {isEnglish ? 'North Georgia • The Gainesville Hub' : 'Norte de Georgia • El Núcleo de Gainesville'}
        </p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>29.8%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Latino Population' : 'Población Latina'}</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Gainesville</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Primary City' : 'Ciudad Principal'}</div></div>
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

        {/* Education & Dual Language */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>
            {isEnglish ? '🎓 Education & Dual Language' : '🎓 Educación y Lenguaje Dual'}
          </h2>
          <div style={{ backgroundColor: '#fef2f2', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#991b1b', fontWeight: '600', marginBottom: '16px' }}>
              {isEnglish ? 'Hall County is a state leader in bilingual education pathways:' : 'Hall County es líder estatal en trayectorias de educación bilingüe:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #fecaca' }}>
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>World Language Academy</div>
                <div style={{ fontSize: '0.8rem', color: '#dc2626' }}>{isEnglish ? 'Dual Immersion K-8' : 'Inmersión Dual K-8'}</div>
              </div>
              <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #fecaca' }}>
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Gainesville High</div>
                <div style={{ fontSize: '0.8rem', color: '#dc2626' }}>{isEnglish ? 'Extensive Bilingual Support' : 'Amplio Apoyo Bilingüe'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Estate Stats Feb 2026 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>
            {isEnglish ? '🏠 2026 Market Stats' : '🏠 Estadísticas de Mercado 2026'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: isEnglish ? 'Median Home Price' : 'Precio Medio', value: '$417,000', note: isEnglish ? 'Up 4.1% from 2025' : '4.1% más que en 2025' },
              { label: isEnglish ? 'Active ITIN Lenders' : 'Prestamistas ITIN', value: 'High', note: isEnglish ? 'Active in Gainesville' : 'Activos en Gainesville' },
              { label: isEnglish ? 'Days on Market' : 'Días en Mercado', value: '69', note: isEnglish ? 'Balanced market' : 'Mercado equilibrado' },
              { label: isEnglish ? 'Mobile Homes' : 'Casas Móviles', value: 'Active', note: isEnglish ? 'Popular ITIN entry' : 'Entrada ITIN popular' },
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
            {isEnglish ? 'Start Your Journey in Hall' : 'Inicie su Camino en Hall'}
          </h3>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>
            {isEnglish ? 'Connect with ITIN experts in the heart of Gainesville.' : 'Conéctese con expertos en ITIN en el corazón de Gainesville.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
              {isEnglish ? 'ITIN Mortgage Info' : 'Info sobre ITIN'}
            </Link>
            <Link href="/bilingual-agents" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>
              {isEnglish ? 'Find Local Agent' : 'Buscar Agente Local'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HallPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';
  const color = '#dc2626'; // Hall County Red

  const neighborhoods = [
    { 
      name: 'Gainesville (Central)', 
      en: 'The heart of Georgia’s poultry capital. High density of Latino-owned businesses. Mix of established homes and apartments near the industrial corridor.', 
      es: 'El corazón de la capital avícola de Georgia. Alta densidad de negocios latinos. Mezcla de casas y apartamentos cerca del corredor industrial.', 
      highlight: { en: 'Most Latino', es: 'Más Latino' } 
    },
    { 
      name: 'Oakwood', 
      en: 'Southern Hall suburb popular for its affordability. Rapidly growing community with new small-business hubs and easy access to UNG Gainesville.', 
      es: 'Suburbio del sur de Hall popular por su asequibilidad. Comunidad en rápido crecimiento con nuevos centros de pequeños negocios.', 
      highlight: { en: 'Top Choice', es: 'Gran Opción' } 
    },
    { 
      name: 'Flowery Branch', 
      en: 'Southeastern Hall. Higher price point but very safe. Popular for middle-income families looking for newer construction and Lake Lanier access.', 
      es: 'Sureste de Hall. Precios más altos pero muy seguro. Popular para familias que buscan construcciones nuevas y acceso al Lago Lanier.', 
      highlight: { en: 'Growing', es: 'Creciendo' } 
    },
    { 
      name: 'Murrayville / Clermont', 
      en: 'North Hall rural areas. Offers more land and "country" feel. Tight-knit community often tied to agriculture and independent landscaping.', 
      es: 'Áreas rurales del norte de Hall. Ofrece más terreno y ambiente de campo. Comunidad unida vinculada a la agricultura y paisajismo.', 
      highlight: { en: 'Rural/Land', es: 'Rural/Tierra' } 
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
          {isEnglish ? 'Northeast Georgia • The Gainesville Latino Hub' : 'Noreste de Georgia • El Núcleo Latino de Gainesville'}
        </p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>29.8%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Latino Population' : 'Población Latina'}</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Gainesville</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Primary City' : 'Ciudad Principal'}</div></div>
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

        {/* Education Highlight */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>
            {isEnglish ? '🎓 Bilingual Education' : '🎓 Educación Bilingüe'}
          </h2>
          <div style={{ backgroundColor: '#fef2f2', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#991b1b', fontWeight: '600', marginBottom: '16px' }}>
              {isEnglish ? 'Hall County is a state leader in Dual Language Immersion (DLI):' : 'Hall County es líder estatal en Inmersión Dual (DLI):'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #fecaca' }}>
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>World Language Academy</div>
                <div style={{ fontSize: '0.8rem', color: '#dc2626' }}>{isEnglish ? 'Dual Immersion K-8' : 'Inmersión Dual K-8'}</div>
              </div>
              <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #fecaca' }}>
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>DLI Pre-K Center South</div>
                <div style={{ fontSize: '0.8rem', color: '#dc2626' }}>{isEnglish ? 'Centralized Bilingual Start' : 'Inicio Bilingüe Centralizado'}</div>
              </div>
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.85rem', color: '#991b1b' }}>
              {isEnglish ? '• Hall offers DLI programs at Sardis, Sugar Hill, Tadmore, and Chicopee Woods.' : '• Hall ofrece programas DLI en Sardis, Sugar Hill, Tadmore y Chicopee Woods.'}
            </p>
          </div>
        </section>

        {/* Market Stats Feb 2026 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>
            {isEnglish ? '🏠 February 2026 Market' : '🏠 Mercado de Febrero 2026'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: isEnglish ? 'Median Home Price' : 'Precio Medio', value: '$417,000', note: isEnglish ? 'Stable market' : 'Mercado estable' },
              { label: isEnglish ? 'ITIN Lending' : 'Préstamos ITIN', value: 'High', note: isEnglish ? 'Aggressive local lenders' : 'Prestamistas locales activos' },
              { label: isEnglish ? 'Days on Market' : 'Días en Mercado', value: '69', note: isEnglish ? 'Balanced for buyers' : 'Equilibrado para compradores' },
              { label: isEnglish ? 'Rental Demand' : 'Demanda de Renta', value: 'Steady', note: isEnglish ? 'Gainesville core remains strong' : 'El centro sigue fuerte' },
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
            {isEnglish ? 'Start Your Search in Hall' : 'Inicie su Búsqueda en Hall'}
          </h3>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>
            {isEnglish ? 'Gainesville and Hall County offer unique ITIN homebuying paths.' : 'Gainesville y el Condado de Hall ofrecen rutas únicas para comprar con ITIN.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
              {isEnglish ? 'ITIN Programs' : 'Programas ITIN'}
            </Link>
            <Link href="/bilingual-agents" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>
              {isEnglish ? 'Local Agents' : 'Agentes Locales'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

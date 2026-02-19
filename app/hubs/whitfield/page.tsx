'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WhitfieldPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';
  const color = '#d97706'; // Whitfield Amber/Orange

  const neighborhoods = [
    { 
      name: 'Dalton (City Center)', 
      en: 'The "Carpet Capital of the World." High density of Latino-owned businesses, authentic Mexican cuisine, and walking distance to many employment centers.', 
      es: 'La "Capital Mundial de Alfombras". Alta densidad de negocios latinos, auténtica comida mexicana y cercanía a centros de empleo.', 
      highlight: { en: 'Most Latino', es: 'Más Latino' } 
    },
    { 
      name: 'East Dalton', 
      en: 'Primary residential hub for industrial workers. Features affordable starter homes and a very high concentration of Spanish-speaking households.', 
      es: 'Núcleo residencial principal para trabajadores industriales. Casas económicas para principiantes y gran comunidad de habla hispana.', 
      highlight: { en: 'Affordable', es: 'Económico' } 
    },
    { 
      name: 'Varnell / Tunnel Hill', 
      en: 'Northwest of Dalton. Popular for families seeking larger yards and newer suburban feels while staying within a 15-minute drive of the city.', 
      es: 'Noroeste de Dalton. Popular para familias que buscan patios más grandes y un ambiente suburbano nuevo a 15 minutos de la ciudad.', 
      highlight: { en: 'Family Hub', es: 'Para Familias' } 
    },
    { 
      name: 'Cohutta / Rocky Face', 
      en: 'Rural outskirts offering mountain views and land. Very popular for those looking to place mobile homes or build independent workshops.', 
      es: 'Afueras rurales con vistas a la montaña y terreno. Muy popular para quienes buscan poner casas móviles o talleres independientes.', 
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
      <div style={{ background: 'linear-gradient(135deg, #92400e 0%, #d97706 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>
          {isEnglish ? '← All Latino Hubs' : '← Todos los Núcleos Latinos'}
        </Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🏭</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>Whitfield County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>
          {isEnglish ? 'North Georgia • The Dalton Hub' : 'Norte de Georgia • El Núcleo de Dalton'}
        </p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>38.4%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Latino Population' : 'Población Latina'}</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Dalton</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Primary City' : 'Ciudad Principal'}</div></div>
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
          <div style={{ backgroundColor: '#fffbeb', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#92400e', fontWeight: '600', marginBottom: '16px' }}>
              {isEnglish ? 'Dalton is a leader in bilingual education in North Georgia:' : 'Dalton es líder en educación bilingüe en el norte de Georgia:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #fde68a' }}>
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Westwood Elementary</div>
                <div style={{ fontSize: '0.8rem', color: '#b45309' }}>{isEnglish ? 'Spanish Dual Immersion' : 'Inmersión Dual en Español'}</div>
              </div>
              <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #fde68a' }}>
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Dalton High School</div>
                <div style={{ fontSize: '0.8rem', color: '#b45309' }}>{isEnglish ? 'Strong ESOL Support' : 'Gran Apoyo ESOL'}</div>
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
              { label: isEnglish ? 'Median Home Price' : 'Precio Medio', value: '$274,000', note: isEnglish ? 'Best value in GA' : 'Mejor valor en GA' },
              { label: isEnglish ? 'Active ITIN Lenders' : 'Prestamistas ITIN', value: 'High', note: isEnglish ? 'Established local roots' : 'Raíces locales sólidas' },
              { label: isEnglish ? 'Days on Market' : 'Días en Mercado', value: '64', note: isEnglish ? 'Less competitive' : 'Menos competencia' },
              { label: isEnglish ? 'Mobile Homes' : 'Casas Móviles', value: 'Abundant', note: isEnglish ? 'Ideal starter option' : 'Opción ideal inicial' },
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
            {isEnglish ? 'Start Your Journey in Dalton' : 'Inicie su Camino en Dalton'}
          </h3>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>
            {isEnglish ? 'Connect with ITIN experts in the heart of Whitfield County.' : 'Conéctese con expertos en ITIN en el corazón de Whitfield.'}
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

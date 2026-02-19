'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ClaytonPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';
  const color = '#0891b2';

  const neighborhoods = [
    { name: 'Forest Park', en: 'Primary Latino hub near the Atlanta State Farmers Market. Industrial corridor.', es: 'El principal núcleo latino cerca del Farmers Market. Pasillo industrial.', highlight: { en: 'Most Latino', es: 'Más Latino' } },
    { name: 'Morrow', en: 'Suburban character with retail along Morrow Road. Accessible via I-75.', es: 'Carácter suburbano con comercio en Morrow Rd. Accesible por la I-75.', highlight: { en: 'Growing', es: 'Creciendo' } },
    { name: 'Jonesboro', en: 'County seat with affordable homes and established Latino businesses.', es: 'Sede del condado con casas asequibles y negocios latinos establecidos.', highlight: { en: 'Established', es: 'Establecido' } },
    { name: 'Riverdale', en: 'Diverse area close to Airport employers. Affordable rental market.', es: 'Zona diversa cerca del Aeropuerto. Mercado de rentas asequible.', highlight: { en: 'Affordable', es: 'Económico' } },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', position: 'relative' }}>
      
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
      <div style={{ background: 'linear-gradient(135deg, #164e63 0%, #0891b2 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>
          {isEnglish ? '← All Latino Hubs' : '← Todos los Núcleos Latinos'}
        </Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🌱</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>Clayton County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>
          {isEnglish ? 'South Metro Atlanta • Growing Hub' : 'Sur de Metro Atlanta • Núcleo en Crecimiento'}
        </p>
        
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>~15%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Latino Population' : 'Población Latina'}</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Forest Park</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Primary Hub City' : 'Ciudad Principal'}</div></div>
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

        {/* Airport Section */}
        <div style={{ backgroundColor: '#ecfeff', borderRadius: '12px', padding: '24px', marginBottom: '48px', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ fontSize: '2.5rem' }}>✈️</div>
          <div>
            <strong style={{ color: '#164e63', fontSize: '1.1rem' }}>{isEnglish ? 'Airport Proximity Advantage' : 'Ventaja de Proximidad al Aeropuerto'}</strong>
            <p style={{ color: '#475569', margin: '4px 0 0', fontSize: '0.95rem' }}>
              {isEnglish 
                ? 'Strong employment in hospitality and logistics. Bilingual workers are highly sought after here.' 
                : 'Fuerte empleo en hotelería y logística. Los trabajadores bilingües son muy cotizados aquí.'}
            </p>
          </div>
        </div>

        {/* Real Estate Facts */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>
            {isEnglish ? '🏠 Real Estate Facts (Feb 2026)' : '🏠 Datos de Bienes Raíces (Feb 2026)'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: isEnglish ? 'Median Home Price' : 'Precio Medio de Casa', value: '$233,000', note: isEnglish ? 'Highly Affordable' : 'Muy Asequible' },
              { label: isEnglish ? 'ITIN Loans' : 'Préstamos ITIN', value: isEnglish ? 'Available' : 'Disponibles', note: isEnglish ? 'High Approval' : 'Alta Aprobación' },
              { label: isEnglish ? 'Market Trend' : 'Tendencia', value: '+3.5%', note: isEnglish ? 'Year over Year' : 'Anual' },
            ].map((f) => (
              <div key={f.label} style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color }}>{f.value}</div>
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem', margin: '4px 0' }}>{f.label}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{f.note}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: color, borderRadius: '16px', padding: '40px', textAlign: 'center', color: 'white', margin: '0 20px 40px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>
          {isEnglish ? 'Ready to Buy in Clayton County?' : '¿Listo para comprar en Clayton?'}
        </h3>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
            {isEnglish ? 'Find ITIN Lenders' : 'Prestamistas ITIN'}
          </Link>
          <Link href="/bilingual-agents" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>
            {isEnglish ? 'Find Bilingual Agent' : 'Agentes Bilingües'}
          </Link>
        </div>
      </div>
    </div>
  );
}

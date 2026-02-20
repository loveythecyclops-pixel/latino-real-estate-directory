'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function GwinnettPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';
  const color = '#2563eb'; // Deep Blue for Gwinnett

  const neighborhoods = [
    { 
      name: 'Norcross', 
      en: 'The cultural engine of Gwinnett. Nearly 46% Hispanic population. Massive concentration of shops, and restaurants along Jimmy Carter Blvd.', 
      es: 'El motor cultural de Gwinnett. Población casi 46% hispana. Concentración masiva de tiendas y restaurantes a lo largo de Jimmy Carter Blvd.', 
      highlight: { en: 'Most Latino', es: 'Más Latino' } 
    },
    { 
      name: 'Lilburn', 
      en: 'Quiet, family-friendly area with strong Latino presence in neighborhoods like Berkmar. Known for parks and high community engagement.', 
      es: 'Área tranquila y familiar con fuerte presencia latina en vecindarios como Berkmar. Conocida por sus parques y gran participación comunitaria.', 
      highlight: { en: 'Family Hub', es: 'Centro Familiar' } 
    },
    { 
      name: 'Lawrenceville', 
      en: 'The county seat. A diverse mix of affordable older homes and new construction. Central to all county government services.', 
      es: 'La sede del condado. Una mezcla diversa de casas antiguas asequibles y nuevas construcciones. Cerca de todos los servicios del gobierno.', 
      highlight: { en: 'County Seat', es: 'Sede del Condado' } 
    },
    { 
      name: 'Duluth', 
      en: 'Increasingly popular for middle-income Latino families. Excellent school ratings and a thriving business corridor on Pleasant Hill Rd.', 
      es: 'Cada vez más popular para familias latinas de ingresos medios. Excelentes calificaciones escolares y un corredor comercial próspero.', 
      highlight: { en: 'High Growth', es: 'Gran Crecimiento' } 
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
      <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>
          {isEnglish ? '← All Latino Hubs' : '← Todos los Núcleos Latinos'}
        </Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🏘️</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>Gwinnett County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>
          {isEnglish ? 'Metro Atlanta • Georgia’s Largest Latino Hub' : 'Metro Atlanta • El Núcleo Latino más Grande de Georgia'}
        </p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>225,000+</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Latino Residents' : 'Residentes Latinos'}</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>24%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Of Population' : 'De la Población'}</div></div>
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
            {isEnglish ? '🎓 Education & Language' : '🎓 Educación e Idioma'}
          </h2>
          <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#1e40af', fontWeight: '600', marginBottom: '16px' }}>
              {isEnglish ? 'Gwinnett County Public Schools (GCPS) leads the state in ESOL and Dual Language Immersion programs:' : 'Las Escuelas Públicas de Gwinnett (GCPS) lideran el estado en programas ESOL e Inmersión Dual:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {['Meadowcreek High', 'Berkmar High', 'Norcross High', 'Paul Duke STEM'].map((school) => (
                <div key={school} style={{ backgroundColor: 'white', borderRadius: '8px', padding: '12px', textAlign: 'center', border: '1px solid #dbeafe' }}>
                  <span style={{ fontWeight: '600', color: '#1e293b' }}>{school}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.85rem', color: '#1e40af' }}>
              {isEnglish ? '• Every school offers ESOL. Parent liaisons available in Spanish at most sites.' : '• Todas las escuelas ofrecen ESOL. Enlaces para padres disponibles en español en la mayoría.'}
            </p>
          </div>
        </section>

        {/* Market Stats Feb 2026 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>
            {isEnglish ? '🏠 2026 Gwinnett Real Estate' : '🏠 Bienes Raíces Gwinnett 2026'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: isEnglish ? 'Median Home Price' : 'Precio Medio', value: '$410,000', note: isEnglish ? 'Feb 2026 Market Data' : 'Datos de Feb 2026' },
              { label: isEnglish ? 'Inventory Level' : 'Inventario', value: '2,497', note: isEnglish ? 'Active Listings' : 'Listas Activas' },
              { label: isEnglish ? 'Buyer Leverage' : 'Poder del Comprador', value: 'High', note: isEnglish ? 'Negotiations Possible' : 'Negociación Posible' },
              { label: isEnglish ? 'ITIN Acceptance' : 'Aceptación ITIN', value: 'Wide', note: isEnglish ? 'Top County for ITIN' : 'Líder en préstamos ITIN' },
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
            {isEnglish ? 'Make Gwinnett Your Home' : 'Haga de Gwinnett su Hogar'}
          </h3>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>
            {isEnglish ? 'Join the largest Latino community in Georgia. Start your search here.' : 'Únase a la comunidad latina más grande de Georgia. Inicie su búsqueda aquí.'}
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

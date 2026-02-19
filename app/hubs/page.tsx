'use client';

import { useState } from 'react'; 
import Link from 'next/link';

const hubs = [
  {
    slug: 'gwinnett',
    name: 'Gwinnett County',
    region: { en: 'Metro Atlanta', es: 'Metro Atlanta' },
    emoji: '🏘️',
    pop: '220,000+',
    latinoPct: '23-25%',
    tagline: { en: 'The largest Latino hub in Georgia', es: 'El centro latino más grande de Georgia' },
    color: '#2563eb',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Gwinnett-County_GA',
  },
  {
    slug: 'cobb',
    name: 'Cobb County',
    region: { en: 'Metro Atlanta', es: 'Metro Atlanta' },
    emoji: '🏡',
    pop: '111,000+',
    latinoPct: '13-15%',
    tagline: { en: 'Growing communities in Smyrna, Marietta & Austell', es: 'Comunidades en crecimiento en Smyrna, Marietta y Austell' },
    color: '#059669',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Cobb-County_GA',
  },
  {
    slug: 'dekalb',
    name: 'DeKalb County',
    region: { en: 'Metro Atlanta', es: 'Metro Atlanta' },
    emoji: '🏙',
    pop: 'Buford Hwy Corridor',
    latinoPct: 'Up to 56% in Doraville',
    tagline: { en: 'Home to the famous Buford Highway Latino corridor', es: 'Hogar del famoso corredor latino de Buford Highway' },
    color: '#7c3aed',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/DeKalb-County_GA',
  },
  {
    slug: 'hall',
    name: 'Hall County',
    region: { en: 'North Georgia', es: 'Norte de Georgia' },
    emoji: '🕋',
    pop: 'Gainesville Hub',
    latinoPct: '28-33%',
    tagline: { en: 'Major residential center outside Metro Atlanta', es: 'Centro residencial importante fuera de Metro Atlanta' },
    color: '#dc2626',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Hall-County_GA',
  },
  {
    slug: 'whitfield',
    name: 'Whitfield County',
    region: { en: 'North Georgia', es: 'Norte de Georgia' },
    emoji: '🏭',
    pop: 'Dalton Hub',
    latinoPct: '35-39%',
    tagline: { en: 'Highest Latino concentration in Georgia', es: 'La mayor concentración latina en Georgia' },
    color: '#d97706',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Whitfield-County_GA',
  },
  {
    slug: 'clayton',
    name: 'Clayton County',
    region: { en: 'South Metro', es: 'Sur del Metro' },
    emoji: '🌱',
    pop: 'Growing Hub',
    latinoPct: '~15%',
    tagline: { en: 'Rapidly growing community in Forest Park & Morrow', es: 'Comunidad de rápido crecimiento en Forest Park y Morrow' },
    color: '#0891b2',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Clayton-County_GA',
  },
];

export default function HubsPage() {
  // Use local state so we don't need the missing LanguageContext file
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const isEnglish = language === 'en';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <div style={{ backgroundColor: '#1e3a5f', color: 'white', padding: '40px 20px', position: 'relative' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Language Toggle Button */}
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
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
          </button>

          <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
            {isEnglish ? '← Back to Home' : '← Volver al Inicio'}
          </Link>
          
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '16px 0 8px' }}>
            {isEnglish ? 'Latino Hubs in Georgia' : 'Centros Latinos en Georgia'}
          </h1>
          <p style={{ color: '#bfdbfe', fontSize: '1.1rem', margin: 0 }}>
            {isEnglish 
              ? "Explore the six key counties where Georgia's Latino community thrives." 
              : "Explore los seis condados clave donde prospera la comunidad latina de Georgia."}
          </p>
        </div>
      </div>

      {/* Hub Cards */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px' }}>
        {hubs.map((hub) => (
          <div key={hub.slug} style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: `3px solid ${hub.color}`, overflow: 'hidden' }}>
            <div style={{ padding: '28px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{hub.emoji}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: hub.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                {isEnglish ? hub.region.en : hub.region.es}
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1e293b', margin: '0 0 8px' }}>{hub.name}</h2>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.95rem' }}>
                {isEnglish ? hub.tagline.en : hub.tagline.es}
              </p>
              
              <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: hub.color }}>{hub.latinoPct}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {isEnglish ? 'Latino Population' : 'Población Latina'}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: hub.color }}>{hub.pop}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {isEnglish ? 'Latino Residents' : 'Residentes Latinos'}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link
                  href={`/hubs/${hub.slug}`}
                  style={{ display: 'block', backgroundColor: hub.color, color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', textAlign: 'center' }}
                >
                  {isEnglish ? `Explore ${hub.name}` : `Explorar ${hub.name}`} →
                </Link>
                <a
                  href={hub.realtorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', backgroundColor: 'white', color: hub.color, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', textAlign: 'center', border: `2px solid ${hub.color}` }}
                >
                  🏠 {isEnglish ? 'Find Homes' : 'Buscar Casas'} →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

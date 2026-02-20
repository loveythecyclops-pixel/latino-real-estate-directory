'use client';
import { useState } from 'react';
import Link from 'next/link';

const hubs = [
  {
    slug: 'gwinnett',
    name: 'Gwinnett County',
    region: 'Metro Atlanta',
    emoji: '🏘️',
    pop: '220,000+',
    latinoPct: '23-25%',
    tagline: 'The largest Latino hub in Georgia',
    color: '#2563eb',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Gwinnett-County_GA',
  },
  {
    slug: 'cobb',
    name: 'Cobb County',
    region: 'Metro Atlanta',
    emoji: '🏡',
    pop: '111,000+',
    latinoPct: '13-15%',
    tagline: 'Growing communities in Smyrna, Marietta & Austell',
    color: '#059669',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Cobb-County_GA',
  },
  {
    slug: 'dekalb',
    name: 'DeKalb County',
    region: 'Metro Atlanta',
    emoji: '🏙',
    pop: 'Buford Hwy Corridor',
    latinoPct: 'Up to 56% in Doraville',
    tagline: 'Home to the famous Buford Highway Latino corridor',
    color: '#7c3aed',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/DeKalb-County_GA',
  },
  {
    slug: 'hall',
    name: 'Hall County',
    region: 'North Georgia',
    emoji: '🕋',
    pop: 'Gainesville Hub',
    latinoPct: '28-33%',
    tagline: 'Major residential center outside Metro Atlanta',
    color: '#dc2626',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Hall-County_GA',
  },
  {
    slug: 'whitfield',
    name: 'Whitfield County',
    region: 'North Georgia',
    emoji: '🏭',
    pop: 'Dalton Hub',
    latinoPct: '35-39%',
    tagline: 'Highest Latino concentration in Georgia',
    color: '#d97706',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Whitfield-County_GA',
  },
  {
    slug: 'clayton',
    name: 'Clayton County',
    region: 'South Metro',
    emoji: '🌱',
    pop: 'Growing Hub',
    latinoPct: '~15%',
    tagline: 'Rapidly growing community in Forest Park & Morrow',
    color: '#0891b2',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Clayton-County_GA',
  },
];

export default function HubsPage() {
  const [language, setLanguage] = useState('es');
  const isEnglish = language === 'en';
  const toggleButton = (
    <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} style={{position:'fixed', top:'20px', right:'20px', zIndex:9999, padding:'8px 16px', borderRadius:'20px', cursor:'pointer', backgroundColor:'#1e3a8a', color:'white', border:'none', fontWeight:'bold'}}>
      {language === 'en' ? '???? Espa�ol' : '???? English'}
    </button>
  );
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <div style={{ backgroundColor: '#1e3a5f', color: 'white', padding: '40px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '16px 0 8px' }}>Latino Hubs in Georgia</h1>
          <p style={{ color: '#bfdbfe', fontSize: '1.1rem', margin: 0 }}>
            Explore the six key counties where Georgia&apos;s Latino community thrives. Each hub has its own neighborhoods, schools, and resources.
          </p>
        </div>
      </div>

      {/* Hub Cards */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px' }}>
        {hubs.map((hub) => (
          <div key={hub.slug} style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: `3px solid ${hub.color}`, overflow: 'hidden' }}>
            <div style={{ padding: '28px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{hub.emoji}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: hub.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{hub.region}</div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1e293b', margin: '0 0 8px' }}>{hub.name}</h2>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.95rem' }}>{hub.tagline}</p>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: hub.color }}>{hub.latinoPct}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Latino Population</div>
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: hub.color }}>{hub.pop}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Latino Residents</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link
                  href={`/hubs/${hub.slug}`}
                  style={{ display: 'inline-block', backgroundColor: hub.color, color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', textAlign: 'center' }}
                >
                  Explore {hub.name} →
                </Link>
                <a
                  href={hub.realtorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', backgroundColor: 'white', color: hub.color, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', textAlign: 'center', border: `2px solid ${hub.color}` }}
                >
                  🏠 Find Homes on Realtor.com →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

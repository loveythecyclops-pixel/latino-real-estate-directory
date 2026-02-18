'use client';
import { useState } from 'react';
import Link from 'next/link';

const resources = [
  {
    icon: '🏠',
    title: 'ITIN Mortgages',
    subtitle: 'Prestamos con ITIN',
    description: 'Buy a home without a Social Security Number. Connect with Georgia lenders and NAHREP-affiliated mortgage professionals who specialize in ITIN-based home loans for immigrant families.',
    href: '/itin-mortgages',
    cta: 'Find ITIN Lenders',
    color: '#2563eb',
  },
  {
    icon: '🔒',
    title: 'Owner Financing',
    subtitle: 'Financiamiento del Dueno',
    description: 'Purchase a home directly from the seller with flexible terms — no bank required. Ideal for buyers building credit or working through the ITIN mortgage process.',
    href: '/owner-financing',
    cta: 'Explore Owner Financing',
    color: '#059669',
  },
  {
    icon: '🤝',
    title: 'Bilingual Agents',
    subtitle: 'Agentes Bilingues',
    description: 'Work with a trusted, Spanish-speaking real estate agent across Georgia. Our network of bilingual REALTORS helps you find, negotiate, and close on the right home with confidence.',
    href: '/bilingual-agents',
    cta: 'Find a Bilingual Agent',
    color: '#7c3aed',
  },
  {
    icon: '⚖️',
    title: 'Legal Support',
    subtitle: 'Soporte Legal',
    description: 'Get specialized legal assistance for your real estate transactions. Our network includes bilingual attorneys expert in security deeds, ITIN purchases, and owner financing contracts in Georgia.',
    href: '/legal-support',
    cta: 'Legal Support',
    color: '#dc2626',
  },
];

const hubs = [
  { 
    name: 'Gwinnett County', 
    region: 'Metro Atlanta', 
    pop: '220,000+', 
    latinoPct: '23-25%', 
    details: 'The largest Latino hub in Georgia. High density in Norcross (46% Hispanic), Lilburn, and Lawrenceville.',
    search: 'Gwinnett County, GA'
  },
  { 
    name: 'Cobb County', 
    region: 'Metro Atlanta', 
    pop: '111,000+', 
    latinoPct: '13-15%', 
    details: 'Concentrated in south-central areas like Smyrna, southern Marietta, and Austell.',
    search: 'Cobb County, GA'
  },
  { 
    name: 'Whitfield County', 
    region: 'North Georgia', 
    pop: 'Dalton Hub', 
    latinoPct: '35-39%', 
    details: 'Highest concentration in the state, driven by the flooring industry. A primary residential center.',
    search: 'Dalton, GA'
  },
  { 
    name: 'Hall County', 
    region: 'North Georgia', 
    pop: 'Gainesville Hub', 
    latinoPct: '28-33%', 
    details: 'Major residential center for Hispanic families outside of Metro Atlanta.',
    search: 'Gainesville, GA'
  },
  { 
    name: 'DeKalb County', 
    region: 'Metro Atlanta', 
    pop: 'Buford Hwy', 
    latinoPct: 'Estab. Community', 
    details: 'Doraville holds the highest share of Hispanic residents in the 11-county metro area at 56%.',
    search: 'Doraville, GA'
  },
  { 
    name: 'Clayton County', 
    region: 'South Metro', 
    pop: 'Growing Hub', 
    latinoPct: '15%', 
    details: 'Significant growth in northern cities like Forest Park and Morrow.',
    search: 'Clayton County, GA'
  },
];

export default function Home() {
  const [showRegions, setShowRegions] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Hero */}
      <div style={{
        backgroundColor: '#2563eb',
        color: 'white',
        textAlign: 'center',
        padding: '80px 20px',
      }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem', fontWeight: '800' }}>
          Georgia Latino Real Estate Directory
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.92 }}>
          Connecting the Latino community with ITIN mortgage experts, owner financing,
          and bilingual real estate support across all of Georgia.
        </p>
        
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button 
            onClick={() => setShowRegions(!showRegions)}
            style={{
              backgroundColor: 'white',
              color: '#2563eb',
              padding: '14px 32px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            Find a Home in Latino Hubs {showRegions ? '▲' : '▼'}
          </button>
          
          {showRegions && (
            <div style={{
              position: 'absolute',
              top: '110%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              padding: '20px',
              width: '320px',
              zIndex: 100,
              textAlign: 'left',
              maxHeight: '400px',
              overflowY: 'auto'
            }}>
              <p style={{ color: '#1e40af', fontWeight: '700', fontSize: '0.9rem', marginBottom: '12px' }}>Search Homes by County/Region:</p>
              {hubs.map((hub) => (
                <a 
                  key={hub.name}
                  href={`https://www.zillow.com/homes/${hub.search}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    color: '#1e40af',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    backgroundColor: '#f1f5f9',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  <div style={{ fontWeight: '700', marginBottom: '2px' }}>{hub.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{hub.details}</div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Latino Population Insights */}
      <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#eff6ff', borderRadius: '16px', padding: '40px' }}>
          <h2 style={{ color: '#1e40af', fontSize: '1.8rem', marginBottom: '16px' }}>Georgia Latino Population Insights (2026)</h2>
          <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '1rem', marginBottom: '30px' }}>
            Georgia's Latino population has reached nearly <strong>1.16 million residents</strong> as of 2026, making up approximately <strong>11% of the state's total population</strong>. 
            While communities are growing statewide, the majority remains concentrated in specific geographic hubs, primarily within Metro Atlanta and key industrial centers in North and South Georgia.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #cbd5e1' }}>
                  <th style={{ padding: '12px', color: '#1e40af' }}>County / Region</th>
                  <th style={{ padding: '12px', color: '#1e40af' }}>Primary Hub</th>
                  <th style={{ padding: '12px', color: '#1e40af' }}>Latino % of Population</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px' }}>Whitfield County</td>
                  <td style={{ padding: '12px' }}>North Georgia (Dalton)</td>
                  <td style={{ padding: '12px', fontWeight: '700' }}>~35% - 39%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px' }}>Hall County</td>
                  <td style={{ padding: '12px' }}>North Georgia (Gainesville)</td>
                  <td style={{ padding: '12px', fontWeight: '700' }}>~28% - 33%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px' }}>Atkinson County</td>
                  <td style={{ padding: '12px' }}>South Georgia</td>
                  <td style={{ padding: '12px', fontWeight: '700' }}>~25% - 30%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px' }}>Gwinnett County</td>
                  <td style={{ padding: '12px' }}>Metro Atlanta</td>
                  <td style={{ padding: '12px', fontWeight: '700' }}>~23% - 25%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px' }}>Colquitt County</td>
                  <td style={{ padding: '12px' }}>South Georgia</td>
                  <td style={{ padding: '12px', fontWeight: '700' }}>~23%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px' }}>Stewart County</td>
                  <td style={{ padding: '12px' }}>West Georgia</td>
                  <td style={{ padding: '12px', fontWeight: '700' }}>~21%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div style={{ padding: '70px 20px', backgroundColor: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#1e40af', marginBottom: '8px' }}>
          Georgia-Wide Real Estate Resources
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '50px', fontSize: '1rem' }}>
          Recursos para toda Georgia — no matter what city you are in
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {resources.map((r) => (
            <div key={r.title} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px 24px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '14px' }}>{r.icon}</div>
              <h3 style={{ color: r.color, fontSize: '1.25rem', marginBottom: '4px', fontWeight: '700' }}>
                {r.title}
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '12px', fontStyle: 'italic' }}>
                {r.subtitle}
              </p>
              <p style={{ color: '#374151', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                {r.description}
              </p>
              <Link href={r.href} style={{
                backgroundColor: r.color,
                color: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.9rem',
                textDecoration: 'none',
                display: 'inline-block',
                width: '100%',
                textAlign: 'center'
              }}>
                {r.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Why Trust Us */}
      <div style={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>
          Built for the Georgia Latino Community
        </h2>
        <p style={{ fontSize: '1rem', opacity: 0.85, maxWidth: '680px', margin: '0 auto 36px', lineHeight: '1.7' }}>
          Whether you are buying your first home with an ITIN, looking for flexible owner financing,
          or need a trusted bilingual agent — we connect you with the right professionals across Georgia.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {[
            { stat: 'ITIN', label: 'Loans Available' },
            { stat: '100%', label: 'Bilingual Support' },
            { stat: 'GA', label: 'Statewide Coverage' },
            { stat: 'Free', label: 'Resource Directory' },
          ].map((item) => (
            <div key={item.label} style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: '20px',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '4px' }}>{item.stat}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

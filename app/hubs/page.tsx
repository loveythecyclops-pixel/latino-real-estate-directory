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
  },
  {
    slug: 'dekalb',
    name: 'DeKalb County',
    region: 'Metro Atlanta',
    emoji: '🌆',
    pop: 'Buford Hwy Corridor',
    latinoPct: 'Up to 56% in Doraville',
    tagline: 'Home to the famous Buford Highway Latino corridor',
    color: '#7c3aed',
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
  },
];

export default function HubsPage() {
  return (
    <div>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)', color: 'white', padding: '70px 20px', textAlign: 'center' }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Home</Link>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '16px 0 12px' }}>Latino Hubs in Georgia</h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
          Explore the six key counties where Georgia’s Latino community thrives.
          Each hub has its own neighborhoods, schools, and resources.
        </p>
      </div>

      {/* Hub Cards */}
      <div style={{ padding: '60px 20px', backgroundColor: '#f8fafc', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {hubs.map((hub) => (
            <Link
              key={hub.slug}
              href={`/hubs/${hub.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                borderTop: `4px solid ${hub.color}`,
                transition: 'transform 0.2s',
                cursor: 'pointer',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{hub.emoji}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: '600', color: hub.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{hub.region}</div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>{hub.name}</h2>
                <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '16px', lineHeight: '1.5' }}>{hub.tagline}</p>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#f1f5f9', borderRadius: '8px', padding: '10px 14px', flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: hub.color }}>{hub.latinoPct}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Latino Population</div>
                  </div>
                  <div style={{ backgroundColor: '#f1f5f9', borderRadius: '8px', padding: '10px 14px', flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: hub.color }}>{hub.pop}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Latino Residents</div>
                  </div>
                </div>
                <div style={{ backgroundColor: hub.color, color: 'white', padding: '10px', borderRadius: '8px', textAlign: 'center', fontWeight: '600', fontSize: '0.9rem' }}>
                  Explore {hub.name} →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

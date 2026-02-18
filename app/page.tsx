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

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem', fontWeight: '800' }}>Georgia Latino Real Estate Directory</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.92 }}>
          Connecting the Latino community with ITIN mortgage experts, owner financing,
          and bilingual real estate support across all of Georgia.
        </p>
        <Link
          href="/hubs"
          style={{
            backgroundColor: 'white',
            color: '#2563eb',
            padding: '14px 32px',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '1rem',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Find a Home in Latino Hubs ▶
        </Link>
      </div>

      {/* Resources Section */}
      <div style={{ padding: '70px 20px', backgroundColor: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#1e40af', marginBottom: '8px' }}>
          Georgia-Wide Real Estate Resources
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '50px', fontSize: '1rem' }}>
          Recursos para toda Georgia — no matter what city you are in
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px', maxWidth: '1200px', margin: '0 auto' }}>
          {resources.map((r) => (
            <div key={r.title} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{r.icon}</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: r.color, marginBottom: '4px' }}>{r.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic', marginBottom: '12px' }}>{r.subtitle}</p>
              <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '0.95rem', flexGrow: 1 }}>{r.description}</p>
              <Link
                href={r.href}
                style={{ marginTop: '20px', backgroundColor: r.color, color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block', width: '100%', textAlign: 'center' }}
              >
                {r.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Why Trust Us */}
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>Built for the Georgia Latino Community</h2>
        <p style={{ fontSize: '1rem', opacity: 0.85, maxWidth: '680px', margin: '0 auto 36px', lineHeight: '1.7' }}>
          Whether you are buying your first home with an ITIN, looking for flexible owner financing,
          or need a trusted bilingual agent — we connect you with the right professionals across Georgia.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
          {[
            { stat: 'ITIN', label: 'Loans Available' },
            { stat: '100%', label: 'Bilingual Support' },
            { stat: 'GA', label: 'Statewide Coverage' },
            { stat: 'Free', label: 'Resource Directory' },
          ].map((item) => (
            <div key={item.label} style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '4px' }}>{item.stat}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';
import Link from 'next/link';

export default function EnglishHome() {
  const containerStyle = { minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif', color: '#1a202c' };
  const heroStyle = { backgroundColor: '#1e3a8a', color: '#ffffff', padding: '60px 24px 40px', textAlign: 'center' as const };
  const buttonStyle = { backgroundColor: '#ffffff', color: '#1e3a8a', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', margin: '8px', display: 'inline-block' };
  const cardStyle = { display: 'block', backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' as const, borderTop: '4px solid #1e3a8a', textDecoration: 'none', color: 'inherit' };

  return (
    <main style={containerStyle}>
      <div style={heroStyle}>
        <Link href="/" style={{ position: 'absolute' as const, top: '20px', right: '20px', color: '#fff', border: '1px solid #fff', padding: '8px 16px', borderRadius: '20px', fontSize: '0.875rem', textDecoration: 'none' }}>
          Ver en Espanol
        </Link>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Latino Real Estate Directory
        </h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
          Connecting Georgia with bilingual experts.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' as const }}>
          <Link href="/en/bilingual-agents" style={buttonStyle}>Bilingual Agents</Link>
          <Link href="/en/itin-mortgages" style={{ ...buttonStyle, backgroundColor: '#f59e0b', color: '#fff' }}>ITIN Mortgages</Link>
          <Link href="/hubs" style={{ ...buttonStyle, backgroundColor: '#16a34a', color: '#fff' }}>Explore Hubs</Link>
        </div>
      </div>

      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {[
            { href: '/en/bilingual-agents', title: 'Bilingual Agents', desc: 'Experts who speak your language.' },
            { href: '/en/itin-mortgages', title: 'ITIN Mortgages', desc: 'Financing options using ITIN.' },
            { href: '/en/legal-support', title: 'Legal Support', desc: 'Real estate specialized legal advice.' },
            { href: '/en/owner-financing', title: 'Owner Financing', desc: 'Properties with direct seller financing.' },
            { href: '/hubs', title: 'Latino Hubs', desc: 'Explore top Latino communities in Georgia.' },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={cardStyle}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '12px' }}>{item.desc}</p>
              <span style={{ color: '#1e3a8a', fontWeight: 'bold', fontSize: '0.9rem' }}>Learn More &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center' as const, color: '#6b7280' }}>
        &copy; 2026 Latino Real Estate Directory - Georgia
      </footer>
    </main>
  );
}

import Link from 'next/link';

const cities = [
  { name: 'Alpharetta', slug: 'alpharetta' },
  { name: 'Marietta', slug: 'marietta' },
  { name: 'Roswell', slug: 'roswell' },
  { name: 'Duluth', slug: 'duluth' },
  { name: 'Gainesville', slug: 'gainesville' },
  { name: 'Norcross', slug: 'norcross' },
];

export default function Home() {
  return (
    <div>
      <div style={{
        backgroundColor: '#2563eb',
        color: 'white',
        textAlign: 'center',
        padding: '80px 20px',
        fontFamily: 'sans-serif',
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Georgia Latino Real Estate Directory
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
          Connecting the Latino community with ITIN mortgage experts, owner financing, and bilingual legal support across Georgia.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link href="/#cities">
            <button style={{
              backgroundColor: 'white',
              color: '#2563eb',
              padding: '16px 32px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
            }}>Find a Home</button>
          </Link>
          <Link href="/legal-support">
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1rem',
              border: '2px solid white',
              cursor: 'pointer',
            }}>Legal Support</button>
          </Link>
        </div>
      </div>

      <div id="cities" style={{ padding: '60px 20px', fontFamily: 'sans-serif' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>
          Explore Georgia Real Estate by City
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {cities.map((city) => (
            <Link key={city.slug} href={`/${city.slug}/itin-loans`} style={{ textDecoration: 'none' }}>
              <div style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '32px',
                textAlign: 'center',
                cursor: 'pointer',
              }}>
                <h3 style={{ color: '#2563eb', fontSize: '1.4rem', marginBottom: '8px' }}>
                  {city.name}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', letterSpacing: '0.1em', margin: 0 }}>
                  VIEW LOCAL DEALS
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

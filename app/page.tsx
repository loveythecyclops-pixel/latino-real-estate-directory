import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

// 1. Convert to an 'async' function so we can fetch data
export default async function Home({ searchParams }: { searchParams: any }) {
  // 2. Get language from URL (default to Spanish 'es')
  const params = await searchParams;
  const language = params.lang === 'en' ? 'en' : 'es';
  const isEnglish = language === 'en';

  // 3. Fetch your REAL listings from the database
  const listings = await prisma.listing.findMany({
    orderBy: { createdAt: 'desc' }
  });

  // --- Styles from your code ---
  const containerStyle = { minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif', color: '#1a202c' };
  const heroStyle = { backgroundColor: '#1e3a8a', color: '#ffffff', padding: '60px 24px', textAlign: 'center' as const, position: 'relative' as const };
  const buttonStyle = { backgroundColor: '#ffffff', color: '#1e3a8a', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', margin: '8px', display: 'inline-block' };
  const cardStyle = { display: 'block', backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' as const, borderTop: '4px solid #1e3a8a', textDecoration: 'none', color: 'inherit' };

  return (
    <main style={containerStyle}>
      <div style={heroStyle}>
        {/* Language Toggle using Links instead of useState */}
        <Link
          href={isEnglish ? '/?lang=es' : '/?lang=en'}
          style={{
            position: 'absolute', top: '20px', right: '20px', color: '#fff', border: '1px solid #fff',
            padding: '8px 16px', borderRadius: '20px', fontSize: '0.875rem', textDecoration: 'none'
          }}
        >
          {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
        </Link>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          {isEnglish ? 'Latino Real Estate Directory' : 'Directorio Latino de Bienes Raíces'}
        </h1>

        <p style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
          {isEnglish ? 'Connecting Georgia with bilingual experts.' : 'Conectando Georgia con expertos bilingües.'}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="#listings" style={buttonStyle}>
            {isEnglish ? 'Explore Homes' : 'Explorar Casas'}
          </Link>
          <Link href="/recursos/calculadora" style={{ ...buttonStyle, backgroundColor: '#16a34a', color: '#fff' }}>
            {isEnglish ? 'Bilingual Calculator' : 'Calculadora Bilingüe'}
          </Link>
        </div>
      </div>

      {/* NEW SECTION: Your Actual Database Listings */}
      <section id="listings" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>
            {isEnglish ? 'Featured Listings' : 'Propiedades Destacadas'}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {listings.map((house) => (
            <div key={house.id} style={cardStyle}>
              {/* Image */}
              <img 
                src={house.images || 'https://via.placeholder.com/400x250'} 
                style={{ width: '100%', height: '200px', objectCover: 'cover', borderRadius: '8px', marginBottom: '16px' }}
              />
              <h3 style={{ color: '#1e3a8a', margin: '10px 0' }}>
                {isEnglish ? house.title_en : house.title_es}
              </h3>
              <p style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '1.2rem' }}>
                ${house.price.toLocaleString()}
              </p>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                {isEnglish ? house.description_en : house.description_es}
              </p>
              {house.itinFriendly && (
                 <div style={{ marginTop: '10px', color: '#059669', fontWeight: 'bold', fontSize: '0.8rem' }}>
                    ✅ ITIN {isEnglish ? 'Accepted' : 'Aceptado'}
                 </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Your original services section remains below... */}
      <footer style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        © 2026 Latino Real Estate Directory - Georgia
      </footer>
    </main>
  );
}

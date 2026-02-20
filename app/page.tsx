import { prisma } from '../lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home({ 
  searchParams 
}: { 
  searchParams: Promise<{ lang?: string; query?: string }> 
}) {
  // 1. Resolve search parameters
  const resolvedParams = await searchParams;
  const language = resolvedParams.lang === 'en' ? 'en' : 'es';
  const isEnglish = language === 'en';
  const query = resolvedParams.query || '';

  // 2. Fetch listings with Filtering
  const listings = await prisma.listing.findMany({
    where: {
      OR: [
        { title_en: { contains: query, mode: 'insensitive' } },
        { title_es: { contains: query, mode: 'insensitive' } },
        { description_en: { contains: query, mode: 'insensitive' } },
        { description_es: { contains: query, mode: 'insensitive' } },
        { county: { contains: query, mode: 'insensitive' } },
      ],
    },
    orderBy: { createdAt: 'desc' }
  });

  // --- Styles ---
  const containerStyle = { minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif', color: '#1a202c' };
  const heroStyle = { backgroundColor: '#1e3a8a', color: '#ffffff', padding: '60px 24px', textAlign: 'center' as const, position: 'relative' as const };
  const buttonStyle = { backgroundColor: '#ffffff', color: '#1e3a8a', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', margin: '8px', display: 'inline-block' };
  const cardStyle = { display: 'block', backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' as const, borderTop: '4px solid #1e3a8a', textDecoration: 'none', color: 'inherit' };
  const inputStyle = { padding: '12px', width: '100%', maxWidth: '500px', borderRadius: '8px', border: 'none', marginTop: '20px', fontSize: '1rem' };

  return (
    <main style={containerStyle}>
      <div style={heroStyle}>
        <Link
          href={isEnglish ? `/?lang=es${query ? `&query=${query}` : ''}` : `/?lang=en${query ? `&query=${query}` : ''}`}
          style={{ position: 'absolute', top: '20px', right: '20px', color: '#fff', border: '1px solid #fff', padding: '8px 16px', borderRadius: '20px', fontSize: '0.875rem', textDecoration: 'none' }}
        >
          {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
        </Link>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          {isEnglish ? 'Latino Real Estate Directory' : 'Directorio Latino de Bienes Raíces'}
        </h1>

        {/* --- SEARCH BAR --- */}
        <form action="/" method="GET" style={{ marginBottom: '20px' }}>
          <input type="hidden" name="lang" value={language} />
          <input 
            name="query" 
            type="text" 
            placeholder={isEnglish ? "Search by city, county, or title..." : "Buscar por ciudad, condado o título..."}
            defaultValue={query}
            style={inputStyle}
          />
          <button type="submit" style={{ ...buttonStyle, marginLeft: '10px', cursor: 'pointer' }}>
            {isEnglish ? 'Search' : 'Buscar'}
          </button>
        </form>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="#listings" style={buttonStyle}>
            {isEnglish ? 'Explore Homes' : 'Explorar Casas'}
          </Link>
        </div>
      </div>

      <section id="listings" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>
          {query ? 
            (isEnglish ? `Results for "${query}"` : `Resultados para "${query}"`) : 
            (isEnglish ? 'Featured Listings' : 'Propiedades Destacadas')}
        </h2>

        {listings.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#6b7280' }}>
            {isEnglish ? 'No houses found matching your search.' : 'No se encontraron casas que coincidan con su búsqueda.'}
          </p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {listings.map((house) => (
              <div key={house.id} style={cardStyle}>
                <img 
                  src={house.images || 'https://via.placeholder.com/400x250'} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }}
                />
                <h3 style={{ color: '#1e3a8a', margin: '10px 0' }}>{isEnglish ? house.title_en : house.title_es}</h3>
                <p style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '1.2rem' }}>${house.price.toLocaleString()}</p>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>{isEnglish ? house.description_en : house.description_es}</p>
                {house.itinFriendly && (
                  <div style={{ marginTop: '10px', color: '#059669', fontWeight: 'bold', fontSize: '0.8rem' }}>
                    ✅ ITIN {isEnglish ? 'Accepted' : 'Aceptado'}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        © 2026 Latino Real Estate Directory - Georgia
      </footer>
    </main>
  );
}

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
    { title_en: { contains: query } },
    { title_es: { contains: query } },
    { description_en: { contains: query } },
    { description_es: { contains: query } },
  ],
},
    orderBy: { createdAt: 'desc' }
  });
  // --- Styles ---
  const containerStyle = { minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif', color: '#1a202c' };
  const heroStyle = { backgroundColor: '#1e3a8a', color: '#ffffff', padding: '60px 24px 40px', textAlign: 'center' as const, position: 'relative' as const };
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
          {isEnglish ? '&#127474;&#127485; Ver en Español' : '&#127482;&#127480; View in English'}
        </Link>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          {isEnglish ? 'Latino Real Estate Directory' : 'Directorio Latino de Bienes Raíces'}
        </h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
          {isEnglish ? 'Connecting Georgia with bilingual experts.' : 'Conectando Georgia con expertos bilingües.'}
        </p>
             {/* --- CLASSIC SEARCH BAR --- */}
        <form action="/" method="GET" style={{ marginTop: '24px', marginBottom: '20px' }}>
          <input type="hidden" name="lang" value={language} />
          <input 
            name="query" 
            type="text" 
            placeholder={isEnglish ? "Or search by city, county, or title..." : "O buscar por ciudad, condado o título..."}
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
          <Link href={isEnglish ? '/en/rentals' : '/rentals'} style={{ ...buttonStyle, backgroundColor: '#f59e0b', color: '#fff' }}>
            {isEnglish ? 'Rent a Home' : 'Rentar una Casa'}
          </Link>
          <Link href={isEnglish ? '/en/recursos/calculadora' : '/recursos/calculadora'} style={{ ...buttonStyle, backgroundColor: '#16a34a', color: '#fff' }}>
            {isEnglish ? 'Bilingual Calculator' : 'Calculadora Bilingüe'}
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
                src={'https://via.placeholder.com/400x250'}
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
      <section style={{ backgroundColor: '#f9fafb', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {[
            { href: isEnglish ? '/en/bilingual-agents' : '/bilingual-agents', title: isEnglish ? 'Bilingual Agents' : 'Agentes Bilingües', desc: isEnglish ? 'Experts who speak your language.' : 'Expertos que hablan tu idioma.' },
            { href: isEnglish ? '/en/itin-mortgages' : '/itin-mortgages', title: isEnglish ? 'ITIN Mortgages' : 'Hipotecas con ITIN', desc: isEnglish ? 'Financing options using ITIN.' : 'Opciones de financiamiento usando ITIN.' },
            { href: isEnglish ? '/en/services/regular-loans' : '/services/regular-loans', title: isEnglish ? 'Regular Loans' : 'Préstamos Regulares', desc: isEnglish ? 'Conventional, FHA and VA options.' : 'Opciones de préstamos convencionales, FHA y VA.' },
            { href: isEnglish ? '/en/services/lenders' : '/services/lenders', title: isEnglish ? 'Lenders in Georgia' : 'Prestamistas en Georgia', desc: isEnglish ? 'Top local lenders for every budget.' : 'Principales prestamistas locales para cada presupuesto.' },
            { href: isEnglish ? '/en/services/inspections' : '/services/inspections', title: isEnglish ? 'Inspections' : 'Inspecciones', desc: isEnglish ? 'Trusted companies to verify your home.' : 'Empresas confiables para verificar su hogar.' },
            { href: isEnglish ? '/en/legal-support' : '/legal-support', title: isEnglish ? 'Legal Support' : 'Asesoría Legal', desc: isEnglish ? 'Real estate specialized legal advice.' : 'Asesoría legal especializada en bienes raíces.' },
            { href: isEnglish ? '/en/owner-financing' : '/owner-financing', title: isEnglish ? 'Owner Financing' : 'Financiamiento Directo', desc: isEnglish ? 'Properties with direct seller financing.' : 'Propiedades con financiamiento directo del vendedor.' },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={cardStyle}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '12px' }}>{item.desc}</p>
              <span style={{ color: '#1e3a8a', fontWeight: 'bold', fontSize: '0.9rem' }}>{isEnglish ? 'Learn More →' : 'Saber Más →'}</span>
            </Link>
          ))}
        </div>
      </section>
      <footer style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        © 2026 Latino Real Estate Directory - Georgia
      </footer>
    </main>
  );
}

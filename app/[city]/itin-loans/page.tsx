import Link from 'next/link';

const cityData: Record<string, { name: string; description: string }> = {
  alpharetta: {
    name: 'Alpharetta',
    description: 'Find ITIN mortgage experts and owner financing options in Alpharetta, GA.',
  },
  marietta: {
    name: 'Marietta',
    description: 'Connect with bilingual real estate professionals in Marietta, GA.',
  },
  roswell: {
    name: 'Roswell',
    description: 'Explore ITIN loan options and local deals in Roswell, GA.',
  },
  duluth: {
    name: 'Duluth',
    description: 'Find owner financing and ITIN mortgages in Duluth, GA.',
  },
  gainesville: {
    name: 'Gainesville',
    description: 'Bilingual real estate support and ITIN loans in Gainesville, GA.',
  },
  norcross: {
    name: 'Norcross',
    description: 'ITIN mortgage specialists and local deals in Norcross, GA.',
  },
};

export default function ItinLoansPage({ params }: { params: { city: string } }) {
  const city = cityData[params.city] ?? { name: params.city, description: 'ITIN loan options in your area.' };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
      <Link href="/" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.95rem' }}>
        &larr; Back to Home
      </Link>
      <h1 style={{ fontSize: '2.5rem', color: '#2563eb', marginTop: '24px', marginBottom: '8px' }}>
        {city.name} — ITIN Loans & Local Deals
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#374151', marginBottom: '40px' }}>
        {city.description}
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
      }}>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '28px' }}>
          <h2 style={{ color: '#2563eb', fontSize: '1.2rem', marginBottom: '8px' }}>ITIN Mortgages</h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>No Social Security number required. Buy a home with your ITIN.</p>
        </div>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '28px' }}>
          <h2 style={{ color: '#2563eb', fontSize: '1.2rem', marginBottom: '8px' }}>Owner Financing</h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Flexible payment plans directly with sellers — no bank required.</p>
        </div>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '28px' }}>
          <h2 style={{ color: '#2563eb', fontSize: '1.2rem', marginBottom: '8px' }}>Bilingual Support</h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Spanish-speaking agents and legal support available.</p>
        </div>
      </div>
      <div style={{ marginTop: '48px', textAlign: 'center' }}>
        <Link href="/legal-support">
          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1rem',
            border: 'none',
            cursor: 'pointer',
          }}>Get Legal Support</button>
        </Link>
      </div>
    </div>
  );
}

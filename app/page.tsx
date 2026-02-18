'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RentalDashboard() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const isEnglish = language === 'en';

  const regions = [
    { id: 'metro-atlanta', name: 'Metro Atlanta', rent: '$1,895' },
    { id: 'coastal', name: 'Coastal Georgia', rent: '$1,741' },
    { id: 'northeast-mountains', name: 'Northeast Mountains', rent: '$1,827' }
  ];

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <Link href="/">← {isEnglish ? 'Back' : 'Volver'}</Link>
      <h1 style={{ color: '#1e3a8a', marginTop: '20px' }}>{isEnglish ? 'Rental Market' : 'Mercado de Rentas'}</h1>
      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        {regions.map((r) => (
          <Link key={r.id} href={`/rentals/${r.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
              <h3>{r.name}</h3>
              <p>Avg: {r.rent}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RentalPage() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const isEnglish = language === 'en';
  const [city, setCity] = useState<string | null>(null);

  const rentalFacts: any = {
    gwinnett: {
      name: 'Gwinnett County',
      rent: '$1,950',
      latinos: '23%',
      pros: { en: 'Family-sized homes.', es: 'Casas para familias.' },
      tips: { en: 'Look in Norcross.', es: 'Busque en Norcross.' }
    },
    hall: {
      name: 'Gainesville / Hall',
      rent: '$1,316',
      latinos: '29%',
      pros: { en: 'High inventory.', es: 'Gran inventario.' },
      tips: { en: 'Apply early.', es: 'Aplique pronto.' }
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
      
      {/* Floating Language Button */}
      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999,
          padding: '10px 20px',
          borderRadius: '20px',
          backgroundColor: '#1e3a8a',
          color: 'white',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
      </button>

      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none' }}>
            {isEnglish ? '← Back' : '← Volver'}
          </Link>
          <h1 style={{ fontSize: '2rem' }}>
            {isEnglish ? 'Georgia Rental Directory' : 'Directorio de Rentas Georgia'}
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
         <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button onClick={() => setCity('gwinnett')} style={{ padding: '10px', cursor: 'pointer' }}>Gwinnett</button>
            <button onClick={() => setCity('hall')} style={{ padding: '10px', cursor: 'pointer' }}>Hall</button>
         </div>

         {city && (
           <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid #ddd' }}>
              <h2>{rentalFacts[city].name}</h2>
              <p><strong>{isEnglish ? 'Rent:' : 'Renta:'}</strong> {rentalFacts[city].rent}</p>
              <p>{isEnglish ? rentalFacts[city].pros.en : rentalFacts[city].pros.es}</p>
           </div>
         )}
      </div>
    </div>
  );
}

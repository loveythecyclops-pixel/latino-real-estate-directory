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
      latinos: '23-25%',
      emoji: '🏘️',
      pros: { en: 'Family-sized homes; high bilingual support in Norcross/Lilburn.', es: 'Casas para familias; gran apoyo bilingüe en Norcross/Lilburn.' },
      tips: { en: 'Look for MAA Prescott or Terra at Norcross.', es: 'Busque en MAA Prescott o Terra at Norcross.' }
    },
    cobb: {
      name: 'Cobb County',
      rent: '$1,850',
      latinos: '13-15%',
      emoji: '🏡',
      pros: { en: 'Growing communities in Smyrna and Marietta.', es: 'Comunidades en crecimiento en Smyrna y Marietta.' },
      tips: { en: 'Check listings near the Battery for newer apartments.', es: 'Vea listados cerca de The Battery para apartamentos nuevos.' }
    },
    dekalb: {
      name: 'DeKalb County',
      rent: '$1,700',
      latinos: 'Up to 56% (Doraville)',
      emoji: '🏙',
      pros: { en: 'Home to the famous Buford Highway corridor.', es: 'Hogar del famoso corredor de Buford Highway.' },
      tips: { en: 'Best authentic Latino food and markets in Georgia.', es: 'La mejor comida y mercados latinos auténticos en Georgia.' }
    },
    hall: {
      name: 'Hall County',
      rent: '$1,316',
      latinos: '28-33%',
      emoji: '🕋',
      pros: { en: 'High inventory for workforce families in Gainesville.', es: 'Gran inventario para familias trabajadoras en Gainesville.' },
      tips: { en: 'Over 50% of residents are renters—apply early.', es: 'Más del 50% son inquilinos—aplique pronto.' }
    },
    whitfield: {
      name: 'Whitfield County',
      rent: '$1,300',
      latinos: '35-39%',
      emoji: '🏭',
      pros: { en: 'Most affordable; highest Latino concentration in GA.', es: 'Lo más asequible; la mayor concentración latina en GA.' },
      tips: { en: 'Great time to lock in a long-term lease here.', es: 'Buen momento para asegurar un contrato a largo plazo.' }
    },
    clayton: {
      name: 'Clayton County',
      rent: '$1,550',
      latinos: '~15%',
      emoji: '🌱',
      pros: { en: 'Rapidly growing community in Forest Park.', es: 'Comunidad de rápido crecimiento en Forest Park.' },
      tips: { en: 'Close proximity to the airport for logistics workers.', es: 'Cerca del aeropuerto para trabajadores de logística.' }
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
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

      {/* Hero Header */}
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none', fontWeight: 'bold' }}>
            {isEnglish ? '← Back to Home' : '← Volver al Inicio'}
          </Link>
          <h1 style={{ fontSize: '2.5rem', marginTop: '20px' }}>
            {isEnglish ? 'Georgia Rental Directory 2026' : 'Directorio de Rentas Georgia 2026'}
          </h1>
          <p style={{ color: '#bfdbfe' }}>
            {isEnglish ? 'Select a county to see market trends and renter tips.' : 'Seleccione un condado para ver tendencias y consejos.'}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* County Selection Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
          {Object.keys(rentalFacts).map((key) => (
            <button 
              key={key} 
              onClick={() => setCity(key)}
              style={{ 
                padding: '12px 20px', 
                borderRadius: '30px', 
                border: '2px solid #1e3a8a', 
                backgroundColor: city === key ? '#1e3a8a' : '#fff', 
                color: city === key ? '#fff' : '#1e3a8a', 
                cursor: 'pointer', 
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
            >
              {rentalFacts[key].name}
            </button>
          ))}
        </div>

        {/* Dynamic Display Area */}
        {city ? (
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{rentalFacts[city].emoji}</div>
            <h2 style={{ color: '#1e3a8a', fontSize: '2rem', marginTop: 0 }}>{rentalFacts[city].name}</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '20px' }}>
              <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px' }}>
                <p style={{ margin: '0 0 10px', color: '#64748b', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  {isEnglish ? 'Market Stats' : 'Estadísticas'}
                </p>
                <p style={{ fontSize: '1.2rem' }}><strong>{isEnglish ? 'Avg Rent:' : 'Renta Promedio:'}</strong> {rentalFacts[city].rent}</p>
                <p style={{ fontSize: '1.2rem' }}><strong>{isEnglish ? 'Latino Pop:' : 'Pob. Latina:'}</strong> {rentalFacts[city].latinos}</p>
              </div>
              
              <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px' }}>
                <p style={{ margin: '0 0 10px', color: '#64748b', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  {isEnglish ? 'Why move here?' : '¿Por qué mudarse aquí?'}
                </p>
                <p><strong>{isEnglish ? 'Pros:' : 'Ventajas:'}</strong> {isEnglish ? rentalFacts[city].pros.en : rentalFacts[city].pros.es}</p>
                <p><strong>{isEnglish ? 'Local Tip:' : 'Consejo:'}</strong> {isEnglish ? rentalFacts[city].tips.en : rentalFacts[city].tips.es}</p>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px', border: '2px dashed #cbd5e1', borderRadius: '16px', color: '#64748b' }}>
            {isEnglish ? 'Click a county button above to view details' : 'Haga clic en un botón de condado arriba para ver detalles'}
          </div>
        )}
      </div>
    </div>
  );
}

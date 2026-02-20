'use client';
import { useState } from 'react';
import Link from 'next/link';

const benefits = [
  {
    icon: '🏠',
    title: { en: 'No Bank Needed', es: 'Sin Necesidad de Banco' },
    desc: { en: 'Skip the traditional mortgage approval process entirely. The seller acts as the lender.', es: 'Evite por completo el proceso tradicional de aprobación hipotecaria. El vendedor actúa como prestamista.' },
  },
  {
    icon: '🇺🇸',
    title: { en: 'ITIN Accepted', es: 'ITIN Aceptado' },
    desc: { en: 'No Social Security Number required. Ideal for ITIN holders who cannot yet qualify for a bank loan.', es: 'No se requiere Número de Seguro Social. Ideal para titulares de ITIN que aún no califican para un préstamo bancario.' },
  },
  {
    icon: '🤝',
    title: { en: 'Flexible Terms', es: 'Términos Flexibles' },
    desc: { en: 'Negotiate the down payment, interest rate, and repayment schedule directly with the seller.', es: 'Negocie el enganche, la tasa de interés y el plan de pagos directamente con el vendedor.' },
  },
  {
    icon: '📈',
    title: { en: 'Build Credit', es: 'Construya Crédito' },
    desc: { en: 'Make consistent payments and build your credit profile to eventually refinance into a traditional mortgage.', es: 'Realice pagos consistentes y construya su historial crediticio para eventualmente refinanciar con una hipoteca tradicional.' },
  },
];

const listings = [
  {
    title: { en: 'Owner Financed Home - Gwinnett County', es: 'Casa con Financiamiento Directo - Condado Gwinnett' },
    price: 185000,
    down: 15000,
    monthly: 1200,
    bedrooms: 3,
    bathrooms: 2,
    location: 'Lawrenceville, GA',
    itinOk: true,
    description: { en: 'Spacious 3/2 home with large yard. Owner willing to finance with ITIN.', es: 'Espaciosa casa 3/2 con jardín grande. El dueño acepta financiar con ITIN.' },
  },
  {
    title: { en: 'Owner Financed - Cobb County', es: 'Financiamiento Directo - Condado Cobb' },
    price: 210000,
    down: 20000,
    monthly: 1400,
    bedrooms: 4,
    bathrooms: 2,
    location: 'Marietta, GA',
    itinOk: true,
    description: { en: 'Beautiful 4/2 in a quiet neighborhood. No bank required. ITIN welcome.', es: 'Hermosa casa 4/2 en vecindario tranquilo. Sin banco requerido. ITIN bienvenido.' },
  },
];

export default function OwnerFinancingPage() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '40px 24px', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.875rem' }}>
          &larr; {lang === 'en' ? 'Back to Home' : 'Volver al Inicio'}
        </Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '16px', marginBottom: '8px' }}>
          {lang === 'en' ? 'Owner Financing' : 'Financiamiento Directo del Dueño'}
        </h1>
        <p style={{ opacity: 0.9 }}>
          {lang === 'en'
            ? 'Buy a home directly from the seller - no bank required'
            : 'Compre una casa directamente del vendedor - sin banco requerido'}
        </p>
        <div style={{ marginTop: '16px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button
            onClick={() => setLang('en')}
            style={{ padding: '8px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', backgroundColor: lang === 'en' ? '#fff' : 'transparent', color: lang === 'en' ? '#1e3a8a' : '#fff', fontWeight: 'bold' }}
          >
            English
          </button>
          <button
            onClick={() => setLang('es')}
            style={{ padding: '8px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', backgroundColor: lang === 'es' ? '#fff' : 'transparent', color: lang === 'es' ? '#1e3a8a' : '#fff', fontWeight: 'bold' }}
          >
            Español
          </button>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', marginBottom: '24px' }}>
          {lang === 'en' ? 'Benefits of Owner Financing' : 'Beneficios del Financiamiento Directo'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{b.icon}</div>
              <h3 style={{ color: '#1e3a8a', marginBottom: '8px' }}>{lang === 'en' ? b.title.en : b.title.es}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.5 }}>{lang === 'en' ? b.desc.en : b.desc.es}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Listings */}
      <div style={{ maxWidth: '1100px', margin: '32px auto', padding: '0 20px' }}>
        <h2 style={{ color: '#1e3a8a', marginBottom: '24px' }}>
          {lang === 'en' ? 'Available Owner-Financed Homes' : 'Casas Disponibles con Financiamiento Directo'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {listings.map((listing, i) => (
            <div key={i} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', borderTop: '4px solid #16a34a' }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '8px' }}>{lang === 'en' ? listing.title.en : listing.title.es}</h3>
              <p style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '1.2rem' }}>${listing.price.toLocaleString()}</p>
              <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '8px' }}>
                {listing.bedrooms} bd | {listing.bathrooms} ba | {listing.location}
              </p>
              <p style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '12px' }}>
                {lang === 'en' ? listing.description.en : listing.description.es}
              </p>
              <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                <span>💵 {lang === 'en' ? 'Down:' : 'Enganche:'} ${listing.down.toLocaleString()}</span>
                <span style={{ marginLeft: '12px' }}>💰 ${listing.monthly}/mo</span>
              </div>
              {listing.itinOk && (
                <div style={{ marginTop: '10px', color: '#059669', fontWeight: 'bold', fontSize: '0.8rem' }}>
                  ✅ ITIN {lang === 'en' ? 'Accepted' : 'Aceptado'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

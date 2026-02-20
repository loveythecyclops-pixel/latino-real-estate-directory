'use client';
import { useState } from 'react';
import Link from 'next/link';

const lenders = [
  {
    name: 'NAHREP Atlanta',
    type: { en: 'Trade Association & Member Directory', es: 'Asociación Comercial y Directorio de Miembros' },
    description: {
      en: 'The leading trade association for Hispanic real estate and mortgage professionals in Atlanta.',
      es: 'La asociación comercial líder para profesionales hispanos de bienes raíces e hipotecas en Atlanta.',
    },
    services: {
      en: ['ITIN mortgage referrals', 'Bilingual originators', 'Community education'],
      es: ['Referencias de hipotecas ITIN', 'Originadores bilingües', 'Educación comunitaria'],
    },
    website: 'https://nahrep.org',
    badge: 'Top Resource',
    badgeColor: '#2563eb',
  },
  {
    name: 'NQM Funding',
    type: { en: 'Wholesale ITIN Mortgage Lender', es: 'Prestamista Hipotecario ITIN al por Mayor' },
    description: {
      en: 'A wholesale lender active in Georgia that partners with local brokers for ITIN solutions.',
      es: 'Un prestamista al por mayor activo en Georgia que se asocia con corredores locales para soluciones ITIN.',
    },
    services: {
      en: ['ITIN purchase loans', 'ITIN refinance', 'Non-QM products'],
      es: ['Préstamos ITIN para compra', 'Refinanciamiento ITIN', 'Productos No-QM'],
    },
    website: 'https://nqmfunding.com',
    badge: 'ITIN Specialist',
    badgeColor: '#059669',
  },
  {
    name: 'Acra Lending',
    type: { en: 'Non-QM & ITIN Lender', es: 'Prestamista No-QM e ITIN' },
    description: {
      en: 'Specializes in non-traditional mortgage products including ITIN loans for Georgia homebuyers.',
      es: 'Se especializa en productos hipotecarios no tradicionales incluyendo préstamos ITIN para compradores en Georgia.',
    },
    services: {
      en: ['ITIN home loans', 'Foreign national loans', 'Bank statement loans'],
      es: ['Préstamos ITIN para vivienda', 'Préstamos para extranjeros', 'Préstamos con estados de cuenta'],
    },
    website: 'https://acralending.com',
    badge: 'Non-QM Expert',
    badgeColor: '#7c3aed',
  },
];

export default function ItinMortgagesPage() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '40px 24px', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.875rem' }}>
          &larr; {lang === 'en' ? 'Back to Home' : 'Volver al Inicio'}
        </Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '16px', marginBottom: '8px' }}>
          {lang === 'en' ? 'ITIN Mortgage Lenders' : 'Prestamistas Hipotecarios ITIN'}
        </h1>
        <p style={{ opacity: 0.9 }}>
          {lang === 'en'
            ? 'Find lenders who offer mortgages for borrowers without Social Security Numbers'
            : 'Encuentre prestamistas que ofrecen hipotecas para prestatarios sin Número de Seguro Social'}
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

      {/* Info Box */}
      <div style={{ maxWidth: '900px', margin: '32px auto 0', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '20px' }}>
          <h2 style={{ color: '#1e3a8a', marginBottom: '8px' }}>
            {lang === 'en' ? 'What is an ITIN Mortgage?' : '¿Qué es una Hipoteca ITIN?'}
          </h2>
          <p style={{ color: '#374151', lineHeight: 1.6 }}>
            {lang === 'en'
              ? 'An ITIN (Individual Taxpayer Identification Number) mortgage allows immigrants and non-citizens to purchase a home in the U.S. without a Social Security Number. These loans require an ITIN, 2 years of tax returns, and a valid government ID.'
              : 'Una hipoteca ITIN (Número de Identificación Personal del Contribuyente) permite a inmigrantes y no ciudadanos comprar una casa en los EE.UU. sin Número de Seguro Social. Estos préstamos requieren un ITIN, 2 años de declaraciones de impuestos y una identificación gubernamental válida.'}
          </p>
        </div>
      </div>

      {/* Lender Cards */}
      <div style={{ maxWidth: '900px', margin: '32px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gap: '24px' }}>
          {lenders.map((lender, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', borderTop: `4px solid ${lender.badgeColor}` }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <h2 style={{ color: '#1e3a8a', fontSize: '1.3rem' }}>{lender.name}</h2>
                <span style={{ backgroundColor: lender.badgeColor + '20', color: lender.badgeColor, padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  {lender.badge}
                </span>
              </div>
              <p style={{ color: '#059669', fontWeight: '600', marginBottom: '8px' }}>
                {lang === 'en' ? lender.type.en : lender.type.es}
              </p>
              <p style={{ color: '#374151', lineHeight: 1.6, marginBottom: '12px' }}>
                {lang === 'en' ? lender.description.en : lender.description.es}
              </p>
              <div style={{ marginBottom: '16px' }}>
                <strong style={{ color: '#6b7280', fontSize: '0.85rem' }}>
                  {lang === 'en' ? 'Services:' : 'Servicios:'}
                </strong>
                <ul style={{ marginTop: '6px', paddingLeft: '20px' }}>
                  {(lang === 'en' ? lender.services.en : lender.services.es).map((s, i) => (
                    <li key={i} style={{ color: '#374151', fontSize: '0.9rem' }}>{s}</li>
                  ))}
                </ul>
              </div>
              {lender.website && (
                <a href={lender.website} target="_blank" rel="noopener noreferrer"
                  style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: '600' }}>
                  🌐 {lang === 'en' ? 'Visit Website' : 'Visitar Sitio Web'}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

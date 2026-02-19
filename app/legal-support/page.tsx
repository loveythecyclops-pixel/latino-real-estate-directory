'use client';

import { useState } from 'react';
import Link from 'next/link';

const attorneys = [
  {
    name: 'Josefina C. Knapp',
    firm: "O'Kelley & Sorohan, Attorneys at Law",
    location: 'Metro Atlanta, GA',
    languages: 'English & Spanish',
    specialty: { en: 'Real Estate Closings', es: 'Cierres de Bienes Raíces' },
    description: {
      en: 'Native Spanish speaker and real estate closing attorney with over 20 years of experience. Active member of NAHREP.',
      es: 'Hablante nativa de español y abogada de cierres con más de 20 años de experiencia. Miembro activo de NAHREP.'
    },
    website: 'https://www.okelleyandsorohan.com/attorney/josefina-c-knapp/',
  },
  {
    name: 'Miguel Barboza',
    firm: 'Weissman PC',
    location: 'Buford, GA',
    languages: 'English & Spanish',
    specialty: { en: 'Residential Real Estate Closings', es: 'Cierres Residenciales' },
    description: {
      en: 'Bilingual real estate closing attorney specializing in residential closings and refinances.',
      es: 'Abogado bilingüe especializado en cierres residenciales y refinanciamientos.'
    },
    website: 'https://www.weissman.law/attorneys/miguel-barboza/',
  },
  {
    name: 'Pilar Gigante',
    firm: 'Lueder, Larkin & Hunter',
    location: 'Metro Atlanta, GA',
    languages: 'English & Spanish',
    specialty: { en: 'Real Estate Closings', es: 'Cierres de Bienes Raíces' },
    description: {
      en: 'Born in Santo Domingo, DR, Pilar is bilingual in English and Spanish. Member of GRECAA.',
      es: 'Nacida en Santo Domingo, RD, Pilar es bilingüe en inglés y español. Miembro de GRECAA.'
    },
    website: 'https://www.luederlaw.com/attorneys/pilar-gigante/',
  },
  {
    name: 'Nogales & Associates',
    firm: 'Nogales Law, LLC',
    location: 'Lawrenceville, GA',
    languages: 'English & Spanish',
    specialty: { en: 'Real Estate & Immigration', es: 'Bienes Raíces e Inmigración' },
    description: {
      en: 'Leading bilingual law firm in Gwinnett County. Real estate title, closings, and disputes.',
      es: 'Firma legal bilingüe líder en el condado de Gwinnett. Títulos, cierres y disputas.'
    },
    website: 'https://nogalesfirm.com',
  }
];

export default function LegalSupportPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';

  const whyItems = [
    { en: 'ITIN-Based Purchases', es: 'Compras con ITIN' },
    { en: 'Owner Financing Contracts', es: 'Contratos de Dueño a Dueño' },
    { en: 'Title Review & Closing', es: 'Revisión de Título y Cierre' },
    { en: 'Deed Preparation', es: 'Preparación de Escrituras' },
    { en: 'Real Estate Disputes', es: 'Disputas de Bienes Raíces' },
    { en: 'Immigration Support', es: 'Soporte de Inmigración' },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* Floating Toggle Button */}
      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{
          position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
          padding: '10px 20px', borderRadius: '30px', backgroundColor: '#2563eb',
          color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
      </button>

      {/* Hero */}
      <div style={{ backgroundColor: '#2563eb', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '16px', fontWeight: '800' }}>
          {isEnglish ? 'Bilingual Legal Support' : 'Apoyo Legal Bilingüe'}
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto 24px', opacity: 0.9 }}>
          {isEnglish 
            ? 'Connecting the Georgia Latino community with experienced, Spanish-speaking attorneys.'
            : 'Conectando a la comunidad latina de Georgia con abogados experimentados que hablan español.'}
        </p>
      </div>

      {/* Why You Need a Bilingual Attorney */}
      <div style={{ backgroundColor: '#f0f4ff', padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.7rem', color: '#1e40af', marginBottom: '16px' }}>
          {isEnglish ? 'Why a Bilingual Attorney Matters' : 'Por qué importa un Abogado Bilingüe'}
        </h2>
        <p style={{ maxWidth: '750px', margin: '0 auto 32px', color: '#374151', lineHeight: '1.7' }}>
          {isEnglish 
            ? 'In Georgia, an attorney must be present at closing. A bilingual attorney ensures you understand every document—from the deed to the loan terms. No surprises.'
            : 'En Georgia, un abogado debe estar presente en el cierre. Un abogado bilingüe garantiza que comprenda cada documento, desde la escritura hasta los términos del préstamo.'}
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', maxWidth: '1000px', margin: '0 auto' }}>
          {whyItems.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', padding: '16px', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', color: '#1e3a8a', fontWeight: '600' }}>
              ✅ {isEnglish ? item.en : item.es}
            </div>
          ))}
        </div>
      </div>

      {/* Attorney Directory */}
      <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#1e40af', marginBottom: '40px' }}>
          {isEnglish ? 'Georgia Bilingual Attorneys' : 'Directorio de Abogados Bilingües'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {attorneys.map((attorney) => (
            <div key={attorney.name} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h3 style={{ color: '#2563eb', fontSize: '1.2rem', marginBottom: '4px' }}>{attorney.name}</h3>
              <p style={{ fontWeight: '600', color: '#374151', marginBottom: '4px', fontSize: '0.95rem' }}>{attorney.firm}</p>
              <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '10px' }}>📍 {attorney.location}</p>
              <span style={{ display: 'inline-block', backgroundColor: '#dbeafe', color: '#1e40af', borderRadius: '20px', padding: '3px 12px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '10px' }}>
                {isEnglish ? attorney.specialty.en : attorney.specialty.es}
              </span>
              <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                {isEnglish ? attorney.description.en : attorney.description.es}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: '600' }}>🗣️ {attorney.languages}</span>
                <a href={attorney.website} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#2563eb', color: 'white', padding: '8px 18px', borderRadius: '6px', fontSize: '0.85rem', textDecoration: 'none', fontWeight: '600' }}>
                  {isEnglish ? 'Website' : 'Sitio Web'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'center', padding: '50px 20px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '28px' }}>
          {isEnglish ? 'Ready to Find Your Home?' : '¿Listo para comprar su casa?'}
        </h2>
        <Link href="/" style={{ backgroundColor: 'white', color: '#1e3a8a', padding: '14px 36px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>
          {isEnglish ? '← Back to Home' : '← Volver al Inicio'}
        </Link>
      </div>
    </div>
  );
}

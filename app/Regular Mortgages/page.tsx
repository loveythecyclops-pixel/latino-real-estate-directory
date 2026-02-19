'use client';

import { useState } from 'react';
import Link from 'next/link';

const lenders = [
  {
    name: 'Ivan Ramirez',
    company: 'Certainty Home Lending',
    location: 'Lawrenceville, GA',
    specialty: 'FHA, VA, USDA, Foreign National',
    phone: '(404) 436-2605',
    nmls: '2059278'
  },
  {
    name: 'Jesse Esqueda',
    company: 'Ameris Bank',
    location: 'Lawrenceville, GA',
    specialty: 'Top Latino Originator, DPA Specialist',
    phone: '(678) 698-0633',
    nmls: '485695'
  },
  {
    name: 'Irma Betancourt',
    company: 'Guaranteed Rate',
    location: 'Duluth, GA',
    specialty: 'First-time Buyers, FHA/Conventional',
    phone: '(678) 820-3481',
    nmls: '286977'
  },
  {
    name: 'Natalya Chacon',
    company: 'US Mortgage Corp',
    location: 'Atlanta / Kennesaw',
    specialty: 'High-volume Bilingual Specialist',
    phone: '(Contact Office)',
    nmls: 'N/A'
  },
  {
    name: 'Leonardo Roberto',
    company: 'PrimeLending',
    location: 'Sandy Springs, GA',
    specialty: 'Conventional & Government Loans',
    phone: '(770) 615-4600',
    nmls: 'N/A'
  },
  {
    name: 'Becky Brown',
    company: 'New American Funding',
    location: 'Stockbridge / Metro ATL',
    specialty: 'Bilingual Loan Processing',
    phone: '(678) 478-1612',
    nmls: '211483'
  }
];

export default function RegularMortgagesPage() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const isEnglish = language === 'en';

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      
      {/* Header/Nav */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#1e3a8a' }}>
          🏠 {isEnglish ? 'Home' : 'Inicio'}
        </Link>
        <button 
          onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
          style={{ cursor: 'pointer', border: '1px solid #1e3a8a', background: 'none', padding: '6px 15px', borderRadius: '20px' }}
        >
          {isEnglish ? '🇲🇽 Español' : '🇺🇸 English'}
        </button>
      </nav>

      {/* Hero */}
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          {isEnglish ? 'Standard Mortgage Lenders' : 'Prestamistas Hipotecarios Tradicionales'}
        </h1>
        <p style={{ opacity: 0.9, fontSize: '1.2rem' }}>
          {isEnglish ? 'Top bilingual experts in Georgia for FHA, VA, and Conventional loans.' : 'Los mejores expertos bilingües en Georgia para préstamos FHA, VA y Convencionales.'}
        </p>
      </div>

      {/* Directory Grid */}
      <div style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          {lenders.map((lender) => (
            <div key={lender.name} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <h3 style={{ margin: '0 0 5px 0', color: '#1e3a8a' }}>{lender.name}</h3>
              <p style={{ margin: '0 0 15px 0', fontWeight: 'bold', color: '#4b5563' }}>{lender.company}</p>
              
              <div style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.6' }}>
                <div>📍 <strong>{isEnglish ? 'Location' : 'Ubicación'}:</strong> {lender.location}</div>
                <div>🔑 <strong>{isEnglish ? 'Specialty' : 'Especialidad'}:</strong> {lender.specialty}</div>
                {lender.nmls !== 'N/A' && <div>🆔 <strong>NMLS:</strong> {lender.nmls}</div>}
              </div>

              <div style={{ marginTop: '20px' }}>
                <a 
                  href={`tel:${lender.phone.replace(/\D/g,'')}`} 
                  style={{ 
                    display: 'inline-block', 
                    width: '100%', 
                    textAlign: 'center', 
                    backgroundColor: '#16a34a', 
                    color: 'white', 
                    padding: '10px 0', 
                    borderRadius: '8px', 
                    textDecoration: 'none', 
                    fontWeight: 'bold' 
                  }}
                >
                  {isEnglish ? 'Call Now' : 'Llamar Ahora'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Footer */}
      <div style={{ backgroundColor: '#f8fafc', padding: '60px 20px', textAlign: 'center' }}>
        <h3 style={{ color: '#1e3a8a' }}>{isEnglish ? 'Why work with these lenders?' : '¿Por qué trabajar con estos prestamistas?'}</h3>
        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#4b5563', lineHeight: '1.6' }}>
          {isEnglish 
            ? 'These professionals specialize in helping the Latino community navigate the home buying process. They understand both the technical requirements of the loans and the cultural nuances of the Hispanic market in Georgia.' 
            : 'Estos profesionales se especializan en ayudar a la comunidad latina a navegar el proceso de compra de vivienda. Entienden tanto los requisitos técnicos como los matices culturales del mercado hispano en Georgia.'}
        </p>
      </div>

    </div>
  );
}

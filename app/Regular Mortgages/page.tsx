'use client';

import { useState } from 'react';
import Link from 'next/link';

// 1. LENDER DIRECTORY DATA
const lenders = [
  { name: 'Ivan Ramirez', company: 'Certainty Home Lending', location: 'Lawrenceville, GA', specialty: 'FHA, VA, USDA, Foreign National', phone: '(404) 436-2605' },
  { name: 'Jesse Esqueda', company: 'Ameris Bank', location: 'Lawrenceville, GA', specialty: 'Top Latino Originator, DPA Specialist', phone: '(678) 698-0633' },
  { name: 'Irma Betancourt', company: 'Guaranteed Rate', location: 'Duluth, GA', specialty: 'First-time Buyers, FHA/Conventional', phone: '(678) 820-3481' },
  { name: 'Natalya Chacon', company: 'US Mortgage Corp', location: 'Atlanta / Kennesaw', specialty: 'High-volume Bilingual Specialist', phone: '(Contact Office)' },
  { name: 'Leonardo Roberto', company: 'PrimeLending', location: 'Sandy Springs, GA', specialty: 'Conventional & Government Loans', phone: '(770) 615-4600' },
  { name: 'Becky Brown', company: 'New American Funding', location: 'Stockbridge / Metro ATL', specialty: 'Bilingual Loan Processing', phone: '(678) 478-1612' }
];

// 2. LOAN INFORMATION DATA
const loanTypes = [
  {
    title: 'FHA Loans',
    limit: '$541,287 - $718,750',
    down: '3.5%',
    desc: 'Best for first-time buyers. In 2026, Metro Atlanta limits are higher ($718k+) to keep up with home prices.',
    esDesc: 'Ideal para primeros compradores. En 2026, los límites de Atlanta son más altos para ajustarse a los precios.'
  },
  {
    title: 'Conventional',
    limit: '$832,750 (Baseline)',
    down: '3% - 5%',
    desc: 'Best for those with credit scores above 620. No upfront mortgage insurance fees.',
    esDesc: 'Para personas con crédito de 620+. Sin cargos iniciales de seguro hipotecario.'
  },
  {
    title: 'USDA Rural',
    limit: 'Varies by County',
    down: '0%',
    desc: '100% financing for rural areas. Includes many areas just outside Atlanta and Savannah.',
    esDesc: 'Financiamiento del 100% para áreas rurales. Incluye zonas fuera de Atlanta y Savannah.'
  }
];

export default function RegularMortgagesPage() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const isEnglish = language === 'en';

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          <Link href="/" style={{ position: 'absolute', left: 0, color: 'white', textDecoration: 'none' }}>🏠 {isEnglish ? 'Home' : 'Inicio'}</Link>
          <button onClick={() => setLanguage(isEnglish ? 'es' : 'en')} style={{ position: 'absolute', right: 0, cursor: 'pointer', background: 'white', border: 'none', padding: '5px 12px', borderRadius: '15px', color: '#1e3a8a', fontWeight: 'bold' }}>
            {isEnglish ? 'Español' : 'English'}
          </button>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{isEnglish ? '2026 Georgia Mortgage Guide' : 'Guía Hipotecaria Georgia 2026'}</h1>
          <p style={{ opacity: 0.9 }}>{isEnglish ? 'Complete info on FHA, Conventional, & Local Lenders' : 'Información completa sobre FHA, Convencionales y Prestamistas locales'}</p>
        </div>
      </div>

      {/* SECTION 1: LOAN INFORMATION */}
      <div style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ color: '#1e3a8a', borderLeft: '5px solid #1e3a8a', paddingLeft: '15px', marginBottom: '25px' }}>
          {isEnglish ? 'Loan Programs & 2026 Limits' : 'Programas de Préstamo y Límites 2026'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {loanTypes.map((loan) => (
            <div key={loan.title} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <h3 style={{ marginTop: 0, color: '#2563eb' }}>{loan.title}</h3>
              <p style={{ fontSize: '0.9rem' }}><strong>💰 {isEnglish ? 'Down Payment' : 'Enganche'}:</strong> {loan.down}</p>
              <p style={{ fontSize: '0.9rem' }}><strong>📊 {isEnglish ? '2026 Limit' : 'Límite 2026'}:</strong> {loan.limit}</p>
              <p style={{ color: '#4b5563', lineHeight: '1.5', fontSize: '0.95rem' }}>{isEnglish ? loan.desc : loan.esDesc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: THE LENDER LIST */}
      <div style={{ backgroundColor: '#ffffff', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ color: '#1e3a8a', textAlign: 'center', marginBottom: '40px' }}>
            {isEnglish ? 'Bilingual Lender Directory' : 'Directorio de Prestamistas Bilingües'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {lenders.map((lender) => (
              <div key={lender.name} style={{ border: '1px solid #eee', borderRadius: '10px', padding: '20px', backgroundColor: '#f8fafc' }}>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{lender.name}</h4>
                <div style={{ color: '#16a34a', fontWeight: 'bold', marginBottom: '10px' }}>{lender.company}</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>📍 {lender.location}</div>
                <div style={{ fontSize: '0.85rem', marginBottom: '15px' }}>🔑 <em>{lender.specialty}</em></div>
                <a href={`tel:${lender.phone.replace(/\D/g,'')}`} style={{ display: 'block', textAlign: 'center', backgroundColor: '#1e3a8a', color: 'white', padding: '10px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
                  📞 {lender.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: ASSISTANCE PROGRAMS */}
      <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h3 style={{ color: '#1e3a8a' }}>{isEnglish ? 'Georgia Dream Assistance' : 'Asistencia de Georgia Dream'}</h3>
        <p style={{ lineHeight: '1.6', color: '#4b5563' }}>
          {isEnglish 
            ? 'First-time buyers can get up to $10,000 - $12,500 in down payment help. Most lenders above are certified to help you apply for this state grant.' 
            : 'Compradores por primera vez pueden recibir hasta $12,500 para el enganche. La mayoría de los prestamistas arriba están certificados para ayudarle con esta beca estatal.'}
        </p>
      </div>

    </div>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';

const loans = [
  {
    title: 'FHA Loans',
    icon: '🏠',
    bestFor: 'First-time buyers & scores above 580',
    limit2026: '$541,287 - $718,750+',
    downPayment: '3.5%',
    desc: 'The most popular choice for GA families. In 2026, many Metro Atlanta counties allow up to $718k, while rural counties start at $541k.'
  },
  {
    title: 'Conventional Loans',
    icon: '📈',
    bestFor: 'Credit 620+ & long-term savings',
    limit2026: '$832,750 (Baseline)',
    downPayment: '3% - 5%',
    desc: 'Standard loans for those with strong credit. No upfront mortgage insurance fees, and you can remove PMI once you reach 20% equity.'
  },
  {
    title: 'VA Loans',
    icon: '🎖️',
    bestFor: 'Veterans & Active Duty (GA is Military Friendly!)',
    limit2026: 'No Limit (Full Entitlement)',
    downPayment: '0%',
    desc: 'Special benefits for our Georgia veterans. No down payment and no monthly mortgage insurance (PMI) required.'
  },
  {
    title: 'USDA Rural Loans',
    icon: '🌳',
    bestFor: 'Rural areas (outside Atlanta/Savannah)',
    limit2026: 'Varies by County',
    downPayment: '0%',
    desc: 'Perfect for homes in areas like North GA or South GA. 100% financing for low-to-moderate income households in eligible rural zones.'
  }
];

export default function RegularMortgagesPage() {
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1f2937', backgroundColor: '#fdfdfd' }}>
      {/* Hero */}
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <button 
          onClick={() => setIsEnglish(!isEnglish)}
          style={{ float: 'right', background: 'white', color: '#1e3a8a', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {isEnglish ? 'Español' : 'English'}
        </button>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
          {isEnglish ? '2026 Georgia Mortgage Guide' : 'Guía de Hipotecas en Georgia 2026'}
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          {isEnglish ? 'Latest loan limits and requirements for GA residents.' : 'Últimos límites y requisitos para residentes de Georgia.'}
        </p>
      </div>

      {/* Loan Grid */}
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
        {loans.map((loan) => (
          <div key={loan.title} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2.5rem' }}>{loan.icon}</div>
            <h2 style={{ color: '#1e3a8a', fontSize: '1.4rem' }}>{loan.title}</h2>
            <div style={{ marginBottom: '15px', fontSize: '0.9rem' }}>
              <div style={{ color: '#16a34a', fontWeight: 'bold' }}>💰 {isEnglish ? 'Down' : 'Enganche'}: {loan.downPayment}</div>
              <div style={{ color: '#6b7280' }}>📊 {isEnglish ? '2026 Limit' : 'Límite 2026'}: {loan.limit2026}</div>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#4b5563' }}>{loan.desc}</p>
          </div>
        ))}
      </div>

      {/* GA Special Program Section */}
      <div style={{ backgroundColor: '#eff6ff', padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a' }}>{isEnglish ? 'Georgia Dream Program' : 'Programa Georgia Dream'}</h2>
        <p style={{ maxWidth: '700px', margin: '10px auto', lineHeight: '1.6' }}>
          {isEnglish 
            ? 'First-time buyers in Georgia may qualify for up to $10,000 - $12,500 in down payment assistance. Requires a 640+ credit score.' 
            : 'Compradores por primera vez en Georgia pueden calificar para $10,000 - $12,500 en asistencia para el enganche. Requiere crédito de 640+.'}
        </p>
      </div>

      {/* Detailed Requirements Table */}
      <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>{isEnglish ? 'Documentation Checklist' : 'Lista de Documentos'}</h3>
        <div style={{ border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ backgroundColor: '#f8fafc' }}>
              <tr>
                <th style={{ padding: '15px' }}>{isEnglish ? 'Document' : 'Documento'}</th>
                <th style={{ padding: '15px' }}>{isEnglish ? 'Why it is needed' : 'Por qué se necesita'}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderTop: '1px solid #eee' }}>
                <td style={{ padding: '15px' }}>Tax Returns (2 yrs)</td>
                <td style={{ padding: '15px' }}>To verify income stability over time.</td>
              </tr>
              <tr style={{ borderTop: '1px solid #eee' }}>
                <td style={{ padding: '15px' }}>Bank Statements (60 days)</td>
                <td style={{ padding: '15px' }}>To prove you have the funds for the down payment.</td>
              </tr>
              <tr style={{ borderTop: '1px solid #eee' }}>
                <td style={{ padding: '15px' }}>Pay Stubs (30 days)</td>
                <td style={{ padding: '15px' }}>To prove current employment status.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingBottom: '60px' }}>
        <Link href="/" style={{ color: '#1e3a8a', fontWeight: 'bold', textDecoration: 'none', border: '2px solid #1e3a8a', padding: '10px 25px', borderRadius: '8px' }}>
          {isEnglish ? 'Back to Directory' : 'Volver al Directorio'}
        </Link>
      </div>
    </div>
  );
}

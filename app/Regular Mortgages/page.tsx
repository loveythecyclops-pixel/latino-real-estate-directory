'use client';
import { useState } from 'react';
import Link from 'next/link';

const loans = [
  {
    title: 'FHA Loans',
    icon: '🏠',
    bestFor: 'First-time buyers & lower credit scores',
    downPayment: '3.5%',
    creditScore: '580+',
    desc: 'Government-backed loans that are easier to qualify for. Great if you have a smaller down payment or a credit score that isn\'t perfect yet.'
  },
  {
    title: 'Conventional Loans',
    icon: '📈',
    bestFor: 'Buyers with strong credit',
    downPayment: '3% - 20%',
    creditScore: '620+',
    desc: 'Standard loans not insured by the government. If you put 20% down, you can skip the monthly mortgage insurance (PMI) cost.'
  },
  {
    title: 'VA Loans',
    icon: '🎖️',
    bestFor: 'Veterans & Active Duty Military',
    downPayment: '0%',
    creditScore: 'Varies',
    desc: 'An incredible benefit for those who served. No down payment required and often has the lowest interest rates on the market.'
  }
];

export default function RegularMortgagesPage() {
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1f2937' }}>
      {/* Hero */}
      <div style={{ backgroundColor: '#2563eb', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <button 
          onClick={() => setIsEnglish(!isEnglish)}
          style={{ float: 'right', background: 'white', color: '#2563eb', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {isEnglish ? 'Español' : 'English'}
        </button>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
          {isEnglish ? 'Standard Mortgage Loans' : 'Préstamos Hipotecarios Tradicionales'}
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          {isEnglish ? 'The most common ways to buy a home in Georgia.' : 'Las formas más comunes de comprar una casa en Georgia.'}
        </p>
      </div>

      {/* Loan Cards */}
      <div style={{ padding: '50px 20px', maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {loans.map((loan) => (
          <div key={loan.title} style={{ border: '1px solid #e5e7eb', borderRadius: '15px', padding: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{loan.icon}</div>
            <h2 style={{ color: '#2563eb', marginTop: 0 }}>{loan.title}</h2>
            <p><strong>{isEnglish ? 'Down Payment' : 'Enganche'}:</strong> {loan.downPayment}</p>
            <p><strong>{isEnglish ? 'Min. Credit' : 'Crédito Mín.'}:</strong> {loan.creditScore}</p>
            <hr style={{ border: '0.5px solid #eee', margin: '20px 0' }} />
            <p style={{ lineHeight: '1.6', color: '#4b5563' }}>{loan.desc}</p>
          </div>
        ))}
      </div>

      {/* Georgia Requirements Section */}
      <div style={{ backgroundColor: '#f9fafb', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a' }}>{isEnglish ? 'General Requirements' : 'Requisitos Generales'}</h2>
        <div style={{ maxWidth: '600px', margin: '20px auto', textAlign: 'left', display: 'inline-block' }}>
          <p>✅ <strong>{isEnglish ? 'Proof of Income' : 'Prueba de Ingresos'}:</strong> {isEnglish ? '2 years of W2s or Tax Returns.' : '2 años de declaraciones de impuestos.'}</p>
          <p>✅ <strong>{isEnglish ? 'Identification' : 'Identificación'}:</strong> {isEnglish ? 'Valid Social Security Number.' : 'Número de Seguro Social válido.'}</p>
          <p>✅ <strong>{isEnglish ? 'Employment' : 'Empleo'}:</strong> {isEnglish ? 'Steady job history for the last 2 years.' : 'Historial de trabajo estable por los últimos 2 años.'}</p>
        </div>
      </div>

      {/* Back Button */}
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <Link href="/" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}>
          ← {isEnglish ? 'Back to Home' : 'Volver al Inicio'}
        </Link>
      </div>
    </div>
  );
}

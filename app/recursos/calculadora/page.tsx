'use client';

import { useState } from 'react';

export default function MortgageCalculator() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [termYears, setTermYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const isEnglish = language === 'en';

  // Mortgage calculation formula
  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const months = parseInt(termYears) * 12;

    if (!isNaN(principal) && !isNaN(annualRate) && !isNaN(months) && months > 0) {
      const monthlyRate = annualRate / 12;
      const payment =
        (principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -months));
      setMonthlyPayment(payment);
    } else {
      setMonthlyPayment(null);
    }
  };

  return (
    <div
      style={{
        padding: '40px',
        fontFamily: 'sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      {/* Language Toggle */}
      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{
          marginBottom: '20px',
          padding: '8px 16px',
          borderRadius: '20px',
          border: '1px solid #1e3a8a',
          background: 'white',
          cursor: 'pointer',
        }}
      >
        {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
      </button>

      <h1
        style={{
          fontSize: '2rem',
          marginBottom: '20px',
          color: '#1e3a8a',
        }}
      >
        {isEnglish ? 'Mortgage Calculator' : 'Calculadora Hipotecaria'}
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder={isEnglish ? 'Loan Amount ($)' : 'Monto del préstamo ($)'}
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input
          type="number"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder={isEnglish ? 'Annual Interest Rate (%)' : 'Tasa de interés anual (%)'}
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input
          type="number"
          value={termYears}
          onChange={(e) => setTermYears(e.target.value)}
          placeholder={isEnglish ? 'Term (Years)' : 'Plazo (años)'}
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button
          onClick={calculateMortgage}
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#1e3a8a',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {isEnglish ? 'Calculate Mortgage' : 'Calcular Hipoteca'}
        </button>
      </div>

      {monthlyPayment !== null && (
        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#16a34a',
          }}
        >
          {isEnglish ? 'Estimated Monthly Payment:' : 'Pago mensual estimado:'}{' '}
          ${monthlyPayment.toFixed(2)}
        </div>
      )}
    </div>
  );
}


'use client';

import { useState } from 'react';

export default function MortgageCalculator() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const [homePrice, setHomePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [termYears, setTermYears] = useState('30');
  const [result, setResult] = useState<{
    monthly: number;
    totalPaid: number;
    totalInterest: number;
    loanAmount: number;
  } | null>(null);

  const isEnglish = language === 'en';

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

  const calculateMortgage = () => {
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment) || 0;
    const annual = parseFloat(interestRate);
    const years = parseInt(termYears);

    if (!price || isNaN(annual) || !years) return;

    const principal = price - down;
    const r = annual / 100 / 12;
    const n = years * 12;

    const monthly =
      r > 0
        ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        : principal / n;

    const totalPaid = monthly * n;
    const totalInterest = totalPaid - principal;

    setResult({ monthly, totalPaid, totalInterest, loanAmount: principal });
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    boxSizing: 'border-box' as const,
    marginTop: '6px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600' as const,
    color: '#374151',
    marginBottom: '16px',
  };

  return (
    <div
      style={{
        padding: '40px 20px',
        fontFamily: 'sans-serif',
        maxWidth: '620px',
        margin: '0 auto',
      }}
    >
      {/* Language Toggle */}
      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{
          marginBottom: '24px',
          padding: '8px 18px',
          borderRadius: '20px',
          border: '1px solid #1e3a8a',
          background: 'white',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
      </button>

      <h1
        style={{
          fontSize: '1.8rem',
          marginBottom: '8px',
          color: '#1e3a8a',
        }}
      >
        {isEnglish ? 'Mortgage Calculator' : 'Calculadora Hipotecaria'}
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '28px', fontSize: '15px' }}>
        {isEnglish
          ? 'Estimate your monthly mortgage payment'
          : 'Estima tu pago mensual de hipoteca'}
      </p>

      {/* Home Price */}
      <label style={labelStyle}>
        {isEnglish ? 'Home Price ($)' : 'Precio de la vivienda ($)'}
        <input
          type="number"
          value={homePrice}
          onChange={(e) => setHomePrice(e.target.value)}
          placeholder={isEnglish ? 'e.g. 350000' : 'ej. 350000'}
          style={inputStyle}
        />
      </label>

      {/* Down Payment */}
      <label style={labelStyle}>
        {isEnglish ? 'Down Payment ($)' : 'Pago inicial ($)'}
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
          placeholder={isEnglish ? 'e.g. 50000' : 'ej. 50000'}
          style={inputStyle}
        />
      </label>

      {/* Interest Rate */}
      <label style={labelStyle}>
        {isEnglish ? 'Annual Interest Rate (%)' : 'Tasa de interés anual (%)'}
        <input
          type="number"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder={isEnglish ? 'e.g. 6.5' : 'ej. 6.5'}
          style={inputStyle}
        />
      </label>

      {/* Loan Term */}
      <label style={labelStyle}>
        {isEnglish ? 'Loan Term (Years)' : 'Plazo del préstamo (años)'}
        <select
          value={termYears}
          onChange={(e) => setTermYears(e.target.value)}
          style={{ ...inputStyle, background: 'white' }}
        >
          <option value="10">10 {isEnglish ? 'years' : 'años'}</option>
          <option value="15">15 {isEnglish ? 'years' : 'años'}</option>
          <option value="20">20 {isEnglish ? 'years' : 'años'}</option>
          <option value="30">30 {isEnglish ? 'years' : 'años'}</option>
        </select>
      </label>

      {/* Calculate Button */}
      <button
        onClick={calculateMortgage}
        style={{
          width: '100%',
          padding: '14px',
          background: '#1e3a8a',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          marginTop: '8px',
        }}
      >
        {isEnglish ? 'Calculate' : 'Calcular'}
      </button>

      {/* Results */}
      {result && (
        <div
          style={{
            marginTop: '32px',
            background: '#eff6ff',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #bfdbfe',
          }}
        >
          <h2 style={{ color: '#1e3a8a', marginBottom: '16px', fontSize: '1.1rem' }}>
            {isEnglish ? 'Estimated Results' : 'Resultados estimados'}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#374151', fontSize: '15px' }}>
                {isEnglish ? 'Loan Amount' : 'Monto del préstamo'}
              </span>
              <span style={{ fontWeight: '700', fontSize: '16px', color: '#1e3a8a' }}>
                {fmt(result.loanAmount)}
              </span>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #bfdbfe' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#374151', fontSize: '15px' }}>
                {isEnglish ? 'Monthly Payment (P&I)' : 'Pago mensual (capital e interés)'}
              </span>
              <span style={{ fontWeight: '700', fontSize: '22px', color: '#1e3a8a' }}>
                {fmt(result.monthly)}
              </span>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #bfdbfe' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#374151', fontSize: '15px' }}>
                {isEnglish ? 'Total Interest Paid' : 'Total de intereses pagados'}
              </span>
              <span style={{ fontWeight: '700', fontSize: '16px', color: '#dc2626' }}>
                {fmt(result.totalInterest)}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#374151', fontSize: '15px' }}>
                {isEnglish ? 'Total Cost of Loan' : 'Costo total del préstamo'}
              </span>
              <span style={{ fontWeight: '700', fontSize: '16px', color: '#374151' }}>
                {fmt(result.totalPaid)}
              </span>
            </div>
          </div>

          <p
            style={{
              marginTop: '16px',
              fontSize: '12px',
              color: '#6b7280',
              lineHeight: '1.5',
            }}
          >
            {isEnglish
              ? '* Estimate includes principal & interest only. Does not include taxes, insurance, or HOA fees.'
              : '* Estimación incluye capital e interés solamente. No incluye impuestos, seguro ni cuotas de HOA.'}
          </p>
        </div>
      )}
    </div>
  );
}

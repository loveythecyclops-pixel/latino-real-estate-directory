'use client';

import { useState } from 'react';

export default function CalculadoraPage() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const isEnglish = language === 'en';

  const calculateSum = () => {
    const n1 = parseFloat(number1);
    const n2 = parseFloat(number2);
    if (!isNaN(n1) && !isNaN(n2)) {
      setResult(n1 + n2);
    } else {
      setResult(null);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      {/* Language Toggle */}
      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{
          marginBottom: '20px',
          padding: '8px 16px',
          borderRadius: '20px',
          border: '1px solid #1e3a8a',
          background: 'white',
          cursor: 'pointer'
        }}
      >
        {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
      </button>

      <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#1e3a8a' }}>
        {isEnglish ? 'Bilingual Calculator' : 'Calculadora Bilingüe'}
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder={isEnglish ? 'Enter first number' : 'Ingrese el pr

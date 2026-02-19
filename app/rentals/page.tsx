'use client';

import { useState } from 'react';
import Link from 'next/link';

const rentalFacts = {
  gwinnett: {
    name: 'Gwinnett County',
    rent: '$1,950',
    latinos: '23%',
    pros: {
      en: 'Family-sized homes; high bilingual support in Norcross/Lilburn.',
      es: 'Casas para familias; gran apoyo bilingüe en Norcross/Lilburn.'
    },
    tips: {
      en: 'Look for MAA Prescott or Terra at Norcross for large rental communities.',
      es: 'Busque en MAA Prescott o Terra at Norcross para comunidades grandes.'
    }
  },
  hall: {
    name: 'Gainesville / Hall',
    rent: '$1,316',
    latinos: '29%',
    pros: {
      en: 'High inventory for workforce families.',
      es: 'Gran inventario para familias trabajadoras.'
    },
    tips: {
      en: 'Over 50% of residents here are renters—high competition, apply early.',
      es: 'Más del 50% son inquilinos—mucha competencia, aplique pronto.'
    }
  },
  dalton: {
    name: 'Dalton / Whitfield',
    rent: '$1,300',
    latinos: '35%',
    pros: {
      en: 'Most affordable; very high Latino community presence.',
      es: 'Lo más asequible; presencia muy alta de la comunidad latina.'
    },
    tips: {
      en: 'Prices dropped $300 YoY—great time to lock in a 2-year lease.',
      es: 'Precios bajaron $300 anual—buen momento para contrato de 2 años.'
    }
  }
};

export default function RentalPage() {
  // FIXED: Using local state instead of missing LanguageContext
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const isEnglish = language === 'en';
  const [city, setCity] = useState<keyof typeof rentalFacts | null>(null);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Hero / Header */}
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '40px 20px', position: 'relative' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* THE TOGGLE BUTTON */}
          <button
            onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'transparent',
              color: '#fff',
              border: '1px solid #fff',
              padding: '8px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
          </button>

          <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
            {isEnglish ? '← Back to Home' : '← Volver al Inicio'}
          </Link>
          
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '16px 0 8px' }}>
            {isEnglish ? 'Georgia Rental Directory 2026' : 'Directorio de Rentas Georgia 2026'}
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* RENTER RIGHTS BANNER */}
        <div style={{ backgroundColor: '#fff4ed', padding: '20px', borderRadius: '12px', border: '1px solid #fdba74', marginBottom: '30px' }}>
          <h3 style={{ color: '#9a3412', marginTop: 0 }}>
            {isEnglish ? '⚠️ Your Rights in 2026' : '⚠️ Sus Derechos en 2026'}
          </h3>
          <p><strong>{isEnglish ? '5-Day Rule:' : 'Regla de 5 Días:'}</strong> {isEnglish ? 'Landlords must fix urgent issues in 5 days or you can repair and deduct.' : 'Si el dueño no arregla algo urgente, puede repararlo y deducirlo de la renta.'}</p>
        </div>

        {/* REGION PICKER */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '30px', flexWrap: 'wrap' }}>
          {Object.keys(rentalFacts).map((key) => (
            <button 
              key={key} 
              onClick={() => setCity(key as any)}
              style={{ padding: '12px 24px', borderRadius: '30px', border: '2px solid #1e3a8a', backgroundColor: city === key ? '#1e3a8a' : '#fff', color: city === key ? '#fff' : '#1e3a8a', cursor: 'pointer', fontWeight: '600' }}
            >
              {rentalFacts[key as keyof typeof rentalFacts].name}
            </button>
          ))}
        </div>

        {/* DYNAMIC CONTENT */}
        {city && (
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ color: '#1e3a8a', marginTop: 0 }}>{rentalFacts[city].name}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div>
                <p><strong>{isEnglish ? 'Avg Rent:' : 'Renta Promedio:'}</strong> {rentalFacts[city].rent}</p>
                <p><strong>{isEnglish ? 'Latino Pop:' : 'Pob.

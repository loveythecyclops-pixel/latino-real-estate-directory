'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../LanguageContext'; // Importing the global state

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
  const { isEnglish } = useLanguage(); // Getting the global language
  const [city, setCity] = useState<keyof typeof rentalFacts | null>(null);

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link href="/" style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold' }}>
        {isEnglish ? '← Back to Home' : '← Volver al Inicio'}
      </Link>
      
      <h1 style={{ color: '#1e3a8a', textAlign: 'center', marginTop: '20px' }}>
        {isEnglish ? 'Georgia Rental Directory 2026' : 'Directorio de Rentas Georgia 2026'}
      </h1>

      {/* RENTER RIGHTS BANNER */}
      <div style={{ backgroundColor: '#fff4ed', padding: '20px', borderRadius: '10px', border: '1px solid #fdba74', marginBottom: '30px' }}>
        <h3 style={{ color: '#9a3412', marginTop: 0 }}>
          {isEnglish ? '⚠️ Your Rights in 2026' : '⚠️ Sus Derechos en 2026'}
        </h3>
        <p><strong>{isEnglish ? '5-Day Rule:' : 'Regla de 5 Días:'}</strong> {isEnglish ? 'Landlords must fix urgent issues in 5 days or you can deduct repair costs.' : 'Si el dueño no arregla algo urgente, puede repararlo y deducirlo de la renta.'}</p>
        <p><strong>{isEnglish ? 'Security Deposits:' : 'Depósitos:'}</strong> {isEnglish ? 'Maximum of 2 months rent allowed in Georgia.' : 'No pueden cobrarle más de 2 meses de renta como depósito.'}</p>
      </div>

      {/* REGION PICKER */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {Object.keys(rentalFacts).map((key) => (
          <button 
            key={key} 
            onClick={() => setCity(key as any)}
            style={{ padding: '10px 20px', borderRadius: '20px', border: '2px solid #1e3a8a', backgroundColor: city === key ? '#1e3a8a' : '#fff', color: city === key ? '#fff' : '#1e3a8a', cursor: 'pointer' }}
          >
            {rentalFacts[key as keyof typeof rentalFacts].name}
          </button>
        ))}
      </div>

      {/* DYNAMIC CONTENT */}
      {city && (
        <div style={{ backgroundColor: '#f3f4f6', padding: '30px', borderRadius: '12px', border: '1px solid #d1d5db' }}>
          <h2>{rentalFacts[city].name} {isEnglish ? 'Market Snapshot' : 'Resumen del Mercado'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div>
              <p><strong>{isEnglish ? 'Avg Rent:' : 'Renta Promedio:'}</strong> {rentalFacts[city].rent}</p>
              <p><strong>{isEnglish ? 'Latino Population:' : 'Población Latina:'}</strong> {rentalFacts[city].latinos}</p>
            </div>
            <div>
              <p><strong>{isEnglish ? 'Benefits:' : 'Beneficios:'}</strong> {isEnglish ? rentalFacts[city].pros.en : rentalFacts[city].pros.es}</p>
              <p><strong>{isEnglish ? 'Tip:' : 'Consejo:'}</strong> {isEnglish ? rentalFacts[city].tips.en : rentalFacts[city].tips.es}</p>
            </div>
          </div>
        </div>
      )}

      {/* CREDIT BUILDING & RESOURCES SECTION */}
      <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        <section>
          <h3>{isEnglish ? 'ITIN Rental Checklist' : 'Requisitos para Rentar con ITIN'}</h3>
          <ul style={{ lineHeight: '1.8' }}>
            <li><strong>{isEnglish ? 'Income:' : 'Ingresos:'}</strong> {isEnglish ? '3x the monthly rent.' : '3 veces el valor de la renta.'}</li>
            <li><strong>{isEnglish ? 'Documents:' : 'Documentación:'}</strong> {isEnglish ? 'Valid Passport & job letter.' : 'Pasaporte vigente y carta de empleo.'}</li>
            <li><strong>{isEnglish ? 'Credit Building:' : 'Crédito:'}</strong> {isEnglish ? 'Use Rent Reporting services to boost your score.' : 'Use servicios de reporte de renta para subir su puntaje.'}</li>
          </ul>
        </section>

        <section>
          <h3>{isEnglish ? 'Bilingual Resources' : 'Recursos Bilingües'}</h3>
          <p><strong>Latin American Association (LAA):</strong> {isEnglish ? 'Financial workshops in Atlanta & Dalton.' : 'Talleres financieros en Atlanta y Dalton.'}</p>
          <p><strong>Catholic Charities:</strong> {isEnglish ? 'Bilingual housing counseling.' : 'Asesoría de vivienda bilingüe.'}</p>
        </section>
      </div>
    </div>
  );
}

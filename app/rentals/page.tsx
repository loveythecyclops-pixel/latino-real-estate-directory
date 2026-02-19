'use client';
import { useState } from 'react';
import Link from 'next/link';

const rentalFacts = {
  gwinnett: {
    name: 'Gwinnett County',
    rent: '$1,950',
    latinos: '23%',
    pros: 'Family-sized homes; high bilingual support in Norcross/Lilburn.',
    tips: 'Look for MAA Prescott or Terra at Norcross for large rental communities.'
  },
  hall: {
    name: 'Gainesville / Hall',
    rent: '$1,316',
    latinos: '29%',
    pros: 'High inventory for workforce families.',
    tips: 'Over 50% of residents here are renters—high competition, apply early.'
  },
  dalton: {
    name: 'Dalton / Whitfield',
    rent: '$1,300',
    latinos: '35%',
    pros: 'Most affordable; very high Latino community presence.',
    tips: 'Prices dropped $300 YoY—great time to lock in a 2-year lease.'
  }
};

export default function RentalPage() {
  const [city, setCity] = useState<keyof typeof rentalFacts | null>(null);

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link href="/">← Volver al Inicio</Link>
      
      <h1 style={{ color: '#1e3a8a', textAlign: 'center' }}>Directorio de Rentas Georgia 2026</h1>

      {/* RENTER RIGHTS BANNER */}
      <div style={{ backgroundColor: '#fff4ed', padding: '20px', borderRadius: '10px', border: '1px solid #fdba74', marginBottom: '30px' }}>
        <h3 style={{ color: '#9a3412', marginTop: 0 }}>⚠️ Sus Derechos en 2026</h3>
        <p><strong>Regla de 5 Días:</strong> Si el dueño no arregla algo urgente, usted puede repararlo y deducir el costo de su renta.</p>
        <p><strong>Depósitos:</strong> No pueden cobrarle más de 2 meses de renta como depósito inicial.</p>
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
        <div style={{ backgroundColor: '#f3f4f6', padding: '30px', borderRadius: '12px' }}>
          <h2>{rentalFacts[city].name} Market Snapshot</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <p><strong>Renta Promedio:</strong> {rentalFacts[city].rent}</p>
              <p><strong>Población Latina:</strong> {rentalFacts[city].latinos}</p>
            </div>
            <div>
              <p><strong>Beneficios:</strong> {rentalFacts[city].pros}</p>
              <p><strong>Consejo:</strong> {rentalFacts[city].tips}</p>
            </div>
          </div>
        </div>
      )}

      {/* CHECKLIST SECTION */}
      <section style={{ marginTop: '50px' }}>
        <h3>Requisitos para Rentar con ITIN</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Prueba de Ingresos:</strong> Normalmente 3 veces el valor de la renta.</li>
          <li><strong>Documentación:</strong> Pasaporte vigente y carta de verificación de empleo.</li>
          <li><strong>Depósito:</strong> Si no tiene crédito, prepárese para pagar 1 mes adicional de depósito.</li>
        </ul>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

const inspectors = [
  {
    name: 'Lucas Worosilo',
    company: 'Allview Home Inspections',
    location: 'Alpharetta / Metro Atlanta',
    specialty: 'Residential, New Construction, Habla Español',
    phone: '(678) 525-2194'
  },
  {
    name: 'Alfredo Fernandez',
    company: 'All Fine Home Inspections',
    location: 'Dacula / North Metro GA',
    specialty: 'InterNACHI Certified, Thermal Imaging',
    phone: '(770) 674-6072'
  },
  {
    name: 'Morano Team',
    company: 'Moranos Home Inspections',
    location: 'Gainesville / Hall County',
    specialty: 'Mold Testing, Radon, Pre-Drywall',
    phone: '(Call for Quote)'
  }
];

export default function HomeInspectionsPage() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const isEnglish = language === 'en';

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <div style={{ backgroundColor: '#0f172a', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <button onClick={() => setLanguage(isEnglish ? 'es' : 'en')} style={{ float: 'right', cursor: 'pointer', background: 'white', border: 'none', padding: '5px 12px', borderRadius: '15px', color: '#0f172a', fontWeight: 'bold' }}>
          {isEnglish ? 'Español' : 'English'}
        </button>
        <h1 style={{ fontSize: '2.5rem' }}>{isEnglish ? 'Home Inspection Guide' : 'Guía de Inspección de Casas'}</h1>
        <p>{isEnglish ? 'Protect your investment with a professional evaluation.' : 'Proteja su inversión con una evaluación profesional.'}</p>
      </div>

      {/* 2026 Price Guide */}
      <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
          <h2 style={{ color: '#1e3a8a', marginTop: 0 }}>{isEnglish ? 'Estimated Costs in GA (2026)' : 'Costos Estimados en GA (2026)'}</h2>
          <ul style={{ lineHeight: '2' }}>
            <li>🏠 <strong>{isEnglish ? 'Standard Home (< 2,000 sq ft):' : 'Casa Estándar:'}</strong> $350 - $450</li>
            <li>🏢 <strong>{isEnglish ? 'Condo / Townhouse:' : 'Condominio / Townhouse:'}</strong> $300 - $375</li>
            <li>🧪 <strong>{isEnglish ? 'Radon Testing:' : 'Prueba de Radón:'}</strong> +$150 - $200</li>
            <li>🍄 <strong>{isEnglish ? 'Mold Testing:' : 'Prueba de Moho:'}</strong> +$200 - $350</li>
          </ul>
        </div>

        {/* Inspector Directory */}
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', margin: '40px 0 20px' }}>
          {isEnglish ? 'Bilingual Certified Inspectors' : 'Inspectores Certificados Bilingües'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {inspectors.map((pro) => (
            <div key={pro.name} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>{pro.name}</h3>
              <p style={{ color: '#16a34a', fontWeight: 'bold', margin: '5px 0' }}>{pro.company}</p>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>📍 {pro.location}</p>
              <p style={{ fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '15px' }}>{pro.specialty}</p>
              <a href={`tel:${pro.phone}`} style={{ display: 'block', textAlign: 'center', backgroundColor: '#1e3a8a', color: 'white', padding: '10px', borderRadius: '6px', textDecoration: 'none' }}>
                {isEnglish ? 'Call Inspector' : 'Llamar al Inspector'}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '40px' }}>
        <Link href="/" style={{ color: '#1e3a8a', fontWeight: 'bold' }}>← {isEnglish ? 'Back to Directory' : 'Volver al Directorio'}</Link>
      </div>
    </div>
  );
}

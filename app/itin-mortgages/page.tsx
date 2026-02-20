'use client';
<<<<<<< HEAD
=======

>>>>>>> ba6232ff24ffc3c343ab9d99c7d3e91e3b872e6f
import { useState } from 'react';
import Link from 'next/link';

const lenders = [
  {
    name: 'NAHREP Atlanta',
    type: { en: 'Trade Association & Member Directory', es: 'Asociación Comercial y Directorio de Miembros' },
    description: {
      en: 'The leading trade association for Hispanic real estate and mortgage professionals in Atlanta.',
      es: 'La asociación comercial líder para profesionales hispanos de bienes raíces e hipotecas en Atlanta.'
    },
    services: {
      en: ['ITIN mortgage referrals', 'Bilingual originators', 'Community education'],
      es: ['Referencias de hipotecas ITIN', 'Originadores bilingües', 'Educación comunitaria']
    },
    website: 'https://nahrep.org',
    badge: 'Top Resource',
    badgeColor: '#2563eb',
  },
  {
    name: 'NQM Funding',
    type: { en: 'Wholesale ITIN Mortgage Lender', es: 'Prestamista Hipotecario ITIN al por Mayor' },
    description: {
      en: 'A wholesale lender active in Georgia that partners with local brokers for ITIN solutions.',
      es: 'Un prestamista al por mayor activo en Georgia que se asocia con corredores locales para soluciones ITIN.'
    },
    services: {
      en: ['ITIN-based home loans', 'No SSN required', 'Available statewide in GA'],
      es: ['Préstamos basados en ITIN', 'No requiere Seguro Social', 'Disponible en toda Georgia']
    },
    website: 'https://nqmfunding.com',
    badge: 'ITIN Specialist',
    badgeColor: '#7c3aed',
  },
];

const steps = [
  { num: '1', title: { en: 'Get Your ITIN', es: 'Obtenga su ITIN' }, desc: { en: 'Apply through the IRS if you do not have a Social Security Number.', es: 'Solicítelo a través del IRS si no tiene un número de Seguro Social.' } },
  { num: '2', title: { en: 'Build Credit', es: 'Construya Crédito' }, desc: { en: 'Open a secured card or use family accounts. 12+ months helps.', es: 'Abra una tarjeta asegurada o use cuentas familiares. Más de 12 meses ayuda.' } },
  { num: '3', title: { en: 'Save Down Payment', es: 'Ahorre para el Enganche' }, desc: { en: 'Most ITIN loans require 10–25% down.', es: 'La mayoría de los préstamos ITIN requieren entre un 10 y 25% de enganche.' } },
  { num: '4', title: { en: 'Get Pre-Approved', es: 'Obtenga Pre-Aprobación' }, desc: { en: 'A letter shows sellers you are a serious buyer.', es: 'Una carta les muestra a los vendedores que usted es un comprador serio.' } },
];

export default function ITINMortgagesPage() {
<<<<<<< HEAD
  const [language, setLanguage] = useState('es');
  const isEnglish = language === 'en';
  const toggleButton = (
    <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} style={{position:'fixed', top:'20px', right:'20px', zIndex:9999, padding:'8px 16px', borderRadius:'20px', cursor:'pointer', backgroundColor:'#1e3a8a', color:'white', border:'none', fontWeight:'bold'}}>
      {language === 'en' ? '???? Espa�ol' : '???? English'}
    </button>
  );
=======
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';

>>>>>>> ba6232ff24ffc3c343ab9d99c7d3e91e3b872e6f
  return (
    <div style={{ fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* Floating Language Button */}
      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{
          position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
          padding: '10px 20px', borderRadius: '30px', backgroundColor: '#1e3a8a',
          color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
      </button>

      {/* Hero */}
      <div style={{ backgroundColor: '#2563eb', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '14px', fontWeight: '800' }}>
          {isEnglish ? 'ITIN Mortgages in Georgia' : 'Hipotecas con ITIN en Georgia'}
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', opacity: 0.92 }}>
          {isEnglish 
            ? 'Buy a home in Georgia without a Social Security Number. Connect with specialists.' 
            : 'Compre una casa en Georgia sin un número de Seguro Social. Conéctese con especialistas.'}
        </p>
      </div>

      {/* Features Grid */}
      <div style={{ backgroundColor: '#eff6ff', padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e40af', fontSize: '1.7rem', marginBottom: '25px' }}>
          {isEnglish ? 'What is an ITIN Mortgage?' : '¿Qué es una Hipoteca con ITIN?'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            isEnglish ? '✅ No SSN Required' : '✅ Sin Seguro Social',
            isEnglish ? '✅ 10% Down Payment' : '✅ 10% de Enganche',
            isEnglish ? '✅ Statewide in GA' : '✅ En toda Georgia',
            isEnglish ? '✅ Bilingual Support' : '✅ Soporte Bilingüe',
          ].map((item) => (
            <div key={item} style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Lenders List */}
      <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1e40af', marginBottom: '40px' }}>
          {isEnglish ? 'Key ITIN Resources' : 'Recursos Clave de ITIN'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {lenders.map((l) => (
            <div key={l.name} style={{ border: '1px solid #e5e7eb', borderRadius: '14px', padding: '28px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={{ color: '#2563eb', margin: 0 }}>{l.name}</h3>
                <span style={{ backgroundColor: l.badgeColor, color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem' }}>{l.badge}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>{isEnglish ? l.type.en : l.type.es}</p>
              <p style={{ fontSize: '0.9rem' }}>{isEnglish ? l.description.en : l.description.es}</p>
              <ul style={{ fontSize: '0.85rem' }}>
                {(isEnglish ? l.services.en : l.services.es).map(s => <li key={s}>{s}</li>)}
              </ul>
              <a href={l.website} target="_blank" style={{ display: 'inline-block', marginTop: '10px', color: '#2563eb', fontWeight: 'bold' }}>
                {isEnglish ? 'Visit Website →' : 'Visitar Sitio Web →'}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Step Guide */}
      <div style={{ backgroundColor: '#f8fafc', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#1e40af', marginBottom: '40px' }}>
          {isEnglish ? 'How to Qualify' : 'Cómo Calificar'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {steps.map((step) => (
            <div key={step.num} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', display: 'flex', gap: '15px' }}>
              <div style={{ backgroundColor: '#2563eb', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
              <div>
                <h4 style={{ margin: '0 0 5px' }}>{isEnglish ? step.title.en : step.title.es}</h4>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>{isEnglish ? step.desc.en : step.desc.es}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'center', padding: '50px 20px' }}>
        <Link href="/legal-support" style={{ backgroundColor: 'white', color: '#1e3a8a', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', marginRight: '10px' }}>
          {isEnglish ? 'Legal Support' : 'Soporte Legal'}
        </Link>
        <Link href="/" style={{ border: '2px solid white', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
          {isEnglish ? 'Home' : 'Inicio'}
        </Link>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const isEnglish = language === 'en';

  const services = [
    { titleEn: 'Bilingual Agents', titleEs: 'Agentes Bilingües', icon: '🏠', link: '/agents' },
    { titleEn: 'ITIN Mortgages', titleEs: 'Préstamos ITIN', icon: '💰', link: '/mortgages' },
    { titleEn: 'Rentals', titleEs: 'Rentas', icon: '🔑', link: '/rentals' },
    { titleEn: 'Owner Financing', titleEs: 'Financiamiento del Dueño', icon: '🤝', link: '/owner-financing' },
  ];

  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#fff' }}>
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
        <h2 style={{ color: '#1e3a8a', margin: 0 }}>Latino Real Estate</h2>
        <button 
          onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
          style={{ background: '#1e3a8a', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
        </button>
      </nav>

      <header style={{ padding: '80px 40px', textAlign: 'center', background: 'linear-gradient(to bottom, #1e3a8a, #3b82f6)', color: '#fff' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
          {isEnglish ? 'Find Your Home in Georgia' : 'Encuentra tu Hogar en Georgia'}
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
          {isEnglish ? 'Bilingual support for buying, renting, and financing.' : 'Apoyo bilingüe para comprar, rentar y financiar.'}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Link href="/agents" style={{ background: '#fff', color: '#1e3a8a', padding: '15px 30px', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none' }}>
            {isEnglish ? 'Explore Homes' : 'Explorar Casas'}
          </Link>
          <Link href="/recursos/calculadora" style={{ background: 'transparent', color: '#fff', border: '2px solid #fff', padding: '15px 30px', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none' }}>
            {isEnglish ? 'Mortgage Calculator' : 'Calculadora de Hipoteca'}
          </Link>
        </div>
      </header>

      <section style={{ padding: '60px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', marginBottom: '40px' }}>
          {isEnglish ? 'Our Services' : 'Nuestros Servicios'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {services.map((service, index) => (
            <Link key={index} href={service.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ padding: '30px', border: '1px solid #eee', borderRadius: '15px', textAlign: 'center', transition: 'box-shadow 0.3s' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{service.icon}</div>
                <h3 style={{ color: '#1e3a8a' }}>{isEnglish ? service.titleEn : service.titleEs}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

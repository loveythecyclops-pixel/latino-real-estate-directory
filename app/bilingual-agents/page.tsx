'use client';
import { useState } from 'react';
import Link from 'next/link';

const agents = [
  {
    name: 'Maria Orantes',
    title: { en: 'Premium Bilingual REALTOR - English & Spanish', es: 'REALTOR Bilingüe Premium - Inglés y Español' },
    location: 'Woodstock, GA',
    experience: { en: 'Licensed & Active', es: 'Licencia Activa' },
    specialty: 'Buyers, Sellers, ITIN & Owner Financing',
    description: {
      en: 'Bilingual (English/Spanish) REALTOR serving the greater Atlanta area including Woodstock, GA. Specializes in helping Latino families purchase homes using ITIN and owner financing options.',
      es: 'REALTOR bilingüe que sirve al área de Atlanta, incluyendo Woodstock, GA. Se especializa en ayudar a familias latinas a comprar casas usando ITIN y opciones de financiamiento directo.',
    },
    website: 'https://mariaorantes.maxoneexecutives.com',
    email: 'mariaorantesre@gmail.com',
    phone: '404-716-3892',
    office: '770-835-4311 EXT: 292',
    premium: true,
  },
  {
    name: 'Elsa Domenzain',
    title: { en: 'Bilingual REALTOR - English & Spanish', es: 'REALTOR Bilingüe - Inglés y Español' },
    location: 'Atlanta Metro, GA',
    experience: { en: '20+ years', es: '20+ años' },
    specialty: 'Buyers, Sellers, Investment Properties',
    description: {
      en: 'Experienced bilingual REALTOR with over 20 years in the Atlanta metro area. Helps Latino families navigate the home buying process.',
      es: 'REALTOR bilingüe con más de 20 años en el área metropolitana de Atlanta. Ayuda a familias latinas a navegar el proceso de compra de vivienda.',
    },
    website: '',
    email: '',
    phone: '',
    office: '',
    premium: false,
  },
];

export default function BilingualAgentsPage() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '40px 24px', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.875rem' }}>
          &larr; {lang === 'en' ? 'Back to Home' : 'Volver al Inicio'}
        </Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '16px', marginBottom: '8px' }}>
          {lang === 'en' ? 'Bilingual Real Estate Agents' : 'Agentes Inmobiliarios Bilingüees'}
        </h1>
        <p style={{ opacity: 0.9 }}>
          {lang === 'en'
            ? 'Connect with experienced bilingual REALTORS who speak English & Spanish'
            : 'Conéctese con REALTORS bilingüees experimentados que hablan inglés y español'}
        </p>
        <div style={{ marginTop: '16px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button
            onClick={() => setLang('en')}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: lang === 'en' ? '#fff' : 'transparent',
              color: lang === 'en' ? '#1e3a8a' : '#fff',
              fontWeight: 'bold',
            }}
          >
            English
          </button>
          <button
            onClick={() => setLang('es')}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: lang === 'es' ? '#fff' : 'transparent',
              color: lang === 'es' ? '#1e3a8a' : '#fff',
              fontWeight: 'bold',
            }}
          >
            Español
          </button>
        </div>
      </div>

      {/* Agent Cards */}
      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gap: '24px' }}>
          {agents.map((agent, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
                borderTop: agent.premium ? '4px solid #f59e0b' : '4px solid #1e3a8a',
              }}
            >
              {agent.premium && (
                <div style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '8px' }}>
                  ★ {lang === 'en' ? 'PREMIUM AGENT' : 'AGENTE PREMIUM'}
                </div>
              )}
              <h2 style={{ color: '#1e3a8a', fontSize: '1.4rem', marginBottom: '4px' }}>{agent.name}</h2>
              <p style={{ color: '#059669', fontWeight: '600', marginBottom: '8px' }}>
                {lang === 'en' ? agent.title.en : agent.title.es}
              </p>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '4px' }}>
                📍 {agent.location} &nbsp;|&nbsp; {lang === 'en' ? agent.experience.en : agent.experience.es}
              </p>
              <p style={{ color: '#374151', marginTop: '12px', marginBottom: '12px', lineHeight: 1.6 }}>
                {lang === 'en' ? agent.description.en : agent.description.es}
              </p>
              <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
                <strong>{lang === 'en' ? 'Specialty:' : 'Especialidad:'}</strong> {agent.specialty}
              </p>
              <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {agent.phone && (
                  <a href={`tel:${agent.phone}`} style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: '600' }}>
                    📞 {agent.phone}
                  </a>
                )}
                {agent.email && (
                  <a href={`mailto:${agent.email}`} style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: '600' }}>
                    ✉️ {agent.email}
                  </a>
                )}
                {agent.website && (
                  <a href={agent.website} target="_blank" rel="noopener noreferrer" style={{ color: '#059669', textDecoration: 'none', fontWeight: '600' }}>
                    🌐 {lang === 'en' ? 'Visit Website' : 'Visitar Sitio Web'}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

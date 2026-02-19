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
      en: 'Bilingual (English/Spanish) REALTOR serving the greater Atlanta area including Woodstock, GA. Specializes in helping Latino families purchase homes using ITIN financing and owner financing programs.',
      es: 'REALTOR bilingüe que sirve al área de Atlanta, incluyendo Woodstock, GA. Se especializa en ayudar a familias latinas a comprar casas usando financiamiento ITIN y programas de financiamiento por el dueño.'
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
    experience: '20+ years',
    specialty: 'Buyers, Sellers & Investors',
    description: {
      en: 'A bilingual (English/Spanish) REALTOR with over 20 years of experience in Georgia real estate. Specializes in helping first-time buyers navigate financing options including ITIN-based purchases.',
      es: 'Una REALTOR bilingüe con más de 20 años de experiencia en bienes raíces en Georgia. Especialista en ayudar a compradores por primera vez con opciones de financiamiento ITIN.'
    },
    website: 'https://www.elsaatlantarealtor.com',
  },
  {
    name: 'Elsy Salazar',
    title: { en: 'Bilingual Tech Realtor - English & Spanish', es: 'Realtor Bilingüe Tecnológica' },
    location: 'Metro Atlanta, GA',
    experience: 'Georgia Licensed',
    specialty: 'Buyers, Sellers & Investors',
    description: {
      en: 'A bilingual (Spanish-English) tech-driven REALTOR in Georgia. Originally from Ecuador, she combines technology and data-driven insights with personalized service.',
      es: 'Una REALTOR bilingüe impulsada por la tecnología. Originalmente de Ecuador, combina tecnología y datos con un servicio personalizado para compradores e inversionistas.'
    },
    website: 'https://elsysrealestate.com',
  },
  {
    name: 'NAHREP Atlanta Members',
    title: { en: 'National Association of Hispanic Real Estate Professionals', es: 'Asociación Nacional de Profesionales Hispanos de Bienes Raíces' },
    location: 'Statewide - All of Georgia',
    experience: 'Verified Members',
    specialty: 'ITIN Loans, Owner Financing, Residential',
    description: {
      en: 'NAHREP Atlanta connects buyers with top-rated Latino real estate and mortgage professionals across Georgia.',
      es: 'NAHREP Atlanta conecta a compradores con profesionales latinos de bienes raíces y hipotecas en toda Georgia.'
    },
    website: 'https://nahrep.org',
  },
  {
    name: 'Atlanta REALTORS Association (ARA)',
    title: { en: 'Multicultural Agent Network', es: 'Red de Agentes Multiculturales' },
    location: 'Greater Atlanta & Georgia',
    experience: 'Verified REALTORS',
    specialty: 'Multicultural Buyers & Sellers',
    description: {
      en: 'The ARA collaborates with NAHREP and other multicultural organizations to connect diverse buyers and sellers with culturally aware agents.',
      es: 'La ARA colabora con NAHREP y otras organizaciones para conectar a compradores y vendedores con agentes culturalmente conscientes.'
    },
    website: 'https://atlantarealtors.com',
  },
];

const whyBilingual = [
  { icon: 'Confidencia', title: { en: 'Speak Your Language', es: 'Hablan Tu Idioma' }, desc: { en: 'Communicate complex contract terms, inspection results, and negotiations fully in Spanish. No misunderstandings.', es: 'Comunique términos complejos, resultados de inspección y negociaciones totalmente en español.' } },
  { icon: 'Comunidad', title: { en: 'Cultural Understanding', es: 'Comprensión Cultural' }, desc: { en: 'A bilingual agent understands your goals, family situation, and financial background in cultural context.', es: 'Un agente bilingüe entiende sus metas, situación familiar y trasfondo financiero en contexto cultural.' } },
  { icon: 'ITIN', title: { en: 'ITIN Purchase Experience', es: 'Experiencia con ITIN' }, desc: { en: 'Bilingual agents in our network have experience closing deals for ITIN buyers and know which lenders to work with.', es: 'Los agentes bilingües de nuestra red tienen experiencia cerrando tratos para compradores con ITIN.' } },
  { icon: 'Confianza', title: { en: 'Trust & Accountability', es: 'Confianza y Responsabilidad' }, desc: { en: 'Work with an agent who is accountable to the Latino community they serve — not just a transaction.', es: 'Trabaje con un agente que sea responsable ante la comunidad latina a la que sirve.' } },
];

export default function BilingualAgentsPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';

  return (
    <div style={{ fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* Floating Toggle Button */}
      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px 20px',
          borderRadius: '30px',
          backgroundColor: '#1e3a8a',
          color: 'white',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
      </button>

      {/* Header */}
      <div style={{ backgroundColor: '#7c3aed', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '14px', fontWeight: '800' }}>
          {isEnglish ? 'Bilingual Real Estate Agents in Georgia' : 'Agentes de Bienes Raíces Bilingües en Georgia'}
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 12px', opacity: 0.92 }}>
          {isEnglish 
            ? 'Find a trusted, Spanish-speaking REALTOR anywhere in Georgia. Our network helps Latino families buy with confidence.' 
            : 'Encuentre un REALTOR de confianza que hable español en cualquier lugar de Georgia. Nuestra red ayuda a familias latinas a comprar con confianza.'}
        </p>
      </div>

      {/* Why Work With Us Section */}
      <div style={{ backgroundColor: '#faf5ff', padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#6d28d9', fontSize: '1.7rem', marginBottom: '30px' }}>
          {isEnglish ? 'Why Work with a Bilingual Agent?' : '¿Por qué trabajar con un agente bilingüe?'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {whyBilingual.map((item) => (
            <div key={item.icon} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <div style={{ backgroundColor: '#ede9fe', color: '#7c3aed', borderRadius: '8px', padding: '8px 14px', display: 'inline-block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ color: '#6d28d9', fontSize: '1rem', fontWeight: '700', marginBottom: '6px' }}>{isEnglish ? item.title.en : item.title.es}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>{isEnglish ? item.desc.en : item.desc.es}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Agents List */}
      <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#6d28d9', marginBottom: '40px' }}>
          {isEnglish ? 'Georgia Bilingual Agent Resources' : 'Recursos de Agentes Bilingües en Georgia'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {agents.map((agent) => (
            <div key={agent.name} style={{ border: agent.premium ? '2px solid #f59e0b' : '1px solid #e9d5ff', borderRadius: '14px', padding: '28px', boxShadow: agent.premium ? '0 4px 20px rgba(245,158,11,0.15)' : '0 2px 10px rgba(0,0,0,0.05)', position: 'relative' }}>
              {agent.premium && (
                <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#f59e0b', color: 'white', fontSize: '0.7rem', fontWeight: '800', padding: '4px 14px', borderBottomLeftRadius: '10px' }}>
                  ⭐ PREMIUM REALTOR
                </div>
              )}
              <h3 style={{ color: '#7c3aed', fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px' }}>{agent.name}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>{isEnglish ? agent.title.en : agent.title.es}</p>
              <p style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '12px' }}>📍 {agent.location}</p>
              <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>{isEnglish ? agent.description.en : agent.description.es}</p>
              <a href={agent.website} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: agent.premium ? '#f59e0b' : '#7c3aed', color: 'white', padding: '9px 20px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', display: 'inline-block' }}>
                {isEnglish ? 'Visit Website' : 'Visitar Sitio Web'}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div style={{ backgroundColor: '#4c1d95', color: 'white', textAlign: 'center', padding: '50px 20px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '28px' }}>{isEnglish ? 'Need More Help?' : '¿Necesita más ayuda?'}</h2>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color: '#4c1d95', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>ITIN Mortgages</Link>
          <Link href="/" style={{ border: '2px solid white', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>{isEnglish ? 'Home' : 'Inicio'}</Link>
        </div>
      </div>
    </div>
  );
}

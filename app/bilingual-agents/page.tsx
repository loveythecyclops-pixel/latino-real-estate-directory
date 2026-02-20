'use client';
import { useState } from 'react';
import Link from 'next/link';

const agents = [
  {
    name: 'Maria Orantes',
    title: 'Premium Bilingual REALTOR - English & Spanish',
    location: 'Woodstock, GA',
    experience: 'Licensed & Active',
    specialty: 'Buyers, Sellers, ITIN & Owner Financing',
    description: 'Bilingual (English/Spanish) REALTOR serving the greater Atlanta area including Woodstock, GA. Specializes in helping Latino families purchase homes using ITIN financing and owner financing programs. Responsive and dedicated to guiding first-time buyers through every step of the process.',
    website: 'https://mariaorantes.maxoneexecutives.com',
    email: 'mariaorantesre@gmail.com',
    phone: '404-716-3892',
    office: '770-835-4311 EXT: 292',
    premium: true,
  },
  {
    name: 'Elsa Domenzain',
    title: 'Bilingual REALTOR - English & Spanish',
    location: 'Atlanta Metro, GA',
    experience: '20+ years',
    specialty: 'Buyers, Sellers & Investors',
    description: 'A bilingual (English/Spanish) REALTOR with over 20 years of experience in Georgia real estate. Specializes in helping first-time buyers navigate financing options including ITIN-based purchases, owner financing, and down payment assistance programs.',
    website: 'https://www.elsaatlantarealtor.com',
  },
  {
    name: 'Elsy Salazar',
    title: 'Bilingual Tech Realtor - English & Spanish',
    location: 'Metro Atlanta, GA',
    experience: 'Georgia Licensed',
    specialty: 'Buyers, Sellers & Investors',
    description: 'A bilingual (Spanish-English) tech-driven REALTOR in Georgia. Originally from Ecuador, she combines technology and data-driven insights with personalized service for buyers, sellers, and investors throughout the state.',
    website: 'https://elsysrealestate.com',
  },
  {
    name: 'NAHREP Atlanta Members',
    title: 'National Association of Hispanic Real Estate Professionals',
    location: 'Statewide - All of Georgia',
    experience: 'Verified Members',
    specialty: 'ITIN Loans, Owner Financing, Residential',
    description: 'NAHREP Atlanta connects buyers with top-rated Latino real estate and mortgage professionals across Georgia. Search their member directory to find NAHREP-affiliated bilingual agents active in your area.',
    website: 'https://nahrep.org',
  },
  {
    name: 'Atlanta REALTORS Association (ARA)',
    title: 'Multicultural Agent Network',
    location: 'Greater Atlanta & Georgia',
    experience: 'Verified REALTORS',
    specialty: 'Multicultural Buyers & Sellers',
    description: 'The ARA collaborates with NAHREP and other multicultural organizations to connect diverse buyers and sellers with culturally aware, professionally licensed real estate agents across Georgia.',
    website: 'https://atlantarealtors.com',
  },
];

const whyBilingual = [
  { icon: 'Confidencia', title: 'Speak Your Language', desc: 'Communicate complex contract terms, inspection results, and negotiations fully in Spanish. No misunderstandings.' },
  { icon: 'Comunidad', title: 'Cultural Understanding', desc: 'A bilingual agent understands your goals, family situation, and financial background in cultural context.' },
  { icon: 'ITIN', title: 'ITIN Purchase Experience', desc: 'Bilingual agents in our network have experience closing deals for ITIN buyers and know which lenders to work with.' },
  { icon: 'Confianza', title: 'Trust & Accountability', desc: 'Work with an agent who is accountable to the Latino community they serve — not just a transaction.' },
];

export default function BilingualAgentsPage() {
  const [language, setLanguage] = useState('es');
  const isEnglish = language === 'en';
  const toggleButton = (
    <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} style={{position:'fixed', top:'20px', right:'20px', zIndex:9999, padding:'8px 16px', borderRadius:'20px', cursor:'pointer', backgroundColor:'#1e3a8a', color:'white', border:'none', fontWeight:'bold'}}>
      {language === 'en' ? '???? Espa�ol' : '???? English'}
    </button>
  );
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#7c3aed', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '14px', fontWeight: '800' }}>Bilingual Real Estate Agents in Georgia</h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 12px', opacity: 0.92 }}>
          Find a trusted, Spanish-speaking REALTOR anywhere in Georgia. Our network of bilingual agents helps Latino families buy, sell, and invest with confidence.
        </p>
        <p style={{ fontSize: '1rem', opacity: 0.8 }}>Agentes bilingues de bienes raices en toda Georgia.</p>
      </div>

      <div style={{ backgroundColor: '#faf5ff', padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#6d28d9', fontSize: '1.7rem', marginBottom: '8px' }}>Why Work with a Bilingual Agent?</h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '40px' }}>Por que trabajar con un agente bilingue</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {whyBilingual.map((item) => (
            <div key={item.title} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <div style={{ backgroundColor: '#ede9fe', color: '#7c3aed', borderRadius: '8px', padding: '8px 14px', display: 'inline-block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ color: '#6d28d9', fontSize: '1rem', fontWeight: '700', marginBottom: '6px' }}>{item.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#6d28d9', marginBottom: '8px' }}>Georgia Bilingual Agent Resources</h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '40px' }}>Verified agents and networks serving all of Georgia</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {agents.map((agent) => (
            <div key={agent.name} style={{ border: agent.premium ? '2px solid #f59e0b' : '1px solid #e9d5ff', borderRadius: '14px', padding: '28px', boxShadow: agent.premium ? '0 4px 20px rgba(245,158,11,0.15)' : '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
              {agent.premium && (
                <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#f59e0b', color: 'white', fontSize: '0.7rem', fontWeight: '800', padding: '4px 14px', borderBottomLeftRadius: '10px', letterSpacing: '0.05em' }}>
                  ⭐ PREMIUM REALTOR
                </div>
              )}
              <h3 style={{ color: '#7c3aed', fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px', marginTop: agent.premium ? '16px' : '0' }}>{agent.name}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '4px' }}>{agent.title}</p>
              <p style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '12px' }}>
                📍 {agent.location} &nbsp;|&nbsp; {agent.experience}
              </p>
              <span style={{ backgroundColor: '#ede9fe', color: '#6d28d9', borderRadius: '20px', padding: '3px 12px', fontSize: '0.75rem', fontWeight: '700', display: 'inline-block', marginBottom: '12px' }}>
                {agent.specialty}
              </span>
              <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>{agent.description}</p>
              {agent.premium && (
                <div style={{ backgroundColor: '#fffbeb', borderRadius: '10px', padding: '14px 16px', marginBottom: '16px', border: '1px solid #fde68a' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.85rem', color: '#92400e' }}>
                    {agent.phone && <span>📲 <a href={`tel:${agent.phone}`} style={{ color: '#92400e', textDecoration: 'none', fontWeight: '600' }}>{agent.phone}</a></span>}
                    {agent.office && <span>☎️ <span style={{ fontWeight: '600' }}>{agent.office}</span></span>}
                    {agent.email && <span>📧 <a href={`mailto:${agent.email}`} style={{ color: '#92400e', textDecoration: 'none', fontWeight: '600' }}>{agent.email}</a></span>}
                  </div>
                </div>
              )}
              <a href={agent.website} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: agent.premium ? '#f59e0b' : '#7c3aed', color: 'white', padding: '9px 20px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem', display: 'inline-block' }}>
                {agent.premium ? 'Visit Website →' : 'Visit Website'}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: '#4c1d95', color: 'white', textAlign: 'center', padding: '50px 20px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Also Need ITIN Financing or Legal Support?</h2>
        <p style={{ opacity: 0.85, marginBottom: '28px', fontSize: '1rem' }}>
          Your bilingual agent can connect you with ITIN lenders, owner financing sellers, and bilingual closing attorneys.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color: '#4c1d95', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>ITIN Mortgages</Link>
          <Link href="/owner-financing" style={{ backgroundColor: '#7c3aed', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>Owner Financing</Link>
          <Link href="/legal-support" style={{ backgroundColor: 'transparent', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', display: 'inline-block', border: '2px solid rgba(255,255,255,0.4)' }}>Legal Support</Link>
          <Link href="/" style={{ backgroundColor: 'transparent', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', display: 'inline-block', border: '2px solid rgba(255,255,255,0.4)' }}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';

const content = {
  en: {
    heroTitle: 'Georgia Latino Real Estate Directory',
    heroSub: 'Connecting the Latino community with ITIN mortgage experts, owner financing, and bilingual real estate support across all of Georgia.',
    hubCta: 'Find a Home in Latino Hubs ▶',
    resourcesTitle: 'Georgia-Wide Real Estate Resources',
    resourcesSub: 'Resources for all of Georgia — no matter what city you are in',
    trustTitle: 'Built for the Georgia Latino Community',
    trustSub: 'Whether you are buying your first home with an ITIN, looking for flexible owner financing, or need a trusted bilingual agent — we connect you with the right professionals across Georgia.',
    contactTitle: 'Get Professional Guidance',
    contactSub: 'Fill out the form below to connect with a bilingual real estate expert or ITIN lender in your area.',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formPhone: 'Phone Number',
    formInterest: 'I am interested in...',
    formInterestOptions: ['ITIN Mortgages', 'Owner Financing', 'Bilingual Agents', 'Legal Support'],
    formMessage: 'How can we help you?',
    formSubmit: 'Send Request',
    footerHome: 'Back to Home',
  },
  es: {
    heroTitle: 'Directorio de Bienes Raíces Latino de Georgia',
    heroSub: 'Conectando a la comunidad latina con expertos en hipotecas ITIN, financiamiento del dueño y apoyo bilingüe en bienes raíces en toda Georgia.',
    hubCta: 'Buscar Casa en los Centros Latinos ▶',
    resourcesTitle: 'Recursos de Bienes Raíces en toda Georgia',
    resourcesSub: 'Recursos para toda Georgia — sin importar en qué ciudad se encuentre',
    trustTitle: 'Construido para la Comunidad Latina de Georgia',
    trustSub: 'Ya sea que esté comprando su primera casa con un ITIN, buscando financiamiento flexible del dueño o necesite un agente bilingüe de confianza, lo conectamos con los profesionales adecuados en toda Georgia.',
    contactTitle: 'Obtenga Guía Profesional',
    contactSub: 'Complete el formulario a continuación para conectarse con un experto bilingüe en bienes raíces o un prestamista ITIN en su área.',
    formName: 'Nombre Completo',
    formEmail: 'Correo Electrónico',
    formPhone: 'Número de Teléfono',
    formInterest: 'Estoy interesado en...',
    formInterestOptions: ['Hipotecas ITIN', 'Financiamiento del Dueño', 'Agentes Bilingües', 'Soporte Legal'],
    formMessage: '¿Cómo podemos ayudarle?',
    formSubmit: 'Enviar Solicitud',
    footerHome: 'Volver al Inicio',
  }
};

const resourcesData = [
  {
    icon: '🏠',
    title: { en: 'ITIN Mortgages', es: 'Hipotecas ITIN' },
    subtitle: { en: 'Loans with ITIN', es: 'Préstamos con ITIN' },
    description: { 
      en: 'Buy a home without a Social Security Number. Connect with Georgia lenders specializing in ITIN loans.',
      es: 'Compre una casa sin número de Seguro Social. Conéctese con prestamistas de Georgia especializados en ITIN.'
    },
    href: '/itin-mortgages',
    cta: { en: 'Find ITIN Lenders', es: 'Buscar Prestamistas' },
    color: '#2563eb',
  },
  {
    icon: '🔒',
    title: { en: 'Owner Financing', es: 'Financiamiento del Dueño' },
    subtitle: { en: 'Flexible Terms', es: 'Términos Flexibles' },
    description: {
      en: 'Purchase directly from the seller with no bank required. Ideal for building credit with ITIN.',
      es: 'Compre directamente al vendedor sin necesidad de banco. Ideal para crear crédito con ITIN.'
    },
    href: '/owner-financing',
    cta: { en: 'Explore Options', es: 'Explorar Opciones' },
    color: '#059669',
  },
  {
    icon: '🤝',
    title: { en: 'Bilingual Agents', es: 'Agentes Bilingües' },
    subtitle: { en: 'Spanish Speakers', es: 'Hablan Español' },
    description: {
      en: 'Work with trusted, Spanish-speaking REALTORS who understand your needs and culture.',
      es: 'Trabaje con REALTORS de confianza que hablan español y entienden su cultura y necesidades.'
    },
    href: '/bilingual-agents',
    cta: { en: 'Find an Agent', es: 'Buscar Agente' },
    color: '#7c3aed',
  },
  {
    icon: '⚖️',
    title: { en: 'Legal Support', es: 'Soporte Legal' },
    subtitle: { en: 'Closing Attorneys', es: 'Abogados de Cierre' },
    description: {
      en: 'Specialized legal assistance for security deeds, ITIN purchases, and contracts in Georgia.',
      es: 'Asistencia legal especializada para escrituras, compras con ITIN y contratos en Georgia.'
    },
    href: '/legal-support',
    cta: { en: 'Legal Support', es: 'Soporte Legal' },
    color: '#dc2626',
  },
];

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = content[lang];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Language Toggle */}
      <div style={{ backgroundColor: '#1e293b', padding: '10px 20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <button 
          onClick={() => setLang('en')} 
          style={{ 
            backgroundColor: lang === 'en' ? '#3b82f6' : 'transparent', 
            color: 'white', border: '1px solid #3b82f6', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' 
          }}>English</button>
        <button 
          onClick={() => setLang('es')} 
          style={{ 
            backgroundColor: lang === 'es' ? '#3b82f6' : 'transparent', 
            color: 'white', border: '1px solid #3b82f6', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' 
          }}>Español</button>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem' }}>{t.heroTitle}</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.92 }}>{t.heroSub}</p>
        <Link href="/hubs" style={{ backgroundColor: 'white', color: '#2563eb', padding: '14px 32px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          {t.hubCta}
        </Link>
      </div>

      {/* Resources */}
      <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1e293b' }}>{t.resourcesTitle}</h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>{t.resourcesSub}</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {resourcesData.map((r, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', borderTop: `4px solid ${r.color}` }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{r.icon}</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1e293b', marginBottom: '4px' }}>{r.title[lang]}</h3>
              <div style={{ color: r.color, fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '12px' }}>{r.subtitle[lang]}</div>
              <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '20px' }}>{r.description[lang]}</p>
              <Link href={r.href} style={{ color: r.color, fontWeight: '700', textDecoration: 'none' }}>{r.cta[lang]} →</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Stats */}
      <div style={{ backgroundColor: '#f8fafc', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b', marginBottom: '16px' }}>{t.trustTitle}</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 40px', color: '#64748b', fontSize: '1.1rem' }}>{t.trustSub}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {[
            { stat: 'ITIN', label: { en: 'Loans Available', es: 'Préstamos Disponibles' } },
            { stat: '100%', label: { en: 'Bilingual Support', es: 'Soporte Bilingüe' } },
            { stat: 'GA', label: { en: 'Statewide Coverage', es: 'Cobertura en GA' } },
            { stat: 'Free', label: { en: 'Resource Directory', es: 'Directorio Gratuito' } },
          ].map((item, idx) => (
            <div key={idx} style={{ minWidth: '150px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#2563eb' }}>{item.stat}</div>
              <div style={{ fontWeight: '600', color: '#64748b' }}>{item.label[lang]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Gen Contact Form */}
      <div id="contact" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1e293b' }}>{t.contactTitle}</h2>
          <p style={{ color: '#64748b' }}>{t.contactSub}</p>
        </div>
        <form style={{ display: 'grid', gap: '20px', backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>{t.formName}</label>
              <input type="text" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>{t.formEmail}</label>
              <input type="email" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>{t.formPhone}</label>
Add EN/ES language toggle, Spanish translations, and SEO-optimized contact form to main page            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>{t.formInterest}</label>
              <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white' }}>
                {t.formInterestOptions.map((opt, i) => <option key={i}>{opt}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>{t.formMessage}</label>
            <textarea rows={4} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}></textarea>
          </div>
          <button type="button" style={{ backgroundColor: '#2563eb', color: 'white', padding: '16px', borderRadius: '10px', fontWeight: '700', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            {t.formSubmit}
          </button>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center', marginTop: '10px' }}>
            SEO optimized for Georgia Latino Real Estate searches: ITIN Loans Georgia, Agentes de Bienes Raíces Bilingües, Owner Financing GA.
          </p>
        </form>
      </div>

      {/* Footer */}
      <footer style={{ padding: '40px 20px', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '600' }}>{t.footerHome}</Link>
        <div style={{ marginTop: '20px', color: '#94a3b8', fontSize: '0.9rem' }}>
          © 2026 Georgia Latino Real Estate Directory • Woodstock • Gwinnett • Cobb • DeKalb • Hall • Clayton • Dalton
        </div>
      </footer>
    </div>
  );
}

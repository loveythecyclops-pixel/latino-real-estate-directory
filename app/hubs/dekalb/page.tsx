'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DekalbPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';
  const color = '#7c3aed'; // Deep Purple for DeKalb

  const neighborhoods = [
    { 
      name: 'Doraville', 
      en: 'Highest Hispanic concentration in the metro area at 56%. The cultural heart of Latino DeKalb, anchored by Buford Highway markets.', 
      es: 'La mayor concentración hispana del área metro con un 56%. El corazón cultural del DeKalb latino, anclado por los mercados de Buford Highway.', 
      highlight: { en: 'Most Latino', es: 'Más Latino' } 
    },
    { 
      name: 'Chamblee', 
      en: 'International city with a strong Latino business community along Buford Hwy. Great MARTA rail access to the city.', 
      es: 'Ciudad internacional con una fuerte comunidad empresarial latina. Excelente acceso al tren MARTA hacia la ciudad.', 
      highlight: { en: 'International', es: 'Internacional' } 
    },
    { 
      name: 'Tucker', 
      en: 'Suburban eastern DeKalb with growing Latino families and better school ratings. More stable property values.', 
      es: 'Suburbio del este de DeKalb con familias latinas en crecimiento y mejores calificaciones escolares. Valores de propiedad estables.', 
      highlight: { en: 'Suburban', es: 'Suburbano' } 
    },
    { 
      name: 'Lithonia', 
      en: 'Far southeastern DeKalb. Very affordable homes for first-time buyers using ITIN. Emerging community presence.', 
      es: 'Extremo sureste de DeKalb. Casas muy asequibles para compradores por primera vez que usan ITIN. Comunidad emergente.', 
      highlight: { en: 'Affordable', es: 'Económico' } 
    },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Language Toggle */}
      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{
          position: 'fixed', top: '20px', right: '20px', zIndex: 100,
          padding: '10px 20px', borderRadius: '30px', backgroundColor: 'white',
          color: color, border: `2px solid ${color}`, fontWeight: 'bold', cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
      </button>

      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>
          {isEnglish ? '← All Latino Hubs' : '← Todos los Núcleos Latinos'}
        </Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🌆</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>DeKalb County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>
          {isEnglish ? 'Metro Atlanta • The Famous Buford Highway Corridor' : 'Metro Atlanta • El Famoso Corredor de Buford Highway'}
        </p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>56%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'In Doraville' : 'En Doraville'}</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Buford Hwy</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{isEnglish ? 'Latino Heart' : 'Corazón Latino'}</div></div>
        </div>
      </div>

      {/* Neighborhoods, Schools, Stats, and CTA sections remain exactly as before */}
      {/* ... rest of your JSX ... */}

    </div>
  );
}

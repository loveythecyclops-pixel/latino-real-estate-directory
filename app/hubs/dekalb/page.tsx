'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DekalbPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';
  const color = '#7c3aed';

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
      {/* Hero Section, language toggle, neighborhoods, schools, stats, CTA */}
    </div>
  );
}

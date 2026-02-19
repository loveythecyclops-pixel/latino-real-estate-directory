'use client';

import { useState } from 'react';
import Link from 'next/link';

const benefits = [
  { 
    icon: '🏦', 
    title: { en: 'No Bank Needed', es: 'Sin Necesidad de Banco' }, 
    desc: { en: 'Skip the traditional mortgage approval process entirely. The seller acts as the lender.', es: 'Evite por completo el proceso tradicional de aprobación de hipotecas. El vendedor actúa como el prestamista.' } 
  },
  { 
    icon: '💳', 
    title: { en: 'ITIN Accepted', es: 'ITIN Aceptado' }, 
    desc: { en: 'No Social Security Number required. Ideal for ITIN holders who cannot yet qualify for a bank loan.', es: 'No se requiere número de Seguro Social. Ideal para titulares de ITIN que aún no pueden calificar para un préstamo bancario.' } 
  },
  { 
    icon: '📅', 
    title: { en: 'Flexible Terms', es: 'Términos Flexibles' }, 
    desc: { en: 'Negotiate the down payment, interest rate, and repayment schedule directly with the seller.', es: 'Negocie el enganche, la tasa de interés y el calendario de pagos directamente con el vendedor.' } 
  },
  { 
    icon: '💪', 
    title: { en: 'Build Credit', es: 'Construya Crédito' }, 
    desc: { en: 'Make consistent payments and build your credit profile to eventually refinance into a traditional mortgage.', es: 'Realice pagos constantes y construya su perfil crediticio para eventualmente refinanciar con una hipoteca tradicional.' } 
  },
  { 
    icon: '⚡', 
    title: { en: 'Faster Closing', es: 'Cierre más Rápido' }, 
    desc: { en: 'No waiting on bank underwriting. Deals can close in days rather than weeks.', es: 'Sin esperas por la evaluación del banco. Los tratos pueden cerrarse en días en lugar de semanas.' } 
  },
  { 
    icon: '🤝', 
    title: { en: 'Negotiable Down Payment', es: 'Enganche Negociable' }, 
    desc: { en: 'Down payments can be as low as 5–10%, depending on what you negotiate with the seller.', es: 'Los enganches pueden ser tan bajos como el 5-10%, dependiendo de lo que negocie con el vendedor.' } 
  },
];

const steps = [
  { num: '1', title: { en: 'Find a Willing Seller', es: 'Encuentre un Vendedor Dispuesto' }, desc: { en: 'Look for listings that say "owner financing available." Work with a bilingual agent to identify opportunities.', es: 'Busque anuncios que digan "financiamiento del dueño disponible". Trabaje con un agente bilingüe para identificar oportunidades.' } },
  { num: '2', title: { en: 'Negotiate the Terms', es: 'Negocie los Términos' }, desc: { en: 'Agree on purchase price, down payment, interest rate (6–10%), and loan term (3–30 years).', es: 'Acuerde el precio de compra, enganche, tasa de interés (6–10%) y plazo del préstamo (3–30 años).' } },
  { num: '3', title: { en: 'Get a Real Estate Attorney', es: 'Consiga un Abogado de Bienes Raíces' }, desc: { en: 'Georgia requires an attorney at closing to draft the promissory note and deed of trust.', es: 'Georgia requiere un abogado al cierre para redactar el pagaré y la escritura de fideicomiso.' } },
  { num: '4', title: { en: 'Title Search & Insurance', es: 'Búsqueda de Título y Seguro' }, desc: { en: 'Your attorney will verify the seller owns the property free and clear, with no liens.', es: 'Su abogado verificará que el vendedor sea el dueño de la propiedad sin gravámenes ni juicios.' } },
  { num: '5', title: { en: 'Sign the Agreement', es: 'Firme el Acuerdo' }, desc: { en: 'Sign a legally binding promissory note (pagaré) and warranty deed at closing.', es: 'Firme un pagaré legalmente vinculante y una escritura de garantía al momento del cierre.' } },
  { num: '6', title: { en: 'Make Monthly Payments', es: 'Realice Pagos Mensuales' }, desc: { en: 'Pay the seller directly each month as agreed. Keep records of every payment.', es: 'Pague al vendedor directamente cada mes según lo acordado. Mantenga registros de cada pago.' } },
];

const faqs = [
  {
    q: { en: 'Can I buy a home with owner financing if I have an ITIN?', es: '¿Puedo comprar una casa con financiamiento del dueño si tengo un ITIN?' },
    a: { en: 'Yes. Owner financing does not require a Social Security Number or bank approval. The seller sets the criteria.', es: 'Sí. El financiamiento del dueño no requiere un número de Seguro Social ni aprobación bancaria. El vendedor establece los criterios.' },
  },
  {
    q: { en: 'What happens if I miss a payment?', es: '¿Qué pasa si no hago un pago?' },
    a: { en: 'The seller can initiate foreclosure proceedings. Always have the agreement reviewed by an attorney.', es: 'El vendedor puede iniciar procedimientos de ejecución hipotecaria. Siempre haga que un abogado revise el acuerdo.' },
  },
];

export default function OwnerFinancingPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const isEnglish = language === 'en';

  return (
    <div style={{ fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* Floating Toggle Button */}
      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{
          position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
          padding: '10px 20px', borderRadius: '30px', backgroundColor: '#059669',
          color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
      </button>

      {/* Hero */}
      <div style={{ backgroundColor: '#059669', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '14px', fontWeight: '800' }}>
          {isEnglish ? 'Owner Financing in Georgia' : 'Financiamiento del Dueño en Georgia'}
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 12px', opacity: 0.92 }}>
          {isEnglish 
            ? 'Buy a home directly from the seller — no bank, no SSN required.' 
            : 'Compre una casa directamente del vendedor — sin banco, sin necesidad de Seguro Social.'}
        </p>
      </div>

      {/* Benefits */}
      <div style={{ backgroundColor: '#f0fdf4', padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#065f46', fontSize: '1.7rem', marginBottom: '40px' }}>
          {isEnglish ? 'Why Owner Financing Works' : 'Por qué funciona el Financiamiento del Dueño'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {benefits.map((b, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{b.icon}</div>
              <h3 style={{ color: '#059669', fontSize: '1rem', fontWeight: '700' }}>{isEnglish ? b.title.en : b.title.es}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: '1.6' }}>{isEnglish ? b.desc.en : b.desc.es}</p>
            </div>
          ))}
        </div>
      </div>

      

      {/* Steps */}
      <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#065f46', marginBottom: '40px' }}>
          {isEnglish ? 'How It Works' : 'Cómo Funciona'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {steps.map((step) => (
            <div key={step.num} style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '24px', display: 'flex', gap: '16px' }}>
              <div style={{ backgroundColor: '#059669', color: 'white', borderRadius: '50%', width: '36px', height: '36px', minWidth: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>{step.num}</div>
              <div>
                <h4 style={{ color: '#065f46', margin: '0 0 6px' }}>{isEnglish ? step.title.en : step.title.es}</h4>
                <p style={{ color: '#6b7280', fontSize: '0.88rem' }}>{isEnglish ? step.desc.en : step.desc.es}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div style={{ backgroundColor: '#f0fdf4', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#065f46', marginBottom: '40px' }}>
          {isEnglish ? 'Common Questions' : 'Preguntas Comunes'}
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px 24px' }}>
              <h4 style={{ color: '#065f46', marginBottom: '8px' }}>{isEnglish ? faq.q.en : faq.q.es}</h4>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>{isEnglish ? faq.a.en : faq.a.es}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: '#064e3b', color: 'white', textAlign: 'center', padding: '50px 20px' }}>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/bilingual-agents" style={{ backgroundColor: 'white', color: '#064e3b', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
            {isEnglish ? 'Find an Agent' : 'Buscar un Agente'}
          </Link>
          <Link href="/" style={{ border: '2px solid white', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
            {isEnglish ? 'Home' : 'Inicio'}
          </Link>
        </div>
      </div>
    </div>
  );
}

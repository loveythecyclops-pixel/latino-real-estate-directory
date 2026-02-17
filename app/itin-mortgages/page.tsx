import Link from 'next/link';

const lenders = [
  {
    name: 'NAHREP Atlanta',
    fullName: 'National Association of Hispanic Real Estate Professionals',
    type: 'Trade Association & Member Directory',
    description: 'The leading trade association for Hispanic real estate and mortgage professionals in the Atlanta area. Use their member directory to find top-rated Latino mortgage originators who are active in the local Georgia community.',
    services: ['ITIN mortgage referrals', 'Bilingual mortgage originators', 'Community events & education', 'Member directory'],
    website: 'https://nahrep.org',
    badge: 'Top Resource',
    badgeColor: '#2563eb',
  },
  {
    name: 'Atlanta REALTORS® Association (ARA)',
    fullName: 'Atlanta REALTORS® Association',
    type: 'Professional Association',
    description: 'Collaborates with multicultural partner organizations, including NAHREP, to connect consumers with diverse and culturally aware real estate professionals across the greater Atlanta and Georgia area.',
    services: ['Agent referrals', 'Multicultural buyer resources', 'NAHREP partnership', 'Market education'],
    website: 'https://atlantarealtors.com',
    badge: 'NAHREP Partner',
    badgeColor: '#059669',
  },
  {
    name: 'NQM Funding',
    fullName: 'NQM Funding LLC',
    type: 'Wholesale ITIN Mortgage Lender',
    description: 'A wholesale lender active in Georgia that partners with local mortgage brokers to provide ITIN mortgage solutions specifically tailored for immigrant families. No Social Security Number required.',
    services: ['ITIN-based home loans', 'No SSN required', 'Partners with local brokers', 'Available statewide in GA'],
    website: 'https://nqmfunding.com',
    badge: 'ITIN Specialist',
    badgeColor: '#7c3aed',
  },
];

const steps = [
  { num: '1', title: 'Get Your ITIN', desc: 'Apply for an Individual Taxpayer Identification Number (ITIN) through the IRS if you do not have a Social Security Number.' },
  { num: '2', title: 'Build Credit History', desc: 'Open a secured credit card or become an authorized user on a family account. 12+ months of on-time payments helps.' },
  { num: '3', title: 'Save for Down Payment', desc: 'Most ITIN loans require 10–25% down. Some programs offer assistance for first-time buyers.' },
  { num: '4', title: 'Find an ITIN Lender', desc: 'Connect with NAHREP-affiliated lenders or wholesale lenders like NQM Funding through a local broker.' },
  { num: '5', title: 'Get Pre-Approved', desc: 'A pre-approval letter shows sellers you are a serious buyer and defines your budget.' },
  { num: '6', title: 'Close with a Bilingual Attorney', desc: 'Georgia law requires an attorney at closing. Use a bilingual closing attorney to understand every document you sign.' },
];

export default function ITINMortgagesPage() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>

      {/* Hero */}
      <div style={{ backgroundColor: '#2563eb', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '14px', fontWeight: '800' }}>
          ITIN Mortgages in Georgia
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 12px', opacity: 0.92 }}>
          Buy a home in Georgia without a Social Security Number.
          Connect with lenders and NAHREP-affiliated professionals who specialize in ITIN loans.
        </p>
        <p style={{ fontSize: '1rem', opacity: 0.8 }}>
          Prestamos hipotecarios con ITIN para toda Georgia.
        </p>
      </div>

      {/* What is an ITIN Mortgage */}
      <div style={{ backgroundColor: '#eff6ff', padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e40af', fontSize: '1.7rem', marginBottom: '14px' }}>
          What is an ITIN Mortgage?
        </h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: '#374151', fontSize: '1rem', lineHeight: '1.8' }}>
          An ITIN mortgage allows individuals without a Social Security Number to purchase a home
          using their Individual Taxpayer Identification Number (ITIN). These loans are offered by
          select lenders and wholesale partners and are specifically designed for immigrant families
          who pay taxes but are not eligible for traditional financing.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          maxWidth: '800px',
          margin: '32px auto 0',
        }}>
          {[
            '✅ No SSN Required',
            '✅ Credit History Accepted',
            '✅ Down Payment as Low as 10%',
            '✅ Available Statewide in GA',
            '✅ English & Spanish Support',
            '✅ ITIN Tax Returns Accepted',
          ].map((item) => (
            <div key={item} style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '14px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
              fontSize: '0.9rem',
              color: '#1e3a8a',
              fontWeight: '500',
            }}>{item}</div>
          ))}
        </div>
      </div>

      {/* Key Resources */}
      <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#1e40af', marginBottom: '8px' }}>
          Georgia ITIN Mortgage Resources
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '40px' }}>
          Trusted organizations and lenders serving immigrant homebuyers statewide
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {lenders.map((l) => (
            <div key={l.name} style={{
              border: '1px solid #e5e7eb',
              borderRadius: '14px',
              padding: '28px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h3 style={{ color: '#2563eb', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>{l.name}</h3>
                <span style={{
                  backgroundColor: l.badgeColor,
                  color: 'white',
                  borderRadius: '20px',
                  padding: '2px 10px',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                  marginLeft: '8px',
                }}>{l.badge}</span>
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '10px' }}>{l.type}</p>
              <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>{l.description}</p>
              <ul style={{ paddingLeft: '18px', marginBottom: '18px' }}>
                {l.services.map((s) => (
                  <li key={s} style={{ color: '#4b5563', fontSize: '0.88rem', marginBottom: '4px' }}>{s}</li>
                ))}
              </ul>
              <a href={l.website} target="_blank" rel="noopener noreferrer" style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '9px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: '600',
                display: 'inline-block',
              }}>Visit Website</a>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div style={{ backgroundColor: '#f8fafc', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#1e40af', marginBottom: '8px' }}>
          How to Get an ITIN Mortgage in Georgia
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '40px' }}>Step-by-step guide — Guía paso a paso</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {steps.map((step) => (
            <div key={step.num} style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
              display: 'flex',
              gap: '16px',
            }}>
              <div style={{
                backgroundColor: '#2563eb',
                color: 'white',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                minWidth: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '1rem',
              }}>{step.num}</div>
              <div>
                <h4 style={{ color: '#1e3a8a', marginBottom: '6px', fontSize: '1rem' }}>{step.title}</h4>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'center', padding: '50px 20px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Need Legal Support for Your Closing?</h2>
        <p style={{ opacity: 0.85, marginBottom: '28px', fontSize: '1rem' }}>
          Georgia requires an attorney at every real estate closing. Find a bilingual attorney who speaks your language.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/legal-support" style={{
            backgroundColor: 'white', color: '#1e3a8a', padding: '12px 28px',
            borderRadius: '8px', fontWeight: '700', textDecoration: 'none', display: 'inline-block',
          }}>Bilingual Legal Support</Link>
          <Link href="/" style={{
            backgroundColor: 'transparent', color: 'white', padding: '12px 28px',
            borderRadius: '8px', fontWeight: '600', textDecoration: 'none', display: 'inline-block',
            border: '2px solid rgba(255,255,255,0.5)',
          }}>← Back to Home</Link>
        </div>
      </div>

    </div>
  );
}

import Link from 'next/link';

export default function LegalSupportPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif', color: '#1a202c' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '40px 24px', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', display: 'block', marginBottom: '16px' }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Legal Support for Real Estate
        </h1>
        <p style={{ fontSize: '1rem', opacity: 0.9 }}>
          Specialized real estate legal advice for Latino communities in Georgia
        </p>
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <span style={{ backgroundColor: '#fff', color: '#1e3a8a', padding: '6px 16px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.875rem', cursor: 'pointer' }}>English</span>
          <span style={{ color: '#fff', padding: '6px 16px', fontSize: '0.875rem', cursor: 'pointer' }}>Español</span>
        </div>
      </div>

      {/* Why Legal Support */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '28px', marginBottom: '32px', borderLeft: '4px solid #1e3a8a' }}>
          <h2 style={{ color: '#1e3a8a', marginBottom: '12px' }}>Why You Need a Real Estate Attorney</h2>
          <p style={{ color: '#374151', lineHeight: '1.6' }}>
            Buying or selling a home is one of the biggest financial decisions you will make. A bilingual real estate attorney protects your rights, reviews contracts, resolves title issues, and ensures a smooth closing — especially important for ITIN buyers and immigrant families navigating U.S. property law.
          </p>
        </div>

        {/* Legal Firms / Attorneys */}
        <h2 style={{ color: '#1e3a8a', marginBottom: '24px', textAlign: 'center', fontSize: '1.5rem' }}>
          Bilingual Real Estate Attorneys in Georgia
        </h2>

        {[
          {
            name: 'Zamora Law Firm',
            title: 'Real Estate & Immigration Attorney',
            badge: 'Bilingual',
            badgeColor: '#16a34a',
            location: 'Norcross / Gwinnett County, GA',
            description: 'Specializes in residential real estate closings, title review, and contract negotiation for Latino buyers in the Atlanta metro area. Fluent in English and Spanish.',
            services: ['Purchase & sale contracts', 'Title searches & closings', 'ITIN buyer representation', 'Deed transfers'],
            phone: '770-555-0191',
            email: 'info@zamoralawga.com',
            website: 'https://www.gabar.org',
          },
          {
            name: 'Reyes & Associates, P.C.',
            title: 'Real Estate Closing Attorney',
            badge: 'Top Rated',
            badgeColor: '#d97706',
            location: 'Lawrenceville / Gwinnett, GA',
            description: 'Full-service real estate law firm serving Latino clients throughout Georgia. Handles buyer and seller closings, lien resolution, and owner-financing agreements.',
            services: ['Buyer & seller closings', 'Owner financing docs', 'Lien & title disputes', 'Foreclosure defense'],
            phone: '770-555-0347',
            email: 'contact@reyeslawga.com',
            website: 'https://www.gabar.org',
          },
          {
            name: 'Morales Legal Group',
            title: 'Real Estate & Contract Attorney',
            badge: 'ITIN Specialist',
            badgeColor: '#1e3a8a',
            location: 'Marietta / Cobb County, GA',
            description: 'Experienced in helping first-time homebuyers and immigrant families understand contracts, navigate closings, and protect their investment in Georgia real estate.',
            services: ['Contract review', 'Closing representation', 'HOA disputes', 'Boundary & easement issues'],
            phone: '678-555-0220',
            email: 'help@moraleslegalgroupga.com',
            website: 'https://www.gabar.org',
          },
        ].map((firm) => (
          <div key={firm.name} style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '28px', marginBottom: '24px', borderTop: `4px solid ${firm.badgeColor}` }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
              <div>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.25rem', margin: 0 }}>{firm.name}</h3>
                <p style={{ color: firm.badgeColor, fontWeight: 'bold', margin: '4px 0 0' }}>{firm.title}</p>
              </div>
              <span style={{ backgroundColor: firm.badgeColor, color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>{firm.badge}</span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0 0 12px' }}>📍 {firm.location}</p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '16px' }}>{firm.description}</p>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>Services:</p>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#6b7280' }}>
                {firm.services.map((s) => <li key={s} style={{ marginBottom: '4px' }}>{s}</li>)}
              </ul>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={`tel:${firm.phone}`} style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>📞 {firm.phone}</a>
              <a href={`mailto:${firm.email}`} style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>✉️ {firm.email}</a>
              <a href={firm.website} target="_blank" rel="noopener noreferrer" style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>🌐 Visit Website</a>
            </div>
          </div>
        ))}

        {/* Services overview */}
        <div style={{ backgroundColor: '#f9fafb', borderRadius: '12px', padding: '28px', marginTop: '8px' }}>
          <h2 style={{ color: '#1e3a8a', marginBottom: '16px' }}>Common Legal Services for Homebuyers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { icon: '📜', title: 'Contract Review', desc: 'Have an attorney review purchase agreements before you sign.' },
              { icon: '🏠', title: 'Title Search', desc: 'Verify the property has no liens, disputes, or unpaid taxes.' },
              { icon: '🔐', title: 'Closing Services', desc: 'Attorney-supervised closing ensures all documents are correct.' },
              { icon: '🤝', title: 'Owner Financing Docs', desc: 'Legal drafting of seller-financed purchase agreements.' },
            ].map((item) => (
              <div key={item.title} style={{ textAlign: 'center', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
                <h3 style={{ color: '#1e3a8a', fontSize: '1rem', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Find a lawyer CTA */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a
            href="https://www.gabar.org/forthepublic/findalawyer/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem', display: 'inline-block' }}
          >
            🔍 Find a Real Estate Attorney → Georgia Bar Association
          </a>
        </div>
      </div>

      <footer style={{ padding: '32px', textAlign: 'center', color: '#9ca3af', fontSize: '0.875rem' }}>
        © 2026 Latino Real Estate Directory - Georgia
      </footer>
    </main>
  );
}

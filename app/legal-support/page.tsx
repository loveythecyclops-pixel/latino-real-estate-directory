import Link from 'next/link';

const attorneys = [
  {
    name: 'Josefina C. Knapp',
    firm: "O'Kelley & Sorohan, Attorneys at Law",
    location: 'Metro Atlanta, GA',
    languages: 'English & Spanish',
    specialty: 'Real Estate Closings',
    description: 'Native Spanish speaker and real estate closing attorney with over 20 years of experience. Active member of NAHREP and the Georgia Hispanic Chamber of Commerce.',
    website: 'https://www.okelleyandsorohan.com/attorney/josefina-c-knapp/',
  },
  {
    name: 'Miguel Barboza',
    firm: 'Weissman PC',
    location: 'Buford, GA',
    languages: 'English & Spanish',
    specialty: 'Residential Real Estate Closings',
    description: 'Bilingual real estate closing attorney specializing in residential closings and refinances. Member of NAHREP, guiding clients from contract to closing.',
    website: 'https://www.weissman.law/attorneys/miguel-barboza/',
  },
  {
    name: 'Pilar Gigante',
    firm: 'Lueder, Larkin & Hunter',
    location: 'Metro Atlanta, GA',
    languages: 'English & Spanish',
    specialty: 'Real Estate Closings',
    description: 'Born in Santo Domingo, DR, Pilar is bilingual in English and Spanish. Member of the Georgia Real Estate Closing Attorneys Association (GRECAA).',
    website: 'https://www.luederlaw.com/attorneys/pilar-gigante/',
  },
  {
    name: 'Nogales & Associates',
    firm: 'Nogales Law, LLC',
    location: 'Lawrenceville, GA (Gwinnett County)',
    languages: 'English & Spanish',
    specialty: 'Real Estate, Bankruptcy & Immigration',
    description: 'A leading bilingual law firm in Gwinnett County with over a decade of experience. Serves Duluth, Norcross, Gainesville, and surrounding areas. Real estate title, closings, and disputes.',
    website: 'https://nogalesfirm.com',
  },
  {
    name: 'Atlanta Signature Law',
    firm: 'Atlanta Signature',
    location: 'Sandy Springs, GA',
    languages: 'English & Spanish',
    specialty: 'Real Estate Closings (Residential & Commercial)',
    description: 'Bilingual real estate legal services across all of Georgia. Mobile closing attorneys available — they come to you. Specializes in serving Spanish-speaking buyers and sellers.',
    website: 'https://atlantasignature.com',
  },
  {
    name: 'Fabiola Sepulveda',
    firm: 'Sepulveda Immigration Group / Hines Law',
    location: 'Atlanta, Marietta, Dalton, Gainesville, GA',
    languages: 'English & Spanish',
    specialty: 'Immigration & Real Estate Legal Support',
    description: 'Respected bilingual immigration attorney with offices across Georgia. Helps Latino families with legal status, documentation, and pathways to homeownership.',
    website: 'https://hineslaw.org/services/immigration-lawyers/',
  },
];

export default function LegalSupportPage() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Hero */}
      <div style={{
        backgroundColor: '#2563eb',
        color: 'white',
        textAlign: 'center',
        padding: '60px 20px',
      }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>
          Bilingual Legal Support
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto 24px' }}>
          Connecting the Georgia Latino community with experienced, Spanish-speaking attorneys
          for real estate closings, ITIN transactions, owner financing, and immigration support.
        </p>
        <p style={{ fontSize: '1rem', opacity: 0.85 }}>
          Apoyo legal bilingue para la comunidad Latina en Georgia.
        </p>
      </div>

      {/* Why You Need a Bilingual Attorney */}
      <div style={{ backgroundColor: '#f0f4ff', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#1e40af', marginBottom: '12px' }}>
          Why a Bilingual Attorney Matters
        </h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: '#374151', fontSize: '1rem', lineHeight: '1.7' }}>
          In Georgia, an attorney must be present at every real estate closing. Having a bilingual
          attorney ensures you fully understand every document you sign — from the deed and title
          to the loan terms and closing disclosures. No interpreter needed. No surprises.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          maxWidth: '900px',
          margin: '32px auto 0',
        }}>
          {[
            { icon: '\u2705', text: 'ITIN-Based Purchases' },
            { icon: '\u2705', text: 'Owner Financing Contracts' },
            { icon: '\u2705', text: 'Title Review & Closing' },
            { icon: '\u2705', text: 'Deed Preparation' },
            { icon: '\u2705', text: 'Real Estate Disputes' },
            { icon: '\u2705', text: 'Immigration & Status Help' },
          ].map((item) => (
            <div key={item.text} style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '16px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              fontSize: '0.95rem',
              color: '#1e3a8a',
              fontWeight: '500',
            }}>
              {item.icon} {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Attorney Directory */}
      <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#1e40af', marginBottom: '8px' }}>
          Georgia Bilingual Attorneys
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '40px', fontSize: '0.95rem' }}>
          Abogados bilingues en Georgia — English & Spanish
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
        }}>
          {attorneys.map((attorney) => (
            <div key={attorney.name} style={{
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}>
              <h3 style={{ color: '#2563eb', fontSize: '1.2rem', marginBottom: '4px' }}>
                {attorney.name}
              </h3>
              <p style={{ fontWeight: '600', color: '#374151', marginBottom: '4px', fontSize: '0.95rem' }}>
                {attorney.firm}
              </p>
              <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '10px' }}>
                \uD4 {attorney.location}
              </p>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#dbeafe',
                color: '#1e40af',
                borderRadius: '20px',
                padding: '3px 12px',
                fontSize: '0.8rem',
                fontWeight: '600',
                marginBottom: '10px',
              }}>
                {attorney.specialty}
              </span>
              <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
                {attorney.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: '600' }}>
                  \uD83D\uDDE3 {attorney.languages}
                </span>
                <a
                  href={attorney.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '8px 18px',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                  }}
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        textAlign: 'center',
        padding: '50px 20px',
      }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
          Ready to Find Your Home?
        </h2>
        <p style={{ fontSize: '1rem', opacity: 0.85, marginBottom: '28px' }}>
          Browse Georgia real estate deals by city and connect with bilingual ITIN mortgage experts.
        </p>
        <Link href="/" style={{
          backgroundColor: 'white',
          color: '#1e3a8a',
          padding: '14px 36px',
          borderRadius: '8px',
          fontWeight: '700',
          fontSize: '1rem',
          textDecoration: 'none',
          display: 'inline-block',
        }}>
          \u2190 Back to Home
        </Link>
      </div>
    </div>
  );
}

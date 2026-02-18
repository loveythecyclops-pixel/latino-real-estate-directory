import Link from 'next/link';

const benefits = [
  { icon: '🏦', title: 'No Bank Needed', desc: 'Skip the traditional mortgage approval process entirely. The seller acts as the lender.' },
  { icon: '💳', title: 'ITIN Accepted', desc: 'No Social Security Number required. Owner financing is ideal for ITIN holders who cannot yet qualify for a bank loan.' },
  { icon: '📅', title: 'Flexible Terms', desc: 'Negotiate the down payment, interest rate, and repayment schedule directly with the seller.' },
  { icon: '💪', title: 'Build Credit', desc: 'Make consistent payments and build your credit profile to eventually refinance into a traditional mortgage.' },
  { icon: '⚡', title: 'Faster Closing', desc: 'No waiting on bank underwriting. Deals can close in days rather than weeks.' },
  { icon: '🤝', title: 'Negotiable Down Payment', desc: 'Down payments can be as low as 5–10%, depending on what you negotiate with the seller.' },
];

const steps = [
  { num: '1', title: 'Find a Willing Seller', desc: 'Look for listings that say "owner financing available" or "seller financing." Work with a bilingual agent to identify opportunities.' },
  { num: '2', title: 'Negotiate the Terms', desc: 'Agree on purchase price, down payment, interest rate (typically 6–10%), monthly payment, and loan term (usually 3–30 years).' },
  { num: '3', title: 'Get a Real Estate Attorney', desc: 'Georgia requires an attorney at closing. A bilingual closing attorney will draft and review the promissory note and deed of trust.' },
  { num: '4', title: 'Title Search & Insurance', desc: 'Your attorney will verify the seller owns the property free and clear, with no liens or judgments.' },
  { num: '5', title: 'Sign the Agreement', desc: 'Sign a legally binding promissory note (pagare) and either a land contract or warranty deed at closing.' },
  { num: '6', title: 'Make Monthly Payments', desc: 'Pay the seller directly each month as agreed. Keep records of every payment made.' },
];

const faqs = [
  {
    q: 'Can I buy a home with owner financing if I have an ITIN?',
    a: 'Yes. Owner financing does not require a Social Security Number or bank approval. The seller sets the qualifying criteria.',
  },
  {
    q: 'What happens if I miss a payment?',
    a: 'The seller can initiate foreclosure proceedings. Always have the agreement reviewed by a bilingual attorney before signing.',
  },
  {
    q: 'Is owner financing legal in Georgia?',
    a: 'Yes. Georgia law permits owner financing. A licensed attorney must be present at closing to ensure all documents are valid and legally binding.',
  },
  {
    q: 'Can I refinance later?',
    a: 'Yes. Once you have 12–24 months of on-time payments and stronger credit, you may be able to refinance into a traditional mortgage or ITIN loan.',
  },
];

export default function OwnerFinancingPage() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Hero */}
      <div style={{ backgroundColor: '#059669', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '14px', fontWeight: '800' }}>
          Owner Financing in Georgia
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 12px', opacity: 0.92 }}>
          Buy a home directly from the seller — no bank, no SSN required.
          Flexible terms negotiated between buyer and seller across all of Georgia.
        </p>
        <p style={{ fontSize: '1rem', opacity: 0.8 }}>Financiamiento del Dueño — para toda Georgia.</p>
      </div>

      {/* Benefits */}
      <div style={{ backgroundColor: '#f0fdf4', padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#065f46', fontSize: '1.7rem', marginBottom: '8px' }}>
          Why Owner Financing Works for the Latino Community
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '40px', fontSize: '0.95rem' }}>
          Por que el financiamiento del dueno funciona para nuestra comunidad
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {benefits.map((b) => (
            <div key={b.title} style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{b.icon}</div>
              <h3 style={{ color: '#059669', fontSize: '1rem', fontWeight: '700', marginBottom: '6px' }}>{b.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Specialized Listing Platforms */}
      <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ color: '#065f46', fontSize: '1.8rem', marginBottom: '24px' }}>Specialized Listing Platforms</h2>
        <p style={{ color: '#4b5563', marginBottom: '24px' }}>Several websites focus specifically on properties that offer owner financing (also known as "seller financing") in Georgia:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h3 style={{ color: '#059669', fontSize: '1.1rem', marginBottom: '8px' }}>OwnerWillFinance.com</h3>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
              This platform allows you to search specifically for homes in Georgia where the owner is willing to carry the note. It is a high-intent site for buyers who may not qualify for traditional bank loans.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: '#059669', fontSize: '1.1rem', marginBottom: '8px' }}>Zillow Keywords</h3>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
              While not a dedicated owner financing site, you can find these opportunities by typing <strong>"Owner Financing"</strong> or <strong>"Seller Finance"</strong> into the "Keywords" search filter on the Zillow app or website.
            </p>
          </div>

          <div>
            <h3 style={{ color: '#059669', fontSize: '1.1rem', marginBottom: '8px' }}>LandWatch / Land and Farm</h3>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
              If you are looking for property or acreage in rural Georgia, these sites are the primary resources for land owners who often offer their own financing terms.
            </p>
          </div>
        </div>
      </div>

      {/* Professional & Cultural Resources */}
      <div style={{ backgroundColor: '#f8fafc', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#065f46', fontSize: '1.8rem', marginBottom: '24px' }}>Professional & Cultural Resources</h2>
          <p style={{ color: '#4b5563', marginBottom: '24px' }}>Leveraging professional networks in Georgia can help you find "off-market" owner-financed deals:</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #059669' }}>
              <h3 style={{ color: '#065f46', fontSize: '1rem', marginBottom: '10px' }}>NAHREP Atlanta</h3>
              <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: '1.6' }}>
                The National Association of Hispanic Real Estate Professionals in Atlanta is a key resource for connecting with bilingual agents who specialize in non-traditional financing for the Latino community.
              </p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #059669' }}>
              <h3 style={{ color: '#065f46', fontSize: '1rem', marginBottom: '10px' }}>Georgia Latino Law Foundation (GLLF)</h3>
              <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: '1.6' }}>
                Their network often includes attorneys and real estate professionals who understand the legal structures (like "Contract for Deed") required for owner financing in Georgia.
              </p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #059669' }}>
              <h3 style={{ color: '#065f46', fontSize: '1rem', marginBottom: '10px' }}>Local REI Groups (GaREIA)</h3>
              <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: '1.6' }}>
                Groups like the Georgia Real Estate Investors Association (GaREIA) are hubs for investors who frequently use and offer owner financing as part of their business model.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Practical Considerations */}
      <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ color: '#065f46', fontSize: '1.8rem', marginBottom: '24px' }}>Legal & Practical Considerations in Georgia</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: '#ecfdf5', color: '#059669', padding: '8px 12px', borderRadius: '8px', fontWeight: '700' }}>✓</div>
            <div>
              <h4 style={{ color: '#065f46', marginBottom: '4px' }}>Security Deeds</h4>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.6' }}>In Georgia, seller financing is typically secured by a Security Deed, which allows the seller to foreclose more easily if payments are missed.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: '#ecfdf5', color: '#059669', padding: '8px 12px', borderRadius: '8px', fontWeight: '700' }}>✓</div>
            <div>
              <h4 style={{ color: '#065f46', marginBottom: '4px' }}>Balloon Payments</h4>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.6' }}>Many owner-financed deals in Georgia include a "balloon payment" where the full balance is due after 3 to 5 years, giving the buyer time to improve their credit and refinance.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: '#ecfdf5', color: '#059669', padding: '8px 12px', borderRadius: '8px', fontWeight: '700' }}>✓</div>
            <div>
              <h4 style={{ color: '#065f46', marginBottom: '4px' }}>Parkway Law Group</h4>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.6' }}>Firms like this in the Alpharetta/Woodstock area can assist in drafting the promissory notes and ensuring the title is clear before you sign.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works (Steps) */}
      <div style={{ backgroundColor: '#f0fdf4', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#065f46', marginBottom: '8px' }}>
            How It Works in Georgia
          </h2>
          <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '40px' }}>Step-by-step — Paso a paso</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {steps.map((step) => (
              <div key={step.num} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                gap: '16px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              }}>
                <div style={{
                  backgroundColor: '#059669',
                  color: 'white',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  minWidth: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                }}>{step.num}</div>
                <div>
                  <h4 style={{ color: '#065f46', marginBottom: '6px', fontSize: '1rem' }}>{step.title}</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#065f46', marginBottom: '40px' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq) => (
            <div key={faq.q} style={{
              backgroundColor: '#f8fafc',
              borderRadius: '10px',
              padding: '20px 24px',
            }}>
              <h4 style={{ color: '#065f46', marginBottom: '8px', fontSize: '1rem' }}>{faq.q}</h4>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: '#064e3b', color: 'white', textAlign: 'center', padding: '50px 20px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Ready to Find Your Home?</h2>
        <p style={{ opacity: 0.85, marginBottom: '28px', fontSize: '1rem' }}>
          Connect with a bilingual agent or attorney to get started with owner financing in Georgia.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/bilingual-agents" style={{
            backgroundColor: 'white', color: '#064e3b', padding: '12px 28px',
            borderRadius: '8px', fontWeight: '700', textDecoration: 'none', display: 'inline-block',
          }}>Find a Bilingual Agent</Link>
          <Link href="/legal-support" style={{
            backgroundColor: '#059669', color: 'white', padding: '12px 28px',
            borderRadius: '8px', fontWeight: '700', textDecoration: 'none', display: 'inline-block',
          }}>Legal Support</Link>
          <Link href="/" style={{
            backgroundColor: 'transparent', color: 'white', padding: '12px 28px',
            borderRadius: '8px', fontWeight: '600', textDecoration: 'none', display: 'inline-block',
            border: '2px solid rgba(255,255,255,0.4)',
          }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

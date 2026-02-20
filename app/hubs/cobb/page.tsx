'use client';
import Link from 'next/link';

export default function CobbPage() {
  const color = '#059669';
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: 'linear-gradient(135deg, #047857 0%, #059669 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>← All Latino Hubs</Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🏡</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>Cobb County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>Metro Atlanta • Smyrna, Marietta & Austell</p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>111,000+</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Latino Residents</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>13-15%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>of County Population</div></div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🏡 Key Neighborhoods</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Smyrna (South)', desc: 'Most concentrated Latino area in Cobb. Southern Smyrna near South Cobb Drive has high Latino density. Mix of apartments and starter homes. Growing number of Latino-owned businesses.', highlight: 'Most Latino' },
              { name: 'Austell', desc: 'Affordable community in western Cobb. Strong working-class Latino families. Multiple trailer park and apartment communities. Easy access to Dallas Hwy and I-20.', highlight: 'Affordable' },
              { name: 'Marietta (South)', desc: 'Southern Marietta along Cobb Pkwy. Growing Latino presence. Older established neighborhoods with good value. Mixed income levels.', highlight: 'Growing' },
              { name: 'Mableton', desc: 'Newer area with increasing Latino population. More suburban with single-family homes. Better school options. Recently incorporated as city in 2023.', highlight: 'Suburban' },
              { name: 'Powder Springs', desc: 'Western Cobb with established Latino families. More rural feel. Affordable homes. Good sense of community among Latino residents.', highlight: 'Established' },
              { name: 'Kennesaw', desc: 'Northern Cobb, less concentrated but growing. Quieter suburbs. Proximity to Kennesaw State University. More competitive housing market.', highlight: 'Growing' },
            ].map((n) => (
              <div key={n.name} style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '20px', borderLeft: `4px solid ${color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 style={{ fontWeight: '700', color: '#1e293b', margin: 0 }}>{n.name}</h3>
                  <span style={{ backgroundColor: color, color: 'white', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '20px', whiteSpace: 'nowrap' }}>{n.highlight}</span>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🎓 Schools & Education</h2>
          <div style={{ backgroundColor: '#ecfdf5', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <p style={{ color: '#047857', fontWeight: '600', marginBottom: '12px' }}>Cobb County School District (CCSD) — one of Georgia’s best-funded districts with ESOL services county-wide.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                { name: 'Campbell High School', area: 'Smyrna', rating: 'High Latino enrollment' },
                { name: 'South Cobb High School', area: 'Austell', rating: 'Strong ESOL program' },
                { name: 'Osborne High School', area: 'Marietta', rating: 'Diverse, large campus' },
                { name: 'Pebblebrook High', area: 'Mableton', rating: 'Growing programs' },
              ].map((s) => (
                <div key={s.name} style={{ backgroundColor: 'white', borderRadius: '8px', padding: '14px' }}>
                  <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem' }}>{s.name}</div>
                  <div style={{ color, fontSize: '0.8rem' }}>{s.area}</div>
                  <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{s.rating}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🛡️ Safety Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { area: 'Kennesaw / Acworth', level: 'Low Crime', color: '#166534', bg: '#f0fdf4', note: 'Very safe northern areas' },
              { area: 'Marietta (North)', level: 'Low-Medium', color: '#166534', bg: '#f0fdf4', note: 'Mostly safe suburban area' },
              { area: 'Smyrna South', level: 'Medium', color: '#854d0e', bg: '#fefce8', note: 'Some property crime, use caution' },
              { area: 'Austell', level: 'Medium', color: '#854d0e', bg: '#fefce8', note: 'Community-oriented, watch areas vary' },
            ].map((s) => (
              <div key={s.area} style={{ backgroundColor: s.bg, borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontWeight: '700', color: s.color, marginBottom: '4px' }}>{s.level}</div>
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem', marginBottom: '4px' }}>{s.area}</div>
                <div style={{ color: '#475569', fontSize: '0.85rem' }}>{s.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🏠 Real Estate Facts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: 'Median Home Price', value: '~$340,000', note: 'As of 2025-2026' },
              { label: 'ITIN Loans Active', value: 'Yes', note: 'Active lender network' },
              { label: 'Owner Financing', value: 'Available', note: 'Especially in Austell' },
              { label: 'Rental Market', value: 'High Demand', note: 'South Cobb corridors' },
            ].map((f) => (
              <div key={f.label} style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color }}>{f.value}</div>
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem', margin: '4px 0' }}>{f.label}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{f.note}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ backgroundColor: color, borderRadius: '16px', padding: '40px', textAlign: 'center', color: 'white' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>Ready to Buy in Cobb County?</h3>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>Connect with ITIN mortgage specialists and bilingual agents serving Cobb County.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>Find ITIN Lenders</Link>
            <Link href="/bilingual-agents" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>Find Bilingual Agent</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

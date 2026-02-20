'use client';
import Link from 'next/link';

export default function GwinnettPage() {
  const color = '#2563eb';
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>← All Latino Hubs</Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🏘️</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>Gwinnett County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>Metro Atlanta • Georgia’s Largest Latino Hub</p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>220,000+</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Latino Residents</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>23-25%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>of County Population</div></div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>

        {/* Key Neighborhoods */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🏡 Key Neighborhoods</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Norcross', desc: 'The heart of Latino Gwinnett. Nearly 46% Hispanic population. Dense concentration of Spanish-speaking businesses, tiendas, and community centers along Jimmy Carter Blvd.', highlight: 'Most Latino' },
              { name: 'Lilburn', desc: 'Family-friendly area with strong Latino presence. More suburban feel with good access to schools and parks. Popular with working-class Latino families.', highlight: 'Family Hub' },
              { name: 'Lawrenceville', desc: 'County seat with growing Latino community. Mix of affordable housing and newer developments. Good proximity to county services and courts.', highlight: 'County Seat' },
              { name: 'Duluth', desc: 'More middle-income Latino families settling here. Good schools and lower crime rates. Growing Latino business corridor on Pleasant Hill Rd.', highlight: 'Growing' },
              { name: 'Buford', desc: 'Northern Gwinnett with emerging Latino community. More affordable homes than central Gwinnett. Close to Lake Lanier recreational areas.', highlight: 'Affordable' },
              { name: 'Snellville', desc: 'Eastern Gwinnett with established Latino families. Quiet suburban neighborhoods with good school ratings. Popular for families seeking stability.', highlight: 'Established' },
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

        {/* Schools */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🎓 Schools & Education</h2>
          <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <p style={{ color: '#1e40af', fontWeight: '600', marginBottom: '12px' }}>Gwinnett County Public Schools (GCPS) — one of Georgia’s largest districts with strong ESL & bilingual programs.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                { name: 'Meadowcreek High School', area: 'Norcross', rating: 'Large, diverse enrollment' },
                { name: 'Norcross High School', area: 'Norcross', rating: 'Strong ESL program' },
                { name: 'Berkmar High School', area: 'Lilburn', rating: 'High Latino enrollment' },
                { name: 'Central Gwinnett High', area: 'Lawrenceville', rating: 'Good STEM programs' },
                { name: 'Duluth High School', area: 'Duluth', rating: 'Higher performance ratings' },
                { name: 'Mountain View High', area: 'Lawrenceville', rating: 'Growing IB program' },
              ].map((s) => (
                <div key={s.name} style={{ backgroundColor: 'white', borderRadius: '8px', padding: '14px' }}>
                  <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem' }}>{s.name}</div>
                  <div style={{ color: '#2563eb', fontSize: '0.8rem' }}>{s.area}</div>
                  <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{s.rating}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px' }}>
            <p style={{ color: '#166534', fontWeight: '600', margin: '0 0 8px' }}>📚 ESL & Bilingual Resources</p>
            <p style={{ color: '#166534', margin: 0, fontSize: '0.9rem' }}>GCPS offers English to Speakers of Other Languages (ESOL) programs at every school level. Parent liaison services available in Spanish at most Norcross and Lilburn schools.</p>
          </div>
        </section>

        {/* Safety */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🛡️ Safety Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '16px' }}>
            {[
              { area: 'Duluth & Suwanee', level: 'Low Crime', color: '#166534', bg: '#f0fdf4', note: 'Among the safest areas in Gwinnett' },
              { area: 'Lawrenceville (North)', level: 'Low-Medium', color: '#854d0e', bg: '#fefce8', note: 'Generally safe, some property crime' },
              { area: 'Norcross', level: 'Medium', color: '#854d0e', bg: '#fefce8', note: 'Busier corridors, typical urban caution' },
              { area: 'Lilburn', level: 'Low-Medium', color: '#166534', bg: '#f0fdf4', note: 'Suburban feel, family friendly' },
            ].map((s) => (
              <div key={s.area} style={{ backgroundColor: s.bg, borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontWeight: '700', color: s.color, marginBottom: '4px' }}>{s.level}</div>
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem', marginBottom: '4px' }}>{s.area}</div>
                <div style={{ color: '#475569', fontSize: '0.85rem' }}>{s.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Real Estate Facts */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🏠 Real Estate Facts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: 'Median Home Price', value: '~$320,000', note: 'As of 2025-2026' },
              { label: 'ITIN Loans Active', value: 'Yes', note: 'Multiple lenders available' },
              { label: 'Owner Financing', value: 'Available', note: 'Especially older homes' },
              { label: 'Rental Market', value: 'Competitive', note: 'High demand in Norcross' },
            ].map((f) => (
              <div key={f.label} style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color }}>{f.value}</div>
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem', margin: '4px 0' }}>{f.label}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{f.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ backgroundColor: color, borderRadius: '16px', padding: '40px', textAlign: 'center', color: 'white' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>Ready to Buy in Gwinnett County?</h3>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>Connect with ITIN mortgage specialists and bilingual agents who know Gwinnett.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>Find ITIN Lenders</Link>
            <Link href="/bilingual-agents" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>Find Bilingual Agent</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

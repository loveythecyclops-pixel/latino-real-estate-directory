'use client';
import Link from 'next/link';

export default function HallPage() {
  const color = '#dc2626';
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: 'linear-gradient(135deg, #991b1b 0%, #dc2626 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>← All Latino Hubs</Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🌄</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>Hall County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>North Georgia • Gainesville Hub</p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>28-33%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Latino Population</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Gainesville</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Primary Hub City</div></div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🏡 Key Neighborhoods</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Gainesville (Central)', desc: 'Heart of the Hall County Latino community. High density near downtown and the poultry processing corridors. Mix of apartments, older homes, and mobile homes. Very walkable in some areas.', highlight: 'Most Latino' },
              { name: 'Oakwood', desc: 'Southern Hall County. More affordable suburbs with growing Latino families. Good elementary schools. Easier commute to industrial jobs.', highlight: 'Family Hub' },
              { name: 'Flowery Branch', desc: 'Growing area in southeastern Hall. More middle-income families. Newer developments. Close to Lake Lanier. Less Latino density but increasing.', highlight: 'Growing' },
              { name: 'Murrayville', desc: 'Northern Hall County rural area. Very affordable land and homes. Small but tight-knit Latino community tied to agricultural work. Quieter lifestyle.', highlight: 'Rural' },
              { name: 'Clermont', desc: 'Small community northeast of Gainesville. Affordable housing. Primarily poultry and landscaping industry workers. Strong community bonds.', highlight: 'Affordable' },
              { name: 'Buford (Hall side)', desc: 'Border area with Gwinnett County. Access to both county school systems. Growing Latino population. More commercial development nearby.', highlight: 'Border Hub' },
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
          <div style={{ backgroundColor: '#fef2f2', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <p style={{ color: '#991b1b', fontWeight: '600', marginBottom: '12px' }}>Hall County Schools — district with significant ESOL enrollment and Spanish-speaking staff at many schools.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                { name: 'Johnson High School', area: 'Gainesville', rating: 'High Latino enrollment, ESOL' },
                { name: 'Gainesville High School', area: 'Gainesville', rating: 'Strong athletic & academic programs' },
                { name: 'East Hall High School', area: 'Gainesville', rating: 'Good STEM focus' },
                { name: 'Cherokee Bluff High', area: 'Flowery Branch', rating: 'Newer, higher performance' },
              ].map((s) => (
                <div key={s.name} style={{ backgroundColor: 'white', borderRadius: '8px', padding: '14px' }}>
                  <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem' }}>{s.name}</div>
                  <div style={{ color, fontSize: '0.8rem' }}>{s.area}</div>
                  <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{s.rating}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px' }}>
            <p style={{ color: '#166534', fontWeight: '600', margin: '0 0 8px' }}>🌐 Gainesville City Schools</p>
            <p style={{ color: '#166534', margin: 0, fontSize: '0.9rem' }}>Gainesville City School District is separate from Hall County and serves the city center. High ESOL enrollment, dual-language programs, and bilingual family liaisons.</p>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🛡️ Safety Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { area: 'Flowery Branch', level: 'Low Crime', color: '#166534', bg: '#f0fdf4', note: 'Very safe growing suburb' },
              { area: 'Oakwood', level: 'Low-Medium', color: '#166534', bg: '#f0fdf4', note: 'Generally safe family area' },
              { area: 'Gainesville (North)', level: 'Low-Medium', color: '#854d0e', bg: '#fefce8', note: 'Mix of safe neighborhoods' },
              { area: 'Gainesville (Central)', level: 'Medium', color: '#854d0e', bg: '#fefce8', note: 'Some property crime near downtown' },
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
              { label: 'Median Home Price', value: '~$260,000', note: 'More affordable than Metro ATL' },
              { label: 'ITIN Loans Active', value: 'Yes', note: 'Several regional lenders' },
              { label: 'Mobile Homes', value: 'Common', note: 'Affordable entry point' },
              { label: 'Rental Market', value: 'Moderate', note: 'Strong near Gainesville' },
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
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>Ready to Buy in Hall County?</h3>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>Connect with ITIN lenders and bilingual agents serving the Gainesville area.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>Find ITIN Lenders</Link>
            <Link href="/bilingual-agents" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>Find Bilingual Agent</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

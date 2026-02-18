import Link from 'next/link';

export default function DekalbPage() {
  const color = '#7c3aed';
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>← All Latino Hubs</Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🌆</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>DeKalb County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>Metro Atlanta • The Famous Buford Highway Corridor</p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>56%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Hispanic in Doraville</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Buford Hwy</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Latino Corridor</div></div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🏡 Key Neighborhoods</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Doraville', desc: 'Highest Hispanic concentration in the 11-county metro area at 56%. The cultural heart of Latino DeKalb, anchored by Buford Highway. Packed with authentic Latino restaurants, markets, and services.', highlight: 'Most Latino' },
              { name: 'Chamblee', desc: 'International city adjacent to Doraville. Strong Latino business community along Buford Hwy. Mix of apartments and homes. Good access to MARTA train.', highlight: 'International' },
              { name: 'Clarkston', desc: 'Highly diverse refugee and immigrant community. Very affordable housing. Strong community support organizations. Less concentrated Latino but very immigrant-friendly.', highlight: 'Diverse' },
              { name: 'Tucker', desc: 'More suburban eastern DeKalb. Growing Latino families. Better school ratings. More affordable than northern DeKalb.', highlight: 'Suburban' },
              { name: 'Lithonia', desc: 'Far southeastern DeKalb. Very affordable homes. Emerging Latino community. Long commute to major employment centers.', highlight: 'Affordable' },
              { name: 'Stone Mountain', desc: 'Mix of established Latino families and newer arrivals. Historic area with affordable housing options. Good access to Stone Mountain Park.', highlight: 'Established' },
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
          <div style={{ backgroundColor: '#f5f3ff', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <p style={{ color: '#5b21b6', fontWeight: '600', marginBottom: '12px' }}>DeKalb County School District (DCSD) — large urban district with ESOL support and bilingual staff at key schools.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                { name: 'Chamblee Charter High', area: 'Chamblee', rating: 'High-performing magnet school' },
                { name: 'Cross Keys High School', area: 'Brookhaven', rating: 'High Latino & immigrant enrollment' },
                { name: 'Tucker High School', area: 'Tucker', rating: 'Strong academics' },
                { name: 'Clarkston High School', area: 'Clarkston', rating: 'Most diverse school in GA' },
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
              { area: 'Chamblee', level: 'Low-Medium', color: '#166534', bg: '#f0fdf4', note: 'Relatively safe, active area' },
              { area: 'Doraville', level: 'Medium', color: '#854d0e', bg: '#fefce8', note: 'Busy corridors, use common sense' },
              { area: 'Tucker', level: 'Low', color: '#166534', bg: '#f0fdf4', note: 'Safe suburban area' },
              { area: 'Clarkston', level: 'Medium', color: '#854d0e', bg: '#fefce8', note: 'Community resources are strong' },
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
              { label: 'Median Home Price', value: '~$290,000', note: 'As of 2025-2026' },
              { label: 'MARTA Access', value: 'Yes', note: 'Doraville & Chamblee stations' },
              { label: 'ITIN Loans Active', value: 'Yes', note: 'Several lenders active' },
              { label: 'Rental Market', value: 'Very High', note: 'Dense demand on Buford Hwy' },
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
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>Ready to Buy in DeKalb County?</h3>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>Connect with ITIN mortgage specialists who know the Buford Highway corridor.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>Find ITIN Lenders</Link>
            <Link href="/bilingual-agents" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>Find Bilingual Agent</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

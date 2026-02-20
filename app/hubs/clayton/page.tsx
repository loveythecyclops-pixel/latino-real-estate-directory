'use client';
import Link from 'next/link';

export default function ClaytonPage() {
  const color = '#0891b2';
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: 'linear-gradient(135deg, #164e63 0%, #0891b2 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>← All Latino Hubs</Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🌱</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>Clayton County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>South Metro Atlanta • Growing Hub</p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>~15%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Latino Population</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Forest Park</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Primary Hub City</div></div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🏡 Key Neighborhoods</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Forest Park', desc: 'The primary Latino hub in Clayton County. Growing concentration of Latino families near the industrial corridor along Tara Boulevard. Mix of apartment complexes and small single-family homes. Close to Atlanta State Farmers Market.', highlight: 'Most Latino' },
              { name: 'Morrow', desc: 'Southern Clayton County with a growing Latino presence. More suburban character with retail along Morrow Road. Accessible via I-75. Good school options and newer commercial development attracting Latino businesses.', highlight: 'Growing' },
              { name: 'Jonesboro', desc: 'County seat with a mix of established and newer Latino residents. Affordable homes near downtown. Good commute access to Atlanta via US-19/41. Solid Latino-serving businesses and services emerging.', highlight: 'Established' },
              { name: 'Riverdale', desc: 'Western Clayton County bordering Fulton. Diverse community with growing Latino population. Affordable rental market. Close to Hartsfield-Jackson Airport area employers. Many Latino families working in hospitality and logistics.', highlight: 'Affordable' },
              { name: 'Lake City', desc: 'Small city in northern Clayton. Increasing Latino presence. Industrial jobs nearby. Very affordable housing with mobile home options. Quiet residential streets close to I-285 access.', highlight: 'Budget' },
              { name: 'Lovejoy', desc: 'Southernmost Clayton County, bordering Henry County. Newer suburban development with more affordable land. Growing community with access to both Clayton and Henry County schools. Popular with Latino families seeking larger lots.', highlight: 'Suburban' },
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
          <div style={{ backgroundColor: '#ecfeff', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <p style={{ color: '#164e63', fontWeight: '600', marginBottom: '12px' }}>Clayton County Public Schools — one of Georgia’s most diverse districts with growing ESOL programs.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                { name: 'Forest Park High School', area: 'Forest Park', rating: 'High Latino enrollment, ESOL' },
                { name: 'Morrow High School', area: 'Morrow', rating: 'Diverse, strong programs' },
                { name: 'Jonesboro High School', area: 'Jonesboro', rating: 'Established academics' },
                { name: 'Riverdale High School', area: 'Riverdale', rating: 'Growing Latino student body' },
              ].map((s) => (
                <div key={s.name} style={{ backgroundColor: 'white', borderRadius: '8px', padding: '14px' }}>
                  <div style={{ fontWeight: '700', color: '#1e293b' }}>{s.name}</div>
                  <div>{s.area}</div>
                  <div>{s.rating}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: '#f8fafc', borderRadius: '8px', padding: '16px' }}>
            <span style={{ fontSize: '1.2rem' }}>✈️</span> <strong>Airport Proximity Advantage</strong>
            <p style={{ color: '#475569', marginBottom: 0 }}>Clayton County’s location near Hartsfield-Jackson Airport creates strong employment opportunities for Latino families in hospitality, logistics, and cargo operations. Many bilingual workers are highly sought after in this area.</p>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🛡️ Safety Overview</h2>
          {[
            { area: 'Lovejoy / Morrow (South)', level: 'Low Crime', color: '#166534', bg: '#f0fdf4', note: 'Safer suburban southern areas' },
            { area: 'Jonesboro', level: 'Low-Medium', color: '#166534', bg: '#f0fdf4', note: 'Generally safe county seat' },
            { area: 'Morrow (North)', level: 'Low-Medium', color: '#854d0e', bg: '#fefce8', note: 'Mixed residential and commercial' },
            { area: 'Forest Park', level: 'Medium', color: '#854d0e', bg: '#fefce8', note: 'Some property crime, check specific streets' },
            { area: 'Riverdale / Lake City', level: 'Medium', color: '#854d0e', bg: '#fefce8', note: 'Research individual neighborhoods' },
          ].map((s) => (
            <div key={s.area} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', backgroundColor: s.bg, borderRadius: '8px', padding: '12px 16px' }}>
              <span style={{ backgroundColor: s.color, color: 'white', borderRadius: '6px', padding: '2px 10px', fontWeight: '700', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>{s.level}</span>
              <div>
                <div style={{ fontWeight: '600', color: '#1e293b' }}>{s.area}</div>
                <div style={{ fontSize: '0.85rem', color: '#475569' }}>{s.note}</div>
              </div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🏠 Real Estate Facts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: 'Median Home Price', value: '~$240,000', note: 'Affordable vs North Metro ATL' },
              { label: 'ITIN Loans Active', value: 'Yes', note: 'Growing lender presence' },
              { label: 'Rental Market', value: 'Active', note: 'Strong near airport corridor' },
              { label: 'Market Trend', value: 'Rising', note: 'Rapid appreciation underway' },
            ].map((f) => (
              <div key={f.label} style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color }}>{f.value}</div>
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem', margin: '4px 0' }}>{f.label}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{f.note}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: color, borderRadius: '16px', padding: '40px', textAlign: 'center', color: 'white', margin: '0 20px 40px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>Ready to Buy in Clayton County?</h3>
        <p style={{ opacity: 0.9, marginBottom: '24px' }}>Connect with ITIN lenders and bilingual agents serving the Forest Park and Morrow area.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>Find ITIN Lenders</Link>
          <Link href="/bilingual-agents" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>Find Bilingual Agent</Link>
        </div>
      </div>
    </div>
  );
}

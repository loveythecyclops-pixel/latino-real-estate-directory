import Link from 'next/link';

export default function WhitfieldPage() {
  const color = '#d97706';
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: 'linear-gradient(135deg, #92400e 0%, #d97706 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <Link href="/hubs" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>← All Latino Hubs</Link>
        <div style={{ fontSize: '3rem', margin: '16px 0 8px' }}>🏭</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px' }}>Whitfield County</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: '0 0 16px' }}>North Georgia • Dalton Hub</p>
        <div style={{ display: 'inline-flex', gap: '20px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 24px' }}>
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>35-39%</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Latino Population</div></div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', margin: '0 4px' }} />
          <div><div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Dalton</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Primary Hub City</div></div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🏡 Key Neighborhoods</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Dalton (Downtown)', desc: 'Core of the Whitfield County Latino community. Dense Latino population near carpet mills and processing plants. Strong concentration of Mexican restaurants, tiendas, and Latin businesses.', highlight: 'Most Latino' },
              { name: 'East Dalton', desc: 'Heavily Latino residential area east of downtown. Affordable rental housing and starter homes. Close to manufacturing corridors and good for families just getting started.', highlight: 'Affordable' },
              { name: 'Tunnel Hill', desc: 'Small community north of Dalton with growing Latino families. More rural feel with cheaper land. Good for buyers seeking space and quiet. Access to Whitfield County schools.', highlight: 'Rural' },
              { name: 'Cohutta', desc: 'Border area near Murray County. Mixed rural-suburban. Very affordable land and mobile home lots. Quiet lifestyle appealing to agricultural and industrial workers.', highlight: 'Rural Budget' },
              { name: 'Rocky Face', desc: 'Small community west of Dalton. Modest homes at lower price points. Growing Latino presence. Convenient to I-75 for commuters working in Dalton or Chattanooga.', highlight: 'Commuter' },
              { name: 'Varnell', desc: 'Southeastern Whitfield County. Newer suburban development and mobile home communities. Affordable entry-level housing. Popular with younger Latino families.', highlight: 'Family Hub' },
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
          <div style={{ backgroundColor: '#fef3c7', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <p style={{ color: '#92400e', fontWeight: '600', marginBottom: '12px' }}>Whitfield County Schools — district with high ESOL enrollment and bilingual support staff.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                { name: 'Northwest Whitfield High', area: 'Tunnel Hill', rating: 'Strong academics' },
                { name: 'Dalton High School', area: 'Dalton', rating: 'High Latino enrollment, ESOL' },
                { name: 'Southeast Whitfield High', area: 'Dalton', rating: 'Diverse student body' },
                { name: 'Coahulla Creek High', area: 'Cohutta', rating: 'Newer campus, growing' },
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
            <span style={{ fontSize: '1.2rem' }}>🌐</span> <strong>Dalton City Schools</strong>
            <p style={{ color: '#475569', marginBottom: 0 }}>Dalton City School District serves the urban core. Very high ESOL enrollment with dual-language programs and Spanish-speaking family liaisons throughout the system.</p>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color, marginBottom: '20px', borderBottom: `3px solid ${color}`, paddingBottom: '8px' }}>🛡️ Safety Overview</h2>
          {[
            { area: 'Tunnel Hill', level: 'Low Crime', color: '#166534', bg: '#f0fdf4', note: 'Very safe rural area' },
            { area: 'Cohutta / Rocky Face', level: 'Low Crime', color: '#166534', bg: '#f0fdf4', note: 'Quiet rural communities' },
            { area: 'East Dalton', level: 'Low-Medium', color: '#854d0e', bg: '#fefce8', note: 'Generally safe residential area' },
            { area: 'Dalton (Downtown)', level: 'Medium', color: '#854d0e', bg: '#fefce8', note: 'Some property crime near mills' },
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
              { label: 'Median Home Price', value: '~$220,000', note: 'Very affordable vs Metro ATL' },
              { label: 'ITIN Loans Active', value: 'Yes', note: 'Multiple regional lenders' },
              { label: 'Mobile Homes', value: 'Very Common', note: 'Popular affordable entry point' },
              { label: 'Rental Market', value: 'Active', note: 'Strong near carpet mills' },
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
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>Ready to Buy in Whitfield County?</h3>
        <p style={{ opacity: 0.9, marginBottom: '24px' }}>Connect with ITIN lenders and bilingual agents serving the Dalton area.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/itin-mortgages" style={{ backgroundColor: 'white', color, padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>Find ITIN Lenders</Link>
          <Link href="/bilingual-agents" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>Find Bilingual Agent</Link>
        </div>
      </div>
    </div>
  );
}

import { Phone, Mail } from 'lucide-react';

const members = [
  {
    name: 'Antonio Spedicato',
    role: 'Consultant Odoo & Fondateur',
    bio: '15 ans experience - Expert ERP BTP',
    phone: '+41 (0)76 434 45 95',
    phoneTel: 'tel:+41764344595',
    email: 'antonio@d4e.cool',
    photo: '/team-antonio.jpg',
    color: '#00D4C8',
  },
  {
    name: 'Laetitia Andre',
    role: 'Chef de projet ElvyBat',
    bio: 'Specialiste deploiement BTP - Suisse & France',
    phone: '+41 (0)76 482 21 39',
    phoneTel: 'tel:+41764822139',
    email: 'laetita@d4e.cool',
    photo: '/team-laetitia.jpg',
    color: '#F59E0B',
  },
];

export function Team() {
  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '80px 0' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: '#00D4C8', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px', marginTop: 0 }}>
            NOTRE EQUIPE
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#0F1D3A', letterSpacing: '-1px', marginTop: 0 }}>
            Des experts a votre service
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          marginBottom: '48px',
        }}>
          {members.map((m) => (
            <div key={m.name} style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              padding: '52px 40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              <div style={{
                width: '140px', height: '140px',
                borderRadius: '50%',
                border: '4px solid ' + m.color,
                overflow: 'hidden',
                marginBottom: '28px',
                flexShrink: 0,
              }}>
                <img src={m.photo} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F1D3A', margin: '0 0 6px' }}>{m.name}</h3>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: m.color, margin: '0 0 8px' }}>{m.role}</p>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', margin: '0 0 32px' }}>{m.bio}</p>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href={m.phoneTel} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '15px 24px',
                  backgroundColor: m.color,
                  color: '#FFFFFF', fontWeight: 700,
                  borderRadius: '14px', textDecoration: 'none',
                  fontSize: '1.05rem',
                }}>
                  <Phone style={{ width: '18px', height: '18px' }} />
                  {m.phone}
                </a>
                <a href={'mailto:' + m.email} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '15px 24px',
                  border: '1.5px solid #E2E8F0',
                  color: '#0F1D3A', fontWeight: 600,
                  borderRadius: '14px', textDecoration: 'none',
                  fontSize: '1.05rem',
                }}>
                  <Mail style={{ width: '18px', height: '18px' }} />
                  {m.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            onClick={(e) => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); }}
            href="#"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 40px',
              backgroundColor: '#00D4C8',
              color: '#FFFFFF', fontWeight: 800,
              borderRadius: '14px', textDecoration: 'none',
              fontSize: '1.05rem',
              boxShadow: '0 6px 24px rgba(0,212,200,0.35)',
            }}
          >
            Prendre contact maintenant
          </a>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '12px' }}>
            Reponse garantie sous 24h
          </p>
        </div>

      </div>
    </section>
  );
}
import { Settings, Code, GraduationCap, Headphones } from 'lucide-react';

const services = [
  {
    Icon: Settings,
    color: '#00D4C8',
    title: 'Implementation Odoo',
    description: 'Deploiement complet de votre ERP. Analyse approfondie de vos processus, configuration sur mesure, migration de donnees et go-live accompagne.',
  },
  {
    Icon: Code,
    color: '#F59E0B',
    title: 'Personnalisation',
    description: 'Solutions sur mesure pour votre metier. Modules custom, integrations API, workflows avances et rapports adaptes a vos besoins.',
  },
  {
    Icon: GraduationCap,
    color: '#00D4C8',
    title: 'Formation',
    description: 'Transfert de competences complet. Formations personnalisees pour tous les profils — utilisateurs, administrateurs, responsables.',
  },
  {
    Icon: Headphones,
    color: '#F59E0B',
    title: 'Support',
    description: 'Accompagnement continu apres le go-live. Support reactif, mises a jour, optimisations et maintenance proactive de votre systeme.',
  },
];

export function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#F8FAFC', padding: '64px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{
          backgroundColor: '#0F1D3A',
          borderRadius: '24px',
          padding: '64px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}>

          <div style={{
            position: 'absolute', width: '500px', height: '500px',
            borderRadius: '50%', bottom: '-120px', left: '-120px',
            opacity: 0.07, pointerEvents: 'none',
            background: 'radial-gradient(circle, #00D4C8, transparent)',
          }} />

          <div style={{ textAlign: 'center', marginBottom: '52px', position: 'relative' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              marginBottom: '14px',
              marginTop: 0,
              letterSpacing: '-1px',
            }}>
              Nos <span style={{ color: '#00D4C8' }}>Services</span>
            </h2>
            <p style={{
              color: '#94A3B8',
              fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
              margin: 0,
              lineHeight: 1.6,
            }}>
              Une offre complete pour votre transformation digitale.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            position: 'relative',
          }}>
            {services.map((s, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: '4px solid ' + s.color,
                borderRadius: '16px',
                padding: '28px 28px 28px 24px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '48px', height: '48px', flexShrink: 0,
                  backgroundColor: i % 2 === 0 ? 'rgba(0,212,200,0.1)' : 'rgba(245,158,11,0.1)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <s.Icon style={{ width: '22px', height: '22px', color: s.color }} />
                </div>
                <div>
                  <p style={{
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    marginBottom: '10px',
                    marginTop: 0,
                  }}>
                    {s.title}
                  </p>
                  <p style={{
                    color: '#E2E8F0',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    margin: 0,
                  }}>
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
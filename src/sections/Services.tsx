import { Settings, Code, GraduationCap, Headphones } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  { icon: Settings,     title: 'Implémentation Odoo', description: 'Déploiement complet de votre ERP. Analyse, configuration, migration et go-live.', features: ['Analyse', 'Configuration', 'Migration', 'Go-live'] },
  { icon: Code,         title: 'Personnalisation',    description: 'Solutions sur mesure. Modules custom, intégrations API, workflows avancés.',      features: ['Modules', 'API', 'Workflows', 'Rapports'] },
  { icon: GraduationCap,title: 'Formation',           description: 'Transfert de compétences. Formations personnalisées pour tous les profils.',       features: ['Utilisateurs', 'Admins', 'Docs', 'Coaching'] },
  { icon: Headphones,   title: 'Support',             description: 'Accompagnement continu. Support réactif et maintenance proactive.',                 features: ['Support', 'Updates', 'Optimisation', 'Sauvegardes'] },
];

export function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: cardsRef,  isVisible: cardsVisible  } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="services" style={{ backgroundColor: '#F8FAFC', padding: '48px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
          style={{
            backgroundColor: '#0F1D3A',
            borderRadius: '24px',
            padding: '64px 48px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow */}
          <div style={{
            position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
            bottom: '-120px', left: '-120px', opacity: 0.08, pointerEvents: 'none',
            background: 'radial-gradient(circle, #00D4C8, transparent)',
          }} />

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px', position: 'relative' }}>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#FFFFFF', marginBottom: '12px' }}>
              Nos <span style={{ color: '#00D4C8' }}>Services</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.1rem' }}>
              Une offre complète pour votre transformation digitale.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={cardsRef}
            className={`animate-on-scroll delay-1 ${cardsVisible ? 'is-visible' : ''}`}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              position: 'relative',
            }}
          >
            {services.map((s, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '24px',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px', flexShrink: 0,
                    backgroundColor: '#00D4C8',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <s.icon style={{ width: '22px', height: '22px', color: '#FFFFFF' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem', marginBottom: '8px' }}>
                      {s.title}
                    </h3>
                    <p style={{ color: '#94A3B8', fontSize: '0.875rem', marginBottom: '12px', lineHeight: 1.6 }}>
                      {s.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {s.features.map((f, j) => (
                        <span key={j} style={{
                          padding: '2px 10px', fontSize: '0.75rem', fontWeight: 500,
                          backgroundColor: 'rgba(0,212,200,0.12)',
                          color: '#00D4C8',
                          borderRadius: '999px',
                          border: '1px solid rgba(0,212,200,0.2)',
                        }}>{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
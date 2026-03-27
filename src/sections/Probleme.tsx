import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const douleurs = [
  {
    emoji: '📊',
    titre: 'Excel partout',
    desc: 'Fichiers éparpillés, données obsolètes, erreurs de saisie répétées. Votre équipe perd des heures chaque semaine.',
  },
  {
    emoji: '📉',
    titre: 'Rentabilité floue',
    desc: "Vous découvrez les marges réelles en fin de chantier — trop tard pour corriger. Chaque projet est une surprise.",
  },
  {
    emoji: '🔀',
    titre: 'Données non fiables',
    desc: "Silos entre commercial, terrain et comptabilité. Personne n'a la même information au même moment.",
  },
  {
    emoji: '⏱️',
    titre: 'Temps perdu en admin',
    desc: 'Resaisies manuelles, relances oubliées, facturation en retard. Vous gérez au lieu de piloter.',
  },
];

export function Probleme() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '48px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bloc sombre encadré */}
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
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
            position: 'absolute', width: '500px', height: '500px',
            borderRadius: '50%', top: '-120px', right: '-120px',
            opacity: 0.08, pointerEvents: 'none',
            background: 'radial-gradient(circle, #00D4C8, transparent)',
          }} />

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '52px', position: 'relative' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '5px 16px', border: '1px solid rgba(0,212,200,0.3)',
              borderRadius: '999px', backgroundColor: 'rgba(0,212,200,0.1)',
              marginBottom: '20px',
            }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#00D4C8' }}>⚠ Le problème</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 900,
              lineHeight: 1.1, marginBottom: '18px', color: '#FFFFFF',
            }}>
              Vous pilotez encore{' '}
              <span style={{ color: '#00D4C8' }}>à l'aveugle ?</span>
            </h2>

            <p style={{ fontSize: '1.15rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              La plupart des PME perdent{' '}
              <strong style={{ color: '#FFFFFF' }}>15 à 20% de marge</strong>{' '}
              faute de visibilité en temps réel. Est-ce votre cas ?
            </p>
          </div>

          {/* Cards 2x2 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
          }}>
            {douleurs.map((d, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '48px', height: '48px', flexShrink: 0,
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px',
                }}>
                  {d.emoji}
                </div>
                <div>
                  <p style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem', marginBottom: '6px' }}>
                    {d.titre}
                  </p>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '44px', position: 'relative' }}>
            <p style={{ color: '#64748B', fontSize: '1rem', marginBottom: '18px' }}>
              Il existe une solution — déployée en quelques jours, pas en plusieurs mois.
            </p>
            <a
              href="/#contact-form"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 30px', backgroundColor: '#00D4C8',
                color: '#FFFFFF', fontWeight: 700, borderRadius: '12px',
                fontSize: '1rem', textDecoration: 'none',
              }}
            >
              Voir la solution →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
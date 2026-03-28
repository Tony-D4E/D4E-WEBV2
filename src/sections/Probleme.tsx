const douleurs = [
  {
    emoji: '📊',
    titre: 'Excel partout',
    desc: 'Fichiers éparpillés, données obsolètes, erreurs de saisie répétées. Votre équipe perd des heures chaque semaine.',
  },
  {
    emoji: '📉',
    titre: 'Rentabilité floue',
    desc: 'Vous découvrez les marges réelles en fin de chantier — trop tard pour corriger. Chaque projet est une surprise.',
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
  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '64px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', boxSizing: 'border-box' }}>

        <div style={{
          backgroundColor: '#0F1D3A',
          borderRadius: '28px',
          padding: 'clamp(40px, 5vw, 72px) clamp(28px, 5vw, 64px)',
          position: 'relative',
          overflow: 'hidden',
        }}>

          {/* Glow déco */}
          <div style={{
            position: 'absolute', width: '600px', height: '600px',
            borderRadius: '50%', top: '-150px', right: '-150px',
            opacity: 0.07, pointerEvents: 'none',
            background: 'radial-gradient(circle, #00D4C8, transparent)',
          }} />

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '52px', position: 'relative' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '7px 20px',
              border: '1px solid rgba(0,212,200,0.3)',
              borderRadius: '999px',
              backgroundColor: 'rgba(0,212,200,0.1)',
              marginBottom: '24px',
            }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#00D4C8' }}>⚠ Le problème</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#FFFFFF',
              letterSpacing: '-1.5px',
              marginBottom: '16px',
              marginTop: 0,
            }}>
              Vous pilotez encore{' '}
              <span style={{ color: '#00D4C8' }}>à l'aveugle ?</span>
            </h2>

            <p style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: '#94A3B8',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              La plupart des PME perdent{' '}
              <strong style={{ color: '#FFFFFF' }}>15 à 20 % de marge</strong>{' '}
              faute de visibilité en temps réel. Est-ce votre cas ?
            </p>
          </div>

          {/* Grille 2×2 stricte — 1 colonne sur mobile */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            position: 'relative',
            marginBottom: '52px',
          }}>
            {douleurs.map((d, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '20px',
                padding: 'clamp(24px, 3vw, 36px)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '56px', height: '56px', flexShrink: 0,
                  backgroundColor: 'rgba(0,212,200,0.12)',
                  border: '1px solid rgba(0,212,200,0.2)',
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px',
                }}>
                  {d.emoji}
                </div>
                <div>
                  <p style={{
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    marginBottom: '10px',
                    marginTop: 0,
                    letterSpacing: '-0.3px',
                  }}>
                    {d.titre}
                  </p>
                  <p style={{
                    color: '#CBD5E1',
                    fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <p style={{
              color: '#64748B',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              marginBottom: '20px',
              marginTop: 0,
            }}>
              Il existe une solution — déployée en quelques jours, pas en plusieurs mois.
            </p>
            <a href="/#contact-form" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '15px 36px',
              backgroundColor: '#00D4C8',
              color: '#FFFFFF', fontWeight: 800,
              borderRadius: '14px',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(0,212,200,0.35)',
            }}>
              Voir la solution →
            </a>
          </div>

        </div>
      </div>

      {/* Responsive mobile */}
      <style>{`
        @media (max-width: 640px) {
          .probleme-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
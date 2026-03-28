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
    <>
      <style>{`
        .probleme-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 640px) {
          .probleme-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section style={{ backgroundColor: '#F8FAFC', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div style={{
            backgroundColor: '#0F1D3A',
            borderRadius: '24px',
            padding: '64px 48px',
            position: 'relative',
            overflow: 'hidden',
          }}>

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
                padding: '6px 18px',
                border: '1px solid rgba(0,212,200,0.3)',
                borderRadius: '999px',
                backgroundColor: 'rgba(0,212,200,0.1)',
                marginBottom: '22px',
              }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#00D4C8' }}>⚠ Le problème</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
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
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                color: '#94A3B8',
                maxWidth: '520px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}>
                La plupart des PME perdent{' '}
                <strong style={{ color: '#FFFFFF' }}>15 à 20 % de marge</strong>{' '}
                faute de visibilité en temps réel. Est-ce votre cas ?
              </p>
            </div>

            {/* 2×2 Grid */}
            <div className="probleme-grid" style={{ marginBottom: '52px' }}>
              {douleurs.map((d, i) => (
                <div key={i} style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '28px',
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
                    fontSize: '26px',
                  }}>
                    {d.emoji}
                  </div>
                  <div>
                    <p style={{
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      marginBottom: '10px',
                      marginTop: 0,
                    }}>
                      {d.titre}
                    </p>
                    <p style={{
                      color: '#CBD5E1',
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
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
                fontSize: '1rem',
                marginBottom: '20px',
                marginTop: 0,
              }}>
                Il existe une solution — déployée en quelques jours, pas en plusieurs mois.
              </p>
              <a href="/#contact-form" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 34px',
                backgroundColor: '#00D4C8',
                color: '#FFFFFF', fontWeight: 800,
                borderRadius: '12px',
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 6px 24px rgba(0,212,200,0.35)',
              }}>
                Voir la solution →
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
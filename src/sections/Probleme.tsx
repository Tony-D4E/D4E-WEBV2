import { FileSpreadsheet, TrendingDown, GitMerge, Clock } from 'lucide-react';

const douleurs = [
  {
    Icon: FileSpreadsheet,
    color: '#00D4C8',
    bg: 'rgba(0,212,200,0.1)',
    titre: 'Excel partout',
    desc: 'Fichiers eparpilles, donnees obsoletes, erreurs de saisie repetees. Votre equipe perd des heures chaque semaine.',
  },
  {
    Icon: TrendingDown,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    titre: 'Rentabilite floue',
    desc: 'Vous decouvrez les marges reelles en fin de chantier — trop tard pour corriger. Chaque projet est une surprise.',
  },
  {
    Icon: GitMerge,
    color: '#00D4C8',
    bg: 'rgba(0,212,200,0.1)',
    titre: 'Donnees non fiables',
    desc: "Silos entre commercial, terrain et comptabilite. Personne n'a la meme information au meme moment.",
  },
  {
    Icon: Clock,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    titre: 'Temps perdu en admin',
    desc: 'Resaisies manuelles, relances oubliees, facturation en retard. Vous gerez au lieu de piloter.',
  },
];

export function Probleme() {
  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '64px 0' }}>
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
            borderRadius: '50%', top: '-120px', right: '-120px',
            opacity: 0.08, pointerEvents: 'none',
            background: 'radial-gradient(circle, #00D4C8, transparent)',
          }} />

          <div style={{ textAlign: 'center', marginBottom: '52px', position: 'relative' }}>
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
              <span style={{ color: '#00D4C8' }}>a l'aveugle ?</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
              color: '#94A3B8',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              La plupart des PME perdent{' '}
              <strong style={{ color: '#FFFFFF' }}>15 a 20 % de marge</strong>{' '}
              faute de visibilite. Est-ce votre cas ?
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            marginBottom: '52px',
            position: 'relative',
          }}>
            {douleurs.map((d, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: '4px solid ' + d.color,
                borderRadius: '16px',
                padding: '28px 28px 28px 24px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '48px', height: '48px', flexShrink: 0,
                  backgroundColor: d.bg,
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <d.Icon style={{ width: '22px', height: '22px', color: d.color }} />
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
                    color: '#E2E8F0',
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

          <div style={{ textAlign: 'center', position: 'relative' }}>
            <p style={{
              color: '#64748B',
              fontSize: '1rem',
              marginBottom: '20px',
              marginTop: 0,
            }}>
              Il existe une solution — deployee en quelques jours, pas en plusieurs mois.
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
              Voir la solution
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
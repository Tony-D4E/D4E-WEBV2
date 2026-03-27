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
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`bg-[#0F1D3A] rounded-3xl px-8 py-16 relative overflow-hidden animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          {/* Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full -top-40 -right-40 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00D4C8, transparent)' }} />

          {/* Header */}
          <div className="relative text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00D4C8]/30 rounded-full text-[#00D4C8] text-sm font-semibold mb-6 bg-[#00D4C8]/10">
              ⚠ Le problème
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              Vous pilotez encore{' '}
              <span className="text-[#00D4C8]">à l'aveugle ?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              La plupart des PME perdent{' '}
              <strong style={{ color: '#FFFFFF' }}>15 à 20% de marge</strong>{' '}
              faute de visibilité en temps réel. Est-ce votre cas ?
            </p>
          </div>

          {/* Cards */}
          <div className="relative grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {douleurs.map((d, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex gap-5 items-start hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
                  {d.emoji}
                </div>
                <div>
                  <p className="font-black text-white text-xl mb-2">{d.titre}</p>
                  <p className="text-base text-gray-400 leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative text-center mt-12">
            <p style={{ color: '#CBD5E1' }} className="text-lg mb-6">
              Il existe une solution — déployée en quelques jours, pas en plusieurs mois.
            </p>
            <a
              href="/#contact-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold rounded-xl text-lg transition-colors"
            >
              Voir la solution →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
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
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00D4C8]/40 rounded-full text-[#00D4C8] text-sm font-semibold mb-6 bg-[#00D4C8]/5">
            ⚠ Le problème
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-[#0F1D3A] mb-6 leading-tight">
            Vous pilotez encore{' '}
            <span className="text-[#00D4C8]">à l'aveugle ?</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            La plupart des PME perdent <strong className="text-[#0F1D3A]">15 à 20% de marge</strong> faute
            de visibilité en temps réel. Est-ce votre cas ?
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {douleurs.map((d, i) => (
            <div
              key={i}
              className="bg-white border border-red-100 rounded-3xl p-8 flex gap-5 items-start shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-red-100 text-2xl">
                {d.emoji}
              </div>
              <div>
                <p className="font-black text-[#0F1D3A] text-xl mb-2">{d.titre}</p>
                <p className="text-base text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bas */}
        <div className="text-center mt-14">
          <p className="text-lg text-gray-500 mb-6">
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
    </section>
  );
}
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const douleurs = [
  { titre: 'Excel partout', desc: 'Fichiers éparpillés, données obsolètes, erreurs de saisie répétées.' },
  { titre: 'Rentabilité floue', desc: "Vous découvrez les marges réelles en fin de chantier — trop tard pour corriger." },
  { titre: 'Données non fiables', desc: "Silos entre commercial, terrain et comptabilité. Personne n'a la même information." },
  { titre: 'Temps perdu en admin', desc: "Resaisies manuelles, relances oubliées, facturation en retard. Vous gérez au lieu de piloter." },
];

export function Probleme() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00D4C8]/40 rounded-full text-[#00D4C8] text-sm font-semibold mb-4 bg-[#00D4C8]/5">
            ⚠ Le problème
          </div>
          <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">
            Vous pilotez encore <span className="text-[#00D4C8]">à l'aveugle ?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            La plupart des PME perdent 15 à 20% de marge faute de visibilité en temps réel.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {douleurs.map((d, i) => (
            <div key={i} className="bg-white border border-red-100 rounded-2xl p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-100">
                <span style={{ color: '#ef4444', fontSize: '14px', fontWeight: 700 }}>✕</span>
              </div>
              <div>
                <p className="font-bold text-[#0F1D3A] mb-1">{d.titre}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
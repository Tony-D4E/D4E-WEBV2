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
  const { ref: imageRef,  isVisible: imageVisible  } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-8 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F1D3A] mb-6 tracking-tight">
            Nos <span className="text-[#00D4C8]">Services</span>
          </h2>
          <p className="text-lg text-gray-500">Une offre complète pour votre transformation digitale.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div ref={cardsRef} className={`grid sm:grid-cols-2 gap-5 stagger-children ${cardsVisible ? 'is-visible' : ''}`}>
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00D4C8] flex items-center justify-center flex-shrink-0">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#0F1D3A] mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.features.map((f, j) => (
                        <span key={j} className="px-2 py-0.5 text-xs bg-[#F0FDF9] text-[#0F766E] rounded-full border border-[#CCFBF1] font-medium">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div ref={imageRef} className={`flex justify-center animate-scale ${imageVisible ? 'is-visible' : ''}`}>
            <div className="w-full rounded-3xl overflow-hidden bg-[#0F1D3A] h-80 flex items-center justify-center relative">
              <img src="/erp-dashboard.jpg" alt="Dashboard ERP Odoo" className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <p className="text-4xl font-black mb-1">ERP</p>
                  <p className="text-xs opacity-50">Setup · Config · Training · Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
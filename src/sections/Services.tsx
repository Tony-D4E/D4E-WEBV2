import { Settings, Code, GraduationCap, Headphones } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Settings,
    title: 'Implémentation Odoo',
    description:
      'Déploiement complet de votre ERP. Analyse, configuration, migration et go-live.',
    features: ['Analyse', 'Configuration', 'Migration', 'Go-live'],
  },
  {
    icon: Code,
    title: 'Personnalisation',
    description:
      'Solutions sur mesure. Modules custom, intégrations API, workflows avancés.',
    features: ['Modules', 'API', 'Workflows', 'Rapports'],
  },
  {
    icon: GraduationCap,
    title: 'Formation',
    description:
      'Transfert de compétences. Formations personnalisées pour tous les profils.',
    features: ['Utilisateurs', 'Admins', 'Docs', 'Coaching'],
  },
  {
    icon: Headphones,
    title: 'Support',
    description:
      'Accompagnement continu. Support réactif et maintenance proactive.',
    features: ['Support', 'Updates', 'Optimisation', 'Sauvegardes'],
  },
];

export function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Background Glow */}
      <div className="blob-glow w-[700px] h-[700px] bg-[#00D4C8] -bottom-40 -right-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Nos <span className="text-gradient-animated">Services</span>
          </h2>
          <p className="text-lg text-gray-400">
            Une offre complète pour votre transformation digitale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={cardsRef}
            className={`grid sm:grid-cols-2 gap-6 stagger-children ${cardsVisible ? 'is-visible' : ''}`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 card-glow rounded-2xl card-glow-hover card-lift border-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center flex-shrink-0 glow-cyan-sm group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-[#00D4C8]/10 text-[#00D4C8] rounded-lg border border-[#00D4C8]/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            ref={imageRef}
            className={`flex justify-center animate-scale ${imageVisible ? 'is-visible' : ''}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4C8]/20 to-[#7C3AED]/20 rounded-3xl blur-3xl animate-pulse" />
              <img 
                src="/erp-dashboard.jpg" 
                alt="Dashboard ERP Odoo" 
                className="relative rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,212,200,0.2)] card-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

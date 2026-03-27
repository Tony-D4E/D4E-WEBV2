import { Search, FileText, Cog, Rocket, HeadphonesIcon, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  { number: '01', icon: Search,          title: 'Analyse',        desc: 'Étude de vos processus et besoins.' },
  { number: '02', icon: FileText,        title: 'Conception',     desc: 'Solution sur mesure, workflows.' },
  { number: '03', icon: Cog,             title: 'Implémentation', desc: 'Déploiement, config, migration.' },
  { number: '04', icon: CheckCircle,     title: 'Tests',          desc: 'Validation avec vos équipes.' },
  { number: '05', icon: Rocket,          title: 'Go-Live',        desc: 'Mise en prod, formation.' },
  { number: '06', icon: HeadphonesIcon,  title: 'Support',        desc: 'Accompagnement continu.' },
];

export function Methodology() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: stepsRef,  isVisible: stepsVisible  } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: imageRef,  isVisible: imageVisible  } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="methodologie" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-8 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F1D3A] mb-6 tracking-tight">
            Notre <span className="text-[#00D4C8]">méthodologie</span>
          </h2>
          <p className="text-lg text-gray-500">150+ projets. Une approche éprouvée pour votre succès.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div ref={stepsRef} className={`grid sm:grid-cols-2 gap-4 stagger-children ${stepsVisible ? 'is-visible' : ''}`}>
            {steps.map((s, i) => (
              <div key={i} className="relative p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#00D4C8] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{s.number}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0FDF9] flex items-center justify-center group-hover:bg-[#00D4C8] transition-colors">
                    <s.icon className="h-5 w-5 text-[#00D4C8] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F1D3A] mb-1">{s.title}</h3>
                    <p className="text-gray-400 text-xs">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div ref={imageRef} className={`flex justify-center animate-scale ${imageVisible ? 'is-visible' : ''}`}>
            <div className="w-full rounded-3xl overflow-hidden h-72 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #818cf8 0%, #00D4C8 100%)' }}>
              <img src="/methodology-illustration.png" alt="Méthodologie D4E"
                className="w-full h-full object-cover mix-blend-overlay opacity-80" />
              <div className="absolute text-center text-white/90">
                <div className="text-5xl font-black">6</div>
                <div className="text-sm">étapes éprouvées</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
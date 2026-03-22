import { Search, FileText, Cog, Rocket, HeadphonesIcon, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  { number: '01', icon: Search, title: 'Analyse', desc: 'Étude de vos processus et besoins.' },
  { number: '02', icon: FileText, title: 'Conception', desc: 'Solution sur mesure, workflows.' },
  { number: '03', icon: Cog, title: 'Implémentation', desc: 'Déploiement, config, migration.' },
  { number: '04', icon: CheckCircle, title: 'Tests', desc: 'Validation avec vos équipes.' },
  { number: '05', icon: Rocket, title: 'Go-Live', desc: 'Mise en prod, formation.' },
  { number: '06', icon: HeadphonesIcon, title: 'Support', desc: 'Accompagnement continu.' },
];

export function Methodology() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="methodologie" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      <div className="blob-glow w-[600px] h-[600px] bg-[#7C3AED] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Notre <span className="text-gradient-animated">méthodologie</span>
          </h2>
          <p className="text-lg text-gray-400">
            150+ projets. Une approche éprouvée pour votre succès.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div 
            ref={stepsRef}
            className={`order-2 lg:order-1 stagger-children ${stepsVisible ? 'is-visible' : ''}`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {steps.map((s, i) => (
                <div key={i} className="relative p-5 bg-[#111827] rounded-2xl border border-white/10 hover:border-[#00D4C8]/50 transition-all group card-lift border-glow">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{s.number}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00D4C8]/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#00B4A6] group-hover:to-[#06B6D4] transition-all">
                      <s.icon className="h-5 w-5 text-[#00D4C8] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{s.title}</h3>
                      <p className="text-gray-400 text-xs">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className={`order-1 lg:order-2 flex justify-center animate-scale ${imageVisible ? 'is-visible' : ''}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4C8]/20 to-[#7C3AED]/20 rounded-3xl blur-3xl animate-pulse" />
              <img 
                src="/methodology-illustration.png" 
                alt="Notre méthodologie d'implémentation ERP" 
                className="relative w-full max-w-md h-auto card-lift"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="hidden lg:flex justify-center mt-12">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#00B4A6]" />
                <div className="w-20 h-0.5 bg-gradient-to-r from-[#00B4A6] to-[#06B6D4]" />
              </div>
            ))}
            <div className="w-3 h-3 rounded-full bg-[#06B6D4]" />
          </div>
        </div>
      </div>
    </section>
  );
}

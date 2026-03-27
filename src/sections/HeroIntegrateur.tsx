import { Button } from '@/components/ui/button';
import { ArrowRight, Award, MapPin, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const checks = ['Prix fixe transparent', 'Déploiement en quelques jours', 'Spécificités suisses incluses'];

export function HeroIntegrateur() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={leftRef} className={`space-y-8 animate-on-scroll ${leftVisible ? 'is-visible' : ''}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F59E0B] text-white rounded-full shadow-lg">
              <Award className="h-4 w-4" />
              <span className="text-sm font-bold">Gold Partner Odoo · Suisse · France · Espagne</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0F1D3A] leading-[0.95] tracking-tight">
              Éditeur &amp; intégrateur <span className="text-[#00D4C8]">Odoo</span> en Suisse
            </h1>
            <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
              D4E conçoit la suite Elvy — des solutions métier prêtes à l'emploi pour le BTP,
              le juridique et l'éducation, construites sur Odoo Enterprise.
            </p>
            <div className="flex flex-wrap gap-3">
              {checks.map((c) => (
                <div key={c} className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 bg-white">
                  <CheckCircle className="h-4 w-4 text-[#00D4C8] flex-shrink-0" />
                  {c}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold px-8 rounded-xl text-lg">
                <a href="/#elvy">Découvrir la suite Elvy <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button asChild size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 rounded-xl text-lg border-0">
                <a href="/#contact-form">Discuter de mon projet</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Genève', 'Sion', 'Barcelone'].map((l) => (
                <div key={l} className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-full text-sm text-gray-500">
                  <MapPin className="h-3.5 w-3.5 text-[#00D4C8]" />
                  {l}
                </div>
              ))}
            </div>
          </div>
          <div ref={rightRef} className={`relative flex items-center justify-center animate-on-scroll delay-1 ${rightVisible ? 'is-visible' : ''}`}>
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-xl w-full max-w-lg">
              <img src="/team-working.jpg" alt="Équipe Digital4Efficiency au travail" className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0F1D3A] to-transparent">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img src="/team-antonio.jpg" alt="Antonio" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    <img src="/team-laetitia.jpg" alt="Laëtitia" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Antonio &amp; Laëtitia</p>
                    <p className="text-xs text-gray-300">Vos interlocuteurs dédiés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
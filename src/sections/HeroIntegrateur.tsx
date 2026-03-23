import { Button } from '@/components/ui/button';
import { ArrowRight, Award, MapPin, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  'Implémentation Odoo',
  'Personnalisation',
  'Formation',
  'Support',
];

export function HeroIntegrateur() {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: locationsRef, isVisible: locationsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-[#0B0F19]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[900px] h-[900px] bg-[#00D4C8]/20 -top-60 -right-60 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute w-[700px] h-[700px] bg-[#7C3AED]/10 bottom-0 left-0 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge Gold Partner */}
            <div 
              ref={badgeRef}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] rounded-full border border-[#FBBF24]/50 shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-on-scroll ${badgeVisible ? 'is-visible' : ''}`}
            >
              <Award className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">
                Partenaire Odoo Gold Suisse
              </span>
            </div>

            {/* Main H1 */}
            <div 
              ref={titleRef}
              className={`space-y-4 animate-on-scroll delay-1 ${titleVisible ? 'is-visible' : ''}`}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight">
                Intégrateur <span className="text-gradient-animated">Odoo</span> en Suisse
              </h1>
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                Experts Odoo depuis 2019. Nous accompagnons les PME et grandes entreprises 
                suisses dans leur transformation digitale avec des solutions ERP sur mesure.
              </p>
            </div>
            
            {/* Services */}
            <div 
              ref={servicesRef}
              className={`flex flex-wrap gap-3 stagger-children ${servicesVisible ? 'is-visible' : ''}`}
            >
              {services.map((service, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 card-lift">
                  <CheckCircle className="h-4 w-4 text-[#00D4C8]" />
                  <span className="text-sm text-gray-300">{service}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              ref={ctaRef}
              className={`flex flex-col sm:flex-row gap-4 animate-on-scroll delay-2 ${ctaVisible ? 'is-visible' : ''}`}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#00B4A6] via-[#00D4C8] to-[#06B6D4] hover:opacity-90 text-white font-bold px-8 rounded-xl glow-cyan text-lg btn-glow pulse-glow"
              >
                <a href="/tarifs">
                  Découvrir nos offres
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#F59E0B]/50 text-[#F59E0B] hover:bg-[#F59E0B]/10 hover:border-[#F59E0B] rounded-xl text-lg btn-glow"
              >
                <a href="/#contact-form">Discuter de mon projet</a>
              </Button>
            </div>

            {/* Locations */}
            <div 
              ref={locationsRef}
              className={`flex flex-wrap gap-3 animate-on-scroll delay-3 ${locationsVisible ? 'is-visible' : ''}`}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 card-lift">
                <MapPin className="h-4 w-4 text-[#00D4C8]" />
                <span className="text-sm text-gray-300">Genève</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 card-lift">
                <MapPin className="h-4 w-4 text-[#00D4C8]" />
                <span className="text-sm text-gray-300">Sion</span>
              </div>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div 
            ref={imageRef}
            className={`relative flex items-center justify-center animate-scale ${imageVisible ? 'is-visible' : ''}`}
          >
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#00D4C8]/30 to-[#06B6D4]/20 rounded-full blur-[100px] animate-pulse" />
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,212,200,0.15)] w-full max-w-lg card-lift">
              <img 
                src="/team-working.jpg" 
                alt="Équipe Digital4Efficiency au travail" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0B0F19] to-transparent">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img src="/team-antonio.jpg" alt="Antonio" className="w-10 h-10 rounded-full border-2 border-[#0B0F19] object-cover card-lift" />
                    <img src="/team-laetitia.jpg" alt="Laëtitia" className="w-10 h-10 rounded-full border-2 border-[#0B0F19] object-cover card-lift" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Antonio & Laëtitia</p>
                    <p className="text-xs text-gray-400">Vos interlocuteurs dédiés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h2>Intégrateur Odoo Suisse - Partenaire Odoo Gold</h2>
        <p>
          Digital4Efficiency est votre partenaire Odoo Gold en Suisse. Basés à Genève et Sion, 
          nous accompagnons les entreprises suisses dans leur transformation digitale avec Odoo ERP. 
          Nos services incluent l'implémentation Odoo, la personnalisation, la formation des équipes 
          et le support technique. Avec plus de 150 projets réalisés depuis 2019, nous sommes 
          experts dans le déploiement d'Odoo pour les PME et grandes entreprises en Suisse romande.
        </p>
        <p>
          Intégrateur Odoo Suisse, partenaire Odoo Gold, ERP Suisse, Odoo Genève, Odoo Sion, 
          implémentation Odoo, consultant Odoo, formation Odoo, support Odoo, transformation digitale PME.
        </p>
      </div>
    </section>
  );
}

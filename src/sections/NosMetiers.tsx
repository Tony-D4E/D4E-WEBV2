import { Button } from '@/components/ui/button';
import { ArrowRight, Layers, Star, Award, Building2, Code, GraduationCap, Headphones } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const integrateurServices = [
  { icon: Code, title: 'Implémentation', desc: "Déploiement complet d\'Odoo adapté à vos processus" },
  { icon: Layers, title: 'Personnalisation', desc: 'Développements sur mesure et intégrations' },
  { icon: GraduationCap, title: 'Formation', desc: 'Formation de vos équipes à tous les modules' },
  { icon: Headphones, title: 'Support', desc: 'Assistance technique réactive et maintenance' },
];

const elvySectors = [
  { name: 'ElvyBat',       tag: 'BTP',     desc: 'Construction & chantiers', link: '/elvybat' },
  { name: 'ElvyPrint',     tag: 'Bientôt', desc: 'Imprimerie & machines',    link: '#' },
  { name: 'ElvyLaw',       tag: 'Bientôt', desc: 'Juridique & notaires',     link: '#' },
  { name: 'ElvyImmo',      tag: 'Bientôt', desc: 'Immobilier & location',    link: '#' },
  { name: 'ElvyAssurance', tag: 'Bientôt', desc: 'Assurance & courtage',     link: '#' },
  { name: 'ElvyEduca',     tag: 'Bientôt', desc: 'Éducation & formation',    link: '#' },
];

export function NosMetiers() {
  const { ref: headerRef,    isVisible: headerVisible    } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: integratorRef, isVisible: integratorVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: editorRef,    isVisible: editorVisible    } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="blob-glow w-[600px] h-[600px] bg-[#00D4C8]/10 top-0 left-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/10 rounded-full border border-[#00D4C8]/30 mb-6">
            <Star className="h-5 w-5 text-[#00D4C8]" />
            <span className="text-sm font-bold text-[#00D4C8]">Nos expertises</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Deux métiers, <span className="text-gradient-animated">une expertise</span>
          </h2>
          <p className="text-lg text-gray-400">
            Nous combinons le meilleur de l\'intégration Odoo avec des solutions métiers
            packagées pour répondre à tous vos besoins.
          </p>
        </div>

        {/* Métier 1 : Intégrateur Odoo */}
        <div
          ref={integratorRef}
          className={`mb-12 animate-on-scroll delay-1 ${integratorVisible ? 'is-visible' : ''}`}
        >
          <div className="p-6 sm:p-8 bg-[#111827] rounded-3xl border border-white/10 card-lift">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] flex items-center justify-center glow-gold-sm flex-shrink-0">
                    <Award className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Intégrateur Odoo</h3>
                    <p className="text-[#FBBF24] font-semibold text-sm sm:text-base">Partenaire Gold</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Experts Odoo depuis 2019, nous accompagnons les entreprises suisses dans
                  leur transformation digitale. De l\'audit initial au support quotidien,
                  nous sommes à vos côtés à chaque étape.
                </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {integrateurServices.map((service, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-5 sm:p-6 bg-[#0B0F19] rounded-xl card-lift border-glow">
                    <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-xl bg-[#00D4C8]/10 flex items-center justify-center mb-3 sm:mb-4">
                      <service.icon className="h-7 w-7 sm:h-6 sm:w-6 text-[#00D4C8]" />
                    </div>
                    <h4 className="font-semibold text-white text-base sm:text-lg mb-2">{service.title}</h4>
                    <p className="text-sm sm:text-xs text-gray-500">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
              <Button asChild className="w-full sm:w-auto bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] hover:opacity-90 text-white font-bold rounded-xl btn-glow">
                <a href="/#contact-form">
                  Discuter de mon projet Odoo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Métier 2 : Éditeur de solutions — pleine largeur */}
        <div
          ref={editorRef}
          className={`animate-on-scroll delay-2 ${editorVisible ? 'is-visible' : ''}`}
        >
          <div className="p-8 bg-[#111827] rounded-3xl border border-white/10 card-lift">
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Gauche — description */}
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center glow-cyan-sm flex-shrink-0">
                    <Layers className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Éditeur de solutions</h3>
                    <p className="text-[#00D4C8] font-semibold">Gamme Elvy</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Nous développons des solutions métiers packagées basées sur Odoo.
                  Chaque module est conçu pour répondre aux besoins spécifiques d\'un secteur
                  d\'activité, avec un déploiement rapide et un coût maîtrisé.
                </p>
                <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-xl">
                  <a href="/#/elvy">
                    Découvrir la gamme Elvy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Droite — grille des solutions */}
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {elvySectors.map((sector, i) => (
                  <a
                    key={i}
                    href={sector.link}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                      sector.tag === 'BTP'
                        ? 'bg-gradient-to-r from-[#00B4A6]/10 to-transparent border border-[#00D4C8]/30 hover:border-[#00D4C8]/50'
                        : 'bg-[#0B0F19] border border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${sector.tag === 'BTP' ? 'bg-[#00D4C8]/20' : 'bg-white/5'}`}>
                        <Building2 className={`h-5 w-5 ${sector.tag === 'BTP' ? 'text-[#00D4C8]' : 'text-gray-500'}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{sector.name}</h4>
                        <p className="text-xs text-gray-500">{sector.desc}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ml-2 ${
                      sector.tag === 'BTP'
                        ? 'bg-[#00D4C8] text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {sector.tag}
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="sr-only">
        <h2>Intégrateur Odoo et Éditeur de Solutions ERP en Suisse</h2>
        <p>
          Digital4Efficiency combine deux expertises complémentaires : l\'intégration Odoo
          et l\'édition de solutions métiers. En tant que partenaire Odoo Gold, nous proposons
          des services d\'implémentation, de personnalisation, de formation et de support pour
          Odoo ERP. Parallèlement, nous développons la gamme Elvy, des solutions packagées
          pour des secteurs spécifiques comme le BTP (ElvyBat), l\'imprimerie (ElvyPrint),
          le juridique (ElvyLaw), l\'immobilier (ElvyImmo), l\'assurance (ElvyAssurance)
          et l\'éducation (ElvyEduca).
        </p>
      </div>
    </section>
  );
}

import { Button } from '@/components/ui/button';
import { ArrowRight, Layers, Star, Award, Building2, Code, GraduationCap, Headphones } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const integrateurServices = [
  { icon: Code,          title: 'Implémentation',  desc: "Déploiement complet d'Odoo adapté à vos processus" },
  { icon: Layers,        title: 'Personnalisation', desc: 'Développements sur mesure et intégrations' },
  { icon: GraduationCap, title: 'Formation',        desc: 'Formation de vos équipes à tous les modules' },
  { icon: Headphones,    title: 'Support',          desc: 'Assistance technique réactive et maintenance' },
];

const elvySectors = [
  { name: 'ElvyBat',       tag: 'BTP',     desc: 'Construction & chantiers', link: '/elvybat', active: true },
  { name: 'ElvyPrint',     tag: 'Bientôt', desc: 'Imprimerie & machines',    link: '#',        active: false },
  { name: 'ElvyLaw',       tag: 'Bientôt', desc: 'Juridique & notaires',     link: '#',        active: false },
  { name: 'ElvyImmo',      tag: 'Bientôt', desc: 'Immobilier & location',    link: '#',        active: false },
  { name: 'ElvyAssurance', tag: 'Bientôt', desc: 'Assurance & courtage',     link: '#',        active: false },
  { name: 'ElvyEduca',     tag: 'Bientôt', desc: 'Éducation & formation',    link: '#',        active: false },
];

export function NosMetiers() {
  const { ref: headerRef,     isVisible: headerVisible     } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: integratorRef, isVisible: integratorVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: editorRef,     isVisible: editorVisible     } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00D4C8]/40 rounded-full bg-[#00D4C8]/5 mb-6">
            <Star className="h-4 w-4 text-[#00D4C8]" />
            <span className="text-sm font-bold text-[#00D4C8]">Nos expertises</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F1D3A] mb-6 tracking-tight">
            Deux métiers, <span className="text-[#00D4C8]">une expertise</span>
          </h2>
          <p className="text-lg text-gray-500">
            Nous combinons le meilleur de l'intégration Odoo avec des solutions métiers
            packagées pour répondre à tous vos besoins.
          </p>
        </div>

        {/* Intégrateur Odoo */}
        <div ref={integratorRef} className={`mb-8 animate-on-scroll delay-1 ${integratorVisible ? 'is-visible' : ''}`}>
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Award className="h-7 w-7 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F1D3A]">Intégrateur Odoo</h3>
                    <p className="text-[#F59E0B] font-semibold text-sm">Partenaire Gold</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Experts Odoo depuis 2019, nous accompagnons les entreprises suisses dans
                  leur transformation digitale. De l'audit initial au support quotidien,
                  nous sommes à vos côtés à chaque étape.
                </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {integrateurServices.map((s, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4C8]/10 flex items-center justify-center mb-3">
                      <s.icon className="h-6 w-6 text-[#00D4C8]" />
                    </div>
                    <h4 className="font-semibold text-[#0F1D3A] text-base mb-1">{s.title}</h4>
                    <p className="text-xs text-gray-500">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Button asChild className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold rounded-xl">
                <a href="/#contact-form">Discuter de mon projet Odoo <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </div>

        {/* Éditeur Elvy */}
        <div ref={editorRef} className={`animate-on-scroll delay-2 ${editorVisible ? 'is-visible' : ''}`}>
          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F0FDF9] flex items-center justify-center flex-shrink-0">
                    <Layers className="h-7 w-7 text-[#00D4C8]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F1D3A]">Éditeur de solutions</h3>
                    <p className="text-[#00D4C8] font-semibold">Gamme Elvy</p>
                  </div>
                </div>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Nous développons des solutions métiers packagées basées sur Odoo.
                  Chaque module est conçu pour répondre aux besoins spécifiques d'un secteur
                  d'activité, avec un déploiement rapide et un coût maîtrisé.
                </p>
                <Button asChild variant="outline" className="w-full border-gray-200 text-[#0F1D3A] hover:bg-gray-50 rounded-xl">
                  <a href="/#/elvy">Découvrir la gamme Elvy <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {elvySectors.map((s, i) => (
                  <a key={i} href={s.link}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                      s.active
                        ? 'bg-[#F0FDF9] border-[#CCFBF1] hover:border-[#00D4C8]'
                        : 'bg-gray-50 border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.active ? 'bg-[#00D4C8]/15' : 'bg-gray-100'}`}>
                        <Building2 className={`h-5 w-5 ${s.active ? 'text-[#00D4C8]' : 'text-gray-400'}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold text-sm ${s.active ? 'text-[#0F1D3A]' : 'text-gray-400'}`}>{s.name}</h4>
                        <p className="text-xs text-gray-400">{s.desc}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold flex-shrink-0 ml-2 ${
                      s.active ? 'bg-[#00D4C8] text-white' : 'bg-gray-200 text-gray-400'
                    }`}>{s.tag}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="sr-only">
        <h2>Intégrateur Odoo et Éditeur de Solutions ERP en Suisse</h2>
        <p>Digital4Efficiency combine deux expertises : l'intégration Odoo Gold et les solutions Elvy pour le BTP, l'imprimerie, le juridique, l'immobilier, l'assurance et l'éducation.</p>
      </div>
    </section>
  );
}
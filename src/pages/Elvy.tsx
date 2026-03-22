import { Footer } from '../sections/Footer';
import { ArrowRight, Layers, CheckCircle, BarChart3, HardHat, Printer, Scale, Home, Shield, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const products = [
  {
    name: 'ElvyBat',
    tagline: 'BTP & Construction',
    description: 'Gestion de chantiers, facturation par situation, planning.',
    features: ['Facturation situation', 'Suivi temps réel', 'Planning', 'Bons régie IA', 'Rapports vocaux'],
    available: true,
    anchor: 'elvybat',
    icon: HardHat,
  },
  {
    name: 'ElvyPrint',
    tagline: 'Imprimerie',
    description: 'Parc machines, contrats maintenance, consommables.',
    features: ['Parc machines', 'Maintenance', 'Consommables', 'Facturation', 'Comptage'],
    available: true,
    anchor: 'elvyprint',
    icon: Printer,
  },
  {
    name: 'ElvyLaw',
    tagline: 'Juridique',
    description: 'Dossiers, facturation temps, trust accounting.',
    features: ['Dossiers', 'Temps passé', 'Trust accounting', 'LPP/LPal', 'Échéances'],
    comingSoon: true,
    anchor: 'elvylaw',
    icon: Scale,
  },
  {
    name: 'ElvyImmo',
    tagline: 'Immobilier',
    description: 'Gestion locative, états des lieux, charges.',
    features: ['Locatif', 'États lieux', 'Loyers', 'Copropriété', 'Charges'],
    comingSoon: true,
    anchor: 'elvyimmo',
    icon: Home,
  },
  {
    name: 'ElvyAssurance',
    tagline: 'Assurance',
    description: 'Polices, échéances, commissions, comparateurs.',
    features: ['Polices', 'Échéances', 'Commissions', 'Comparateurs', 'Clients'],
    comingSoon: true,
    anchor: 'elvyassurance',
    icon: Shield,
  },
  {
    name: 'ElvyEduca',
    tagline: 'Éducation',
    description: 'Élèves, inscriptions, planning, e-learning.',
    features: ['Élèves', 'Inscriptions', 'Planning', 'Facturation', 'E-learning'],
    comingSoon: true,
    anchor: 'elvyeduca',
    icon: GraduationCap,
  },
];

// Offre détaillée ElvyBat
const elvyBatOffer = {
  setup: [
    'Ouverture de la base de données',
    'Paramétrage et installation des composants ElvyBat',
    'Création des utilisateurs',
    'Mise en place du logo',
    'Gestion des rabais',
    "Création d'un modèle d'article / modèle d'ouvrage",
    'Mise en page du logo sur les modèles standard',
  ],
  modules: [
    { name: 'Comptabilité ElvyBat', desc: 'Liaison bancaire, plan comptable Odoo, TVA' },
    { name: 'Rentabilité Chantier', desc: 'Comptabilité analytique incluse' },
  ],
  odooApps: 'CRM, Abonnements, Achats, Location, Dépenses, Marketing, Projets, Service sur Site, et tous les autres modules standard Odoo',
  support: '8 heures d\'accompagnement par un chef de projet — suffisant pour une mise en place standard',
  travel: '1 déplacement inclus',
};

// Offre détaillée ElvyPrint
const elvyPrintOffer = {
  setup: [
    'Ouverture de la base de données',
    'Paramétrage et installation des composants ElvyPrint',
    'Création des utilisateurs',
    'Mise en place du logo et charte graphique',
    'Configuration du parc machines',
    'Création des modèles de contrats maintenance',
    'Mise en page des modèles de documents',
  ],
  modules: [
    { name: 'Parc Machines', desc: 'Inventaire, suivi, maintenance préventive' },
    { name: 'Contrats Maintenance', desc: 'Gestion des contrats, échéances, renouvellements' },
    { name: 'Consommables', desc: 'Stocks, commandes automatiques, alertes' },
    { name: 'Comptage', desc: 'Relevés compteurs, facturation à la consommation' },
  ],
  odooApps: 'CRM, Ventes, Achats, Stock, Facturation, Comptabilité, et tous les autres modules standard Odoo',
  support: '8 heures d\'accompagnement par un chef de projet',
  travel: '1 déplacement inclus',
};

export function Elvy() {
  const location = useLocation();

  useEffect(() => {
    // Scroll vers l'ancre si présente dans l'URL
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
        <div className="blob-glow w-[600px] h-[600px] bg-[#00D4C8]/20 -top-40 -left-40" />
        <div className="blob-glow w-[400px] h-[400px] bg-[#7C3AED]/20 bottom-20 right-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="/logo-elvy.png" alt="Elvy" className="h-16 w-auto" />
              <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                La gamme <span className="text-gradient">Elvy</span>
              </h1>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/10 rounded-full border border-[#00D4C8]/30 mb-6">
              <Layers className="h-5 w-5 text-[#00D4C8]" />
              <span className="text-sm font-bold text-[#00D4C8]">
                Solutions Odoo packagées par métier
              </span>
            </div>
            <p className="text-xl text-gray-400">
              Des solutions prêtes à l'emploi pour votre secteur d'activité. 
              Cliquez sur un produit pour découvrir son offre complète.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid - Navigation */}
      <section className="py-24 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <a
                key={index}
                href={`#${product.anchor}`}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  product.available
                    ? 'bg-gradient-to-br from-[#00B4A6]/10 to-[#06B6D4]/5 border-[#00D4C8]/40 glow-cyan-sm hover:border-[#00D4C8]/70'
                    : 'bg-[#111827] border-white/10 hover:border-white/20'
                }`}
              >
                {product.comingSoon && (
                  <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-[#1F2937] text-gray-400 rounded-full border border-gray-700">
                    Bientôt
                  </div>
                )}
                
                {product.available && (
                  <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] text-white rounded-full">
                    Disponible
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-[#00D4C8]/10 flex items-center justify-center mb-4">
                  <product.icon className="h-6 w-6 text-[#00D4C8]" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                <p className="text-sm text-[#00D4C8] font-semibold mb-3">{product.tagline}</p>
                <p className="text-gray-400 mb-5">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded border border-white/10">
                      {feature}
                    </span>
                  ))}
                </div>

                {product.available ? (
                  <div className="flex items-center justify-center gap-2 text-[#00D4C8] font-semibold text-sm group-hover:underline">
                    Voir l'offre complète
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                ) : (
                  <div className="text-center text-gray-500 text-sm">
                    Bientôt disponible
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section Offre ElvyBat */}
      <section id="elvybat" className="py-24 bg-[#0F172A] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Description */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center glow-cyan-sm">
                  <HardHat className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-white">ElvyBat</h2>
                  <p className="text-[#00D4C8] font-semibold">BTP & Construction</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-400 mb-8">
                Logiciel de gestion de chantier complet pour le BTP. Facturation par situation, 
                planning, suivi de rentabilité en temps réel. Solution packagée pour artisans 
                et entreprises du bâtiment.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-[#111827] rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-[#00D4C8]">500+</div>
                  <div className="text-xs text-gray-500">Clients</div>
                </div>
                <div className="text-center p-4 bg-[#111827] rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-[#00D4C8]">30%</div>
                  <div className="text-xs text-gray-500">Temps gagné</div>
                </div>
                <div className="text-center p-4 bg-[#111827] rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-[#00D4C8]">2-4s</div>
                  <div className="text-xs text-gray-500">Déploiement</div>
                </div>
              </div>

              <Button asChild className="bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 text-white font-bold rounded-xl">
                <a href="/#contact-form">
                  Demander une démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Right - Offre détaillée */}
            <div className="p-8 bg-[#111827] rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#00D4C8]" />
                Pack de mise en place
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Service de mise en place</h4>
                  <ul className="space-y-2">
                    {elvyBatOffer.setup.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-[#00D4C8] mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Modules inclus</h4>
                  <div className="space-y-2">
                    {elvyBatOffer.modules.map((mod, i) => (
                      <div key={i} className="p-3 bg-[#0B0F19] rounded-lg">
                        <div className="font-semibold text-white text-sm">{mod.name}</div>
                        <div className="text-xs text-gray-500">{mod.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Applications Odoo standard</h4>
                  <p className="text-sm text-gray-400">{elvyBatOffer.odooApps}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Accompagnement</h4>
                    <p className="text-xs text-gray-400">{elvyBatOffer.support}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Déplacements</h4>
                    <p className="text-xs text-gray-400">{elvyBatOffer.travel}</p>
                  </div>
                </div>
              </div>

              <Button asChild variant="outline" className="w-full mt-6 border-white/20 text-white hover:bg-white/10 rounded-xl">
                <a href="/tarifs">
                  Voir les tarifs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Offre ElvyPrint */}
      <section id="elvyprint" className="py-24 bg-[#0B0F19] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Offre détaillée */}
            <div className="order-2 lg:order-1 p-8 bg-[#111827] rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#00D4C8]" />
                Pack de mise en place
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Service de mise en place</h4>
                  <ul className="space-y-2">
                    {elvyPrintOffer.setup.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-[#00D4C8] mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Modules inclus</h4>
                  <div className="space-y-2">
                    {elvyPrintOffer.modules.map((mod, i) => (
                      <div key={i} className="p-3 bg-[#0B0F19] rounded-lg">
                        <div className="font-semibold text-white text-sm">{mod.name}</div>
                        <div className="text-xs text-gray-500">{mod.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Applications Odoo standard</h4>
                  <p className="text-sm text-gray-400">{elvyPrintOffer.odooApps}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Accompagnement</h4>
                    <p className="text-xs text-gray-400">{elvyPrintOffer.support}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Déplacements</h4>
                    <p className="text-xs text-gray-400">{elvyPrintOffer.travel}</p>
                  </div>
                </div>
              </div>

              <Button asChild variant="outline" className="w-full mt-6 border-white/20 text-white hover:bg-white/10 rounded-xl">
                <a href="/tarifs">
                  Voir les tarifs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Right - Description */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center">
                  <Printer className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-white">ElvyPrint</h2>
                  <p className="text-[#A855F7] font-semibold">Imprimerie & Vendeurs de machines</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-400 mb-8">
                Solution complète pour les vendeurs d'imprimantes et copieurs. Gestion du parc machines, 
                contrats de maintenance, consommables et facturation à la consommation. Idéal pour 
                optimiser la gestion de votre activité.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-[#111827] rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-[#A855F7]">100%</div>
                  <div className="text-xs text-gray-500">Parc suivi</div>
                </div>
                <div className="text-center p-4 bg-[#111827] rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-[#A855F7]">Auto</div>
                  <div className="text-xs text-gray-500">Commandes</div>
                </div>
                <div className="text-center p-4 bg-[#111827] rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-[#A855F7]">2-4s</div>
                  <div className="text-xs text-gray-500">Déploiement</div>
                </div>
              </div>

              <Button asChild className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:opacity-90 text-white font-bold rounded-xl">
                <a href="/#contact-form">
                  Demander une démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interconnection Banner */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4C8]/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="h-6 w-6 text-[#00D4C8]" />
                  <h3 className="text-xl font-bold text-white">Modules interconnectés</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Tous les modules Elvy partagent une base commune. Démarrez avec un module, 
                  ajoutez-en d'autres au fil de votre croissance.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Interface unique', 'Données partagées', 'Mises à jour centralisées'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-[#00D4C8]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00B4A6]/20 to-[#06B6D4]/20 flex items-center justify-center border border-[#00D4C8]/20">
                <img src="/logo-elvy.png" alt="Elvy" className="h-12 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Layers, value: '6', label: 'Secteurs couverts' },
              { icon: HardHat, value: '500+', label: 'Entreprises' },
              { icon: BarChart3, value: '100%', label: 'Odoo Enterprise' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[#111827] rounded-xl border border-white/10">
                <stat.icon className="h-6 w-6 text-[#00D4C8] mx-auto mb-2" />
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Intéressé par une solution Elvy ?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Discutons de vos besoins et voyons comment Elvy peut transformer votre gestion.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 text-white font-bold px-8 rounded-xl glow-cyan text-lg">
            <a href="/#contact-form">
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { Footer } from '../sections/Footer';
import { 
  HardHat, 
  ClipboardList, 
  Calendar, 
  FileText, 
  TrendingUp, 
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Building2,
  Paintbrush,
  Wrench,
  Home,
  Factory,
  Calculator,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: ClipboardList,
    title: 'Gestion de chantiers',
    description: 'Suivez tous vos chantiers en temps réel. Avancement, budget, délais, documents. Logiciel de gestion de chantier complet.',
  },
  {
    icon: FileText,
    title: 'Facturation par situation',
    description: 'Facturez selon l\'avancement des travaux. Génération automatique des situations conformes aux normes suisses.',
  },
  {
    icon: Calendar,
    title: 'Planning chantier',
    description: 'Planifiez vos équipes et ressources. Vue Gantt intuitive. Planning chantier BTP optimisé.',
  },
  {
    icon: Clock,
    title: 'Suivi du temps',
    description: 'Pointage des équipes sur chantier. Analyse de la productivité. Suivi des heures de travail.',
  },
  {
    icon: TrendingUp,
    title: 'Rentabilité chantier',
    description: 'Suivez la marge de chaque chantier en temps réel. Alertes sur dépassements budgétaires.',
  },
  {
    icon: Calculator,
    title: 'Devis et chiffrage',
    description: 'Créez vos devis rapidement avec les tarifs et articles prédéfinis. Conversion en commande en un clic.',
  },
];

const aiFeatures = [
  {
    icon: Sparkles,
    title: 'Bons de régie par IA',
    description: 'Recevez un mail ou PDF d\'une régie, notre logiciel reconnaît automatiquement toutes les informations et crée la tâche avec les bonnes données.',
  },
  {
    icon: BarChart3,
    title: 'Rapports vocaux multilingues',
    description: 'Vos collaborateurs dictent leurs rapports dans leur langue sur mobile. Conversion automatique en français.',
  },
];

const metiers = [
  { icon: Building2, name: 'Maçonnerie' },
  { icon: Paintbrush, name: 'Peinture' },
  { icon: Wrench, name: 'Plomberie' },
  { icon: Home, name: 'Menuiserie' },
  { icon: Factory, name: 'Gros œuvre' },
  { icon: HardHat, name: 'Entreprise générale' },
  { icon: Building2, name: 'Rénovation' },
  { icon: Wrench, name: 'Électricité' },
];

const avantages = [
  'Déploiement rapide en 2-4 semaines',
  'Formation utilisateur incluse',
  'Support technique réactif',
  'Mises à jour régulières',
  'Base Odoo Enterprise stable',
  'Intégrations avec vos outils existants',
  'Conforme normes suisses',
  'Sauvegarde automatique des données',
];

export function ElvyBatPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      {/* Hero Section - SEO Optimisé */}
      <section className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
        <div className="blob-glow w-[800px] h-[800px] bg-[#00D4C8]/20 top-0 right-0" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/10 rounded-full border border-[#00D4C8]/30 mb-6">
                <HardHat className="h-5 w-5 text-[#00D4C8]" />
                <span className="text-sm font-bold text-[#00D4C8]">Logiciel BTP Suisse</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Logiciel de gestion de chantier <span className="text-gradient">BTP en Suisse</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8">
                ERP Odoo spécialisé pour les entreprises du bâtiment. Gérez vos chantiers, 
                facturez par situation, suivez votre rentabilité en temps réel. Solution packagée 
                pour artisans et PME du BTP.
              </p>

              {/* SEO Hidden Content */}
              <div className="sr-only">
                <h2>Logiciel ERP BTP Suisse - Gestion chantier Odoo Construction</h2>
                <p>
                  Notre logiciel de gestion de chantier pour le BTP est basé sur Odoo, 
                  le ERP open source leader en Europe. Spécialement adapté aux entreprises 
                  du bâtiment suisses, il inclut la facturation par situation, le planning 
                  des équipes, le suivi des chantiers et la gestion de la rentabilité. 
                  Idéal pour les maçons, peintres, plombiers, menuisiers et entreprises 
                  générales du bâtiment en Suisse romande.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 text-white font-bold px-8 rounded-xl glow-cyan text-lg">
                  <a href="/#contact-form">
                    Demander une démo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-xl text-lg">
                  <a href="/tarifs">
                    Voir les tarifs
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4C8]/20 to-[#06B6D4]/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="/btp-illustration.png" 
                  alt="Gestion de chantier BTP avec ElvyBat" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: '500+', label: 'Clients' },
                      { value: '30%', label: 'Temps gagné' },
                      { value: '2-4s', label: 'Déploiement' },
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-[#00D4C8]">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/30 mb-6">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-bold text-purple-400">Intelligence Artificielle</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-6">
              Fonctionnalités <span className="text-gradient">IA</span> pour le BTP
            </h2>
            <p className="text-lg text-gray-400">
              Notre logiciel de gestion de chantier intègre l'intelligence artificielle 
              pour automatiser vos tâches répétitives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-purple-500/10 to-[#00D4C8]/5 rounded-2xl border border-purple-500/20">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-[#00D4C8] flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-white mb-6">
              Tout ce qu'il faut pour votre <span className="text-gradient">entreprise du bâtiment</span>
            </h2>
            <p className="text-lg text-gray-400">
              Une solution ERP complète qui couvre tous les besoins de la gestion de chantier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 bg-[#111827] rounded-2xl border border-white/10 hover:border-[#00D4C8]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center mb-5 glow-cyan-sm">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métiers du BTP */}
      <section className="py-24 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-white mb-6">
              Adapté à tous les métiers du bâtiment
            </h2>
            <p className="text-lg text-gray-400">
              Notre logiciel de gestion de chantier s'adapte à tous les corps de métier du BTP.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metiers.map((metier, i) => (
              <div key={i} className="p-6 bg-[#111827] rounded-2xl border border-white/10 text-center hover:border-[#00D4C8]/30 transition-all">
                <metier.icon className="h-10 w-10 text-[#00D4C8] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white">{metier.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">
                Pourquoi choisir notre <span className="text-gradient">logiciel ERP BTP</span> ?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Une solution éprouvée, développée avec des professionnels du bâtiment en Suisse. 
                Déploiement rapide et accompagnement personnalisé.
              </p>
              
              <ul className="space-y-4">
                {avantages.map((avantage, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00D4C8] flex-shrink-0" />
                    <span className="text-gray-300">{avantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4C8]/20 to-[#06B6D4]/20 rounded-3xl blur-3xl" />
              <div className="relative p-8 bg-[#111827]/80 backdrop-blur-xl rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Prêt à optimiser votre gestion ?
                </h3>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 text-white font-bold py-6 rounded-xl glow-cyan">
                    <a href="/#contact-form">
                      Demander une démo gratuite
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <p className="text-center text-sm text-gray-500">
                    Démonstration personnalisée de 30 minutes sans engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content - Hidden */}
      <section className="sr-only">
        <h2>Qu'est-ce qu'un logiciel de gestion de chantier BTP ?</h2>
        <p>
          Un logiciel de gestion de chantier BTP est un outil informatique spécialement conçu 
          pour les entreprises du bâtiment. Il permet de centraliser la gestion de tous les chantiers, 
          depuis le devis initial jusqu'à la facturation finale. Les fonctionnalités clés incluent 
          la planification des équipes, le suivi de l'avancement, la gestion des stocks et matériaux, 
          la facturation par situation, et le calcul de la rentabilité par chantier.
        </p>
        
        <h2>Comment choisir un logiciel ERP pour le BTP ?</h2>
        <p>
          Pour choisir le bon logiciel ERP pour votre entreprise du BTP, vérifiez ces critères essentiels : 
          1) Facilité d'utilisation et interface intuitive, 2) Fonctionnalités spécifiques au BTP 
          (facturation situation, planning chantier), 3) Conformité aux normes suisses, 4) Support local 
          en français, 5) Évolutivité selon votre croissance, 6) Intégration avec vos outils existants, 
          7) Rapport qualité-prix. Odoo répond à tous ces critères et est la solution ERP la plus 
          utilisée par les PME en Suisse.
        </p>
        
        <h2>Quel est le prix d'un logiciel de gestion de chantier en Suisse ?</h2>
        <p>
          Le prix d'un logiciel de gestion de chantier en Suisse varie selon les fonctionnalités 
          et le nombre d'utilisateurs. Les solutions basiques démarrent autour de 50-100 CHF par mois, 
          tandis que les ERP complets peuvent coûter plusieurs milliers de francs. Chez Digital4Efficiency, 
          nous proposons un Starter Pack à 2500 CHF qui inclut la configuration, la formation et le support. 
          Contactez-nous pour un devis personnalisé adapté à vos besoins spécifiques.
        </p>
        
        <h2>Logiciel BTP Suisse : avantages d'une solution locale</h2>
        <p>
          Opter pour un logiciel BTP proposé par un intégrateur suisse présente de nombreux avantages : 
          conformité parfaite avec la législation suisse (TVA, comptabilité), support technique en français 
          et dans votre fuseau horaire, connaissance approfondie du marché local, et proximité géographique 
          pour les formations et interventions sur site. Digital4Efficiency, avec ses bureaux à Genève et Sion, 
          est votre partenaire idéal pour la digitalisation de votre entreprise du bâtiment en Suisse romande.
        </p>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-[#00B4A6]/10 to-[#06B6D4]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Rejoignez les 500+ entreprises qui utilisent notre logiciel
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Découvrez comment notre ERP BTP peut transformer la gestion de vos chantiers. 
            Demandez une démo personnalisée dès aujourd'hui.
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

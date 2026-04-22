import { 
  HardHat, 
  GraduationCap, 
  Printer, 
  Scale,
  
  Shield,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Layers,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'ElvyBât',
    tagline: 'BTP & Construction',
    description: 'Gestion de chantiers, facturation par situation, planning.',
    features: ['Facturation situation', 'Suivi temps réel', 'Planning', 'Bons régie IA', 'Rapports vocaux'],
    icon: HardHat,
    featured: true,
    link: '#elvybat',
  },
  {
    name: 'ElvyPrint',
    tagline: 'Imprimerie · Bureautique',
    description: 'Parc machines, contrats maintenance, consommables.',
    features: ['Parc machines', 'Maintenance', 'Consommables', 'Facturation', 'Comptage'],
    icon: Printer,
    comingSoon: false,
  },
  {
    name: 'ElvyLaw',
    tagline: 'Avocats · Notaires',
    description: 'Dossiers, facturation temps, trust accounting.',
    features: ['Dossiers', 'Temps passé', 'Trust accounting', 'LPP/LPal', 'Échéances'],
    icon: Scale,
    comingSoon: false,
  },
  {
    name: 'ElvyAssurance',
    tagline: 'Assurance',
    description: 'Polices, échéances, commissions, comparateurs.',
    features: ['Polices', 'Échéances', 'Commissions', 'Comparateurs', 'Clients'],
    icon: Shield,
    comingSoon: true,
  },
  {
    name: 'ElvyEduca',
    tagline: 'Éducation',
    description: 'Élèves, inscriptions, planning, e-learning.',
    features: ['Élèves', 'Inscriptions', 'Planning', 'Facturation', 'E-learning'],
    icon: GraduationCap,
    comingSoon: true,
  },
];

export function ElvyProducts() {
  return (
    <section id="elvy" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Background Glows */}
      <div className="blob-glow w-[600px] h-[600px] bg-[#00D4C8] -top-40 -left-40" />
      <div className="blob-glow w-[400px] h-[400px] bg-[#7C3AED] bottom-20 right-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/logo-elvy.png" alt="Elvy" className="h-14 w-auto" />
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              La gamme <span className="text-gradient">Elvy</span>
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/10 rounded-full border border-[#00D4C8]/30 mb-6">
            <Layers className="h-5 w-5 text-[#00D4C8]" />
            <span className="text-sm font-bold text-[#00D4C8]">
              Solutions Odoo packagées par métier
            </span>
          </div>
          <p className="text-lg text-gray-400">
            Des solutions prêtes à l'emploi. Déploiement rapide, modules interconnectés.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                product.featured
                  ? 'bg-gradient-to-br from-[#00B4A6]/10 to-[#06B6D4]/5 border-[#00D4C8]/40 glow-cyan-sm'
                  : 'card-glow card-glow-hover'
              }`}
            >
              {product.comingSoon && (
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-[#1F2937] text-gray-400 rounded-full border border-gray-700">
                  Bientôt
                </div>
              )}
              
              {product.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] text-white rounded-full flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Disponible
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                product.featured 
                  ? 'bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] glow-cyan-sm' 
                  : 'bg-[#1F2937] group-hover:bg-gradient-to-br group-hover:from-[#00B4A6] group-hover:to-[#06B6D4] transition-all'
              }`}>
                <product.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
              <p className="text-sm text-[#00D4C8] font-semibold mb-3">{product.tagline}</p>
              <p className="text-gray-400 text-sm mb-5">{product.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded border border-white/10">
                    {feature}
                  </span>
                ))}
              </div>

              {product.link ? (
                <Button asChild className="w-full bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 text-white font-semibold rounded-xl glow-cyan-sm">
                  <a href={product.link}>
                    Découvrir
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <Button variant="outline" disabled className="w-full border-gray-700 text-gray-500 cursor-not-allowed rounded-xl">
                  Bientôt disponible
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Interconnection Banner */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4C8]/10 rounded-full blur-3xl" />
          
          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-[#00D4C8]" />
                <h3 className="text-xl font-bold text-white">Modules interconnectés</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Tous les modules partagent une base commune. Démarrez avec un module, ajoutez-en d'autres au fil de votre croissance.
              </p>
              <div className="flex gap-4">
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

        {/* Stats */}
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[
            { icon: BarChart3, value: '6', label: 'Secteurs couverts' },
            { icon: HardHat, value: '500+', label: 'Entreprises' },
            { icon: Layers, value: '100%', label: 'Odoo Enterprise' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 card-glow rounded-xl">
              <stat.icon className="h-6 w-6 text-[#00D4C8] mx-auto mb-2" />
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

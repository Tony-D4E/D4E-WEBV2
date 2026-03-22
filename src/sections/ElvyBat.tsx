import { 
  TrendingUp, FileText, Wrench, Calendar, FolderOpen,
  ArrowRight, Clock, Percent, BarChart3,
  HardHat, Paintbrush, Zap, Droplets, TreePine, Hammer,
  BrickWall, Home, Building, Ruler, Sparkles, Mic,
  Mail, MapPin, User, Languages
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const keyFeatures = [
  {
    icon: Percent,
    title: 'Facturation par situation',
    description: 'Facturation liée à l\'avancement réel. Situations en % ou quantité (m², ml).',
    benefits: ['Situations auto', 'Cascade tarifaire', 'États récap', 'Paiements +50%'],
  },
  {
    icon: TrendingUp,
    title: 'Suivi analytique',
    description: 'Visualisez l\'avancement en temps réel. Comparez avec le budget.',
    benefits: ['Dashboard temps réel', 'Écarts de coûts', 'Rentabilité', 'Alertes'],
  },
  {
    icon: FileText,
    title: 'Devis & avenants',
    description: 'Devis détaillés par poste. Conversion auto en factures.',
    benefits: ['Lignes perso', 'Devis → Facture', 'Avenants', 'Pro'],
  },
  {
    icon: Wrench,
    title: 'Interventions',
    description: 'Planifiez, générez rapports, signez, facturez.',
    benefits: ['Planification', 'Rapports', 'Signature', 'Facturation auto'],
  },
  {
    icon: Calendar,
    title: 'Planning équipes',
    description: 'Calendrier collaboratif, dispos temps réel, notifs.',
    benefits: ['Calendrier', 'Dispos', 'Notifs', 'Géoloc'],
  },
  {
    icon: FolderOpen,
    title: 'GED & OCR',
    description: 'Centralisez documents. OCR factures fournisseurs.',
    benefits: ['Stockage', 'OCR', 'Plans', 'Zero papier'],
  },
];

const aiFeatures = [
  {
    icon: Sparkles,
    title: 'Bons de régie par IA',
    description: 'Email ou PDF de régie ? Notre IA extrait tout et crée la tâche.',
    benefits: [
      { icon: Mail, text: 'Extraction auto' },
      { icon: MapPin, text: 'Adresse identifiée' },
      { icon: User, text: 'Contact extrait' },
      { icon: FileText, text: 'Travaux détectés' },
    ],
    highlight: '15 min → 30 sec',
  },
  {
    icon: Mic,
    title: 'Rapports vocaux',
    description: 'Dictez dans votre langue. Traduction instantanée en français.',
    benefits: [
      { icon: Mic, text: 'Dictée mobile' },
      { icon: Languages, text: 'Multilingue' },
      { icon: Sparkles, text: 'Traduction auto' },
      { icon: FileText, text: 'Rapport structuré' },
    ],
    highlight: 'Parlez, on écrit',
  },
];

const targetAudiences = [
  { icon: HardHat, label: 'Générales', keywords: 'Odoo construction' },
  { icon: Paintbrush, label: 'Peintres', keywords: 'Odoo peintre' },
  { icon: Zap, label: 'Électriciens', keywords: 'Odoo élec' },
  { icon: Droplets, label: 'Plombiers', keywords: 'Odoo plombier' },
  { icon: TreePine, label: 'Paysagistes', keywords: 'Odoo paysage' },
  { icon: Hammer, label: 'Menuisiers', keywords: 'Odoo menuisier' },
  { icon: BrickWall, label: 'Maçons', keywords: 'Odoo maçon' },
  { icon: Home, label: 'Couvreurs', keywords: 'Odoo couvreur' },
  { icon: Building, label: 'Rénovation', keywords: 'Odoo réno' },
  { icon: Ruler, label: 'Carreleurs', keywords: 'Odoo carrelage' },
];

const stats = [
  { value: '50%', label: 'Facturation accélérée', icon: Clock },
  { value: '20%', label: 'Rentabilité +', icon: TrendingUp },
  { value: '10h', label: 'Gagnées / sem', icon: Calendar },
];

export function ElvyBat() {
  return (
    <section id="elvybat" className="py-24 lg:py-32 bg-[#0B0F19] relative overflow-hidden">
      {/* Animated Glows */}
      <div className="blob-glow w-[800px] h-[800px] bg-[#00D4C8] top-0 right-0 animate-pulse" />
      <div className="blob-glow w-[600px] h-[600px] bg-[#7C3AED] bottom-0 left-0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <img src="/logo-elvy.png" alt="Elvy" className="h-20 w-auto" />
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
              Elvy<span className="text-[#00D4C8]">Bat</span>
            </h2>
          </div>
          
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00D4C8]/10 rounded-full border border-[#00D4C8]/30 glow-cyan-sm mb-6">
            <BarChart3 className="h-5 w-5 text-[#00D4C8]" />
            <span className="text-sm font-bold text-[#00D4C8]">
              Solution packagée Odoo pour le BTP
            </span>
          </div>
          
          <p className="text-2xl sm:text-3xl text-gray-300 mb-4 font-light">
            La solution qui révolutionne vos chantiers
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Facturez plus vite, contrôlez vos coûts, gagnez du temps.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-2xl border border-white/10 text-center">
              <stat.icon className="h-8 w-8 text-[#00D4C8] mx-auto mb-3" />
              <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pour qui ? */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Pour <span className="text-gradient">qui</span> ?
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
            {targetAudiences.map((a, i) => (
              <div key={i} className="p-4 bg-[#111827] rounded-xl border border-white/10 hover:border-[#00D4C8]/50 transition-all text-center group">
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <a.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-white">{a.label}</p>
                <p className="text-xs text-[#00D4C8]">{a.keywords}</p>
              </div>
            ))}
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap justify-center gap-2">
            {['Logiciel chantier Odoo', 'ERP BTP', 'Gestion chantier', 'Facturation BTP', 'Devis BTP', 'Planning chantier'].map((k, i) => (
              <span key={i} className="px-3 py-1.5 text-sm bg-[#00D4C8]/10 text-[#00D4C8] rounded-full border border-[#00D4C8]/20">
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* IA Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/30 mb-4">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-bold text-purple-400">IA & Innovation</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Propulsé par l'<span className="text-purple-400">Intelligence Artificielle</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {aiFeatures.map((f, i) => (
              <div key={i} className="relative p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/30">
                <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                  <span className="text-xs font-bold text-white">{f.highlight}</span>
                </div>
                <div className="flex items-start gap-5 pt-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center glow-cyan-sm">
                    <f.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{f.title}</h4>
                    <p className="text-gray-400 mb-5">{f.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {f.benefits.map((b, j) => (
                        <div key={j} className="flex items-center gap-2 p-3 bg-white/5 rounded-lg">
                          <b.icon className="h-4 w-4 text-purple-400" />
                          <span className="text-sm text-gray-300">{b.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Fonctionnalités <span className="text-gradient">clés</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {keyFeatures.map((f, i) => (
              <div key={i} className="p-6 bg-[#111827] rounded-2xl border border-white/10 hover:border-[#00D4C8]/50 transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center glow-cyan-sm">
                    <f.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{f.title}</h4>
                    <p className="text-gray-400 mb-4">{f.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.benefits.map((b, j) => (
                        <span key={j} className="px-2 py-1 text-xs bg-[#00D4C8]/10 text-[#00D4C8] rounded">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-gradient-to-r from-[#00B4A6]/20 to-[#06B6D4]/20 rounded-3xl border border-[#00D4C8]/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Transformez vos chantiers en levier de croissance
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Plus de contrôle, plus de précision, moins de stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 text-white font-bold px-8 rounded-xl glow-cyan text-lg">
              <a href="#contact">
                <Sparkles className="mr-2 h-5 w-5" />
                Réserver une démo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-xl text-lg">
              <a href="#contact">Contacter un expert</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { 
  HardHat, CheckCircle, ArrowRight, Sparkles, 
  Mic, FileText, Building2, Clock, TrendingUp, 
  Calendar, BarChart3, ClipboardList, Calculator,
  Shield, Zap, ChevronRight, Phone, Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const resultats = [
  { valeur: '−50%', label: 'Délais de facturation', icon: Clock },
  { valeur: 'Temps réel', label: 'Visibilité rentabilité chantier', icon: TrendingUp },
  { valeur: 'Moins de saisies', label: 'Plus de temps sur le chantier', icon: BarChart3 },
  { valeur: '50+', label: 'Références BTP CH · FR · ES', icon: Building2 },
];

const fonctionnalites = [
  {
    icon: ClipboardList,
    titre: 'Gestion de chantiers',
    desc: 'Suivez tous vos chantiers en temps réel. Avancement, budget, délais, documents. Logiciel de gestion de chantier complet.',
  },
  {
    icon: FileText,
    titre: 'Facturation par situation',
    desc: 'Facturez selon l\'avancement des travaux. Génération automatique des situations conformes aux normes suisses.',
  },
  {
    icon: Calendar,
    titre: 'Planning chantier',
    desc: 'Planifiez vos équipes et ressources. Vue Gantt intuitive. Planning chantier BTP optimisé.',
  },
  {
    icon: Clock,
    titre: 'Suivi du temps',
    desc: 'Pointage des équipes sur chantier. Analyse de la productivité. Suivi des heures de travail.',
  },
  {
    icon: TrendingUp,
    titre: 'Rentabilité chantier',
    desc: 'Suivez la marge de chaque chantier en temps réel. Alertes sur dépassements budgétaires.',
  },
  {
    icon: Calculator,
    titre: 'Devis et chiffrage',
    desc: 'Créez vos devis rapidement avec les tarifs et articles prédéfinis. Conversion en commande en un clic.',
  },
];

const modulesInclus = [
  { nom: 'Comptabilité ElvyBat', desc: 'Liaison bancaire, plan comptable CH, configuration TVA' },
  { nom: 'Rentabilité Chantier', desc: 'Analytique complète, marges, coûts réels vs prévisionnels' },
  { nom: 'Accès Odoo standard', desc: 'CRM, Achats, Marketing, Projets, Service sur Site et plus' },
];

const modulesOption = [
  { nom: 'ElvyTime', desc: 'Saisie des temps sur chantier depuis mobile' },
  { nom: 'ElvyDoc', desc: 'Gestion documentaire avancée (GED)' },
  { nom: 'ElvyTrack', desc: 'Temps, machines, matériaux, bons de livraison' },
  { nom: 'ElvyCalc', desc: 'Chiffrage & prix de revient automatisés' },
];

const miseEnPlace = [
  'Installation et paramétrage ElvyBat',
  'Création des utilisateurs et des accès',
  'Mise en place de vos documents et de votre image',
  'Structuration des articles et des ouvrages',
  'Configuration comptable et suivi de rentabilité chantier',
];

export default function ElvyBatPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: iaRef, isVisible: iaVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: packRef, isVisible: packVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#0B0F19] min-h-screen flex items-center">

        {/* Photo fond */}
        <div className="absolute inset-0">
          <img
            src="/btp-hero.jpg"
            alt="Chantier BTP — logiciel gestion de chantier ElvyBat"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-[#0B0F19]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent" />
        </div>

        <div ref={heroRef} className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-on-scroll ${heroVisible ? 'is-visible' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Colonne gauche — texte */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00D4C8]/20 border border-[#00D4C8]/40 rounded-full mb-8">
                <HardHat className="h-4 w-4 text-[#00D4C8]" />
                <span className="text-sm font-semibold text-[#00D4C8]">Suite Elvy · BTP / Construction</span>
              </div>

              {/* H1 */}
              <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] mb-8">
                <span style={{color: '#FFFFFF'}}>Pilotez vos chantiers.</span><br />
                <span className="text-[#00D4C8]">Maîtrisez vos marges.</span>
              </h1>

              {/* Sous-titre */}
              <p className="text-xl text-white mb-10 leading-relaxed max-w-xl drop-shadow-lg">
                ElvyBat est le logiciel de gestion de chantier sur Odoo conçu pour les dirigeants du bâtiment qui veulent suivre leur rentabilité en temps réel — avec un déploiement rapide, sans Excel ni ressaisie.
              </p>

              {/* Checkmarks — 1 ligne */}
              <div className="flex flex-wrap gap-6 mb-10">
                {[
                  'Rentabilité chantier en temps réel',
                  'Facturation de situation automatisée',
                  'Déploiement clé en main',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle className="h-5 w-5 text-[#00D4C8] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button asChild size="lg" className="bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold px-10 py-4 text-lg rounded-xl">
                  <a href="#contact">
                    Demander une démonstration
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-10 py-4 text-lg rounded-xl">
                  <a href="#contact">Voir le pack de mise en place</a>
                </Button>
              </div>

              {/* Multi-pays */}
              <div>
                <p className="text-xs font-bold text-[#00D4C8] uppercase tracking-widest mb-3">
                  Localisation Odoo incluse · Multi-pays · Multi-langues
                </p>
                <div className="flex flex-row flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/20 border border-[#00D4C8]/50 rounded-lg">
                    <span className="text-lg">🇨🇭</span>
                    <div><p className="text-white font-bold text-sm leading-none">Suisse</p><p className="text-[#00D4C8] text-xs mt-0.5">CHF · TVA CH</p></div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/20 border border-[#00D4C8]/50 rounded-lg">
                    <span className="text-lg">🇫🇷</span>
                    <div><p className="text-white font-bold text-sm leading-none">France</p><p className="text-[#00D4C8] text-xs mt-0.5">EUR · TVA FR</p></div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/20 border border-[#00D4C8]/50 rounded-lg">
                    <span className="text-lg">🇪🇸</span>
                    <div><p className="text-white font-bold text-sm leading-none">Espagne</p><p className="text-[#00D4C8] text-xs mt-0.5">EUR · TVA ES</p></div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/20 border border-[#00D4C8]/50 rounded-lg">
                    <span className="text-lg">🇮🇹</span>
                    <div><p className="text-white font-bold text-sm leading-none">Italie</p><p className="text-[#00D4C8] text-xs mt-0.5">EUR · TVA IT</p></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite — stats visuelles */}
            <div className="hidden lg:flex flex-col gap-5">
              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '−50%', label: 'Délais de facturation', color: '#00D4C8' },
                  { val: '50+', label: 'Références BTP', color: '#F59E0B' },
                  { val: 'Temps réel', label: 'Rentabilité chantier', color: '#00D4C8' },
                  { val: '4 pays', label: 'Localisation Odoo', color: '#F59E0B' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-3xl font-black mb-1" style={{color: s.color}}>{s.val}</p>
                    <p className="text-gray-400 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
              {/* Image chantier */}
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src="/btp-tablet.jpg" alt="Chef de chantier BTP avec tablette ElvyBat"
                  className="w-full h-52 object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ STATS corrigées ═══ */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div ref={statsRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${statsVisible ? 'is-visible' : ''}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {resultats.map((r, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black text-[#0F1D3A] mb-1 leading-tight">{r.valeur}</p>
                <p className="text-sm text-gray-500 font-medium">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FONCTIONNALITÉS — fond vert, icônes fond clair ═══ */}
      <section className="py-24 bg-[#F0FDF9]">
        <div ref={featRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${featVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">
              Tout ce qu'il faut pour piloter votre activité bâtiment
            </h2>
            <p className="text-lg text-gray-500">
              Un ERP métier complet pour les entreprises du BTP — de la création du devis au suivi de marge chantier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fonctionnalites.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#CCFBF1] hover:shadow-md transition-shadow">
                {/* Icône fond vert clair — cohérent avec bloc IA */}
                <div className="w-12 h-12 rounded-xl bg-[#E6F9F8] flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-[#0F1D3A]" />
                </div>
                <h3 className="font-bold text-[#0F1D3A] mb-2">{f.titre}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOC IA ═══ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] bg-purple-50 rounded-full -top-40 -right-40 opacity-60" />
        </div>
        <div ref={iaRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${iaVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">Intelligence Artificielle</span>
            </div>
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">
              Fonctionnalités <span className="text-[#00D4C8]">IA</span> pour le BTP
            </h2>
            <p className="text-gray-500 text-lg">
              ElvyBat intègre l'intelligence artificielle pour automatiser vos tâches répétitives et gagner du temps sur le terrain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F1D3A] mb-3">Bons de régie par IA</h3>
              <p className="text-gray-600 leading-relaxed">
                Recevez un mail ou PDF d'une régie — ElvyBat reconnaît automatiquement toutes les informations et crée la tâche avec les bonnes données.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6">
                <Mic className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F1D3A] mb-3">Rapports vocaux multilingues</h3>
              <p className="text-gray-600 leading-relaxed">
                Vos collaborateurs dictent leurs rapports dans leur langue sur mobile. Conversion automatique en français dans Odoo.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/btp-chantier.jpg"
              alt="Ouvrier BTP sur chantier — ElvyBat logiciel gestion chantier"
              className="w-full h-64 object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ═══ PACK MISE EN PLACE ═══ */}
      <section id="pack" className="py-24 bg-[#0F1D3A] text-white">
        <div ref={packRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${packVisible ? 'is-visible' : ''}`}>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Pack de mise en place ElvyBat</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Démarrez votre gestion de chantier sur Odoo, rapidement et simplement.
            </p>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Le Pack de mise en place ElvyBat vous permet de déployer une solution métier complète, prête à l'emploi, sans complexité.
            </p>
            <p className="mt-4 text-[#00D4C8] font-semibold">
              Tarification CH · FR · ES — <a href="#contact" className="underline underline-offset-4">Demander un devis</a>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Gauche */}
            <div className="space-y-10">

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#00D4C8]" />
                  Une mise en place clé en main
                </h3>
                <p className="text-gray-400 mb-4 text-sm">Nous configurons pour vous un environnement opérationnel :</p>
                <div className="space-y-3">
                  {miseEnPlace.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00D4C8] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#F59E0B]" />
                  Une solution immédiatement exploitable
                </h3>
                <p className="text-gray-400 mb-4 text-sm">Vous disposez dès le départ d'un outil structuré pour :</p>
                <div className="space-y-3">
                  {[
                    'Gérer vos devis et votre facturation',
                    'Suivre vos chantiers et vos marges',
                    'Piloter votre activité en temps réel',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">👤</span>
                  Accompagnement inclus avec un chef de projet
                </h3>
                <div className="space-y-2">
                  {['Mise en route et prise en main', 'Validation des premiers flux'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-[#00D4C8] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-[#F59E0B] font-semibold text-sm">
                    📍 1 déplacement sur site inclus pour sécuriser le démarrage.
                  </p>
                </div>
              </div>
            </div>

            {/* Droite */}
            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#F59E0B]" />
                  Modules inclus d'office
                </h3>
                <div className="space-y-3">
                  {modulesInclus.map((m, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="font-semibold text-white mb-1">{m.nom}</p>
                      <p className="text-sm text-gray-400">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-300">Modules en option</h3>
                <div className="grid grid-cols-2 gap-3">
                  {modulesOption.map((m, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <p className="font-semibold text-sm text-white mb-0.5">{m.nom}</p>
                      <p className="text-xs text-gray-500">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00D4C8]/10 to-teal-900/20 rounded-2xl p-6 border border-[#00D4C8]/20">
                <h3 className="text-lg font-bold text-[#00D4C8] mb-3">Résultat</h3>
                <p className="text-gray-300 leading-relaxed">
                  Une solution claire, structurée et prête à être utilisée pour piloter efficacement votre activité bâtiment.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-xl font-bold mb-2">Prêt à démarrer ?</p>
            <p className="text-gray-400 mb-6">Nous adaptons notre offre à votre pays, votre taille et vos besoins.</p>
            <Button asChild size="lg" className="bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold px-10 rounded-xl">
              <a href="#contact">
                Demander un devis personnalisé
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="mt-3 text-sm text-gray-500">Réponse sous 24h · Suisse · France · Espagne</p>
          </div>
        </div>
      </section>

            

            {/* ═══ RÉFÉRENCES — Ils ont choisi ElvyBat ═══ */}
      

            {/* ═══ RÉFÉRENCES — Ils ont choisi ElvyBat ═══ */}
      <section className="py-20 bg-[#F0FDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F1D3A] mb-3">Ils ont choisi ElvyBat</h2>
            <p className="text-gray-500">Des entreprises du BTP qui font confiance à D4E pour piloter leurs chantiers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {[
              { logo: '/logo-espace-charpente.png', nom: 'Espace Charpente', metier: 'Charpente & Menuiserie', site: 'https://www.espace-charpente.ch' },
              { logo: '/logo-tapernoux.png', nom: 'Tapernoux SA', metier: 'Installations sanitaires', site: 'https://tapernoux-sa.ch' },
              { logo: '/logo-gf-peinture.png', nom: 'GF Peinture', metier: 'Peinture & Gypserie', site: 'https://gf-peinture.ch' },
              { logo: '/logo-mazzoli.svg', nom: 'R. Mazzoli SA', metier: 'Staff · Plafonds · Cloisons', site: 'https://www.mazzoli.ch' },
            ].map((ref, i) => (
              <a key={i} href={ref.site} target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-[#CCFBF1] bg-white hover:shadow-md transition-all group">
                <img src={ref.logo} alt={ref.nom}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                <div className="text-center">
                  <p className="font-bold text-[#0F1D3A] text-sm">{ref.nom}</p>
                  <p className="text-xs text-gray-400">{ref.metier}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

            {/* ═══ ÉQUIPE ═══ */}
      <section className="py-24 bg-[#0F1D3A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00D4C8]/20 border border-[#00D4C8]/40 rounded-full mb-4">
              <span className="text-sm font-semibold text-[#00D4C8]">Votre équipe dédiée</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-3">Des experts à votre écoute</h2>
            <p className="text-gray-400 text-lg">Une équipe à taille humaine, basée à Genève, Sion et Barcelone</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Antonio */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <img src="/team-antonio.jpg" alt="Antonio Spedicato"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#00D4C8] mb-6 shadow-xl" />
              <h3 className="text-2xl font-black text-white mb-1">Antonio Spedicato</h3>
              <p className="text-[#00D4C8] font-semibold mb-1">Consultant Odoo & Fondateur</p>
              <p className="text-gray-400 text-sm mb-6">15 ans d'expérience · Expert ERP BTP</p>
              <div className="flex flex-col gap-3 w-full">
                <a href="tel:0764344595"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold rounded-xl transition-all">
                  <Phone className="h-4 w-4" />
                  0764 344 595
                </a>
                <a href="mailto:antonio@d4e.cool"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20">
                  <Mail className="h-4 w-4" />
                  antonio@d4e.cool
                </a>
              </div>
            </div>

            {/* Laëtitia */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <img src="/team-laetitia.jpg" alt="Laëtitia André"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#F59E0B] mb-6 shadow-xl" />
              <h3 className="text-2xl font-black text-white mb-1">Laëtitia André</h3>
              <p className="text-[#F59E0B] font-semibold mb-1">Chef de projet ElvyBat</p>
              <p className="text-gray-400 text-sm mb-6">Spécialiste déploiement BTP · Suisse & France</p>
              <div className="flex flex-col gap-3 w-full">
                <a href="tel:0764822139"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold rounded-xl transition-all">
                  <Phone className="h-4 w-4" />
                  0764 822 139
                </a>
                <a href="mailto:laetita@d4e.cool"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20">
                  <Mail className="h-4 w-4" />
                  laetita@d4e.cool
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold text-lg rounded-xl transition-all shadow-lg">
              <ArrowRight className="h-5 w-5" />
              Prendre contact maintenant
            </a>
            <p className="mt-3 text-gray-500 text-sm">Réponse garantie sous 24h</p>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-24 bg-[#0F1D3A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Discutons de votre projet</h2>
          <p className="text-gray-300 mb-8">Notre équipe vous recontacte sous 24h ouvrées.</p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Prénom *" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8]" />
              <input placeholder="Nom *" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8]" />
            </div>
            <input placeholder="Email *" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8]" />
            <input placeholder="Entreprise" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8]" />
            <input placeholder="Téléphone" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8]" />
            <select className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-gray-400 w-full focus:outline-none focus:border-[#00D4C8]">
              <option value="">Pays *</option>
              <option>Suisse</option>
              <option>France</option>
              <option>Espagne</option>
              <option>Autre</option>
            </select>
            <textarea placeholder="Votre message *" rows={4} className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] resize-none" />
            <Button className="w-full bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold py-3 rounded-xl">
              Envoyer ma demande
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-center text-xs text-gray-600">Vos données ne seront jamais partagées avec des tiers.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

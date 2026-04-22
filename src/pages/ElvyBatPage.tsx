import {
  HardHat, CheckCircle, ArrowRight, Sparkles,
  Mic, FileText, Building2, TrendingUp,
  Calendar, ClipboardList, Calculator, Shield,
  Zap, Phone, Mail, Users, BarChart3, Wrench,
  FolderOpen, Timer, Receipt, Truck, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// ─── DONNÉES ──────────────────────────────────────────────────────────────

const stats = [
  { valeur: '1 400+',     label: 'Chantiers gérés',         icon: Building2 },
  { valeur: '260+',       label: 'Utilisateurs actifs',      icon: Users },
  { valeur: '4 ans',      label: "D'expertise terrain BTP",  icon: TrendingUp },
  { valeur: 'Temps réel', label: 'Visibilité rentabilité',   icon: BarChart3 },
];

const pays = [
  { flag: '🇨🇭', nom: 'Suisse',  detail: 'CHF · TVA CH' },
  { flag: '🇫🇷', nom: 'France',  detail: 'EUR · TVA FR' },
  { flag: '🇪🇸', nom: 'Espagne', detail: 'EUR · TVA ES' },
  { flag: '🇮🇹', nom: 'Italie',  detail: 'EUR · TVA IT' },
];

const packInclus = [
  { icon: FileText,     titre: 'Devis & Facturation BTP',       desc: 'Gestion complète des devis et factures avec processus spécifiques au secteur du bâtiment.' },
  { icon: Calculator,   titre: 'Comptabilité ElvyBat',          desc: 'Plan comptable CH, liaison bancaire, TVA, imputations et suivi financier des chantiers.' },
  { icon: TrendingUp,   titre: 'Rentabilité chantier',          desc: 'Analytique complète par projet : marges, coûts réels vs prévisionnels, indicateurs financiers.' },
  { icon: ClipboardList,titre: 'Planning & Suivi chantier',     desc: 'Planifiez vos équipes, suivez l\'avancement et les délais en temps réel.' },
  { icon: Calendar,     titre: '8h d\'accompagnement incluses', desc: 'Un chef de projet D4E vous accompagne de la mise en place à la prise en main.' },
  { icon: Shield,       titre: '1 déplacement sur site inclus', desc: 'Nous venons chez vous pour sécuriser le démarrage et former vos équipes.' },
];

const modulesOptionnels = [
  { icon: Calculator, nom: 'ElvyCalc',       badge: 'Chiffrage',     couleur: '#00D4C8', desc: 'Automatise le chiffrage des devis et le calcul du prix de revient avec coefficient de marge automatique.' },
  { icon: Timer,      nom: 'ElvyTime',       badge: 'Pointage',      couleur: '#F59E0B', desc: 'Pointage des temps de travail via portail internet : sans licence Odoo supplémentaire.' },
  { icon: Truck,      nom: 'ElvyTrack',      badge: 'Terrain',       couleur: '#00D4C8', desc: 'Saisie du temps, machines, matériel et bons de livraison sur chantier. Coûts affectés automatiquement.' },
  { icon: Mic,        nom: 'ElvyService IA', badge: 'IA',            couleur: '#8B5CF6', desc: 'Interventions terrain avec dictée multilingue, reconnaissance bons de régie et facturation automatique.' },
  { icon: FolderOpen, nom: 'ElvyDoc',        badge: 'GED',           couleur: '#F59E0B', desc: 'Gestion électronique de documents intégrée à Odoo. 600 pages/mois incluses.' },
  { icon: Users,      nom: 'ElvyLeave',      badge: 'Congés',        couleur: '#00D4C8', desc: 'Gestion des congés via portail web sans licence utilisateur.' },
  { icon: Receipt,    nom: 'ElvyExpense',    badge: 'Notes de frais', couleur: '#F59E0B', desc: 'Saisie et validation des notes de frais via portail, sans licence Odoo.' },
  { icon: Wrench,     nom: 'ElvyPortail',    badge: 'Collaborateur', couleur: '#8B5CF6', desc: 'Portail sécurisé pour accéder à ElvyTime, ElvyLeave et ElvyExpense sans licence Odoo.' },
];

const pourQui = [
  {
    icon: Building2,
    titre: 'Entreprises de chantier',
    desc: 'Charpentiers, maçons, sanitaires, peintres, électriciens : toute entreprise BTP qui gère des chantiers avec devis, planning et facturation de situation.',
    exemples: ['Charpente & menuiserie', 'Sanitaires & plomberie', 'Peinture & gypserie', 'Électricité & CVSE'],
    couleur: '#00D4C8',
  },
  {
    icon: Wrench,
    titre: "Entreprises d'intervention",
    desc: 'Techniciens de maintenance, SAV, dépannage : planification des interventions terrain, rapports sur mobile, facturation immédiate.',
    exemples: ['Maintenance & SAV', 'Chauffagistes', 'Nettoyage & entretien', 'Sécurité & alarmes'],
    couleur: '#F59E0B',
  },
];

const references = [
  { logo: '/logo-espace-charpente.png', nom: 'Espace Charpente', metier: 'Charpente & Menuiserie', site: 'https://www.espace-charpente.ch' },
  { logo: '/logo-tapernoux.png',        nom: 'Tapernoux SA',     metier: 'Installations sanitaires', site: 'https://tapernoux-sa.ch' },
  { logo: '/logo-gf-peinture.png',      nom: 'GF Peinture',      metier: 'Peinture & Gypserie', site: 'https://gf-peinture.ch' },
  { logo: '/logo-mazzoli.svg',          nom: 'R. Mazzoli SA',    metier: 'Staff · Plafonds · Cloisons', site: 'https://www.mazzoli.ch' },
];

const equipe = [
  {
    nom: 'Antonio Spedicato',
    role: 'Consultant Odoo & Fondateur',
    desc: "15 ans d'expérience · Expert ERP BTP",
    tel: '0764344595', telDisplay: '0764 344 595',
    email: 'antonio@d4e.cool',
    photo: '/team-antonio.jpg',
    couleur: '#00D4C8',
  },
  {
    nom: 'Laëtitia André',
    role: 'Ambassadrice Odoo - D4E',
    desc: 'Spécialiste déploiement BTP · Suisse & France',
    tel: '0764822139', telDisplay: '0764 822 139',
    email: 'laetita@d4e.cool',
    photo: '/team-laetitia.jpg',
    couleur: '#F59E0B',
  },
];

// ─── COMPOSANT ────────────────────────────────────────────────────────────

export default function ElvyBatPage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const { ref: heroRef,    isVisible: heroVisible    } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: statsRef,   isVisible: statsVisible   } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: packRef,    isVisible: packVisible    } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: modsRef,    isVisible: modsVisible    } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: iaRef,      isVisible: iaVisible      } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: pourQuiRef, isVisible: pourQuiVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: refsRef,    isVisible: refsVisible    } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: equipeRef,  isVisible: equipeVisible  } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0B0F19] min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/btp-hero.jpg"
            alt="Chantier BTP : logiciel gestion de chantier ElvyBat Odoo"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-[#0B0F19]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent" />
        </div>

        <div
          ref={heroRef}
          className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-on-scroll ${heroVisible ? 'is-visible' : ''}`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00D4C8]/20 border border-[#00D4C8]/40 rounded-full mb-8">
                <HardHat className="h-4 w-4 text-[#00D4C8]" />
                <span className="text-sm font-semibold text-[#00D4C8]">Suite Elvy · BTP / Construction</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] mb-8">
                <span style={{ color: '#FFFFFF' }}>Pilotez vos chantiers.</span><br />
                <span className="text-[#00D4C8]">Maîtrisez vos marges.</span>
              </h1>

              <p style={{ color: '#FFFFFF', textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
                className="text-xl mb-10 leading-relaxed max-w-xl">
                ElvyBât est le logiciel de gestion de chantier sur Odoo conçu pour
                les dirigeants du bâtiment : rentabilité en temps réel, facturation
                de situation automatisée, déploiement clé en main en quelques jours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  'Prise en main rapide : vos équipes utilisent ElvyBat dès le premier jour',
                  'Personnalisable selon votre métier : adapté à votre façon de travailler',
                  "Accès à toute la puissance d'Odoo : CRM, achats, RH, projets et plus encore",
                  'Une seule plateforme pour toute votre activité : plus de fichiers éparpillés',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm" style={{ color: '#FFFFFF' }}>
                    <CheckCircle className="h-5 w-5 text-[#00D4C8] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold px-8 rounded-xl text-base" onClick={() => scrollTo('contact')}>
                  Demander une démonstration
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 rounded-xl text-base" onClick={() => scrollTo('pack')}>
                  Voir le pack de mise en place
                </Button>
              </div>

              <div>
                <p className="text-xs font-bold text-[#00D4C8] uppercase tracking-widest mb-3">
                  Localisation Odoo incluse · Multi-pays · Multi-langues
                </p>
                <div className="flex flex-row flex-wrap gap-3">
                  {pays.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/20 border border-[#00D4C8]/50 rounded-lg">
                      <span className="text-lg">{p.flag}</span>
                      <div>
                        <p className="text-white font-bold text-sm leading-none">{p.nom}</p>
                        <p className="text-[#00D4C8] text-xs mt-0.5">{p.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-4">
              {[
                { titre: 'Sachez si votre chantier est rentable avant la fin du mois', desc: 'Suivi des marges en temps réel, par affaire. Aucune surprise en fin de projet.' },
                { titre: 'Vos situations de travaux générées en 2 clics', desc: 'Facturation de situation automatisée, conforme aux normes suisses.' },
                { titre: 'Opérationnel en quelques jours, pas en quelques mois', desc: 'Déploiement clé en main par un chef de projet dédié, 1 déplacement sur site inclus.' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
                  <div className="w-1 rounded-full bg-[#00D4C8] flex-shrink-0 mt-1" style={{ minHeight: '40px' }} />
                  <div>
                    <p style={{ color: '#FFFFFF' }} className="font-bold text-base leading-snug mb-1">{item.titre}</p>
                    <p style={{ color: '#CBD5E1' }} className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src="/btp-tablet.jpg" alt="Chef de chantier BTP avec tablette ElvyBat"
                  className="w-full h-48 object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. STATS
      ══════════════════════════════════════════ */}
      <section className="py-16 bg-[#F0FDF9] border-b border-[#CCFBF1]">
        <div ref={statsRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${statsVisible ? 'is-visible' : ''}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center bg-white rounded-2xl py-8 px-4 border border-[#CCFBF1] shadow-sm">
                <s.icon className="h-8 w-8 text-[#00D4C8] mx-auto mb-3" />
                <p className="text-3xl font-black text-[#0F1D3A] mb-1">{s.valeur}</p>
                <p className="text-sm text-gray-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. PACK DE BASE
      ══════════════════════════════════════════ */}
      <section id="pack" className="py-24 bg-[#F0FDF9]">
        <div ref={packRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${packVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#00D4C8]/10 border border-[#00D4C8]/30 rounded-full mb-4">
              <Shield className="h-5 w-5 text-[#00D4C8]" />
              <span className="text-base font-bold text-[#00D4C8]">Pack de mise en place ElvyBat</span>
            </div>
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">Tout ce qu'il faut pour démarrer</h2>
            <p className="text-lg text-gray-500">
              Le pack ElvyBât Entreprise inclut d'office tout ce dont une entreprise BTP
              a besoin pour piloter ses chantiers dès le premier jour.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {packInclus.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#CCFBF1] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#E6F9F8] flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-[#0F1D3A]" />
                </div>
                <h3 className="font-bold text-[#0F1D3A] mb-2">{item.titre}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Description complète du pack */}
          <div className="bg-[#0F1D3A] rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-10">
              <h3 style={{ color: '#00D4C8' }} className="text-5xl font-black mb-4">ElvyBât</h3>
              <p style={{ color: '#FFFFFF' }} className="text-3xl font-bold max-w-3xl mx-auto leading-snug mb-4">
                Démarrez votre gestion de chantier sur Odoo, rapidement et simplement.
              </p>
              <p style={{ color: '#CBD5E1' }} className="text-base max-w-2xl mx-auto leading-relaxed">
                Le Pack de mise en place ElvyBât vous permet de déployer une solution métier complète,
                prête à l'emploi, sans complexité.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Bloc 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-[#00D4C8]" />
                  <h4 style={{ color: '#FFFFFF' }} className="font-bold">Une mise en place clé en main</h4>
                </div>
                <p style={{ color: '#CBD5E1' }} className="text-sm mb-4">Nous configurons pour vous un environnement opérationnel :</p>
                <ul className="space-y-2">
                  {[
                    'Installation et paramétrage ElvyBât',
                    'Création des utilisateurs et des accès',
                    'Mise en place de vos documents et de votre image',
                    'Structuration des articles et des ouvrages',
                    'Configuration comptable et suivi de rentabilité chantier',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#CBD5E1' }}>
                      <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#00D4C8' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bloc 2 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-[#F59E0B]" />
                  <h4 style={{ color: '#FFFFFF' }} className="font-bold">Une solution immédiatement exploitable</h4>
                </div>
                <p style={{ color: '#CBD5E1' }} className="text-sm mb-4">Vous disposez dès le départ d'un outil structuré pour :</p>
                <ul className="space-y-2">
                  {[
                    'Gérer vos devis et votre facturation',
                    'Suivre vos chantiers et vos marges',
                    'Piloter votre activité en temps réel',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#CBD5E1' }}>
                      <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bloc 3 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-[#00D4C8]" />
                  <h4 style={{ color: '#FFFFFF' }} className="font-bold">Accompagnement inclus avec un chef de projet</h4>
                </div>
                <ul className="space-y-2 mb-4">
                  {[
                    'Mise en route et prise en main',
                    'Validation des premiers flux',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#CBD5E1' }}>
                      <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#00D4C8' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p style={{ color: '#F59E0B' }} className="font-semibold text-sm">
                    1 déplacement sur site inclus pour sécuriser le démarrage.
                  </p>
                </div>
              </div>
            </div>

            {/* Résultat + CTA */}
            <div className="bg-white/5 border border-[#00D4C8]/30 rounded-2xl p-6 text-center">
              <p style={{ color: '#00D4C8' }} className="font-bold text-sm uppercase tracking-widest mb-2">Résultat</p>
              <p style={{ color: '#FFFFFF' }} className="text-lg font-medium mb-4 max-w-2xl mx-auto">
                Une solution claire, structurée et prête à être utilisée pour piloter efficacement votre activité bâtiment.
              </p>
              <p style={{ color: '#CBD5E1' }} className="mb-6">Passez à l'action : demandez une démonstration ou démarrez votre projet dès maintenant.</p>
              <Button size="lg" className="bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold px-10 rounded-xl text-base" onClick={() => scrollTo('contact')}>
                  Demander une démonstration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              <p style={{ color: '#6B7280' }} className="mt-4 text-sm">Réponse sous 24h · Suisse · France · Espagne · Italie</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. MODULES OPTIONNELS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div ref={modsRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${modsVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-50 border border-orange-200 rounded-full mb-4">
              <Zap className="h-5 w-5 text-[#F59E0B]" />
              <span className="text-base font-bold text-[#F59E0B]">Modules optionnels</span>
            </div>
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">Étendez ElvyBat selon vos besoins</h2>
            <p className="text-lg text-gray-500">
              Vous commencez par le pack de base et vous activez les modules dont vous avez besoin,
              quand vous en avez besoin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {modulesOptionnels.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: m.couleur + '20' }}>
                    <m.icon className="h-5 w-5" style={{ color: m.couleur }} />
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ backgroundColor: m.couleur + '15', color: m.couleur }}>
                    {m.badge}
                  </span>
                </div>
                <h3 className="font-black text-[#0F1D3A] text-lg mb-2">{m.nom}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" className="bg-[#0F1D3A] hover:bg-[#1a2d4a] font-bold px-8 rounded-xl" style={{ color: '#FFFFFF' }} onClick={() => scrollTo('contact')}>
                Discuter de vos besoins
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. ELVYSERVICE IA
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0F1D3A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full -top-40 -right-40 opacity-10"
            style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />
        </div>
        <div ref={iaRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${iaVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 border border-purple-400/40 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-400">Intelligence Artificielle · Nouveau</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-4">
              ElvyService IA : De l'intervention à la facture en quelques clics
            </h2>
            <p className="text-gray-300 text-lg">
              Pour les équipes terrain : techniciens, installateurs, maintenanciers.
              Chaque intervention devient automatiquement un rapport, un devis, une facture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mic,      titre: 'Rapports vocaux multilingues', color: '#8B5CF6',
                desc: 'Vos techniciens dictent leur rapport en espagnol, portugais ou italien sur mobile. Transcription automatique en français dans Odoo.' },
              { icon: FileText, titre: 'Reconnaissance bons de régie', color: '#00D4C8',
                desc: 'Envoyez un PDF ou photo d\'un bon de régie : ElvyService IA extrait toutes les informations et crée la tâche automatiquement.' },
              { icon: Receipt,  titre: 'Facturation immédiate',        color: '#F59E0B',
                desc: 'De l\'intervention à la facture en quelques clics. La chaîne opérationnelle complète est automatisée et fiabilisée.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: item.color + '30' }}>
                  <item.icon className="h-7 w-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.titre}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden mb-8">
            <img src="/btp-chantier.jpg" alt="Technicien terrain ElvyService IA"
              className="w-full h-56 object-cover object-center" />
          </div>

          <div className="bg-white/5 border border-purple-500/30 rounded-3xl p-8 text-center">
            <p className="text-purple-300 font-semibold mb-2">Intégré nativement à Odoo Field Service</p>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              ElvyService IA s'appuie sur Odoo Field Service amélioré par D4E : planning des techniciens,
              signature mobile du client, dispatch depuis le bureau et reporting en temps réel.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 rounded-xl" onClick={() => scrollTo('contact')}>
                  Voir une démonstration
                <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. POUR QUI
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div ref={pourQuiRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${pourQuiVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">Conçu pour les entreprises du BTP</h2>
            <p className="text-lg text-gray-500">
              Que vous gériez des chantiers complexes ou des interventions rapides,
              ElvyBât s'adapte à votre activité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pourQui.map((p, i) => (
              <div key={i} className="rounded-3xl p-8 border-2 hover:shadow-lg transition-all"
                style={{ borderColor: p.couleur + '40', backgroundColor: p.couleur + '08' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: p.couleur + '20' }}>
                  <p.icon className="h-7 w-7" style={{ color: p.couleur }} />
                </div>
                <h3 className="text-2xl font-black text-[#0F1D3A] mb-3">{p.titre}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.exemples.map((ex, j) => (
                    <span key={j} className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{ backgroundColor: p.couleur + '20', color: p.couleur }}>
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold px-10 rounded-xl text-base" onClick={() => scrollTo('contact')}>
                  Parler à un expert ElvyBât
                <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. RÉFÉRENCES
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F0FDF9]">
        <div ref={refsRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${refsVisible ? 'is-visible' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F1D3A] mb-3">Ils ont choisi ElvyBât</h2>
            <p className="text-gray-500">Des entreprises du BTP qui font confiance à D4E pour piloter leurs chantiers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {references.map((ref, i) => (
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

      {/* ══════════════════════════════════════════
          8. ÉQUIPE
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0F1D3A]">
        <div ref={equipeRef} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${equipeVisible ? 'is-visible' : ''}`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00D4C8]/20 border border-[#00D4C8]/40 rounded-full mb-4">
              <span className="text-sm font-semibold text-[#00D4C8]">Votre équipe dédiée</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-3">Des experts à votre écoute</h2>
            <p className="text-gray-400 text-lg">Une équipe à taille humaine, basée à Genève, Sion et Barcelone</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipe.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all">
                <img src={p.photo} alt={p.nom}
                  className="w-32 h-32 rounded-full object-cover mb-6 shadow-xl"
                  style={{ border: `4px solid ${p.couleur}` }} />
                <h3 className="text-2xl font-black text-white mb-1">{p.nom}</h3>
                <p className="font-semibold mb-1" style={{ color: p.couleur }}>{p.role}</p>
                <p className="text-gray-400 text-sm mb-6">{p.desc}</p>
                <div className="flex flex-col gap-3 w-full">
                  <a href={`tel:${p.tel}`}
                    className="flex items-center justify-center gap-2 px-5 py-3 text-white font-bold rounded-xl transition-all"
                    style={{ backgroundColor: p.couleur }}>
                    <Phone className="h-4 w-4" />{p.telDisplay}
                  </a>
                  <a href={`mailto:${p.email}`}
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20">
                    <Mail className="h-4 w-4" />{p.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold px-10 rounded-xl text-base" onClick={() => scrollTo('contact')}>
                  <ArrowRight className="mr-2 h-5 w-5" />
                Prendre contact maintenant
                </Button>
            <p className="mt-3 text-gray-500 text-sm">Réponse garantie sous 24h</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. CONTACT
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">Discutons de votre projet</h2>
            <p className="text-gray-500 text-lg">
              Dites-nous où vous en êtes : on vous rappelle sous 24h avec une proposition adaptée.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xdawrgoz"
            method="POST"
            className="bg-[#0F1D3A] rounded-3xl p-8 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="prenom" placeholder="Prénom *" required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors" />
              <input type="text" name="nom" placeholder="Nom *" required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors" />
            </div>
            <input type="email" name="email" placeholder="Email *" required
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors" />
            <input type="text" name="entreprise" placeholder="Entreprise"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors" />
            <input type="tel" name="telephone" placeholder="Téléphone"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors" />
            <select name="pays" required className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-gray-400 w-full focus:outline-none focus:border-[#00D4C8] transition-colors">
              <option value="">Pays *</option>
              <option>Suisse</option>
              <option>France</option>
              <option>Espagne</option>
              <option>Italie</option>
              <option>Autre</option>
            </select>
            <select name="besoin" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-gray-400 w-full focus:outline-none focus:border-[#00D4C8] transition-colors">
              <option value="">Votre besoin principal</option>
              <option>Gestion de chantiers : ElvyBat</option>
              <option>Interventions terrain : ElvyService IA</option>
              <option>Les deux</option>
              <option>Je veux en savoir plus</option>
            </select>
            <textarea name="message" placeholder="Décrivez votre activité et vos besoins *" rows={4} required
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors resize-none" />
            <input type="hidden" name="_subject" value="Nouveau lead ElvyBat" />
            <button type="submit" className="w-full bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base">
              Envoyer ma demande
              <ChevronRight className="h-5 w-5" />
            </button>
            <p className="text-center text-xs text-gray-600">
              Vos données ne seront jamais partagées avec des tiers.
            </p>
          </form>
        </div>
      </section>

    </div>
  );
}

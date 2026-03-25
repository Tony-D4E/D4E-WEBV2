import { 
  HardHat, CheckCircle, ArrowRight, Star, Sparkles, 
  Mic, FileText, Building2, Clock, TrendingUp, 
  Calendar, BarChart3, ClipboardList, Calculator,
  Shield, Zap, ChevronRight, Phone, Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const resultats = [
  { valeur: '−50%', label: 'Délais de facturation', icon: Clock },
  { valeur: '+20%', label: 'Rentabilité chantier', icon: TrendingUp },
  { valeur: '−10h', label: 'Tâches admin / semaine', icon: BarChart3 },
  { valeur: '500+', label: 'Entreprises équipées', icon: Building2 },
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
  'Ouverture de la base de données',
  'Paramétrage et installation des composants ElvyBat',
  'Création des utilisateurs et des accès',
  'Mise en place de votre logo et documents',
  'Structuration des articles et des ouvrages',
  'Configuration comptable (TVA, plan comptable CH)',
  'Suivi de rentabilité chantier activé',
  'Accompagnement personnalisé par un chef de projet',
  '1 déplacement sur site inclus',
];

const temoignages = [
  {
    texte: 'Grâce à ElvyBat, nous pilotons nos chantiers en temps réel et maîtrisons enfin la rentabilité de chaque projet. La facturation de situation est devenue automatique.',
    auteur: 'Directeur Général',
    societe: 'ACRO BTP Suisse',
    photo: '/btp-carreleur2.jpg',
  },
  {
    texte: 'Un outil structurant pour suivre nos chantiers, établir nos factures de situation et analyser notre rentabilité en temps réel. L\'équipe D4E nous a accompagnés de A à Z.',
    auteur: 'Responsable Administratif',
    societe: 'Sanitherme by Adtek',
    photo: '/btp-carreleur1.jpg',
  },
  {
    texte: 'D4E nous a accompagnés avec une vraie compréhension de notre secteur. De l\'analyse initiale à la mise en production, leur réactivité est impressionnante.',
    auteur: 'Directeur',
    societe: 'ADSI Sécurité',
    photo: '/btp-chauffage.jpg',
  },
];

export default function ElvyBatPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: iaRef, isVisible: iaVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: packRef, isVisible: packVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: temRef, isVisible: temVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#0B0F19] min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/btp-hero.jpg"
            alt="Chantier BTP ElvyBat"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/80 to-transparent" />
        </div>

        <div ref={heroRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-on-scroll ${heroVisible ? 'is-visible' : ''}`}>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00D4C8]/20 border border-[#00D4C8]/40 rounded-full mb-6">
              <HardHat className="h-4 w-4 text-[#00D4C8]" />
              <span className="text-sm font-semibold text-[#00D4C8]">Suite Elvy · BTP / Construction</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
              ElvyBat —<br />
              <span className="text-[#00D4C8]">Gestion de chantier</span><br />
              sur Odoo
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Démarrez votre gestion de chantier rapidement et simplement. 
              Solution métier complète, clé en main, pour artisans et PME du bâtiment.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {['Clé en main', '1 déplacement inclus', 'Basé sur Odoo Enterprise'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="h-4 w-4 text-[#00D4C8] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold px-8 rounded-xl">
                <a href="#contact">
                  Demander une démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-xl">
                <a href="#pack">Voir le pack mise en place</a>
              </Button>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Tarification adaptée · Suisse · France · Espagne
            </p>
          </div>
        </div>
      </section>

      {/* ═══ RÉSULTATS ═══ */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div ref={statsRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${statsVisible ? 'is-visible' : ''}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {resultats.map((r, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-black text-[#0F1D3A] mb-1">{r.valeur}</p>
                <p className="text-sm text-gray-500 font-medium">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FONCTIONNALITÉS ═══ */}
      <section className="py-24 bg-gray-50">
        <div ref={featRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${featVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">
              Tout ce qu'il faut pour votre entreprise du bâtiment
            </h2>
            <p className="text-lg text-gray-500">
              Une solution ERP complète qui couvre tous les besoins de la gestion de chantier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fonctionnalites.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#0F1D3A] flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-[#00D4C8]" />
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
              Notre logiciel de gestion de chantier intègre l'intelligence artificielle pour automatiser vos tâches répétitives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F1D3A] mb-3">Bons de régie par IA</h3>
              <p className="text-gray-600 leading-relaxed">
                Recevez un mail ou PDF d'une régie, notre logiciel reconnaît automatiquement toutes les informations et crée la tâche avec les bonnes données.
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

          {/* Photo chantier */}
          <div className="mt-16 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/btp-chantier.jpg"
              alt="Ouvrier BTP sur chantier"
              className="w-full h-64 object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ═══ PACK MISE EN PLACE ═══ */}
      <section id="pack" className="py-24 bg-[#0F1D3A] text-white">
        <div ref={packRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${packVisible ? 'is-visible' : ''}`}>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Pack de mise en place</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Clé en main, déploiement rapide. Nous configurons tout pour vous — vous êtes opérationnel rapidement, sans complexité.
            </p>
            <p className="mt-4 text-[#00D4C8] font-semibold">
              Tarification CH · FR · ES — <a href="#contact" className="underline underline-offset-4">Demander un devis</a>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Ce qu'inclut la mise en place */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#00D4C8]" />
                Ce que comprend la mise en place
              </h3>
              <div className="space-y-3">
                {miseEnPlace.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00D4C8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modules */}
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
            </div>
          </div>

          {/* CTA dévis */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-xl font-bold mb-2">Vous voulez en savoir plus sur les tarifs ?</p>
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

      {/* ═══ TÉMOIGNAGES ═══ */}
      <section className="py-24 bg-gray-50">
        <div ref={temRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${temVisible ? 'is-visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">Ils ont transformé leur gestion</h2>
            <p className="text-gray-500">Des entreprises du BTP qui font confiance à ElvyBat</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {temoignages.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="h-4 w-4 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">"{t.texte}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.auteur}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-[#0F1D3A] text-sm">{t.auteur}</p>
                    <p className="text-xs text-gray-500">{t.societe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══╀�ÉQUIPE ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#0F1D3A] mb-4">Vos interlocuteurs dédiés</h2>
          <p className="text-gray-500 mb-12">Une équipe à taille humaine, basée à Genève, Sion et Barcelone</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { nom: 'Antonio Spedicato', role: 'Consultant Odoo & Fondateur', tel: '0764344595', email: 'antonio@d4e.cool', photo: '/team-antonio.jpg' },
              { nom: 'Laëtitia André', role: 'Chef de projet ElvyBat', tel: '0764822139', email: 'laetita@d4e.cool', photo: '/team-laetitia.jpg' },
            ].map((p, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-2xl">
                <img src={p.photo} alt={p.nom} className="w-20 h-20 rounded-full object-cover mb-4" />
                <h3 className="font-bold text-[#0F1D3A]">{p.nom}</h3>
                <p className="text-sm text-gray-500 mb-4">{p.role}</p>
                <div className="flex gap-3">
                  <a href={`tel:${p.tel}`} className="flex items-center gap-1 text-sm text-[#00D4C8] hover:underline">
                    <Phone className="h-4 w-4" />{p.tel}
                  </a>
                  <a href={`mailto:${p.email}`} className="flex items-center gap-1 text-sm text-[#00D4C8] hover:underline">
                    <Mail className="h-4 w-4" />Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM ═══ */}
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

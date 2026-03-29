import {
  GraduationCap, CheckCircle, ArrowRight,
  Phone, Mail,
  ChevronRight,
  CalendarDays, Link2, LayoutDashboard,
  Cpu, Building2, Users, BookOpen,
  ClipboardList, CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/* -- DONNEES -- */

const stats = [
  { valeur: '70+', label: 'Modules disponibles', icon: LayoutDashboard },
  { valeur: '3M+', label: "Utilisateurs dans le monde", icon: Users },
  { valeur: '90+', label: 'Pays', icon: Building2 },
  { valeur: '100%', label: 'Int\u00e9gr\u00e9 \u00e0 Odoo', icon: BookOpen },
];

const pays = [
  { flag: 'CH', nom: 'Suisse', detail: 'CHF \u00b7 TVA CH' },
  { flag: 'FR', nom: 'France', detail: 'EUR \u00b7 TVA FR' },
  { flag: 'ES', nom: 'Espagne', detail: 'EUR \u00b7 TVA ES' },
];

const fonctionnalites = [
  {
    icon: Users,
    titre: "Dossiers \u00e9tudiants (SIS)",
    desc: "Inscriptions, parcours, documents, historique complet. Chaque \u00e9tudiant a un dossier centralis\u00e9 accessible en un clic par l'\u00e9quipe administrative.",
    couleur: '#8B5CF6',
  },
  {
    icon: ClipboardList,
    titre: 'Admissions en ligne',
    desc: "Formulaire de candidature en ligne, suivi du pipeline d'admission, notifications automatiques. Du premier contact \u00e0 l'inscription valid\u00e9e.",
    couleur: '#F59E0B',
  },
  {
    icon: CalendarDays,
    titre: 'Emplois du temps et planning',
    desc: "Cr\u00e9ation des emplois du temps par classe, enseignant et salle. Gestion des cr\u00e9neaux, des remplacements et des conflits.",
    couleur: '#8B5CF6',
  },
  {
    icon: BookOpen,
    titre: 'Examens, notes et LMS',
    desc: "Gestion des examens, saisie des notes, bulletins automatis\u00e9s. Plateforme d'apprentissage en ligne int\u00e9gr\u00e9e avec cours, devoirs et suivi de progression.",
    couleur: '#F59E0B',
  },
  {
    icon: CreditCard,
    titre: 'Facturation et frais de scolarit\u00e9',
    desc: "G\u00e9n\u00e9ration automatique des factures, suivi des paiements, relances. Frais d'inscription, de scolarit\u00e9, d'examen : tout est param\u00e9trable.",
    couleur: '#8B5CF6',
  },
];

const modules = [
  { nom: 'SIS', desc: "Syst\u00e8me d'information \u00e9tudiant" },
  { nom: 'LMS', desc: 'Plateforme e-learning' },
  { nom: 'Admissions', desc: 'Pipeline en ligne' },
  { nom: 'Examens', desc: 'Notes et bulletins' },
  { nom: 'Pr\u00e9sences', desc: 'Suivi automatique' },
  { nom: 'Biblioth\u00e8que', desc: 'Gestion des ouvrages' },
  { nom: 'Emploi du temps', desc: 'Planning complet' },
  { nom: 'Comptabilit\u00e9', desc: 'Frais et paiements' },
  { nom: 'RH / Paie', desc: '\u00c9quipe enseignante' },
  { nom: 'CRM', desc: 'Acquisition \u00e9tudiants' },
  { nom: '\u00c9v\u00e9nements', desc: 'Journ\u00e9es portes ouvertes' },
  { nom: 'Portail', desc: 'Acc\u00e8s parents / \u00e9tudiants' },
];

const pourQui = [
  {
    icon: Building2,
    titre: '\u00c9coles et lyc\u00e9es',
    desc: "Vous g\u00e9rez un \u00e9tablissement scolaire et vous cherchez \u00e0 centraliser inscriptions, notes, emplois du temps et facturation dans un seul outil.",
    exemples: ['\u00c9coles priv\u00e9es', 'Lyc\u00e9es', '\u00c9coles internationales', '\u00c9coles Montessori'],
    couleur: '#8B5CF6',
  },
  {
    icon: GraduationCap,
    titre: 'Universit\u00e9s et centres de formation',
    desc: "Vous g\u00e9rez des cursus, des promotions et des campus. ElvyEduca s'adapte \u00e0 votre organisation avec le LMS, les examens et la gestion multi-sites.",
    exemples: ['Universit\u00e9s', 'Hautes \u00e9coles', 'Centres de formation', 'Acad\u00e9mies'],
    couleur: '#F59E0B',
  },
];

const equipe = [
  {
    nom: 'Antonio Spedicato',
    role: 'Consultant Odoo & Fondateur',
    desc: "15 ans d'exp\u00e9rience \u00b7 Expert ERP m\u00e9tier",
    tel: '+41764344595',
    telDisplay: '+41 (0)76 434 45 95',
    whatsapp: '41764344595',
    email: 'antonio@d4e.cool',
    photo: '/team-antonio.jpg',
    couleur: '#8B5CF6',
  },
  {
    nom: 'La\u00ebtitia Andr\u00e9',
    role: 'Ambassadrice Odoo - D4E',
    desc: 'Sp\u00e9cialiste d\u00e9ploiement \u00b7 Suisse & France',
    tel: '+41764822139',
    telDisplay: '+41 (0)76 482 21 39',
    whatsapp: '41764822139',
    email: 'laetita@d4e.cool',
    photo: '/team-laetitia.jpg',
    couleur: '#F59E0B',
  },
];

/* -- COMPOSANT -- */

export default function ElvyEducaPage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: modRef, isVisible: modVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: pourQuiRef, isVisible: pourQuiVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: equipeRef, isVisible: equipeVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* -- 1. HERO -- */}
      <section className="relative overflow-x-hidden bg-[#0B0F19] min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#1a0f28] to-[#0B0F19]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[800px] h-[800px] rounded-full -top-60 -right-60 opacity-8"
            style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />
        </div>

        {/* Badge Odoo Gold Partner */}
        <div style={{ position: 'absolute', top: 0, right: '2rem', zIndex: 20, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', borderRadius: '0 0 16px 16px', padding: '16px 28px', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}>
          <img src="/odoo-gold-partner.svg" alt="Odoo Gold Partner" style={{ height: 60, maxWidth: 280, objectFit: 'contain', display: 'block' }} />
        </div>

        <div ref={heroRef}
          className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-on-scroll ${heroVisible ? 'is-visible' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Colonne gauche */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 rounded-full mb-8">
                <GraduationCap className="h-4 w-4 text-[#8B5CF6]" />
                <span className="text-sm font-semibold text-[#8B5CF6]">{`Suite Elvy \u00b7 \u00c9ducation & Formation`}</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] mb-8">
                <span style={{ color: '#FFFFFF' }}>{`Votre \u00e9tablissement.`}</span><br />
                <span style={{ color: '#8B5CF6' }}>Une seule plateforme.</span>
              </h1>

              <p style={{ color: '#FFFFFF', textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
                className="text-xl mb-10 leading-relaxed max-w-xl">
                {`ElvyEduca est la solution Odoo pour les \u00e9tablissements scolaires et centres de formation : admissions, scolarit\u00e9, examens, facturation et LMS dans un seul outil.`}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  'Dossiers \u00e9tudiants centralis\u00e9s et accessibles',
                  'Admissions en ligne avec suivi du pipeline',
                  'Examens, notes et bulletins automatis\u00e9s',
                  'Facturation des frais de scolarit\u00e9 int\u00e9gr\u00e9e',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm" style={{ color: '#FFFFFF' }}>
                    <CheckCircle className="h-5 w-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold px-8 rounded-xl text-base" onClick={() => scrollTo('contact')}>
                  {`Demander une d\u00e9monstration`}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 rounded-xl text-base" onClick={() => scrollTo('fonctionnalites')}>
                  {`Voir les fonctionnalit\u00e9s`}
                </Button>
              </div>

              <div>
                <p className="text-xs font-bold text-[#8B5CF6] uppercase tracking-widest mb-3">
                  Localisation Odoo incluse &middot; Multi-pays
                </p>
                <div className="flex flex-row flex-wrap gap-3">
                  {pays.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 rounded-lg">
                      <span className="text-xs font-bold text-[#8B5CF6] bg-[#8B5CF6]/20 px-2 py-0.5 rounded">{p.flag}</span>
                      <div>
                        <p style={{ color: '#FFFFFF' }} className="font-bold text-sm leading-none">{p.nom}</p>
                        <p className="text-[#8B5CF6] text-xs mt-0.5">{p.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="hidden lg:flex flex-col gap-4">
              {[
                { titre: "Des admissions \u00e0 la remise des dipl\u00f4mes", desc: "Tout le parcours \u00e9tudiant dans un seul syst\u00e8me. Plus de tableurs, plus de donn\u00e9es \u00e9parpill\u00e9es." },
                { titre: '70+ modules, activez ce dont vous avez besoin', desc: "SIS, LMS, examens, pr\u00e9sences, biblioth\u00e8que : d\u00e9ployez uniquement ce qui est utile aujourd'hui." },
                { titre: "Op\u00e9rationnel en quelques semaines", desc: "D\u00e9ploiement accompagn\u00e9 par D4E. Formation de vos \u00e9quipes incluse." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
                  <div className="w-1 rounded-full bg-[#8B5CF6] flex-shrink-0 mt-1" style={{ minHeight: '40px' }} />
                  <div>
                    <p style={{ color: '#FFFFFF' }} className="font-bold text-base leading-snug mb-1">{item.titre}</p>
                    <p style={{ color: '#CBD5E1' }} className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* -- 2. STATS -- */}
      <section className="py-16 bg-[#F5F3FF] border-b border-[#DDD6FE]">
        <div ref={statsRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${statsVisible ? 'is-visible' : ''}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center bg-white rounded-2xl py-8 px-4 border border-[#DDD6FE] shadow-sm">
                <s.icon className="h-8 w-8 text-[#8B5CF6] mx-auto mb-3" />
                <p className="text-3xl font-black text-[#0F1D3A] mb-1">{s.valeur}</p>
                <p className="text-sm text-gray-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 3. FONCTIONNALITES -- */}
      <section id="fonctionnalites" className="py-24 bg-white">
        <div ref={featRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${featVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full mb-4">
              <LayoutDashboard className="h-5 w-5 text-[#8B5CF6]" />
              <span className="text-base font-bold text-[#8B5CF6]">{`Fonctionnalit\u00e9s ElvyEduca`}</span>
            </div>
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">{`De l'inscription au dipl\u00f4me, tout est connect\u00e9`}</h2>
            <p className="text-lg text-gray-500">
              {`ElvyEduca couvre l'ensemble de la vie de votre \u00e9tablissement : administration, p\u00e9dagogie et finances dans une seule plateforme.`}
            </p>
          </div>

          <div className="space-y-0 rounded-3xl overflow-hidden border border-gray-200">
            {fonctionnalites.map((f, i) => (
              <div key={i} className={`p-8 flex gap-6 items-start transition-all ${i % 2 === 0 ? 'bg-[#0F1D3A]' : 'bg-white border-t border-b border-gray-100'}`}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: i % 2 === 0 ? f.couleur + '30' : f.couleur + '15' }}>
                  <f.icon className="h-7 w-7" style={{ color: f.couleur }} />
                </div>
                <div>
                  <h3 className={`text-xl font-black mb-2 ${i % 2 === 0 ? '' : 'text-[#0F1D3A]'}`}
                    style={i % 2 === 0 ? { color: '#FFFFFF' } : {}}>
                    {f.titre}
                  </h3>
                  <p style={i % 2 === 0 ? { color: '#CBD5E1' } : {}}
                    className={`leading-relaxed ${i % 2 === 0 ? '' : 'text-gray-500'}`}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold px-10 rounded-xl text-base" onClick={() => scrollTo('contact')}>
              Voir ElvyEduca en action
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* -- 4. MODULES -- */}
      <section className="py-24 bg-[#0F1D3A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full -bottom-40 -left-40 opacity-10"
            style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />
        </div>
        <div ref={modRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${modVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 rounded-full mb-4">
              <Link2 className="h-4 w-4 text-[#8B5CF6]" />
              <span className="text-sm font-semibold text-[#8B5CF6]">70+ modules disponibles</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-4">
              Activez uniquement ce dont vous avez besoin
            </h2>
            <p className="text-gray-300 text-lg">
              {`Une base de donn\u00e9es unique, des modules \u00e0 la carte. D\u00e9ployez aujourd'hui, \u00e9tendez demain.`}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {modules.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="h-4 w-4 text-[#8B5CF6]" />
                  <h3 className="text-sm font-bold text-white">{m.nom}</h3>
                </div>
                <p className="text-xs text-gray-400">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-[#8B5CF6]/30 rounded-3xl p-8 text-center">
            <p className="text-[#8B5CF6] font-semibold mb-2">{`Bas\u00e9 sur OpenEduCat, solution open source \u00e9prouv\u00e9e`}</p>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              {`3 millions d'utilisateurs dans 90+ pays. D4E d\u00e9ploie, configure et accompagne votre \u00e9tablissement sur cette solution.`}
            </p>
            <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold px-8 rounded-xl" onClick={() => scrollTo('contact')}>
              {`Discuter de mon \u00e9tablissement`}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* -- 5. POUR QUI -- */}
      <section className="py-24 bg-white">
        <div ref={pourQuiRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${pourQuiVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">{`Con\u00e7u pour les \u00e9tablissements \u00e9ducatifs`}</h2>
            <p className="text-lg text-gray-500">
              {`De la maternelle \u00e0 l'universit\u00e9, ElvyEduca s'adapte \u00e0 la taille et aux besoins de votre structure.`}
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
        </div>
      </section>

      {/* -- 6. EQUIPE -- */}
      <section className="py-24 bg-[#f8fafc]">
        <div ref={equipeRef} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${equipeVisible ? 'is-visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-3">{`Des experts \u00e0 votre service`}</h2>
            <p className="text-gray-500 text-lg">{`Une \u00e9quipe \u00e0 taille humaine, bas\u00e9e \u00e0 Gen\u00e8ve, Sion et Barcelone`}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipe.map((p, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500">
                <img src={p.photo} alt={p.nom}
                  className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg"
                  style={{ border: `4px solid ${p.couleur}` }} />
                <h3 className="text-2xl font-black text-[#0F1D3A] mb-1">{p.nom}</h3>
                <p className="font-semibold mb-1" style={{ color: p.couleur }}>{p.role}</p>
                <p className="text-gray-400 text-sm mb-6">{p.desc}</p>
                <div className="flex flex-col gap-3 w-full">
                  <a href={`tel:${p.tel}`}
                    className="flex items-center justify-center gap-2 px-5 py-3 text-white font-bold rounded-xl transition-all"
                    style={{ backgroundColor: p.couleur }}>
                    <Phone className="h-4 w-4" />{p.telDisplay}
                  </a>
                  <a href={`https://wa.me/${p.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold rounded-xl transition-all">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.319 0-4.46-.768-6.184-2.064l-.432-.324-2.663.893.893-2.663-.324-.432A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                    WhatsApp
                  </a>
                  <a href={`mailto:${p.email}`}
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all border border-gray-200">
                    <Mail className="h-4 w-4" />{p.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 7. CONTACT -- */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">Discutons de votre projet</h2>
            <p className="text-gray-500 text-lg">
              {`D\u00e9crivez votre \u00e9tablissement : on vous rappelle sous 24h avec une proposition adapt\u00e9e.`}
            </p>
          </div>

          <form
            action="https://formspree.io/f/xdawrgoz"
            method="POST"
            className="bg-[#0F1D3A] rounded-3xl p-8 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="prenom" placeholder={`Pr\u00e9nom *`} required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#8B5CF6] transition-colors" />
              <input type="text" name="nom" placeholder="Nom *" required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#8B5CF6] transition-colors" />
            </div>
            <input type="email" name="email" placeholder="Email *" required
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#8B5CF6] transition-colors" />
            <input type="text" name="etablissement" placeholder={`\u00c9tablissement`}
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#8B5CF6] transition-colors" />
            <input type="tel" name="telephone" placeholder={`T\u00e9l\u00e9phone`}
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#8B5CF6] transition-colors" />
            <select name="type" required className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white w-full focus:outline-none focus:border-[#8B5CF6] transition-colors">
              <option value="">{`Type d'\u00e9tablissement *`}</option>
              <option>{`\u00c9cole priv\u00e9e`}</option>
              <option>{`Lyc\u00e9e`}</option>
              <option>{`Universit\u00e9 / Haute \u00e9cole`}</option>
              <option>Centre de formation</option>
              <option>{`Acad\u00e9mie / Institut`}</option>
              <option>Autre</option>
            </select>
            <select name="besoin" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white w-full focus:outline-none focus:border-[#8B5CF6] transition-colors">
              <option value="">Votre besoin principal</option>
              <option>{`Gestion des \u00e9tudiants et inscriptions`}</option>
              <option>Emplois du temps et planning</option>
              <option>Examens, notes et bulletins</option>
              <option>{`Facturation et frais de scolarit\u00e9`}</option>
              <option>Plateforme e-learning (LMS)</option>
              <option>Je veux en savoir plus</option>
            </select>
            <textarea name="message" placeholder={`D\u00e9crivez votre \u00e9tablissement et vos besoins *`} rows={4} required
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none" />
            <input type="hidden" name="_subject" value="Nouveau lead ElvyEduca" />
            <button type="submit" className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base">
              Envoyer ma demande
              <ChevronRight className="h-5 w-5" />
            </button>
            <p className="text-center text-xs text-gray-600">
              {`Vos donn\u00e9es ne seront jamais partag\u00e9es avec des tiers.`}
            </p>
          </form>
        </div>
      </section>

    </div>
  );
}
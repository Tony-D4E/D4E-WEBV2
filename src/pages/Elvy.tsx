import {
  ArrowRight, Phone, Mail,
  ChevronRight, Printer, Shield,
  GraduationCap, HardHat, Grape, Building,
  Users, Database, Heart, Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/* -- DONNEES -- */

const solutionsReady = [
  {
    to: '/elvybat',
    label: 'ElvyBat',
    secteur: 'Construction & BTP',
    accroche: 'Pilotez vos chantiers, ma\u00eetrisez vos marges.',
    icon: HardHat,
    accent: '#00D4C8',
  },
  {
    to: '/elvyprint',
    label: 'ElvyPrint',
    secteur: "Syst\u00e8mes d'impression",
    accroche: 'Contrats, compteurs et interventions automatis\u00e9s.',
    icon: Printer,
    accent: '#F59E0B',
  },
  {
    to: '/elvyeduca',
    label: 'ElvyEduca',
    secteur: '\u00c9ducation & Formation',
    accroche: 'Admissions, scolarit\u00e9 et facturation unifi\u00e9es.',
    icon: GraduationCap,
    accent: '#8B5CF6',
  },
  {
    to: '/elvyinsurance',
    label: 'ElvyInsurance',
    secteur: 'Courtage en assurance',
    accroche: 'Polices, commissions et comptabilit\u00e9 en un outil.',
    icon: Shield,
    accent: '#3B82F6',
  },
];

const solutionsEnCours = [
  {
    label: 'ElvyVino',
    secteur: 'Viticulture & N\u00e9goce',
    desc: "Gestion des parcelles, vinification, tra\u00e7abilit\u00e9, vente et facturation pour les vignerons et n\u00e9gociants.",
    icon: Grape,
    accent: '#DC2626',
  },
  {
    label: 'ElvyImmo',
    secteur: 'Immobilier & G\u00e9rance',
    desc: "Gestion des biens, mandats, locations, copropri\u00e9t\u00e9s et comptabilit\u00e9 immobili\u00e8re int\u00e9gr\u00e9e.",
    icon: Building,
    accent: '#059669',
  },
];

const modele = [
  {
    icon: Users,
    titre: 'Co-construit avec le terrain',
    desc: "Chaque solution Elvy est n\u00e9e d'un vrai besoin, avec un vrai entrepreneur. Votre expertise m\u00e9tier guide le d\u00e9veloppement, pas l'inverse.",
    accent: '#00D4C8',
  },
  {
    icon: Database,
    titre: 'Vos donn\u00e9es vous appartiennent',
    desc: "Elvy tourne sur Odoo. Si vous partez, votre Odoo reste, vos donn\u00e9es restent. Vous perdez les fonctionnalit\u00e9s Elvy, pas votre activit\u00e9.",
    accent: '#F59E0B',
  },
  {
    icon: Heart,
    titre: 'Votre savoir-faire r\u00e9compens\u00e9',
    desc: "Les co-constructeurs b\u00e9n\u00e9ficient d'un tarif pionnier. Votre contribution m\u00e9tier a de la valeur, et elle est reconnue.",
    accent: '#8B5CF6',
  },
];

const chiffres = [
  { valeur: '3 sem.', label: 'D\u00e9ploiement moyen' },
  { valeur: 'Prix fixe', label: 'Pack tout compris' },
  { valeur: '150+', label: 'Projets Odoo D4E' },
  { valeur: '100%', label: 'Natif Odoo' },
];

/* -- COMPOSANT -- */

export function Elvy() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: modRef, isVisible: modVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: solRef, isVisible: solVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: coRef, isVisible: coVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* -- 1. HERO MANIFESTE -- */}
      <section className="relative overflow-x-hidden bg-[#0B0F19] flex items-center" style={{ minHeight: '90vh' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0f1a2e] to-[#0B0F19]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[800px] h-[800px] rounded-full -top-40 -right-40 opacity-8"
            style={{ background: 'radial-gradient(circle, #00D4C8, transparent)' }} />
          <div className="absolute w-[600px] h-[600px] rounded-full -bottom-40 -left-40 opacity-5"
            style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />
        </div>

        {/* Badge Odoo */}
        <div style={{ position: 'absolute', top: 0, right: '2rem', zIndex: 20, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', borderRadius: '0 0 16px 16px', padding: '16px 28px', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}>
          <img src="/odoo-gold-partner.svg" alt="Odoo Gold Partner" style={{ height: 60, maxWidth: 280, objectFit: 'contain', display: 'block' }} />
        </div>

        <div ref={heroRef}
          className={`relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center animate-on-scroll ${heroVisible ? 'is-visible' : ''}`}>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00D4C8]/20 border border-[#00D4C8]/40 rounded-full mb-8">
            <Rocket className="h-4 w-4 text-[#00D4C8]" />
            <span className="text-sm font-semibold text-[#00D4C8]">Solutions Elvy par D4E</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-8">
            <span style={{ color: '#FFFFFF' }}>{`Votre m\u00e9tier m\u00e9rite mieux`}</span><br />
            <span style={{ color: '#00D4C8' }}>{`qu'un logiciel g\u00e9n\u00e9rique.`}</span>
          </h1>

          <p style={{ color: '#CBD5E1' }} className="text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            {`Marre de payer trop cher pour un ERP qui ne comprend pas votre r\u00e9alit\u00e9 ? Marre d'\u00eatre prisonnier d'un \u00e9diteur ? Chaque solution Elvy est co-construite avec des entrepreneurs comme vous. Votre savoir-faire m\u00e9tier + notre expertise Odoo = une solution qui vous ressemble.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold px-8 rounded-xl text-base" onClick={() => scrollTo('solutions')}>
              {`D\u00e9couvrir les solutions`}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 rounded-xl text-base" onClick={() => scrollTo('co-construction')}>
              Devenir co-constructeur
            </Button>
          </div>
        </div>
      </section>

      {/* -- 2. LE MODELE ELVY -- */}
      <section className="py-24 bg-white">
        <div ref={modRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${modVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">{`Le mod\u00e8le Elvy`}</h2>
            <p className="text-lg text-gray-500">
              {`Pas un logiciel sur \u00e9tag\u00e8re. Pas un projet custom \u00e0 rallonge. Un mod\u00e8le diff\u00e9rent.`}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {modele.map((m, i) => (
              <div key={i} className="rounded-3xl p-8 border-2 hover:shadow-lg transition-all"
                style={{ borderColor: m.accent + '40', backgroundColor: m.accent + '08' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: m.accent + '20' }}>
                  <m.icon className="h-7 w-7" style={{ color: m.accent }} />
                </div>
                <h3 className="text-xl font-black text-[#0F1D3A] mb-3">{m.titre}</h3>
                <p className="text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 3. SOLUTIONS OPERATIONNELLES -- */}
      <section id="solutions" className="py-24 bg-[#0B0F19]">
        <div ref={solRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${solVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-white mb-4">{`Solutions op\u00e9rationnelles`}</h2>
            <p className="text-gray-400 text-lg">
              {`D\u00e9ploy\u00e9es, \u00e9prouv\u00e9es, pr\u00eates \u00e0 l'emploi. Chaque solution Elvy est un pack Odoo vertical, d\u00e9ployable en quelques semaines.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutionsReady.map((sol) => (
              <Link key={sol.to} to={sol.to}
                className="bg-[#0F1D3A] rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-[#132240] transition-all group cursor-pointer relative overflow-hidden">
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', backgroundColor: sol.accent }} />
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: sol.accent + '20' }}>
                    <sol.icon className="h-7 w-7" style={{ color: sol.accent }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-black text-white">{sol.label}</h3>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: sol.accent + '20', color: sol.accent }}>
                        {sol.secteur}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-4">{sol.accroche}</p>
                    <span className="text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                      style={{ color: sol.accent }}>
                      {`D\u00e9couvrir`} <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- 4. EN CO-CONSTRUCTION -- */}
      <section id="co-construction" className="py-24 bg-white">
        <div ref={coRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${coVisible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full mb-4">
              <Rocket className="h-5 w-5 text-[#F59E0B]" />
              <span className="text-base font-bold text-[#F59E0B]">En co-construction</span>
            </div>
            <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">{`Participez au d\u00e9veloppement`}</h2>
            <p className="text-lg text-gray-500">
              {`Ces solutions sont en cours de construction avec des professionnels du secteur. Rejoignez l'aventure : votre expertise m\u00e9tier acc\u00e9l\u00e8re le d\u00e9veloppement, et votre tarif refl\u00e8te votre contribution.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {solutionsEnCours.map((sol, i) => (
              <div key={i} className="rounded-3xl p-8 border-2 border-dashed hover:shadow-lg transition-all relative"
                style={{ borderColor: sol.accent + '50', backgroundColor: sol.accent + '05' }}>
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: sol.accent + '15', color: sol.accent }}>
                    Co-construction
                  </span>
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: sol.accent + '15' }}>
                  <sol.icon className="h-7 w-7" style={{ color: sol.accent }} />
                </div>
                <h3 className="text-2xl font-black text-[#0F1D3A] mb-1">{sol.label}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: sol.accent }}>{sol.secteur}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{sol.desc}</p>
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all"
                  style={{ backgroundColor: sol.accent }}>
                  Devenir co-constructeur <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-[#0F1D3A] rounded-3xl p-8 text-center">
            <p style={{ color: '#F59E0B' }} className="font-bold text-lg mb-2">{`Votre secteur n'est pas encore couvert ?`}</p>
            <p style={{ color: '#CBD5E1' }} className="max-w-2xl mx-auto mb-6">
              {`Si votre m\u00e9tier a des besoins sp\u00e9cifiques qu'aucun ERP ne couvre correctement, parlons-en. La prochaine solution Elvy est peut-\u00eatre la v\u00f4tre.`}
            </p>
            <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 rounded-xl" onClick={() => scrollTo('contact')}>
              {`Proposer un nouveau m\u00e9tier`}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* -- 5. POURQUOI ELVY -- */}
      <section className="py-20 bg-[#f8fafc]">
        <div ref={whyRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${whyVisible ? 'is-visible' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F1D3A] mb-3">{`Pourquoi Elvy, pas un projet sur mesure ?`}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {chiffres.map((c, i) => (
              <div key={i} className="text-center bg-white rounded-2xl py-8 px-4 border border-gray-200 shadow-sm">
                <p className="text-3xl font-black text-[#00D4C8] mb-1">{c.valeur}</p>
                <p className="text-sm text-gray-500 font-medium">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 6. CONTACT ANTONIO -- */}
      <section id="contact" className="py-24" style={{ backgroundColor: '#0B0F19' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Colonne gauche : photo + message */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <img src="/antonio-elvy.jpg" alt="Antonio Spedicato - Fondateur D4E"
                className="w-full max-w-sm rounded-3xl object-cover mb-8 shadow-2xl"
                style={{ maxHeight: '400px', border: '3px solid #00D4C8' }} />
              <h2 className="text-3xl font-black mb-4" style={{ color: '#FFFFFF' }}>{`Discutons de votre m\u00e9tier`}</h2>
              <p style={{ color: '#CBD5E1' }} className="text-base leading-relaxed mb-6 max-w-md">
                {`J'ai cr\u00e9\u00e9 D4E parce qu'un bon ERP ne devrait pas co\u00fbter une fortune ni prendre des mois. Chaque solution Elvy est n\u00e9e d'une rencontre avec un entrepreneur qui en avait marre. Si c'est votre cas, appelez-moi.`}
              </p>
              <p style={{ color: '#00D4C8' }} className="font-bold text-sm mb-6">{`Antonio Spedicato \u00b7 Fondateur D4E`}</p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <a href="tel:+41764344595"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-[#00D4C8] text-white font-bold rounded-xl flex-1">
                  <Phone className="h-4 w-4" /> +41 (0)76 434 45 95
                </a>
                <a href="https://wa.me/41764344595" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white font-bold rounded-xl">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.319 0-4.46-.768-6.184-2.064l-.432-.324-2.663.893.893-2.663-.324-.432A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                  WhatsApp
                </a>
              </div>
              <a href="mailto:antonio@d4e.cool"
                className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" /> antonio@d4e.cool
              </a>
            </div>

            {/* Colonne droite : formulaire */}
            <div>
              <form
                action="https://formspree.io/f/xdawrgoz"
                method="POST"
                className="bg-[#0F1D3A] rounded-3xl p-8 space-y-4 border border-white/10"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="prenom" placeholder={`Pr\u00e9nom *`} required
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors" />
                  <input type="text" name="nom" placeholder="Nom *" required
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors" />
                </div>
                <input type="email" name="email" placeholder="Email *" required
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors" />
                <input type="text" name="entreprise" placeholder="Entreprise"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors" />
                <input type="tel" name="telephone" placeholder={`T\u00e9l\u00e9phone`}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors" />
                <select name="interet" required className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white w-full focus:outline-none focus:border-[#00D4C8] transition-colors">
                  <option value="">{`Ce qui m'int\u00e9resse *`}</option>
                  <option>ElvyBat - Construction</option>
                  <option>ElvyPrint - Impression</option>
                  <option>{`ElvyEduca - \u00c9ducation`}</option>
                  <option>ElvyInsurance - Assurance</option>
                  <option>ElvyVino - Co-construction</option>
                  <option>ElvyImmo - Co-construction</option>
                  <option>{`Proposer un nouveau m\u00e9tier`}</option>
                </select>
                <textarea name="message" placeholder={`D\u00e9crivez votre m\u00e9tier et vos besoins *`} rows={4} required
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#00D4C8] transition-colors resize-none" />
                <input type="hidden" name="_subject" value="Nouveau lead Elvy Hub" />
                <button type="submit" className="w-full bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base">
                  Envoyer ma demande
                  <ChevronRight className="h-5 w-5" />
                </button>
                <p className="text-center text-xs text-gray-600">
                  {`Vos donn\u00e9es ne seront jamais partag\u00e9es avec des tiers.`}
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
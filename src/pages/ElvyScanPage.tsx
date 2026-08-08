import {
  ArrowRight, ScanLine, PenLine, Paperclip,
  Eye, Lock, CheckCircle2, Phone, Mail, Layers, Clock,
  ShieldCheck, ListChecks, FileText, Link2
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ============================================================
   ELVYSCAN - Page pilote nouvelle charte D4E
   Palette : verts profonds #0b3a40 / #14595e / #1d787c
   Accents : #00a1af (principal), #0ac7a2 (vif), #F59E0B (doré, CTA secondaire)
   Fonds clairs : #eef6f5 · Bordures : #dde5e5
   Textes : #17282a (titres), #46595a (corps)
   ============================================================ */

const C = {
  deep: '#0b3a40',
  mid: '#14595e',
  soft: '#1d787c',
  accent: '#00a1af',
  vivid: '#0ac7a2',
  gold: '#F59E0B',
  goldHover: '#D97706',
  light: '#eef6f5',
  border: '#dde5e5',
  ink: '#17282a',
  body: '#46595a',
};

/* -- DONNEES -- */

const problemes = [
  {
    icon: Clock,
    titre: 'Des heures perdues par soumission',
    desc: "Une soumission de 26 pages, c'est des heures de lecture, de report manuel des prix sur les pointillés et de calculs de récapitulation à la calculatrice.",
  },
  {
    icon: ListChecks,
    titre: 'Des dossiers rejetés pour un oubli',
    desc: "Une erreur de report, une annexe exigée qui manque (PGHS signé, attestation) et c'est toute la soumission qui est rejetée.",
  },
  {
    icon: Layers,
    titre: 'Chaque architecte a sa mise en page',
    desc: "Le format de chaque bureau est différent. À chaque nouveau dossier, tout est à redécouvrir depuis le début.",
  },
];

const etapes = [
  {
    num: '1',
    icon: ScanLine,
    titre: 'Il lit la soumission pour vous',
    points: [
      "Reconnaissance automatique du format : ElvyScan identifie le programme qui a généré la soumission. Dès le deuxième document d'une même famille, tout est déjà réglé.",
      'Extraction complète : articles, quantités, unités, sections, notes, régies. La structure entière devient une liste de travail à l\'écran.',
      'Format inconnu ? Un bouton « Faire prendre en charge par D4E » et notre équipe intègre le format sous 48 h.',
    ],
  },
  {
    num: '2',
    icon: Eye,
    titre: "Vous chiffrez à l'écran, en confiance",
    points: [
      'Écran de vérification en vis-à-vis : le PDF original à gauche, vos lignes à droite, synchronisés. Un clic sur une ligne surligne l\'endroit exact du document.',
      'Contrôle avant génération : le produit vous montre où chaque montant sera écrit et signale les articles sans prix. Rien ne part sans votre validation.',
      'Export Excel de tout le chiffrage en un clic.',
    ],
  },
  {
    num: '3',
    icon: PenLine,
    titre: "Il écrit sur le document de l'architecte, proprement",
    points: [
      'Les prix posés sur les pointillés du PDF original : PU, montants, totaux de chapitres, report par CFC, au point près.',
      'Récapitulation complète calculée et écrite : brut, rabais, escompte, prorata, assurance, TVA, net. Chaque valeur dans la zone que le document prévoit.',
      'Vos coordonnées et votre signature posées sur la page de garde. Annotations libres en plus si besoin.',
    ],
  },
  {
    num: '4',
    icon: Paperclip,
    titre: 'Le dossier de retour, complet',
    points: [
      'Annexes assemblées : ajoutez vos PDF (PGHS signé, attestations, références), choisissez l\'ordre. ElvyScan génère un seul PDF : la soumission chiffrée plus toutes les annexes.',
      'Check-list automatique : les documents exigés par la soumission sont extraits de la page de garde et présentés en liste à cocher. L\'oubli qui fait rejeter un dossier n\'arrive plus.',
    ],
  },
];

const differentiateurs = [
  {
    icon: FileText,
    titre: 'Il écrit sur le VRAI document',
    desc: "Pas de re-création approximative : l'architecte reçoit SA soumission, chiffrée, sans que sa mise en page soit dénaturée.",
  },
  {
    icon: CheckCircle2,
    titre: "L'humain garde la main",
    desc: "Vérification, contrôle, validation à chaque étape. L'IA propose, vous décidez.",
  },
  {
    icon: Lock,
    titre: 'Plus vous l\'utilisez, moins il demande',
    desc: 'Chaque format calibré est acquis pour toujours. Un réglage de 30 secondes par famille de format, une seule fois.',
  },
  {
    icon: ShieldCheck,
    titre: 'Le filet de sécurité D4E',
    desc: 'Format exotique ? Pris en charge par notre équipe sous 48 h, sans blocage de votre travail.',
  },
  {
    icon: ScanLine,
    titre: 'Suisse, BTP, CAN/CFC natif',
    desc: "Conçu sur des soumissions réelles genevoises et vaudoises, pas adapté d'un outil généraliste.",
  },
];

const equipe = [
  {
    nom: 'Antonio Spedicato',
    role: 'Consultant Odoo · Fondateur D4E',
    photo: '/team-antonio.jpg',
    tel: '0764344595', telDisplay: '0764 344 595',
    email: 'antonio@d4e.cool',
    accent: C.vivid,
  },
  {
    nom: 'Laëtitia André',
    role: 'Ambassadrice Odoo · Cheffe de projet',
    photo: '/team-laetitia.jpg',
    tel: '0764822139', telDisplay: '0764 822 139',
    email: 'laetita@d4e.cool',
    accent: C.gold,
  },
];

/* -- Lignes de soumission stylisées (signature visuelle du hero) -- */
const mockLignes = [
  { code: '141.802', label: 'Enduit de ragréage, sols', qte: '150 up', montant: "6'750.00" },
  { code: '181.114', label: 'Carreleur, régie', qte: 'par h', montant: '180.00' },
  { code: '300.320', label: 'Céramique groupe B', qte: '234 m2', montant: "18'720.00" },
  { code: '771.223', label: 'Enlèvement et évacuation', qte: '234 m2', montant: "1'530.00" },
];

/* -- COMPOSANT -- */

export function ElvyScanPage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* -- 1. HERO -- */}
      <section
        className="relative overflow-x-hidden flex items-center"
        style={{ background: `linear-gradient(150deg, ${C.soft} 0%, ${C.mid} 45%, ${C.deep} 100%)`, minHeight: '78vh' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-10"
            style={{ background: `radial-gradient(circle, ${C.vivid}, transparent)` }} />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">

          {/* Colonne gauche */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.30)' }}>
              <ScanLine size={16} style={{ color: C.vivid }} />
              <span className="text-sm font-semibold" style={{ color: '#FFFFFF' }}>ElvyScan · Soumissions BTP CAN/CFC</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              <span style={{ color: '#FFFFFF' }}>De la soumission reçue au dossier chiffré renvoyé.</span>{' '}
              <span style={{ color: C.vivid }}>Sans ressaisie, sans stylo.</span>
            </h1>

            <p className="text-lg mb-8 max-w-xl" style={{ color: 'rgba(255,255,255,0.82)' }}>
              ElvyScan lit les soumissions BTP (CAN/CFC), vous les chiffrez à l'écran, et il réécrit vos prix
              au bon endroit sur le PDF original de l'architecte. Prêt à renvoyer, avec ses annexes, en quelques minutes.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-4 font-bold text-base transition-colors"
                style={{ backgroundColor: C.vivid, color: C.deep }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00b494')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.vivid)}
              >
                Demander une démonstration <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo('offres')}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-4 font-bold text-base transition-colors"
                style={{ backgroundColor: C.gold, color: '#FFFFFF' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.goldHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.gold)}
              >
                Voir les deux offres
              </button>
            </div>

            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Avec ou sans ElvyBat · Export Excel inclus · Formats suisses CAN/CFC reconnus
            </p>
          </div>

          {/* Colonne droite : soumission stylisée, les prix posés sur les pointillés */}
          <div className="hidden lg:block">
            <div className="rounded-2xl p-6 shadow-2xl" style={{ background: '#FFFFFF' }}>
              <div className="flex items-center justify-between mb-5 pb-4" style={{ borderBottom: `1px solid ${C.border}` }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.body }}>Soumission · CFC 771</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold rounded-full px-3 py-1"
                  style={{ background: C.light, color: C.accent }}>
                  <CheckCircle2 size={13} /> Format reconnu
                </span>
              </div>
              <div className="space-y-4">
                {mockLignes.map((l) => (
                  <div key={l.code} className="flex items-baseline gap-3 text-sm">
                    <span className="font-mono text-xs shrink-0" style={{ color: C.body }}>{l.code}</span>
                    <span className="shrink-0" style={{ color: C.ink }}>{l.label}</span>
                    <span className="flex-1 border-b border-dotted" style={{ borderColor: '#9ca3af', minWidth: 30 }} />
                    <span className="text-xs shrink-0" style={{ color: C.body }}>{l.qte}</span>
                    <span className="font-bold shrink-0" style={{ color: C.accent }}>{l.montant}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 flex items-baseline gap-3" style={{ borderTop: `2px solid ${C.ink}` }}>
                <span className="font-bold text-sm" style={{ color: C.ink }}>Total chapitre</span>
                <span className="flex-1 border-b border-dotted" style={{ borderColor: '#9ca3af' }} />
                <span className="font-black" style={{ color: C.vivid }}>27'180.00</span>
              </div>
              <p className="mt-4 text-xs text-center" style={{ color: C.body }}>
                Vos prix, écrits au point près sur le PDF original.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- 2. LE PROBLEME -- */}
      <section className="py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.accent }}>Le quotidien avant ElvyScan</div>
            <h2 className="text-4xl font-black mb-4" style={{ color: C.ink }}>
              Répondre à une soumission ne devrait pas prendre des jours.
            </h2>
            <p className="text-lg" style={{ color: C.body }}>
              Maçon, peintre, carreleur, installateur sanitaire : chaque soumission reçue,
              ce sont des dizaines de pages à traiter avant même de pouvoir chiffrer.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {problemes.map((p) => (
              <div key={p.titre} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: C.light }}>
                  <p.icon size={24} style={{ color: C.accent }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: C.ink }}>{p.titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.body }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 3. COMMENT CA MARCHE -- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.accent }}>Fonctionnement</div>
            <h2 className="text-4xl font-black mb-4" style={{ color: C.ink }}>
              Vous ne saisissez que vos prix. Tout le reste est lu pour vous.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {etapes.map((e) => (
              <div key={e.num} className="rounded-2xl p-8" style={{ background: C.light }}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-4xl font-black" style={{ color: C.accent }}>{e.num}</span>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white">
                    <e.icon size={22} style={{ color: C.accent }} />
                  </div>
                  <h3 className="text-xl font-bold leading-snug" style={{ color: C.ink }}>{e.titre}</h3>
                </div>
                <ul className="space-y-3">
                  {e.points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: C.body }}>
                      <CheckCircle2 size={17} className="shrink-0 mt-0.5" style={{ color: C.vivid }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 4. LES DEUX OFFRES (id='offres') -- */}
      <section id="offres" className="py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.accent }}>À votre rythme</div>
            <h2 className="text-4xl font-black mb-4" style={{ color: C.ink }}>Avec ou sans ElvyBat.</h2>
            <p className="text-lg" style={{ color: C.body }}>
              ElvyScan s'utilise seul, avec vos outils actuels, ou comme porte d'entrée de la gestion complète de vos chantiers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Autonome */}
            <div className="bg-white rounded-2xl p-8" style={{ border: `1px solid ${C.border}` }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.body }}>Autonome</div>
              <h3 className="text-2xl font-black mb-2" style={{ color: C.ink }}>ElvyScan seul</h3>
              <p className="text-sm mb-6" style={{ color: C.body }}>
                Pour l'entreprise qui veut chiffrer vite, sans changer son système.
              </p>
              <ul className="space-y-3">
                {[
                  'Aucune dépendance à un ERP : remplace le papier, le stylo et la ressaisie.',
                  'Scan, chiffrage à l\'écran, PDF chiffré et dossier de retour complet.',
                  'Export Excel pour votre suivi interne.',
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: C.body }}>
                    <CheckCircle2 size={17} className="shrink-0 mt-0.5" style={{ color: C.accent }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intégré ElvyBat */}
            <div className="rounded-2xl p-8 bg-white" style={{ border: `2px solid ${C.gold}` }}>
              <div className="flex items-center gap-2 mb-2">
                <Link2 size={15} style={{ color: C.gold }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.gold }}>Intégré</span>
              </div>
              <h3 className="text-2xl font-black mb-2" style={{ color: C.ink }}>ElvyScan avec ElvyBat</h3>
              <p className="text-sm mb-6" style={{ color: C.body }}>
                Pour l'entreprise qui pilote déjà son activité dans ElvyBat : la soumission entre dans votre système.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Transfert en devis en un clic : la soumission devient un devis ElvyBat complet (sections, articles, quantités, notes).',
                  'Le chiffrage vit dans le devis : prix, marges et calculs ElvyBat, écrits sur le PDF original.',
                  'La cascade de rabais ElvyBat reprise dans la soumission au centime près.',
                  'Navigation croisée entre le devis et la soumission, traçabilité complète.',
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: C.body }}>
                    <CheckCircle2 size={17} className="shrink-0 mt-0.5" style={{ color: C.gold }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/elvybat" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: C.accent }}>
                Découvrir ElvyBat <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -- 5. DIFFERENCIATEURS -- */}
      <section className="py-24" style={{ backgroundColor: C.deep }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.vivid }}>Pourquoi ElvyScan</div>
            <h2 className="text-4xl font-black mb-4" style={{ color: '#FFFFFF' }}>
              Ce qui fait la différence sur le terrain.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiateurs.map((d) => (
              <div key={d.titre} className="rounded-2xl p-7"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <d.icon size={26} className="mb-4" style={{ color: C.vivid }} />
                <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF' }}>{d.titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{d.desc}</p>
              </div>
            ))}
            {/* Bloc honnêteté */}
            <div className="rounded-2xl p-7" style={{ background: 'rgba(245,158,11,0.10)', border: `1px solid rgba(245,158,11,0.40)` }}>
              <ShieldCheck size={26} className="mb-4" style={{ color: C.gold }} />
              <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF' }}>Ce qu'on ne promet pas</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Les documents faits maison des architectes (Word libre) ne sont pas lus automatiquement :
                c'est précisément le cas du service de prise en charge D4E. Et ElvyScan ne remplit pas
                les formulaires annexes à votre place, il les assemble dans le dossier. Le remplissage
                assisté est sur la feuille de route.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- 6. EQUIPE -- */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.accent }}>Vos interlocuteurs</div>
            <h2 className="text-4xl font-black" style={{ color: C.ink }}>Une équipe, pas un ticket.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {equipe.map((m) => (
              <div key={m.nom} className="rounded-2xl p-8 flex flex-col items-center text-center"
                style={{ background: C.light, borderTop: `4px solid ${m.accent}` }}>
                <img src={m.photo} alt={m.nom} className="w-28 h-28 rounded-full object-cover mb-5" />
                <h3 className="text-xl font-bold mb-1" style={{ color: C.ink }}>{m.nom}</h3>
                <p className="text-sm mb-6" style={{ color: C.body }}>{m.role}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href={`tel:${m.tel}`}
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold bg-white"
                    style={{ color: C.ink, border: `1px solid ${C.border}` }}>
                    <Phone size={15} style={{ color: m.accent }} /> {m.telDisplay}
                  </a>
                  <a href={`mailto:${m.email}`}
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold bg-white"
                    style={{ color: C.ink, border: `1px solid ${C.border}` }}>
                    <Mail size={15} style={{ color: m.accent }} /> {m.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 7. CONTACT (id='contact') -- */}
      <section id="contact" className="py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black mb-4" style={{ color: C.ink }}>
              Essayez avec l'une de vos soumissions.
            </h2>
            <p className="text-lg" style={{ color: C.body }}>
              Envoyez-nous votre demande : on vous montre le résultat sur votre propre dossier.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xdawrgoz"
            method="POST"
            className="rounded-3xl p-8 space-y-4"
            style={{ background: `linear-gradient(140deg, ${C.mid}, ${C.deep})` }}
          >
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="prenom" placeholder="Prénom *" required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 w-full focus:outline-none transition-colors"
                onFocus={(e) => (e.currentTarget.style.borderColor = C.vivid)}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')} />
              <input type="text" name="nom" placeholder="Nom *" required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 w-full focus:outline-none transition-colors"
                onFocus={(e) => (e.currentTarget.style.borderColor = C.vivid)}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')} />
            </div>
            <input type="email" name="email" placeholder="Email *" required
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 w-full focus:outline-none transition-colors"
              onFocus={(e) => (e.currentTarget.style.borderColor = C.vivid)}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')} />
            <input type="text" name="entreprise" placeholder="Entreprise"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 w-full focus:outline-none transition-colors"
              onFocus={(e) => (e.currentTarget.style.borderColor = C.vivid)}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')} />
            <input type="tel" name="telephone" placeholder="Téléphone"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 w-full focus:outline-none transition-colors"
              onFocus={(e) => (e.currentTarget.style.borderColor = C.vivid)}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')} />
            <select name="pays" required
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-gray-300 w-full focus:outline-none transition-colors">
              <option value="">Pays *</option>
              <option>Suisse</option>
              <option>France</option>
              <option>Espagne</option>
              <option>Italie</option>
              <option>Autre</option>
            </select>
            <select name="elvybat"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-gray-300 w-full focus:outline-none transition-colors">
              <option value="">Vous utilisez déjà ElvyBat ?</option>
              <option>Oui, ElvyBat est en place chez nous</option>
              <option>Non, ElvyScan seul m'intéresse</option>
              <option>Non, mais les deux m'intéressent</option>
            </select>
            <textarea name="message" placeholder="Votre message (facultatif)" rows={4}
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 w-full focus:outline-none transition-colors resize-none"
              onFocus={(e) => (e.currentTarget.style.borderColor = C.vivid)}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')} />
            <input type="hidden" name="_subject" value="Nouveau lead ElvyScan" />
            <button type="submit"
              className="w-full rounded-xl px-6 py-4 font-bold text-base transition-colors inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: C.vivid, color: C.deep }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00b494')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.vivid)}>
              Envoyer ma demande <ArrowRight size={18} />
            </button>
            <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Réponse sous 24 h ouvrées. Vos données ne sont jamais transmises à des tiers.
            </p>
          </form>
        </div>
      </section>

    </div>
  );
}

export default ElvyScanPage;

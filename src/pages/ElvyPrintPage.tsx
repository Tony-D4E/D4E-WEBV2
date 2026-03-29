import {
 Printer, CheckCircle, ArrowRight,
 FileText, TrendingUp, Phone, Mail,
 BarChart3, Wrench, ChevronRight,
 Clock, Settings, Link2,
 Truck, LayoutDashboard, Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/* ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ DONNEES ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ */

const stats = [
 { valeur: "20'000+", label: 'Machines suivies', icon: Printer },
 { valeur: "9'000+", label: 'Contrats actifs', icon: FileText },
 { valeur: '-60%', label: 'Temps de facturation', icon: Clock },
 { valeur: 'Temps reel', label: 'Suivi des compteurs', icon: BarChart3 },
];

const pays = [
 { flag: '\uD83C\uDDE8\uD83C\uDDED', nom: 'Suisse', detail: 'CHF - TVA CH' },
 { flag: '\uD83C\uDDEB\uD83C\uDDF7', nom: 'France', detail: 'EUR - TVA FR' },
 { flag: '\uD83C\uDDEA\uD83C\uDDF8', nom: 'Espagne', detail: 'EUR - TVA ES' },
];

const fonctionnalites = [
 {
 icon: FileText,
 titre: 'Contrats sur mesure',
 desc: 'Location, maintenance, MPS : definissez vos regles de facturation par contrat. Engagement avec regularisation, prix degressif, forfait global.',
 couleur: '#F59E0B',
 },
 {
 icon: BarChart3,
 titre: 'Facturation automatique des compteurs',
 desc: 'Les releves de compteurs remontent automatiquement dans Odoo. Les factures se generent selon les conditions du contrat, sans saisie manuelle.',
 couleur: '#00D4C8',
 },
 {
 icon: Wrench,
 titre: 'Suivi des interventions SAV',
 desc: 'Planifiez les depannages, documentez chaque intervention avec rapport detaille et pieces utilisees, collectez la signature client sur place.',
 couleur: '#F59E0B',
 },
 {
 icon: Truck,
 titre: 'Planification des techniciens',
 desc: 'Organisez les tournees, suivez la disponibilite des equipes et des pieces detachees en temps reel. Alertes en cas de surcharge.',
 couleur: '#00D4C8',
 },
 {
 icon: TrendingUp,
 titre: 'Rentabilite par contrat',
 desc: 'Analysez les marges par client, par machine, par technicien. Identifiez les contrats sous-performants et ajustez vos conditions.',
 couleur: '#F59E0B',
 },
];

const integrations = [
 {
 nom: 'KPAX Manage',
 desc: 'Collecte automatique des compteurs via boitier Liberty ou agent logiciel. Niveaux d\'encre, alertes consommables, commandes automatiques.',
 type: 'Collecte & supervision',
 },
 {
 nom: 'MPS Monitor',
 desc: 'Supervision de flotte a distance. Releves de compteurs, alertes proactives, rapports de performance pour vos clients.',
 type: 'Gestion de flotte',
 },
 {
 nom: 'Katun KDFM',
 desc: 'Solutions d\'impression geree. Integration des donnees de consommation et de maintenance dans votre cycle de facturation.',
 type: 'Print management',
 },
];

const pourQui = [
 {
 icon: Printer,
 titre: 'Revendeurs et distributeurs',
 desc: 'Vous vendez, louez et maintenez des systemes d\'impression. ElvyPrint centralise vos contrats, votre SAV et votre facturation dans un seul outil.',
 exemples: ['Copieurs multifonctions', 'Imprimantes grand format', 'Solutions d\'impression', 'Consommables & pieces'],
 couleur: '#F59E0B',
 },
 {
 icon: Settings,
 titre: 'Prestataires MPS',
 desc: 'Vous gerez des flottes d\'impression pour vos clients. ElvyPrint automatise le suivi des compteurs, la facturation au volume et le reporting.',
 exemples: ['Managed Print Services', 'Infogerance impression', 'Audit de parc', 'Optimisation des couts'],
 couleur: '#00D4C8',
 },
];

const equipe = [
 {
 nom: 'Antonio Spedicato',
 role: 'Consultant Odoo & Fondateur',
 desc: '15 ans d\'experience - Expert ERP metier',
 tel: '+41764344595', telDisplay: '+41 (0)76 434 45 95',
 whatsapp: '41764344595',
 email: 'antonio@d4e.cool',
 photo: '/team-antonio.jpg',
 couleur: '#F59E0B',
 },
 {
 nom: 'Laetitia Andre',
 role: 'Chef de projet Elvy',
 desc: 'Specialiste deploiement - Suisse & France',
 tel: '+41764822139', telDisplay: '+41 (0)76 482 21 39',
 whatsapp: '41764822139',
 email: 'laetita@d4e.cool',
 photo: '/team-laetitia.jpg',
 couleur: '#00D4C8',
 },
];

/* ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ COMPOSANT ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ */

export default function ElvyPrintPage() {
 const scrollTo = (id: string) => {
 document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
 };
 const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
 const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
 const { ref: featRef, isVisible: featVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
 const { ref: intRef, isVisible: intVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
 const { ref: pourQuiRef, isVisible: pourQuiVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
 const { ref: equipeRef, isVisible: equipeVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

 return (
 <div className="min-h-screen bg-white pt-20">

 {/* ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ 1. HERO ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ */}
 <section className="relative overflow-hidden bg-[#0B0F19] min-h-screen flex items-center">
 <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#1a1400] to-[#0B0F19]" />
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute w-[800px] h-[800px] rounded-full -top-60 -right-60 opacity-8"
 style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />
 </div>

 <div ref={heroRef}
 className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-on-scroll ${heroVisible ? 'is-visible' : ''}`}>
 <div className="grid lg:grid-cols-2 gap-16 items-center">

 <div>
 <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F59E0B]/20 border border-[#F59E0B]/40 rounded-full mb-8">
 <Printer className="h-4 w-4 text-[#F59E0B]" />
 <span className="text-sm font-semibold text-[#F59E0B]">Suite Elvy - Systemes d'impression</span>
 </div>

 <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] mb-8">
 <span style={{ color: '#FFFFFF' }}>Vos contrats tournent.</span><br />
 <span style={{ color: '#F59E0B' }}>Vos marges suivent.</span>
 </h1>

 <p style={{ color: '#FFFFFF', textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
 className="text-xl mb-10 leading-relaxed max-w-xl">
 ElvyPrint est la solution Odoo pour les revendeurs de systemes
 d'impression : contrats, compteurs, interventions et rentabilite
 dans un seul outil. Deploiement cle en main.
 </p>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
 {[
 'Facturation des compteurs automatisee, plus de saisie manuelle',
 'Contrats personnalisables : location, maintenance, forfait page',
 'Suivi SAV complet avec signature client sur mobile',
 'Integrations KPAX et MPS Monitor pour la collecte de donnees',
 ].map((item) => (
 <div key={item} className="flex items-start gap-2 text-sm" style={{ color: '#FFFFFF' }}>
 <CheckCircle className="h-5 w-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
 <span>{item}</span>
 </div>
 ))}
 </div>

 <div className="flex flex-col sm:flex-row gap-4 mb-10">
 <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 rounded-xl text-base" onClick={() => scrollTo('contact')}>
 Demander une demonstration
 <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 <Button size="lg" className="bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold px-8 rounded-xl text-base" onClick={() => scrollTo('fonctionnalites')}>
 Voir les fonctionnalites
 </Button>
 </div>

 <div>
 <p className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-3">
 Localisation Odoo incluse - Multi-pays
 </p>
 <div className="flex flex-row flex-wrap gap-3">
 {pays.map((p, i) => (
 <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#F59E0B]/20 border border-[#F59E0B]/50 rounded-lg">
 <span className="text-lg">{p.flag}</span>
 <div>
 <p className="text-white font-bold text-sm leading-none">{p.nom}</p>
 <p className="text-[#F59E0B] text-xs mt-0.5">{p.detail}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>

 <div className="hidden lg:flex flex-col gap-4">
 {[
 { titre: 'Vos compteurs remontent, vos factures se generent', desc: 'Integration directe avec KPAX et MPS Monitor. Plus de releves manuels.' },
 { titre: 'Chaque intervention documentee et facturee', desc: 'Rapport terrain, pieces utilisees, signature client. La facture suit automatiquement.' },
 { titre: 'Rentabilite visible contrat par contrat', desc: 'Marges, surconsommation d\'encre, contrats sous-performants : tout est mesure.' },
 ].map((item, i) => (
 <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
 <div className="w-1 rounded-full bg-[#F59E0B] flex-shrink-0 mt-1" style={{ minHeight: '40px' }} />
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

 {/* ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ 2. STATS ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ */}
 <section className="py-16 bg-[#FFFBEB] border-b border-[#FDE68A]">
 <div ref={statsRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${statsVisible ? 'is-visible' : ''}`}>
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
 {stats.map((s, i) => (
 <div key={i} className="text-center bg-white rounded-2xl py-8 px-4 border border-[#FDE68A] shadow-sm">
 <s.icon className="h-8 w-8 text-[#F59E0B] mx-auto mb-3" />
 <p className="text-3xl font-black text-[#0F1D3A] mb-1">{s.valeur}</p>
 <p className="text-sm text-gray-500 font-medium">{s.label}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ 3. FONCTIONNALITES ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ */}
 <section id="fonctionnalites" className="py-24 bg-white">
 <div ref={featRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${featVisible ? 'is-visible' : ''}`}>
 <div className="text-center max-w-3xl mx-auto mb-16">
 <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full mb-4">
 <LayoutDashboard className="h-5 w-5 text-[#F59E0B]" />
 <span className="text-base font-bold text-[#F59E0B]">Fonctionnalites ElvyPrint</span>
 </div>
 <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">Du contrat a la facture, tout est connecte</h2>
 <p className="text-lg text-gray-500">
 ElvyPrint couvre l'ensemble du cycle de vie de vos contrats d'impression :
 de la signature au renouvellement, en passant par chaque releve et chaque intervention.
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
 <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-10 rounded-xl text-base" onClick={() => scrollTo('contact')}>
 Voir ElvyPrint en action
 <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </div>
 </div>
 </section>

 {/* ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ 4. INTEGRATIONS ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ */}
 {/* -- 5. POUR QUI -- */}
 <section className="py-24 bg-white">
 <div ref={pourQuiRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${pourQuiVisible ? 'is-visible' : ''}`}>
 <div className="text-center max-w-3xl mx-auto mb-16">
 <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">Concu pour les professionnels de l'impression</h2>
 <p className="text-lg text-gray-500">
 Que vous soyez revendeur, distributeur ou prestataire MPS,
 ElvyPrint s'adapte a votre modele economique.
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

 <section className="py-24 bg-[#0F1D3A] relative overflow-hidden">
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute w-[600px] h-[600px] rounded-full -bottom-40 -left-40 opacity-10"
 style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />
 </div>
 <div ref={intRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${intVisible ? 'is-visible' : ''}`}>
 <div className="text-center max-w-3xl mx-auto mb-16">
 <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F59E0B]/20 border border-[#F59E0B]/40 rounded-full mb-4">
 <Link2 className="h-4 w-4 text-[#F59E0B]" />
 <span className="text-sm font-semibold text-[#F59E0B]">Connecte a vos outils</span>
 </div>
 <h2 className="text-4xl font-black text-white mb-4">
 Vos compteurs remontent, Odoo facture
 </h2>
 <p className="text-gray-300 text-lg">
 ElvyPrint s'interface avec les principales solutions de collecte de compteurs
 et de supervision de flotte du marche.
 </p>
 </div>

 <div className="grid md:grid-cols-3 gap-6 mb-12">
 {integrations.map((integ, i) => (
 <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
 <div className="flex items-center gap-3 mb-4">
 <Cpu className="h-6 w-6 text-[#F59E0B]" />
 <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#F59E0B]/20 text-[#F59E0B]">
 {integ.type}
 </span>
 </div>
 <h3 className="text-xl font-bold text-white mb-3">{integ.nom}</h3>
 <p className="text-gray-400 leading-relaxed">{integ.desc}</p>
 </div>
 ))}
 </div>

 <div className="bg-white/5 border border-[#F59E0B]/30 rounded-3xl p-8 text-center">
 <p className="text-[#F59E0B] font-semibold mb-2">Votre outil n'est pas dans la liste ?</p>
 <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
 ElvyPrint repose sur Odoo : tout systeme disposant d'une API ou d'un export
 structure peut etre connecte. Parlons-en.
 </p>
 <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 rounded-xl" onClick={() => scrollTo('contact')}>
 Discuter de mon integration
 <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </div>
 </div>
 </section>

 {/* ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ 5. POUR QUI ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ */}
 {/* -- 6. EQUIPE -- */}
 <section className="py-24 bg-[#f8fafc]">
 <div ref={equipeRef} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${equipeVisible ? 'is-visible' : ''}`}>
 <div className="text-center mb-16">
 <h2 className="text-4xl font-black text-[#0F1D3A] mb-3">Des experts a votre service</h2>
 <p className="text-gray-500 text-lg">Une equipe a taille humaine, basee a Geneve, Sion et Barcelone</p>
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
 <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.319 0-4.46-.768-6.184-2.064l-.432-.324-2.663.893.893-2.663-.324-.432A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
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

 {/* ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ 6. EQUIPE ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ */}
 

 {/* ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ 7. CONTACT ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ */}
 <section id="contact" className="py-24 bg-white">
 <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-10">
 <h2 className="text-4xl font-black text-[#0F1D3A] mb-4">Discutons de votre projet</h2>
 <p className="text-gray-500 text-lg">
 Decrivez votre activite : on vous rappelle sous 24h avec une proposition adaptee.
 </p>
 </div>

 <form
 action="https://formspree.io/f/xdawrgoz"
 method="POST"
 className="bg-[#0F1D3A] rounded-3xl p-8 space-y-4"
 >
 <div className="grid grid-cols-2 gap-4">
 <input type="text" name="prenom" placeholder="Prenom *" required
 className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#F59E0B] transition-colors" />
 <input type="text" name="nom" placeholder="Nom *" required
 className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#F59E0B] transition-colors" />
 </div>
 <input type="email" name="email" placeholder="Email *" required
 className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#F59E0B] transition-colors" />
 <input type="text" name="entreprise" placeholder="Entreprise"
 className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#F59E0B] transition-colors" />
 <input type="tel" name="telephone" placeholder="Telephone"
 className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#F59E0B] transition-colors" />
 <select name="pays" required className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-gray-400 w-full focus:outline-none focus:border-[#F59E0B] transition-colors">
 <option value="">Pays *</option>
 <option>Suisse</option>
 <option>France</option>
 <option>Espagne</option>
 <option>Autre</option>
 </select>
 <select name="besoin" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-gray-400 w-full focus:outline-none focus:border-[#F59E0B] transition-colors">
 <option value="">Votre besoin principal</option>
 <option>Gestion des contrats d'impression</option>
 <option>Facturation automatique des compteurs</option>
 <option>Suivi des interventions SAV</option>
 <option>Integration KPAX / MPS Monitor</option>
 <option>Je veux en savoir plus</option>
 </select>
 <textarea name="message" placeholder="Decrivez votre activite et vos besoins *" rows={4} required
 className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 w-full focus:outline-none focus:border-[#F59E0B] transition-colors resize-none" />
 <input type="hidden" name="_subject" value="Nouveau lead ElvyPrint" />
 <button type="submit" className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base">
 Envoyer ma demande
 <ChevronRight className="h-5 w-5" />
 </button>
 <p className="text-center text-xs text-gray-600">
 Vos donnees ne seront jamais partagees avec des tiers.
 </p>
 </form>
 </div>
 </section>

 </div>
 );
}
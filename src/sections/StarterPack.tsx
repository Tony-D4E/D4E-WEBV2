import { Button } from '@/components/ui/button';
import { ArrowRight, Check, X, Sparkles, Zap, Building2, User, Rocket, HelpCircle, Clock, Shield, TrendingUp, AlertCircle, ExternalLink } from 'lucide-react';

const profiles = [
  {
    icon: User,
    title: 'Indépendants',
    description: 'Freelances, artisans, consultants qui veulent professionnaliser leur gestion.',
    pain: 'Fatigué d\'Excel et des factures Word',
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Jeunes entreprises qui veulent un système pro dès le départ.',
    pain: 'Besoin d\'un outil qui grandit avec moi',
  },
  {
    icon: Building2,
    title: 'PME / TPE',
    description: 'Petites équipes qui veulent se structurer sans se ruiner.',
    pain: 'Trop cher les devis à 10\'000 CHF',
  },
];

const included = [
  { icon: Zap, text: 'Configuration complète de votre société', highlight: true },
  { icon: Building2, text: 'CRM : gestion des prospects et clients' },
  { icon: TrendingUp, text: 'Ventes : devis, commandes, facturation' },
  { icon: Shield, text: 'Comptabilité suisse (plan comptable PME)' },
  { icon: Sparkles, text: 'Site web vitrine (5 pages)' },
  { icon: Clock, text: 'Formation 2h (utilisation de base)' },
  { icon: Shield, text: 'Support email 30 jours post-livraison' },
  { icon: TrendingUp, text: 'Documentation utilisateur' },
];

const notIncluded = [
  'Licences Odoo Enterprise (à prendre directement chez Odoo)',
  'Hébergement Odoo.sh (via Odoo ou votre hébergeur)',
  'Pointage / Gestion du temps',
  'Modules RH (Paie, Congés)',
  'Inventaire / Stock avancé',
  'Migration de données historiques',
  'Personnalisation avancée (workflows, rapports custom)',
  'Intégrations tierces (API, connexions bancaires)',
];

const faq = [
  {
    q: 'Que dois-je payer en plus du Starter Pack ?',
    a: 'Les licences Odoo Enterprise (~30 CHF/utilisateur/mois) et l\'hébergement Odoo.sh (~50-150 CHF/mois selon la taille) sont à prendre directement chez Odoo. Nous vous accompagnons dans la souscription.',
  },
  {
    q: 'Puis-je ajouter des modules plus tard ?',
    a: 'Absolument ! Le Starter Pack est une base solide. Vous pouvez ajouter Inventaire, Pointage, RH, etc. quand vous le souhaitez. On vous fait un devis à ce moment-là.',
  },
  {
    q: 'Combien de temps ça prend ?',
    a: '10 à 15 jours ouvrés après notre kickoff de 1h. Vous devez juste nous fournir votre logo, vos couleurs et quelques textes pour le site.',
  },
  {
    q: 'Et si j\'ai besoin de plus ?',
    a: 'On propose un Pack Starter+ à 4\'500 CHF qui ajoute Inventaire, Achats et 4h de formation. Ou on fait sur mesure selon vos besoins spécifiques.',
  },
  {
    q: 'Les licences sont-elles incluses ?',
    a: 'Non, les licences Odoo Enterprise sont souscrites directement auprès d\'Odoo. Cela vous garantit un contrat direct avec l\'éditeur pour les mises à jour et le support technique.',
  },
];

export function StarterPack() {
  return (
    <section id="starter-pack" className="py-24 lg:py-32 bg-[#0B0F19] relative overflow-hidden">
      {/* Background effects */}
      <div className="blob-glow w-[800px] h-[800px] bg-[#00D4C8]/20 -top-40 -right-40" />
      <div className="blob-glow w-[600px] h-[600px] bg-[#F59E0B]/10 bottom-0 left-0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/10 rounded-full border border-[#00D4C8]/30 mb-6">
            <Sparkles className="h-5 w-5 text-[#00D4C8]" />
            <span className="text-sm font-bold text-[#00D4C8]">Offre de lancement</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Starter <span className="text-gradient">Pack</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
            Démarrez avec Odoo sans vous ruiner. Tout ce qu'il faut pour professionnaliser 
            votre gestion en 2 semaines.
          </p>
          
          {/* Important notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F59E0B]/10 rounded-lg border border-[#F59E0B]/30 mb-8">
            <AlertCircle className="h-4 w-4 text-[#FBBF24]" />
            <span className="text-sm text-[#FBBF24]">Licences Odoo et hébergement non inclus - voir détails ci-dessous</span>
          </div>
          
          {/* Price */}
          <div className="inline-flex flex-col items-center p-8 bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-3xl border border-[#00D4C8]/30 glow-cyan mb-8">
            <span className="text-gray-400 text-sm uppercase tracking-widest mb-2">Prestation de services</span>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl sm:text-7xl font-black text-white">2'500</span>
              <span className="text-2xl text-gray-400">CHF</span>
            </div>
            <span className="text-gray-500 text-sm mt-2">HT • Hors licences et hébergement</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00B4A6] via-[#00D4C8] to-[#06B6D4] hover:opacity-90 text-white font-bold px-10 rounded-xl glow-cyan text-lg"
            >
              <a href="#projet">
                Choisir le Starter Pack
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 rounded-xl"
            >
              <a href="tel:+41582551115">Appeler maintenant</a>
            </Button>
          </div>
          
          <p className="mt-6 text-gray-500 text-sm">
            <Clock className="inline h-4 w-4 mr-1" />
            Délai : 10-15 jours ouvrés • Idéal pour 1-5 utilisateurs
          </p>
        </div>

        {/* Pour qui ? */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Pour <span className="text-gradient">qui</span> ?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {profiles.map((p, i) => (
              <div key={i} className="p-6 bg-[#111827] rounded-2xl border border-white/10 hover:border-[#00D4C8]/30 transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center mb-4 glow-cyan-sm">
                  <p.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{p.description}</p>
                <div className="p-3 bg-[#00D4C8]/5 rounded-lg border border-[#00D4C8]/20">
                  <p className="text-[#00D4C8] text-sm italic">"{p.pain}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ce qui est inclus */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Check className="h-8 w-8 text-[#00D4C8]" />
              Ce qui est <span className="text-gradient">inclus</span>
            </h3>
            
            <div className="space-y-4">
              {included.map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-4 p-4 rounded-xl ${
                    item.highlight 
                      ? 'bg-gradient-to-r from-[#00B4A6]/20 to-[#06B6D4]/10 border border-[#00D4C8]/30' 
                      : 'bg-[#111827] border border-white/5'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    item.highlight ? 'bg-[#00D4C8]' : 'bg-white/5'
                  }`}>
                    <item.icon className={`h-5 w-5 ${item.highlight ? 'text-white' : 'text-[#00D4C8]'}`} />
                  </div>
                  <span className="text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <X className="h-8 w-8 text-gray-500" />
              Ce qui n'est <span className="text-gray-500">pas inclus</span>
            </h3>
            
            <div className="p-6 bg-[#111827] rounded-2xl border border-white/10">
              <p className="text-gray-400 mb-4 text-sm">
                Pour garder le prix attractif, ces éléments sont en supplément :
              </p>
              <ul className="space-y-3">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-500">
                    <X className="h-4 w-4 text-gray-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Licences info */}
              <div className="mt-6 p-4 bg-[#F59E0B]/5 rounded-xl border border-[#F59E0B]/20">
                <p className="text-[#FBBF24] font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  À prévoir en plus
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Licences Odoo Enterprise :</strong> ~30 CHF/utilisateur/mois<br/>
                  <strong>Hébergement Odoo.sh :</strong> ~50-150 CHF/mois<br/>
                  <span className="text-gray-500">Nous vous accompagnons dans la souscription.</span>
                </p>
              </div>
            </div>

            {/* Comparaison */}
            <div className="mt-6 p-6 bg-gradient-to-br from-[#F59E0B]/10 to-transparent rounded-2xl border border-[#F59E0B]/20">
              <p className="text-[#FBBF24] font-bold mb-2">💡 Le saviez-vous ?</p>
              <p className="text-gray-400 text-sm">
                Chez d'autres intégrateurs Odoo en Suisse, une prestation similaire coûte 
                entre <span className="text-white font-semibold">6'000 et 10'000 CHF</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Témoignage */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-3xl border border-white/10 relative">
            <div className="absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] rounded-full text-white text-sm font-bold">
              Témoignage client
            </div>
            <p className="text-xl text-gray-300 italic mb-6 leading-relaxed">
              "On hésitait depuis 6 mois à passer sur Odoo à cause du prix. Le Starter Pack 
              a été la solution parfaite. En 2 semaines, on avait un système pro. 
              On gagne maintenant 10h par semaine sur la facturation."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center">
                <span className="text-white font-bold">PM</span>
              </div>
              <div>
                <p className="text-white font-semibold">Pierre Martin</p>
                <p className="text-gray-500 text-sm">Gérant, CSD Rénovation • Starter Pack client</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Questions <span className="text-gradient">fréquentes</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faq.map((item, i) => (
              <div key={i} className="p-6 bg-[#111827] rounded-xl border border-white/10">
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="h-5 w-5 text-[#00D4C8] flex-shrink-0 mt-0.5" />
                  <h4 className="text-white font-semibold">{item.q}</h4>
                </div>
                <p className="text-gray-400 text-sm pl-8">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center p-12 bg-gradient-to-r from-[#00B4A6]/20 via-[#00D4C8]/20 to-[#06B6D4]/20 rounded-3xl border border-[#00D4C8]/30">
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Prêt à démarrer ?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Rejoignez les 50+ entreprises suisses qui nous font confiance. 
            Votre Starter Pack en 10-15 jours.
          </p>
          
          {/* Important reminder */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 mb-8">
            <AlertCircle className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400 text-sm">Licences et hébergement à prévoir en plus (~80-200 CHF/mois)</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 text-white font-bold px-10 rounded-xl glow-cyan text-lg"
            >
              <a href="#projet">
                Choisir le Starter Pack
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 rounded-xl"
            >
              <a href="https://www.odoo.com/pricing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Voir les prix Odoo
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            Ou appelez-nous : <a href="tel:+41582551115" className="text-[#00D4C8] hover:underline">+41 (0)58 255 11 15</a>
          </p>
        </div>
      </div>
    </section>
  );
}

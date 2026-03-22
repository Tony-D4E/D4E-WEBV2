import { Footer } from '../sections/Footer';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Headphones, 
  GraduationCap,
  Clock,
  MessageCircle,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const starterPackFeatures = [
  'CRM & Pipeline commercial',
  'Devis & Facturation',
  'Comptabilité Suisse',
  'Site Web inclus',
  'Configuration initiale',
  'Formation utilisateur',
  'Support 30 jours',
];

const supportPricing = [
  { hours: '5h', price: '750', unit: 'CHF' },
  { hours: '10h', price: '1\'400', unit: 'CHF' },
  { hours: '20h', price: '2\'600', unit: 'CHF' },
];

const formationPricing = [
  { duration: '1/2 journée', price: '600', unit: 'CHF' },
  { duration: '1 journée', price: '1\'100', unit: 'CHF' },
  { duration: 'Sur mesure', price: 'Sur devis', unit: '' },
];

export function TarifsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
        <div className="blob-glow w-[800px] h-[800px] bg-[#00D4C8]/20 top-0 left-1/4" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/10 rounded-full border border-[#00D4C8]/30 mb-6">
              <Zap className="h-5 w-5 text-[#00D4C8]" />
              <span className="text-sm font-bold text-[#00D4C8]">Tarifs transparents</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
              Nos <span className="text-gradient">tarifs</span>
            </h1>
            
            <p className="text-xl text-gray-400">
              Des offres claires et sans surprise. Choisissez ce qui correspond à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Starter Pack Section */}
      <section className="py-24 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Description */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F59E0B]/20 to-[#FBBF24]/10 rounded-full border border-[#F59E0B]/30 mb-6">
                <Award className="h-5 w-5 text-[#FBBF24]" />
                <span className="text-sm font-bold text-[#FBBF24]">Offre de lancement</span>
              </div>
              
              <h2 className="text-4xl font-black text-white mb-4">
                Starter Pack
              </h2>
              
              <p className="text-lg text-gray-400 mb-8">
                Démarrez avec Odoo sans vous ruiner. Tout ce qu'il faut pour professionnaliser 
                votre gestion en 2 semaines. Idéal pour les indépendants et PME.
              </p>

              <ul className="space-y-4 mb-8">
                {starterPackFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00D4C8] flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-[#F59E0B]/10 rounded-xl border border-[#F59E0B]/30">
                <p className="text-sm text-[#FBBF24]">
                  <strong>Note :</strong> Licences Odoo et hébergement non inclus. 
                  À prendre directement chez Odoo.
                </p>
              </div>
            </div>

            {/* Right - Pricing Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4C8]/20 to-[#06B6D4]/20 rounded-3xl blur-3xl" />
              <div className="relative p-8 bg-[#111827]/80 backdrop-blur-xl rounded-3xl border border-white/10">
                <div className="text-center mb-8">
                  <div className="text-sm text-gray-400 mb-2">Prestation de services</div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl font-black text-white">2'500</span>
                    <span className="text-xl text-gray-400">CHF HT</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">Hors licences et hébergement</div>
                </div>

                <Button asChild className="w-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] hover:opacity-90 text-white font-bold py-6 rounded-xl text-lg">
                  <a href="/#contact-form">
                    Je veux ce pack
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Déploiement en 2 semaines garanti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Formation Section */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/30 mb-6">
              <Headphones className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-bold text-purple-400">Déjà client Odoo ?</span>
            </div>
            
            <h2 className="text-4xl font-black text-white mb-6">
              Support & <span className="text-gradient">Formation</span>
            </h2>
            
            <p className="text-lg text-gray-400">
              Vous utilisez déjà Odoo mais vous avez besoin d'aide ? 
              On vous accompagne avec des forfaits flexibles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Support Technique */}
            <div className="p-8 bg-[#111827] rounded-3xl border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center mb-6 glow-cyan-sm">
                <Headphones className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Support Technique</h3>
              <p className="text-gray-400 mb-8">
                Assistance rapide pour résoudre vos problèmes Odoo au quotidien.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Support par téléphone et email',
                  'Résolution de bugs et incidents',
                  'Conseils et bonnes pratiques',
                  'Mise à jour et maintenance',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00D4C8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {supportPricing.map((price, i) => (
                  <div key={i} className="p-4 bg-[#0B0F19] rounded-xl border border-white/5 text-center">
                    <div className="text-xs text-gray-500 mb-1">Forfait {price.hours}</div>
                    <div className="text-lg font-bold text-white">{price.price}</div>
                    <div className="text-xs text-gray-500">{price.unit}</div>
                  </div>
                ))}
              </div>

              <Button asChild className="w-full bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 text-white font-bold rounded-xl">
                <a href="/#contact-form">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Formation */}
            <div className="p-8 bg-[#111827] rounded-3xl border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Formation</h3>
              <p className="text-gray-400 mb-8">
                Formez vos équipes pour utiliser Odoo à 100% de ses capacités.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Formation sur mesure',
                  'Sessions individuelles ou collectives',
                  'Documentation personnalisée',
                  'Suivi post-formation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {formationPricing.map((price, i) => (
                  <div key={i} className="p-4 bg-[#0B0F19] rounded-xl border border-white/5 text-center">
                    <div className="text-xs text-gray-500 mb-1">{price.duration}</div>
                    <div className="text-lg font-bold text-white">{price.price}</div>
                    {price.unit && <div className="text-xs text-gray-500">{price.unit}</div>}
                  </div>
                ))}
              </div>

              <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90 text-white font-bold rounded-xl">
                <a href="/#contact-form">
                  Planifier une formation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-gradient-to-r from-[#00B4A6]/10 via-[#00D4C8]/5 to-[#06B6D4]/10 rounded-3xl border border-[#00D4C8]/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center glow-cyan-sm">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Réponse rapide garantie</h4>
                  <p className="text-gray-400">Intervention sous 24-48h selon la criticité</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <MessageCircle className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Contact direct</h4>
                  <p className="text-gray-400">Parlez directement à un expert Odoo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Discutons de votre projet et trouvons la solution adaptée à vos besoins.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 text-white font-bold px-8 rounded-xl glow-cyan text-lg">
            <a href="/#contact-form">
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

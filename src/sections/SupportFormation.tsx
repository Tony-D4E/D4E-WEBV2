import { Button } from '@/components/ui/button';
import { Headphones, GraduationCap, Clock, Users, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

const supportOptions = [
  {
    icon: Headphones,
    title: 'Support Technique',
    description: 'Assistance rapide pour résoudre vos problèmes Odoo au quotidien.',
    features: [
      'Support par téléphone et email',
      'Résolution de bugs et incidents',
      'Conseils et bonnes pratiques',
      'Mise à jour et maintenance',
    ],
    pricing: [
      { label: 'Forfait 5h', price: '750', unit: 'CHF' },
      { label: 'Forfait 10h', price: '1\'400', unit: 'CHF' },
      { label: 'Forfait 20h', price: '2\'600', unit: 'CHF' },
    ],
    cta: 'Demander un devis',
    gradient: 'from-[#00B4A6] to-[#06B6D4]',
  },
  {
    icon: GraduationCap,
    title: 'Formation',
    description: 'Formez vos équipes pour utiliser Odoo à 100% de ses capacités.',
    features: [
      'Formation sur mesure',
      'Sessions individuelles ou collectives',
      'Documentation personnalisée',
      'Suivi post-formation',
    ],
    pricing: [
      { label: '1/2 journée', price: '600', unit: 'CHF' },
      { label: '1 journée', price: '1\'100', unit: 'CHF' },
      { label: 'Sur mesure', price: 'Sur devis', unit: '' },
    ],
    cta: 'Planifier une formation',
    gradient: 'from-[#7C3AED] to-[#A855F7]',
  },
];

export function SupportFormation() {
  return (
    <section id="support" className="py-24 lg:py-32 bg-[#0B0F19] relative overflow-hidden">
      {/* Background glow */}
      <div className="blob-glow w-[800px] h-[800px] bg-[#00D4C8]/10 top-0 left-1/4" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/10 rounded-full border border-[#00D4C8]/30 mb-6">
            <Users className="h-5 w-5 text-[#00D4C8]" />
            <span className="text-sm font-bold text-[#00D4C8]">Déjà client Odoo ?</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Support & <span className="text-gradient">Formation</span>
          </h2>
          <p className="text-lg text-gray-400">
            Vous utilisez déjà Odoo mais vous avez besoin d'aide ? On vous accompagne 
            avec des forfaits flexibles adaptés à vos besoins.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {supportOptions.map((option, i) => (
            <div 
              key={i} 
              className="relative p-8 bg-[#111827] rounded-3xl border border-white/10 hover:border-[#00D4C8]/30 transition-all group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-6 glow-cyan-sm`}>
                <option.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-3">{option.title}</h3>
              <p className="text-gray-400 mb-8">{option.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00D4C8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {option.pricing.map((price, pi) => (
                  <div 
                    key={pi} 
                    className="p-4 bg-[#0B0F19] rounded-xl border border-white/5 text-center"
                  >
                    <div className="text-xs text-gray-500 mb-1">{price.label}</div>
                    <div className="text-lg font-bold text-white">{price.price}</div>
                    {price.unit && <div className="text-xs text-gray-500">{price.unit}</div>}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                asChild
                className={`w-full bg-gradient-to-r ${option.gradient} hover:opacity-90 text-white font-bold rounded-xl`}
              >
                <a href="#projet">
                  {option.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#00B4A6]/10 via-[#00D4C8]/5 to-[#06B6D4]/10 rounded-3xl border border-[#00D4C8]/20">
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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Contact direct</h4>
                <p className="text-gray-400">Parlez directement à un expert Odoo</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Besoin d'un forfait personnalisé ?
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-xl"
          >
            <a href="#projet">
              Discuter de vos besoins
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

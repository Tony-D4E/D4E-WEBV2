import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Rocket, 
  Building2, 
  ArrowRight, 
  CheckCircle, 
  Send, 
  Users, 
  Clock, 
  Zap,
  Briefcase,
  ChevronLeft,
  AlertCircle
} from 'lucide-react';

const starterBenefits = [
  { icon: Clock, text: 'Démarrage en 10-15 jours' },
  { icon: Zap, text: 'Prix fixe : 2\'500 CHF' },
  { icon: Users, text: 'Idéal 1-5 utilisateurs' },
  { icon: CheckCircle, text: 'CRM + Ventes + Facturation + Compta' },
];

const erpBenefits = [
  { icon: Building2, text: 'Analyse approfondie de vos besoins' },
  { icon: Briefcase, text: 'Devis personnalisé sur mesure' },
  { icon: Users, text: 'Pour 5+ utilisateurs ou multi-sites' },
  { icon: Zap, text: 'Modules avancés : Stock, Production, RH...' },
];

export function ProjectForm() {
  const [projectType, setProjectType] = useState<'none' | 'starter' | 'erp'>('none');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    users: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (projectType === 'none') {
    return (
      <section id="projet" className="py-24 lg:py-32 bg-[#0B0F19] relative overflow-hidden">
        <div className="blob-glow w-[600px] h-[600px] bg-[#00D4C8]/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              J'ai un <span className="text-gradient">projet</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choisissez le type de projet qui correspond à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Starter Pack Option */}
            <button
              onClick={() => setProjectType('starter')}
              className="group p-8 bg-gradient-to-br from-[#00B4A6]/10 to-[#06B6D4]/5 rounded-3xl border-2 border-[#00D4C8]/30 hover:border-[#00D4C8] transition-all text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4C8]/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center mb-6 glow-cyan-sm group-hover:scale-110 transition-transform">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Starter Pack</h3>
                <p className="text-[#00D4C8] font-semibold mb-4">2'500 CHF</p>
                <p className="text-gray-400 mb-6">
                  Je démarre avec Odoo. Besoin simple et rapide de professionnaliser ma gestion.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {starterBenefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <b.icon className="h-4 w-4 text-[#00D4C8]" />
                      {b.text}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-2 text-[#00D4C8] font-semibold group-hover:gap-4 transition-all">
                  Choisir cette option
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </button>

            {/* ERP Projet Option */}
            <button
              onClick={() => setProjectType('erp')}
              className="group p-8 bg-gradient-to-br from-[#7C3AED]/10 to-[#A855F7]/5 rounded-3xl border-2 border-[#A855F7]/30 hover:border-[#A855F7] transition-all text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A855F7]/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Projet ERP</h3>
                <p className="text-[#A855F7] font-semibold mb-4">Sur devis</p>
                <p className="text-gray-400 mb-6">
                  J'ai un projet ERP complexe. Besoin d'une analyse et d'une solution sur mesure.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {erpBenefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <b.icon className="h-4 w-4 text-[#A855F7]" />
                      {b.text}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-2 text-[#A855F7] font-semibold group-hover:gap-4 transition-all">
                  Choisir cette option
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </button>
          </div>

          {/* Note */}
          <p className="text-center text-gray-500 text-sm mt-8">
            Pas sûr ? <a href="tel:+41582551115" className="text-[#00D4C8] hover:underline">Appelez-nous</a> et on vous guide.
          </p>
        </div>
      </section>
    );
  }

  const isStarter = projectType === 'starter';
  const accentColor = isStarter ? '#00D4C8' : '#A855F7';
  const gradient = isStarter ? 'from-[#00B4A6] to-[#06B6D4]' : 'from-[#7C3AED] to-[#A855F7]';

  return (
    <section id="projet" className="py-24 lg:py-32 bg-[#0B0F19] relative overflow-hidden">
      <div className={`blob-glow w-[600px] h-[600px] ${isStarter ? 'bg-[#00D4C8]/20' : 'bg-[#A855F7]/20'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={() => setProjectType('none')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          Retour au choix
        </button>

        {/* Header */}
        <div className="mb-10">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4`}
            style={{ borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
          >
            {isStarter ? <Rocket className="h-4 w-4" style={{ color: accentColor }} /> : <Building2 className="h-4 w-4" style={{ color: accentColor }} />}
            <span className="text-sm font-semibold" style={{ color: accentColor }}>
              {isStarter ? 'Starter Pack' : 'Projet ERP'}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Parlez-nous de votre projet
          </h2>
          <p className="text-gray-400">
            {isStarter 
              ? 'Remplissez ce formulaire et on vous recontacte sous 24h pour démarrer.'
              : 'Décrivez-nous votre projet. On vous recontacte pour une analyse approfondie.'
            }
          </p>
        </div>

        {/* Form */}
        {isSubmitted ? (
          <div className="flex flex-col items-center py-12 text-center p-8 bg-[#111827] rounded-2xl border border-white/10">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
            <p className="text-gray-400">
              {isStarter 
                ? 'On vous recontacte sous 24h pour démarrer votre Starter Pack.'
                : 'On vous recontacte sous 48h pour planifier un appel d\'analyse.'
              }
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-[#111827] rounded-2xl border border-white/10">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-gray-300">Nom *</Label>
                <Input 
                  placeholder="Jean Dupont" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-[#0B0F19] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00D4C8] rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Email *</Label>
                <Input 
                  type="email" 
                  placeholder="jean@entreprise.ch" 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                  className="bg-[#0B0F19] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00D4C8] rounded-xl"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-gray-300">Entreprise *</Label>
                <Input 
                  placeholder="Votre entreprise" 
                  value={formData.company} 
                  onChange={e => setFormData({...formData, company: e.target.value})}
                  required
                  className="bg-[#0B0F19] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00D4C8] rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Téléphone</Label>
                <Input 
                  placeholder="+41 79 XXX XX XX" 
                  value={formData.phone} 
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="bg-[#0B0F19] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00D4C8] rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">Nombre d'utilisateurs prévu *</Label>
              <Input 
                placeholder={isStarter ? "1-5 utilisateurs" : "5+ utilisateurs"} 
                value={formData.users} 
                onChange={e => setFormData({...formData, users: e.target.value})}
                required
                className="bg-[#0B0F19] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00D4C8] rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">
                {isStarter ? 'Vos besoins (optionnel)' : 'Décrivez votre projet *'}
              </Label>
              <Textarea 
                placeholder={isStarter 
                  ? "Quels modules vous intéressent ? CRM, facturation, comptabilité..." 
                  : "Décrivez vos processus actuels, vos pain points, vos objectifs..."
                }
                rows={5}
                value={formData.message} 
                onChange={e => setFormData({...formData, message: e.target.value})}
                required={!isStarter}
                className="bg-[#0B0F19] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00D4C8] rounded-xl resize-none"
              />
            </div>

            {/* Info box */}
            {!isStarter && (
              <div className="p-4 bg-[#A855F7]/10 rounded-xl border border-[#A855F7]/30">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-[#A855F7] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Prochaines étapes</p>
                    <p className="text-gray-400 text-sm">
                      Après réception de votre message, nous vous contacterons sous 48h pour planifier 
                      un appel d'analyse de 30-45 minutes. Suite à cet échange, nous vous enverrons 
                      un devis personnalisé détaillé.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Button 
              type="submit" 
              className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90 text-white font-bold rounded-xl text-lg py-6`}
            >
              <Send className="mr-2 h-5 w-5" />
              {isStarter ? 'Envoyer ma demande Starter Pack' : 'Envoyer ma demande de devis'}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

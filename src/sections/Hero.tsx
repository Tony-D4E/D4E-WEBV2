import { Button } from '@/components/ui/button';
import { ArrowRight, Award, MapPin, Users, Briefcase, TrendingUp, Clock } from 'lucide-react';

const heroStats = [
  { icon: Briefcase, value: '150+', label: 'Projets', sublabel: 'depuis 2019' },
  { icon: Users, value: '50+', label: 'Clients', sublabel: 'nous font confiance' },
  { icon: TrendingUp, value: '20%', label: 'Rentabilité', sublabel: 'en moyenne' },
  { icon: Clock, value: '50%', label: 'Temps gagné', sublabel: 'sur la facturation' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-[#0B0F19]">
      {/* Animated Background Blobs */}
      <div className="blob-glow w-[900px] h-[900px] bg-[#00D4C8] -top-60 -right-60 animate-pulse" />
      <div className="blob-glow w-[700px] h-[700px] bg-[#7C3AED] bottom-0 left-0 opacity-30" />
      <div className="blob-glow w-[500px] h-[500px] bg-[#06B6D4] top-1/3 left-1/3 opacity-20" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge Gold Partner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F59E0B]/20 to-[#FBBF24]/10 rounded-full border border-[#F59E0B]/30 glow-gold">
              <Award className="h-5 w-5 text-[#FBBF24]" />
              <span className="text-sm font-bold text-gradient-gold">
                Partenaire Odoo Gold Suisse
              </span>
            </div>

            {/* Main Heading - MASSIVE */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight">
                Intégrateur Odoo{' '}
                <span className="text-gradient">Suisse</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                Partenaire Odoo Gold certifié à Genève et Sion. 150+ projets ERP réalisés 
                pour PME et grandes entreprises. Solutions sur mesure, ElvyBat pour le BTP, 
                Starter Pack à 2500 CHF.
              </p>
            </div>
            
            {/* SEO Keywords paragraph (hidden visually but readable by bots) */}
            <p className="sr-only">
              Digital4Efficiency est votre partenaire Odoo en Suisse Romande. 
              Nous proposons des solutions ERP complètes : implémentation Odoo, 
              personnalisation, formation et support. Notre solution métier ElvyBat 
              révolutionne la gestion de chantiers pour les entreprises du BTP. 
              Découvrez notre Starter Pack Odoo à 2500 CHF pour démarrer rapidement 
              avec CRM, facturation, comptabilité et site web.
            </p>

            {/* Starter Pack Badge */}
            <a 
              href="#starter-pack" 
              className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-[#F59E0B]/20 via-[#FBBF24]/10 to-[#F59E0B]/20 rounded-xl border border-[#F59E0B]/40 hover:border-[#FBBF24]/60 transition-all group"
            >
              <span className="px-2 py-1 bg-[#F59E0B] text-white text-xs font-bold rounded">OFFRE</span>
              <span className="text-[#FBBF24] font-semibold">Starter Pack à 2'500 CHF</span>
              <ArrowRight className="h-4 w-4 text-[#FBBF24] group-hover:translate-x-1 transition-transform" />
            </a>

            {/* CTA Buttons - PUNCHY */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#00B4A6] via-[#00D4C8] to-[#06B6D4] hover:opacity-90 text-white font-bold px-8 rounded-xl glow-cyan text-lg"
              >
                <a href="#starter-pack">
                  Voir le Starter Pack
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-xl text-lg"
              >
                <a href="#projet">J'ai un projet</a>
              </Button>
            </div>

            {/* Locations */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <MapPin className="h-4 w-4 text-[#00D4C8]" />
                <span className="text-sm text-gray-300">Le Grand-Saconnex</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <MapPin className="h-4 w-4 text-[#00D4C8]" />
                <span className="text-sm text-gray-300">Sion</span>
              </div>
            </div>
          </div>

          {/* Right Content - Logo with Glow */}
          <div className="relative flex items-center justify-center">
            {/* Glow behind logo */}
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#00D4C8]/30 to-[#06B6D4]/20 rounded-full blur-[100px] animate-pulse" />
            
            {/* Logo Card */}
            <div className="relative p-12 bg-[#111827]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(0,212,200,0.15)]">
              <img
                src="/logo-d4e.png"
                alt="Digital4Efficiency - Partenaire Odoo Gold Suisse"
                className="relative w-full max-w-md h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Banner - IMPACTANT */}
      <div className="relative w-full border-t border-white/10 bg-gradient-to-r from-[#0B0F19] via-[#111827] to-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {heroStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center glow-cyan-sm flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-400">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none" />
    </section>
  );
}

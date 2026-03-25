import { Quote, Star, Building2, HardHat, Wrench, Shield, Watch, Paintbrush } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const clients = [
  { name: 'État de Genève', sector: 'Administration publique', icon: Building2 },
  { name: 'ACRO BTP Suisse', sector: 'BTP · Travaux en hauteur', icon: HardHat },
  { name: 'Sanitherme by Adtek', sector: 'Chauffage · Sanitaire', icon: Wrench },
  { name: 'Caragnano', sector: 'Peinture · Rénovation', icon: Paintbrush },
  { name: 'Art du Temps', sector: 'Horlogerie · Luxe', icon: Watch },
  { name: 'ADSI Sécurité', sector: 'Sécurité · Alarme', icon: Shield },
  { name: 'Czapek', sector: 'Horlogerie', icon: Watch },
  { name: 'Et bien d\'autres...', sector: 'PME suisses', icon: Building2 },
];

const testimonials = [
  {
    quote: "Grâce à ElvyBat, nous pilotons nos chantiers en temps réel et maîtrisons enfin la rentabilité de chaque projet. La facturation de situation est devenue automatique.",
    author: "Directeur Général",
    role: "Directeur Général",
    company: "ACRO BTP Suisse",
    rating: 5,
    photo: "/client-testimonial-1.jpg",
  },
  {
    quote: "Un outil structurant pour suivre nos chantiers, établir nos factures de situation et analyser notre rentabilité en temps réel. L'équipe D4E nous a accompagnés de A à Z.",
    author: "Responsable Administratif",
    role: "Responsable Administratif",
    company: "Sanitherme by Adtek",
    rating: 5,
    photo: "/client-testimonial-2.jpg",
  },
  {
    quote: "D4E nous a accompagnés avec une vraie compréhension de notre secteur. De l'analyse initiale à la mise en production, leur réactivité est impressionnante.",
    author: "Directeur",
    role: "Directeur",
    company: "ADSI Sécurité",
    rating: 5,
    photo: "/team-antonio.jpg",
  },
];

export function References() {
  const { ref: logosHeaderRef, isVisible: logosHeaderVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: testimonialsHeaderRef, isVisible: testimonialsHeaderVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-[#0B0F19] relative overflow-hidden">
      {/* Background glow */}
      <div className="blob-glow w-[800px] h-[800px] bg-[#00D4C8]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logos Section */}
        <div 
          ref={logosHeaderRef}
          className={`text-center mb-20 animate-on-scroll ${logosHeaderVisible ? 'is-visible' : ''}`}
        >
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
            Ils nous font confiance
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Des entreprises du <span className="text-gradient-animated">BTP</span> nous font confiance
          </h3>
          
          <div 
            ref={logosRef}
            className={`grid grid-cols-2 sm:grid-cols-4 gap-6 stagger-children ${logosVisible ? 'is-visible' : ''}`}
          >
            {clients.map((client, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#111827]/50 border border-white/5 hover:border-[#00D4C8]/30 hover:bg-[#111827] transition-all group card-lift"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-white/10 group-hover:border-[#00D4C8]/30 group-hover:shadow-[0_0_20px_rgba(0,212,200,0.2)] transition-all">
                  <client.icon className="h-7 w-7 text-gray-500 group-hover:text-[#00D4C8] transition-colors" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">{client.name}</p>
                  <p className="text-gray-600 text-xs">{client.sector}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-gray-500 text-sm">
            Et bien d'autres entreprises suisses du bâtiment
          </p>
        </div>

        {/* Testimonials */}
        <div>
          <div 
            ref={testimonialsHeaderRef}
            className={`text-center mb-12 animate-on-scroll delay-1 ${testimonialsHeaderVisible ? 'is-visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              Ce qu'ils disent de <span className="text-gradient-animated">nous</span>
            </h2>
            <p className="text-gray-500">Des retours d'expérience concrets</p>
          </div>

          <div 
            ref={testimonialsRef}
            className={`grid md:grid-cols-3 gap-6 stagger-children ${testimonialsVisible ? 'is-visible' : ''}`}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-[#111827] rounded-2xl border border-white/10 relative hover:border-[#00D4C8]/30 transition-all card-lift">
                {/* Quote icon */}
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-[#00D4C8] bg-[#0B0F19] rounded-full p-1.5 border border-[#00D4C8]/30" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img 
                    src={t.photo} 
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#00D4C8]/30 card-lift"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.author}</p>
                    <p className="text-gray-500 text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Quote, Star, Building2, HardHat, Home, Wrench } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const clients = [
  { name: 'CSD', sector: 'Construction', icon: Building2 },
  { name: 'CSD Energie', sector: 'Énergie & BTP', icon: HardHat },
  { name: 'CSD Home', sector: 'Rénovation', icon: Home },
  { name: 'CSD Rénovation', sector: 'Rénovation', icon: Wrench },
  { name: 'CSD Menuiserie', sector: 'Menuiserie', icon: Building2 },
  { name: 'CSD Peinture', sector: 'Peinture', icon: HardHat },
  { name: 'CSD Carrelage', sector: 'Carrelage', icon: Home },
  { name: 'CSD Plâtrerie', sector: 'Plâtrerie', icon: Wrench },
];

const testimonials = [
  {
    quote: "ElvyBat a complètement transformé notre gestion. On facture 3x plus vite et on a enfin une vision claire de nos marges sur chaque chantier. L'IA pour les bons de régie est un game-changer.",
    author: "Marc Dupont",
    role: "Directeur Général",
    company: "CSD Construction SA",
    rating: 5,
    photo: "/client-testimonial-1.jpg",
  },
  {
    quote: "Avant ElvyBat, on passait des heures à faire des situations. Maintenant c'est automatique. L'équipe de Digital4Efficiency nous a accompagnés de A à Z avec une réactivité impressionnante.",
    author: "Sophie Martin",
    role: "Responsable Administratif",
    company: "CSD Rénovation",
    rating: 5,
    photo: "/client-testimonial-2.jpg",
  },
  {
    quote: "Le rapport vocal multilingue est génial. Nos ouvriers portugais dictent leur rapport en portugais, et ça arrive en français dans Odoo. Gain de temps énorme !",
    author: "Antonio Spedicato",
    role: "Consultant Odoo",
    company: "Digital4Efficiency",
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

import { Quote, Star, Building2, HardHat, Wrench, Shield, Watch, Paintbrush } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const clients = [
  { name: 'État de Genève',     sector: 'Administration publique', icon: Building2 },
  { name: 'ACRO BTP Suisse',    sector: 'BTP · Travaux en hauteur', icon: HardHat },
  { name: 'Sanitherme by Adtek',sector: 'Chauffage · Sanitaire',   icon: Wrench },
  { name: 'Caragnano',          sector: 'Peinture · Rénovation',   icon: Paintbrush },
  { name: 'Art du Temps',       sector: 'Horlogerie · Luxe',       icon: Watch },
  { name: 'ADSI Sécurité',      sector: 'Sécurité · Alarme',       icon: Shield },
];

const testimonials = [
  { quote: "Grâce à ElvyBat, nous pilotons nos chantiers en temps réel et maîtrisons enfin la rentabilité de chaque projet. La facturation de situation est devenue automatique.", author: "Directeur Général", company: "ACRO BTP Suisse", photo: "/client-testimonial-1.jpg", initiales: "DG" },
  { quote: "Un outil structurant pour suivre nos chantiers, établir nos factures de situation et analyser notre rentabilité en temps réel. L'équipe D4E nous a accompagnés de A à Z.", author: "Responsable Administratif", company: "Sanitherme by Adtek", photo: "/client-testimonial-2.jpg", initiales: "RA" },
  { quote: "D4E nous a accompagnés avec une vraie compréhension de notre secteur. De l'analyse initiale à la mise en production, leur réactivité est impressionnante.", author: "Directeur", company: "ADSI Sécurité", photo: "/team-antonio.jpg", initiales: "Di" },
];

export function References() {
  const { ref: logosRef,  isVisible: logosVisible  } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: temsRef,   isVisible: temsVisible   } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Clients */}
        <div ref={logosRef} className={`mb-16 animate-on-scroll ${logosVisible ? 'is-visible' : ''}`}>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Ils nous font confiance</p>
            <h3 className="text-3xl sm:text-4xl font-black text-[#0F1D3A]">
              Des entreprises du <span className="text-[#00D4C8]">BTP</span> nous font confiance
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
            {clients.map((c, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-4 bg-[#E2E8F0] rounded-2xl text-center hover:bg-[#CBD5E1] transition-colors">
                <div className="w-11 h-11 bg-[#334155] rounded-2xl flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="font-bold text-[#0F1D3A] text-xs">{c.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{c.sector}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400">Et bien d'autres entreprises suisses du bâtiment</p>
        </div>

        {/* Témoignages */}
        <div ref={temsRef} className={`animate-on-scroll delay-1 ${temsVisible ? 'is-visible' : ''}`}>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F1D3A] mb-2">
              Ce qu'ils disent de <span className="text-[#00D4C8]">nous</span>
            </h2>
            <p className="text-gray-400">Des retours d'expérience concrets</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm relative hover:shadow-md transition-shadow">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-[#00D4C8] bg-white rounded-full p-1.5 border border-[#CCFBF1]" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />)}
                </div>
                <p className="text-gray-600 mb-5 leading-relaxed text-sm italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img src={t.photo} alt={t.author} className="w-10 h-10 rounded-full object-cover border-2 border-[#CCFBF1]" />
                  <div>
                    <p className="font-bold text-[#0F1D3A] text-sm">{t.author}</p>
                    <p className="text-gray-400 text-xs">{t.company}</p>
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
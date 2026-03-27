import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const team = [
  {
    name: 'Antonio Spedicato',
    role: 'Consultant Odoo & Fondateur',
    desc: '15 ans d\'expérience · Expert ERP BTP',
    tel: '0764344595',
    telDisplay: '0764 344 595',
    email: 'antonio@d4e.cool',
    photo: '/team-antonio.jpg',
    couleur: '#00D4C8',
  },
  {
    name: 'Laëtitia André',
    role: 'Chef de projet ElvyBat',
    desc: 'Spécialiste déploiement BTP · Suisse & France',
    tel: '0764822139',
    telDisplay: '0764 822 139',
    email: 'laetita@d4e.cool',
    photo: '/team-laetitia.jpg',
    couleur: '#F59E0B',
  },
];

export function Team() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: cardsRef,  isVisible: cardsVisible  } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="equipe" className="py-12 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00D4C8]/40 rounded-full bg-[#00D4C8]/5 mb-4">
            <span className="text-sm font-bold text-[#00D4C8]">Votre équipe dédiée</span>
          </div>
          <h2 className="text-4xl font-black text-[#0F1D3A] mb-3">
            Des experts à votre écoute
          </h2>
          <p className="text-gray-400 text-lg">
            Une équipe à taille humaine, basée à Genève, Sion et Barcelone
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-8 animate-on-scroll delay-1 ${cardsVisible ? 'is-visible' : ''}`}
        >
          {team.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              {/* Photo */}
              <img
                src={p.photo}
                alt={p.name}
                className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg"
                style={{ border: `4px solid ${p.couleur}` }}
              />

              {/* Infos */}
              <h3 className="text-2xl font-black text-[#0F1D3A] mb-1">{p.name}</h3>
              <p className="font-semibold mb-1 text-base" style={{ color: p.couleur }}>{p.role}</p>
              <p className="text-gray-400 text-sm mb-6">{p.desc}</p>

              {/* Boutons */}
              <div className="flex flex-col gap-3 w-full">
                <a
                  href={`tel:${p.tel}`}
                  className="flex items-center justify-center gap-2 px-5 py-3 text-white font-bold rounded-xl transition-opacity hover:opacity-90"
                  style={{ backgroundColor: p.couleur }}
                >
                  <Phone className="h-4 w-4" />
                  {p.telDisplay}
                </a>
                <a
                  href={`mailto:${p.email}`}
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-200 text-[#0F1D3A] font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <Mail className="h-4 w-4 text-gray-400" />
                  {p.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bas */}
        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold px-10 rounded-xl text-base"
          >
            <a href="/#contact-form">
              <ArrowRight className="mr-2 h-5 w-5" />
              Prendre contact maintenant
            </a>
          </Button>
          <p className="mt-3 text-gray-400 text-sm">Réponse garantie sous 24h</p>
        </div>

      </div>
    </section>
  );
}
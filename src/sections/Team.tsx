import { Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const team = [
  {
    name: 'Antonio Spedicato',
    role: 'Consultant Odoo & Fondateur',
    description: 'Expert Odoo depuis 2019. Accompagne les PME suisses dans leur transformation digitale avec passion et pragmatisme.',
    linkedin: 'https://www.linkedin.com/in/antoniospedicato',
    email: 'antonio@d4e.cool',
    phone: '0764344595',
    photo: '/team-antonio.jpg',
  },
  {
    name: 'Laëtitia André',
    role: 'Consultante Odoo & Chef de projet',
    description: 'Spécialiste en implémentation ERP et gestion de projet. À l\'écoute de vos besoins pour des solutions sur mesure.',
    linkedin: 'https://www.linkedin.com/in/laëtitia-andré-6b09b4153',
    email: 'laetita@d4e.cool',
    phone: '0764822139',
    photo: '/team-laetitia.jpg',
  },
];

export function Team() {
  return (
    <section id="equipe" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Background glow */}
      <div className="blob-glow w-[600px] h-[600px] bg-[#00D4C8]/10 top-0 right-0" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Vos <span className="text-gradient">interlocuteurs</span>
          </h2>
          <p className="text-lg text-gray-400">
            Une équipe à taille humaine, à votre écoute. Basée à Genève et Sion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <div key={i} className="p-8 bg-[#111827] rounded-2xl border border-white/10 hover:border-[#00D4C8]/30 transition-all">
              <div className="flex items-start gap-6">
                {/* Photo */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-white/10">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className={`text-sm font-semibold mb-3 ${i === 0 ? 'text-[#00D4C8]' : 'text-[#A855F7]'}`}>
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Contact buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/10 text-gray-300 hover:text-white hover:border-[#00D4C8]/50 hover:bg-[#00D4C8]/10"
                    >
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/10 text-gray-300 hover:text-white hover:border-[#00D4C8]/50 hover:bg-[#00D4C8]/10"
                    >
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/10 text-gray-300 hover:text-white hover:border-[#00D4C8]/50 hover:bg-[#00D4C8]/10"
                    >
                      <a href={`tel:+41${member.phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        {member.phone}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact direct */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Préférez-vous nous appeler directement ?
          </p>
          <a 
            href="tel:+41582551115" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] rounded-xl text-white font-semibold glow-cyan-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="h-5 w-5" />
            +41 (0)58 255 11 15
          </a>
        </div>
      </div>
    </section>
  );
}

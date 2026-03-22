import { TrendingUp, Layers, Target, Shield } from 'lucide-react';

const differentiators = [
  {
    icon: TrendingUp,
    title: 'Expertise Finance',
    description:
      'Maîtrise approfondie des processus financiers. Solutions Odoo adaptées aux standards suisses.',
  },
  {
    icon: Layers,
    title: 'Verticaux Métier',
    description:
      'Solutions sectorielles sur mesure. Nous comprenons votre métier et adaptons Odoo à vos besoins.',
  },
  {
    icon: Target,
    title: 'Approche Suisse',
    description:
      'Proximité et réactivité garanties. Basés à Genève et Sion, avec la rigueur suisse.',
  },
  {
    icon: Shield,
    title: 'Partenariat Odoo',
    description:
      'Accès privilégié aux innovations Odoo. Support direct et formations avancées.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#0B0F19] relative overflow-hidden">
      {/* Background Glow */}
      <div className="blob-glow w-[600px] h-[600px] bg-[#7C3AED] top-1/2 left-0 -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Pourquoi <span className="text-gradient">nous</span> choisir ?
          </h2>
          <p className="text-lg text-gray-400">
            Depuis 2019, nous accompagnons les entreprises suisses avec expertise et passion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group p-8 card-glow rounded-2xl card-glow-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center mb-6 glow-cyan-sm group-hover:scale-110 transition-transform">
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

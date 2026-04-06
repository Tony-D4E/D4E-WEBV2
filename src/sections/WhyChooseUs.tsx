import { TrendingUp, Layers, Target, Shield } from 'lucide-react';

const differentiators = [
  { icon: TrendingUp, title: 'Expertise Finance',  description: 'Maîtrise approfondie des processus financiers. Solutions Odoo adaptées aux standards suisses.' },
  { icon: Layers,     title: 'Verticaux Métier',   description: 'Solutions sectorielles sur mesure. Nous comprenons votre métier et adaptons Odoo à vos besoins.' },
  { icon: Target,     title: 'Approche Suisse',    description: 'Proximité et réactivité garanties. Basés à Genève et Sion, avec la rigueur suisse.' },
  { icon: Shield,     title: 'Partenariat Odoo',   description: 'Accès privilégié aux innovations Odoo. Support direct et formations avancées.' },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F1D3A] mb-6 tracking-tight">
            Pourquoi <span className="text-[#00D4C8]">nous</span> choisir ?
          </h2>
          <p className="text-lg text-gray-500">Depuis 2017, nous accompagnons les entreprises suisses avec expertise et passion.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentiators.map((d, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#00D4C8] flex items-center justify-center mb-5">
                <d.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0F1D3A] mb-3">{d.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
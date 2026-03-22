import { Building2, Factory, ShoppingCart, Truck, Landmark, Stethoscope, HardHat } from 'lucide-react';

const sectors = [
  {
    icon: Landmark,
    title: 'Finance',
    description: 'Reporting, conformance, automatisation comptable.',
  },
  {
    icon: Building2,
    title: 'Services',
    description: 'Gestion de projets, temps, rentabilité par mission.',
  },
  {
    icon: HardHat,
    title: 'Construction',
    description: 'Gestion de chantiers avec ElvyBat.',
    featured: true,
    link: '#elvybat',
  },
  {
    icon: Factory,
    title: 'Industrie',
    description: 'Production, supply chain, traçabilité.',
  },
  {
    icon: ShoppingCart,
    title: 'Commerce',
    description: 'Multi-canal, stocks, relation client.',
  },
  {
    icon: Truck,
    title: 'Logistique',
    description: 'Flux, entrepôts, expéditions.',
  },
  {
    icon: Stethoscope,
    title: 'Santé',
    description: 'Normes, stocks, traçabilité lots.',
  },
];

export function Sectors() {
  return (
    <section id="secteurs" className="py-24 lg:py-32 bg-[#0B0F19] relative overflow-hidden">
      {/* Background Glow */}
      <div className="blob-glow w-[500px] h-[500px] bg-[#7C3AED] top-0 right-0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Secteurs <span className="text-gradient">d'activité</span>
          </h2>
          <p className="text-lg text-gray-400">
            Expertise sectorielle pour des solutions adaptées à votre industrie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectors.map((sector, index) => {
            const CardContent = (
              <>
                <div className="w-14 h-14 rounded-xl bg-[#1F2937] flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-[#00B4A6] group-hover:to-[#06B6D4] transition-all duration-300">
                  <sector.icon className="h-7 w-7 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {sector.title}
                  </h3>
                  {sector.featured && (
                    <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] text-white rounded-full">
                      Elvy
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400">{sector.description}</p>
              </>
            );

            return sector.link ? (
              <a
                key={index}
                href={sector.link}
                className="group block p-6 card-glow rounded-2xl border-2 border-[#00D4C8]/30 glow-cyan-sm hover:border-[#00D4C8] transition-all"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={index}
                className="group p-6 card-glow rounded-2xl card-glow-hover"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

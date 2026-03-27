import { Building2, Factory, ShoppingCart, Truck, Landmark, Stethoscope, HardHat } from 'lucide-react';

const sectors = [
  { icon: Landmark,    title: 'Finance',      description: 'Reporting, conformance, automatisation comptable.', featured: false },
  { icon: Building2,   title: 'Services',     description: 'Gestion de projets, temps, rentabilité par mission.', featured: false },
  { icon: HardHat,     title: 'Construction', description: 'Gestion de chantiers avec ElvyBat.',                  featured: true,  link: '/elvybat' },
  { icon: Factory,     title: 'Industrie',    description: 'Production, supply chain, traçabilité.',              featured: false },
  { icon: ShoppingCart,title: 'Commerce',     description: 'Multi-canal, stocks, relation client.',               featured: false },
  { icon: Truck,       title: 'Logistique',   description: 'Flux, entrepôts, expéditions.',                       featured: false },
  { icon: Stethoscope, title: 'Santé',        description: 'Normes, stocks, traçabilité lots.',                   featured: false },
];

export function Sectors() {
  return (
    <section id="secteurs" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F1D3A] mb-6 tracking-tight">
            Secteurs <span className="text-[#00D4C8]">d'activité</span>
          </h2>
          <p className="text-lg text-gray-500">Expertise sectorielle pour des solutions adaptées à votre industrie.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((s, i) => {
            const inner = (
              <>
                <div className="w-12 h-12 bg-[#0F1D3A] rounded-2xl flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-[#F59E0B]" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-bold text-[#0F1D3A]">{s.title}</h3>
                  {s.featured && <span className="text-xs font-bold bg-[#00D4C8] text-white px-2 py-0.5 rounded-full">Elvy</span>}
                </div>
                <p className="text-sm text-gray-400">{s.description}</p>
              </>
            );
            return s.link ? (
              <a key={i} href={s.link} className="block p-6 bg-white rounded-2xl border-2 border-[#00D4C8]/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                {inner}
              </a>
            ) : (
              <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
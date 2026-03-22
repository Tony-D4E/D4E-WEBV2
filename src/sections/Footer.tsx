import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const links = {
  services: ['Implémentation', 'Personnalisation', 'Formation', 'Support'],
  products: ['ElvyBat', 'ElvyPrint', 'ElvyLaw', 'ElvyImmo', 'ElvyAssurance', 'ElvyEduca'],
  company: ['À propos', 'Méthodologie', 'Secteurs', 'J\'ai un projet'],
  legal: ['Mentions légales', 'Confidentialité'],
};

export function Footer() {
  return (
    <footer className="bg-[#0B0F19] border-t border-white/10 relative overflow-hidden">
      <div className="blob-glow w-[400px] h-[400px] bg-[#00D4C8]/20 top-0 right-0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/picto-d4e.png" alt="D4E" className="h-10 w-auto" />
              <span className="font-bold text-lg text-white">Digital4Efficiency</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Partenaire Odoo Gold. Experts en transformation digitale depuis 2019.
            </p>
            <div className="space-y-2 mb-6">
              <a href="tel:+41582551115" className="flex items-center gap-2 text-gray-400 hover:text-[#00D4C8] text-sm transition-colors">
                <Phone className="h-4 w-4" />
                +41 (0)58 255 11 15
              </a>
              <a href="mailto:info@digital4efficiency.ch" className="flex items-center gap-2 text-gray-400 hover:text-[#00D4C8] text-sm transition-colors">
                <Mail className="h-4 w-4" />
                info@digital4efficiency.ch
              </a>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#00B4A6] hover:to-[#06B6D4] transition-all border border-white/10">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {links.services.map((l, i) => (
                <li key={i}><a href="#services" className="text-gray-500 hover:text-[#00D4C8] text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Produits Elvy</h4>
            <ul className="space-y-2">
              {links.products.map((l, i) => (
                <li key={i}><a href="#elvy" className="text-gray-500 hover:text-[#00D4C8] text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {links.company.map((l, i) => (
                <li key={i}>
                  <a 
                    href={l === "J'ai un projet" ? '/#contact-form' : '#'} 
                    className="text-gray-500 hover:text-[#00D4C8] text-sm transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Légal</h4>
            <ul className="space-y-2">
              {links.legal.map((l, i) => (
                <li key={i}><a href="#" className="text-gray-500 hover:text-[#00D4C8] text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>© {new Date().getFullYear()} Digital4Efficiency</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Genève & Sion
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Partenaire</span>
            <img src="https://odoocdn.com/openerp_website/static/src/img/assets/png/odoo_partner.png" alt="Odoo" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}

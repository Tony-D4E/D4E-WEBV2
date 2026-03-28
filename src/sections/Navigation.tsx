import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { to: '/',        label: 'Accueil',  exact: true },
  { to: '/odoo',    label: 'Odoo' },
  { to: '/elvy',    label: 'Elvy' },
  { to: '/elvybat', label: 'ElvyBat' },
  { to: '/tarifs',  label: 'Tarifs' },
  { to: '/support', label: 'Support' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const location  = useLocation();
  const navigate  = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileMenu(false); }, [location.pathname]);

  const isActive = (to: string, exact = false) =>
    exact ? location.pathname === to : location.pathname.startsWith(to);

  const goAnchor = (anchor: string) => {
    setMobileMenu(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navBg = isScrolled
    ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
    : 'bg-white/80 backdrop-blur-md border-b border-slate-100';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/picto-d4e.png"
              alt="D4E"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-black text-lg text-slate-800 tracking-tight">
              Digital4Efficiency
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  isActive(link.to, link.exact)
                    ? 'text-[#00B4A6] bg-[#00B4A6]/8'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
                {isActive(link.to, link.exact) && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] rounded-full" />
                )}
              </Link>
            ))}

            {/* Lien ancre équipe */}
            <button
              onClick={() => goAnchor('equipe')}
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all duration-200"
            >
              Équipe
            </button>
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => goAnchor('contact-form')}
              className="px-5 py-2.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 transition-all shadow-md shadow-[#00B4A6]/20"
            >
              J'ai un projet
            </button>
          </div>

          {/* Burger mobile */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenu(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen
              ? <X    className="h-6 w-6 text-slate-700" />
              : <Menu className="h-6 w-6 text-slate-700" />
            }
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col py-3 bg-white rounded-2xl mb-4 border border-slate-200 shadow-lg overflow-hidden">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-5 py-3 text-sm font-semibold transition-colors ${
                  isActive(link.to, link.exact)
                    ? 'text-[#00B4A6] bg-[#00B4A6]/5'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => goAnchor('equipe')}
              className="px-5 py-3 text-left text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Équipe
            </button>
            <div className="mx-4 mt-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => goAnchor('contact-form')}
                className="w-full py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 transition-opacity"
              >
                J'ai un projet
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

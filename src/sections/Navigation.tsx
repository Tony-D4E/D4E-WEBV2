import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

/* ââ Data ââ */
const solutions = [
  { to: '/elvybat',       label: 'ElvyBat',       desc: 'Construction & chantiers', accent: '#00D4C8' },
  { to: '/elvyprint',     label: 'ElvyPrint',     desc: 'Impression & production',  accent: '#F59E0B' },
  { to: '/elvyeduca',     label: 'ElvyEduca',     desc: 'Education & formation',    accent: '#8B5CF6' },
  { to: '/elvyinsurance', label: 'ElvyInsurance', desc: 'Assurance & courtage',     accent: '#3B82F6' },
];

/* ââ Component ââ */
export function Navigation() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileOpen, setMobileOpen]     = useState(false);
  const [solOpen, setSolOpen]             = useState(false);
  const [d4eOpen, setD4eOpen]             = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const [mobileD4eOpen, setMobileD4eOpen] = useState(false);

  const solRef = useRef<HTMLDivElement>(null);
  const d4eRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close everything on route change */
  useEffect(() => {
    setMobileOpen(false);
    setSolOpen(false);
    setD4eOpen(false);
    setMobileSolOpen(false);
    setMobileD4eOpen(false);
  }, [location.pathname]);

  /* Click outside to close dropdowns */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (solRef.current && !solRef.current.contains(e.target as Node)) setSolOpen(false);
      if (d4eRef.current && !d4eRef.current.contains(e.target as Node)) setD4eOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* Helpers */
  const isActive = (path: string) => location.pathname === path;
  const isSolutionActive = solutions.some(s => location.pathname === s.to) || location.pathname === '/elvy';
  const isD4eActive = ['/tarifs', '/entreprise', '/jobs'].includes(location.pathname);

  const goAnchor = (anchor: string) => {
    setMobileOpen(false);
    setSolOpen(false);
    setD4eOpen(false);
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

  const linkBase = 'relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200';
  const linkActive = 'text-[#00B4A6] bg-[#00B4A6]/8';
  const linkIdle = 'text-slate-600 hover:text-slate-900 hover:bg-slate-100';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ââ Logo ââ */}
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

          {/* ââ Desktop nav ââ */}
          <nav className="hidden lg:flex items-center gap-1">

            {/* Odoo */}
            <Link
              to="/odoo"
              className={`${linkBase} ${isActive('/odoo') ? linkActive : linkIdle}`}
            >
              Odoo
              {isActive('/odoo') && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] rounded-full" />
              )}
            </Link>

            {/* Solutions dropdown */}
            <div ref={solRef} className="relative">
              <button
                onClick={() => { setSolOpen(!solOpen); setD4eOpen(false); }}
                className={`${linkBase} flex items-center gap-1 ${isSolutionActive ? linkActive : linkIdle}`}
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solOpen ? 'rotate-180' : ''}`} />
                {isSolutionActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] rounded-full" />
                )}
              </button>

              {solOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl border border-slate-200 shadow-xl py-2 z-50">
                  <Link
                    to="/elvy"
                    className={`flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors ${isActive('/elvy') ? 'bg-slate-50' : ''}`}
                  >
                    <span className="w-1 h-8 rounded-full flex-shrink-0" style={{ backgroundColor: '#00D4C8' }} />
                    <div>
                      <div className="text-sm font-bold text-[#00D4C8]">La gamme Elvy</div>
                      <div className="text-xs text-slate-500">Toutes nos solutions</div>
                    </div>
                  </Link>
                  <div className="border-b border-slate-100 mx-3 my-1" />
                  {solutions.map(sol => (
                    <Link
                      key={sol.to}
                      to={sol.to}
                      className={`flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors ${isActive(sol.to) ? 'bg-slate-50' : ''}`}
                    >
                      <span
                        className="w-1 h-8 rounded-full flex-shrink-0"
                        style={{ backgroundColor: sol.accent }}
                      />
                      <div>
                        <div className="text-sm font-semibold text-slate-800">{sol.label}</div>
                        <div className="text-xs text-slate-500">{sol.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* D4E dropdown */}
            <div ref={d4eRef} className="relative">
              <button
                onClick={() => { setD4eOpen(!d4eOpen); setSolOpen(false); }}
                className={`${linkBase} flex items-center gap-1 ${isD4eActive ? linkActive : linkIdle}`}
              >
                D4E
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${d4eOpen ? 'rotate-180' : ''}`} />
              </button>

              {d4eOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-2xl border border-slate-200 shadow-xl py-2 z-50">
                  <Link
                    to="/entreprise"
                    className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${isActive('/entreprise') ? 'text-[#00B4A6] bg-slate-50' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`}
                  >
                    Entreprise
                  </Link>
                  <Link
                    to="/tarifs"
                    className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${isActive('/tarifs') ? 'text-[#00B4A6] bg-slate-50' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`}
                  >
                    Tarifs
                  </Link>
                  <Link
                    to="/jobs"
                    className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${isActive('/jobs') ? 'text-[#00B4A6] bg-slate-50' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`}
                  >
                    Jobs
                  </Link>
                </div>
              )}
            </div>

            {/* Support */}
            <Link
              to="/support"
              className={`${linkBase} ${isActive('/support') ? linkActive : linkIdle}`}
            >
              Support
              {isActive('/support') && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] rounded-full" />
              )}
            </Link>
          </nav>

          {/* ââ CTA desktop ââ */}
          <div className="hidden lg:block">
            <button
              onClick={() => goAnchor('contact-form')}
              className="px-5 py-2.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 transition-all shadow-md shadow-[#00B4A6]/20"
            >
              J'ai un projet
            </button>
          </div>

          {/* ââ Burger mobile ââ */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!isMobileOpen)}
            aria-label="Menu"
          >
            {isMobileOpen
              ? <span style={{ display: 'flex', flexDirection: 'column' as const, gap: '0px', width: '24px', height: '24px', justifyContent: 'center', alignItems: 'center' }}><span style={{ width: '18px', height: '2.5px', backgroundColor: '#000000', borderRadius: '2px', transform: 'rotate(45deg) translateY(3.5px)' }} /><span style={{ width: '18px', height: '2.5px', backgroundColor: '#000000', borderRadius: '2px', transform: 'rotate(-45deg) translateY(-3.5px)' }} /></span>
              : <span style={{ display: 'flex', flexDirection: 'column' as const, gap: '4px', width: '24px', height: '24px', justifyContent: 'center' }}><span style={{ width: '18px', height: '2.5px', backgroundColor: '#000000', borderRadius: '2px' }} /><span style={{ width: '18px', height: '2.5px', backgroundColor: '#000000', borderRadius: '2px' }} /><span style={{ width: '18px', height: '2.5px', backgroundColor: '#000000', borderRadius: '2px' }} /></span>
            }
          </button>
        </div>

        {/* ââ Mobile menu ââ */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col py-3 bg-white rounded-2xl mb-4 border border-slate-200 shadow-lg overflow-hidden">

            {/* Odoo */}
            <Link
              to="/odoo"
              className={`px-5 py-3 text-sm font-semibold transition-colors ${
                isActive('/odoo') ? 'text-[#00B4A6] bg-[#00B4A6]/5' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Odoo
            </Link>

            {/* Solutions accordion */}
            <button
              onClick={() => setMobileSolOpen(!mobileSolOpen)}
              className={`flex items-center justify-between px-5 py-3 text-sm font-semibold transition-colors ${
                isSolutionActive ? 'text-[#00B4A6] bg-[#00B4A6]/5' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${mobileSolOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
              <Link
                to="/elvy"
                className={`flex items-center gap-3 pl-8 pr-5 py-2.5 transition-colors ${
                  isActive('/elvy') ? 'bg-slate-50' : 'hover:bg-slate-50'
                }`}
              >
                <span className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: '#00D4C8' }} />
                <div>
                  <span className={`text-sm font-bold ${isActive('/elvy') ? 'text-[#00B4A6]' : 'text-[#00D4C8]'}`}>La gamme Elvy</span>
                  <span className="text-xs text-slate-400 ml-2">Toutes nos solutions</span>
                </div>
              </Link>
              <div className="border-b border-slate-100 mx-6 my-1" />
              {solutions.map(sol => (
                <Link
                  key={sol.to}
                  to={sol.to}
                  className={`flex items-center gap-3 pl-8 pr-5 py-2.5 transition-colors ${
                    isActive(sol.to) ? 'bg-slate-50' : 'hover:bg-slate-50'
                  }`}
                >
                  <span className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: sol.accent }} />
                  <div>
                    <span className={`text-sm font-medium ${isActive(sol.to) ? 'text-[#00B4A6]' : 'text-slate-700'}`}>{sol.label}</span>
                    <span className="text-xs text-slate-400 ml-2">{sol.desc}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* D4E accordion */}
            <button
              onClick={() => setMobileD4eOpen(!mobileD4eOpen)}
              className={`flex items-center justify-between px-5 py-3 text-sm font-semibold transition-colors ${
                isD4eActive ? 'text-[#00B4A6] bg-[#00B4A6]/5' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              D4E
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileD4eOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${mobileD4eOpen ? 'max-h-[200px]' : 'max-h-0'}`}>
              <Link
                to="/entreprise"
                className={`block pl-8 pr-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive('/entreprise') ? 'text-[#00B4A6]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Entreprise
              </Link>
              <Link
                to="/tarifs"
                className={`block pl-8 pr-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive('/tarifs') ? 'text-[#00B4A6]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Tarifs
              </Link>
              <Link
                to="/jobs"
                className={`block pl-8 pr-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive('/jobs') ? 'text-[#00B4A6]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Jobs
              </Link>
            </div>

            {/* Support */}
            <Link
              to="/support"
              className={`px-5 py-3 text-sm font-semibold transition-colors ${
                isActive('/support') ? 'text-[#00B4A6] bg-[#00B4A6]/5' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Support
            </Link>

            {/* CTA mobile */}
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
import { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const slides = [
  {
    img: '/frustrated-woman.jpg',
    accent: '#00D4C8',
    badge: '⚠ Le problème',
    badgeBg: 'rgba(0,212,200,0.12)',
    badgeBorder: 'rgba(0,212,200,0.35)',
    badgeColor: '#00D4C8',
    headline: 'Vous pilotez encore',
    headlineAccent: "à l'aveugle ?",
    sub: 'Excel, données éparpillées, marges floues… La plupart des PME perdent 15 à 20 % de marge faute de visibilité.',
  },
  {
    img: '/happy-man.jpg',
    accent: '#F59E0B',
    badge: '✓ La solution',
    badgeBg: 'rgba(245,158,11,0.12)',
    badgeBorder: 'rgba(245,158,11,0.35)',
    badgeColor: '#F59E0B',
    headline: 'Avec Odoo,',
    headlineAccent: 'tout change.',
    sub: 'D4E déploie votre ERP en quelques jours. Pilotage en temps réel, marges visibles, équipes synchronisées.',
  },
  {
    img: '/happy-woman.jpg',
    accent: '#00D4C8',
    badge: '🚀 Le résultat',
    badgeBg: 'rgba(0,212,200,0.12)',
    badgeBorder: 'rgba(0,212,200,0.35)',
    badgeColor: '#00D4C8',
    headline: 'Votre activité',
    headlineAccent: 'tourne enfin.',
    sub: 'Nos clients gagnent 2h/jour par collaborateur. Opérationnel en quelques jours, pas en plusieurs mois.',
  },
];

export function HeroIntegrateur() {
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function goTo(idx: number) {
    currentRef.current = idx;
    setCurrent(idx);
  }

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const next = (currentRef.current + 1) % slides.length;
      goTo(next);
    }, 5000);
  }

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const sl = slides[current];

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }
        .hero-inner {
          max-width: 55%;
        }
        .hero-h1 {
          font-size: clamp(1.8rem, 5.5vw, 6.5rem);
          font-weight: 900;
          line-height: 1.05;
          color: #FFFFFF;
          letter-spacing: -2px;
          margin: 0 0 20px 0;
        }
        .hero-sub {
          font-size: clamp(0.95rem, 1.4vw, 1.2rem);
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          margin: 0 0 36px 0;
          max-width: 520px;
        }
        .hero-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .hero-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 32px;
          background-color: #00D4C8;
          color: #FFFFFF;
          font-weight: 800;
          border-radius: 14px;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 6px 28px rgba(0,212,200,0.4);
          white-space: nowrap;
        }
        .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          padding: 15px 32px;
          border: 1.5px solid rgba(255,255,255,0.3);
          background-color: rgba(255,255,255,0.08);
          color: #FFFFFF;
          font-weight: 700;
          border-radius: 14px;
          font-size: 1rem;
          text-decoration: none;
          white-space: nowrap;
        }
        .hero-lieux {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .hero-lieu {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 999px;
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          background-color: rgba(255,255,255,0.05);
        }
        .hero-dots {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 3;
        }
        .hero-dot {
          height: 8px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.4s ease;
        }
        .hero-badge-odoo {
          position: absolute;
          top: 88px;
          right: 24px;
          z-index: 3;
          background-color: rgba(11,15,25,0.7);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 14px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-inner {
            max-width: 100%;
          }
          .hero-h1 {
            letter-spacing: -1px;
          }
          .hero-cta-primary, .hero-cta-secondary {
            padding: 13px 24px;
            font-size: 0.95rem;
          }
          .hero-badge-odoo {
            display: none !important;
          }
        }
      `}</style>

      <section className="hero-section">

        {/* BG slides */}
        {slides.map((slide, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${slide.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1s ease',
            zIndex: 0,
          }} />
        ))}

        {/* Gradient directionnel fort à gauche */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(105deg, rgba(11,15,25,0.95) 0%, rgba(11,15,25,0.82) 35%, rgba(11,15,25,0.45) 60%, rgba(11,15,25,0.1) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to top, rgba(11,15,25,0.7) 0%, transparent 30%)',
        }} />

        {/* Content */}
        <div className="hero-content">
          <div className="hero-inner">

            {/* Badge */}
            <div key={`badge-${current}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '7px 18px',
              border: `1px solid ${sl.badgeBorder}`,
              borderRadius: '999px',
              backgroundColor: sl.badgeBg,
              marginBottom: '22px',
              animation: 'fadeUp 0.5s ease both',
            }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: sl.badgeColor }}>{sl.badge}</span>
            </div>

            {/* H1 */}
            <h1 key={`h1-${current}`} className="hero-h1" style={{ animation: 'fadeUp 0.55s 0.06s ease both' }}>
              {sl.headline}<br />
              <span style={{ color: sl.accent }}>{sl.headlineAccent}</span>
            </h1>

            {/* Sub */}
            <p key={`sub-${current}`} className="hero-sub" style={{ animation: 'fadeUp 0.6s 0.12s ease both' }}>
              {sl.sub}
            </p>

            {/* CTAs */}
            <div key={`ctas-${current}`} className="hero-ctas" style={{ animation: 'fadeUp 0.65s 0.18s ease both' }}>
              <a onClick={(e) => { e.preventDefault(); document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-cta-primary">
                Discuter de mon projet <ArrowRight style={{ width: '18px', height: '18px' }} />
              </a>
              <a href="/#elvy" className="hero-cta-secondary">
                Découvrir la suite Elvy
              </a>
            </div>

            {/* Lieux */}
            <div className="hero-lieux">
              {['Genève', 'Sion', 'Barcelone'].map((l) => (
                <div key={l} className="hero-lieu">
                  <MapPin style={{ width: '11px', height: '11px', color: '#00D4C8' }} />
                  {l}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Dots */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button key={i} className="hero-dot" onClick={() => { goTo(i); startTimer(); }} style={{
              width: i === current ? '32px' : '8px',
              backgroundColor: i === current ? '#00D4C8' : 'rgba(255,255,255,0.28)',
            }} />
          ))}
        </div>

        {/* Odoo badge */}
        <div className="hero-badge-odoo" style={{padding:0,background:"transparent",border:"none",boxShadow:"none"}}>
          <img src="/odoo-gold-partner.svg" alt="Odoo Gold Partner" style={{height:80,maxWidth:340,objectFit:"contain",display:"block",filter:"drop-shadow(0 4px 20px rgba(245,158,11,0.4))"}}/>
        </div>

      </section>
    </>
  );
}
    .hero-badge-odoo {
      display: none !important;
  }
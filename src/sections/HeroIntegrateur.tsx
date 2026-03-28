import { useEffect, useRef, useState } from 'react';
import { Award, MapPin, ArrowRight } from 'lucide-react';

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
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function handleDot(idx: number) {
    goTo(idx);
    startTimer(); // reset timer on manual click
  }

  const sl = slides[current];

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '640px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      {/* BG slides */}
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${slide.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: i === current ? 1 : 0,
          transition: 'opacity 1s ease',
          zIndex: 0,
        }} />
      ))}

      {/* Overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(90deg, rgba(11,15,25,0.88) 0%, rgba(11,15,25,0.6) 50%, rgba(11,15,25,0.25) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to top, rgba(11,15,25,0.6) 0%, transparent 35%)',
      }} />

      {/* Content — centré sur la page, collé à gauche dans le container */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%',
        maxWidth: '1400px',
        padding: '0 5vw',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '680px' }}>

          {/* Badge */}
          <div key={`badge-${current}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '7px 18px',
            border: `1px solid ${sl.badgeBorder}`,
            borderRadius: '999px',
            backgroundColor: sl.badgeBg,
            marginBottom: '20px',
            animation: 'fadeUp 0.5s ease both',
          }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: sl.badgeColor }}>{sl.badge}</span>
          </div>

          {/* H1 */}
          <h1 key={`h1-${current}`} style={{
            fontSize: 'clamp(2.6rem, 5.5vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            color: '#FFFFFF',
            letterSpacing: '-2px',
            marginBottom: '18px',
            marginTop: 0,
            animation: 'fadeUp 0.55s 0.06s ease both',
          }}>
            {sl.headline}<br />
            <span style={{ color: sl.accent }}>{sl.headlineAccent}</span>
          </h1>

          {/* Sub */}
          <p key={`sub-${current}`} style={{
            fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.7,
            maxWidth: '480px',
            marginBottom: '32px',
            marginTop: 0,
            animation: 'fadeUp 0.6s 0.12s ease both',
          }}>
            {sl.sub}
          </p>

          {/* CTAs */}
          <div key={`ctas-${current}`} style={{
            display: 'flex', gap: '12px', flexWrap: 'wrap',
            animation: 'fadeUp 0.65s 0.18s ease both',
          }}>
            <a href="/#contact-form" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 28px', backgroundColor: '#00D4C8',
              color: '#FFFFFF', fontWeight: 700, borderRadius: '12px',
              fontSize: '0.95rem', textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(0,212,200,0.4)',
              whiteSpace: 'nowrap',
            }}>
              Discuter de mon projet <ArrowRight style={{ width: '17px', height: '17px' }} />
            </a>
            <a href="/#elvy" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 28px',
              border: '1px solid rgba(255,255,255,0.3)',
              backgroundColor: 'rgba(255,255,255,0.07)',
              color: '#FFFFFF', fontWeight: 600, borderRadius: '12px',
              fontSize: '0.95rem', textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}>
              Découvrir la suite Elvy
            </a>
          </div>

          {/* Locations */}
          <div style={{
            display: 'flex', gap: '10px', marginTop: '28px', flexWrap: 'wrap',
          }}>
            {['Genève', 'Sion', 'Barcelone'].map((l) => (
              <div key={l} style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                padding: '5px 13px',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '999px',
                fontSize: '12px', color: 'rgba(255,255,255,0.55)',
                backgroundColor: 'rgba(255,255,255,0.05)',
              }}>
                <MapPin style={{ width: '10px', height: '10px', color: '#00D4C8' }} />
                {l}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Dots */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '10px', zIndex: 3,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => handleDot(i)} style={{
            width: i === current ? '32px' : '8px',
            height: '8px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            backgroundColor: i === current ? '#00D4C8' : 'rgba(255,255,255,0.3)',
            transition: 'all 0.4s ease',
          }} />
        ))}
      </div>

      {/* Odoo badge */}
      <div style={{
        position: 'absolute', top: '90px', right: '32px', zIndex: 3,
        backgroundColor: 'rgba(11,15,25,0.65)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '14px', padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <div style={{
          width: '30px', height: '30px', backgroundColor: '#F59E0B',
          borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Award style={{ width: '15px', height: '15px', color: '#FFFFFF' }} />
        </div>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>Odoo Gold Partner</p>
          <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.55)', margin: 0 }}>Certifié Suisse</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
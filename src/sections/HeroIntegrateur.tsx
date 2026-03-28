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
    sub: 'Excel, données éparpillées, marges floues… La plupart des PME perdent 15 à 20 % de marge faute de visibilité en temps réel.',
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
    sub: 'D4E déploie votre ERP en quelques jours. Pilotage en temps réel, marges visibles, équipes synchronisées sur une seule plateforme.',
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
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '700px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>

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

      {/* Gradient gauche fort pour lisibilité */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(105deg, rgba(11,15,25,0.95) 0%, rgba(11,15,25,0.80) 40%, rgba(11,15,25,0.35) 70%, rgba(11,15,25,0.1) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to top, rgba(11,15,25,0.65) 0%, transparent 30%)',
      }} />

      {/* CONTENT */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 7vw',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '760px' }}>

          {/* Badge */}
          <div key={`badge-${current}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 20px',
            border: `1px solid ${sl.badgeBorder}`,
            borderRadius: '999px',
            backgroundColor: sl.badgeBg,
            marginBottom: '28px',
            animation: 'fadeUp 0.5s ease both',
          }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: sl.badgeColor, letterSpacing: '0.2px' }}>{sl.badge}</span>
          </div>

          {/* H1 — très grand */}
          <h1 key={`h1-${current}`} style={{
            fontSize: 'clamp(3.2rem, 6.5vw, 7rem)',
            fontWeight: 900,
            lineHeight: 1.02,
            color: '#FFFFFF',
            letterSpacing: '-3px',
            marginBottom: '24px',
            marginTop: 0,
            animation: 'fadeUp 0.55s 0.06s ease both',
          }}>
            {sl.headline}<br />
            <span style={{ color: sl.accent }}>{sl.headlineAccent}</span>
          </h1>

          {/* Sous-titre — plus lisible */}
          <p key={`sub-${current}`} style={{
            fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            maxWidth: '540px',
            marginBottom: '40px',
            marginTop: 0,
            animation: 'fadeUp 0.6s 0.12s ease both',
          }}>
            {sl.sub}
          </p>

          {/* CTAs — plus grands */}
          <div key={`ctas-${current}`} style={{
            display: 'flex', gap: '14px', flexWrap: 'wrap',
            animation: 'fadeUp 0.65s 0.18s ease both',
            marginBottom: '36px',
          }}>
            <a href="/#contact-form" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '16px 34px', backgroundColor: '#00D4C8',
              color: '#FFFFFF', fontWeight: 800, borderRadius: '14px',
              fontSize: '1.05rem', textDecoration: 'none',
              boxShadow: '0 6px 28px rgba(0,212,200,0.45)',
              whiteSpace: 'nowrap',
            }}>
              Discuter de mon projet <ArrowRight style={{ width: '19px', height: '19px' }} />
            </a>
            <a href="/#elvy" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '16px 34px',
              border: '1.5px solid rgba(255,255,255,0.35)',
              backgroundColor: 'rgba(255,255,255,0.08)',
              color: '#FFFFFF', fontWeight: 700, borderRadius: '14px',
              fontSize: '1.05rem', textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}>
              Découvrir la suite Elvy
            </a>
          </div>

          {/* Lieux */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['Genève', 'Sion', 'Barcelone'].map((l) => (
              <div key={l} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '6px 15px',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '999px',
                fontSize: '13px', color: 'rgba(255,255,255,0.55)',
                backgroundColor: 'rgba(255,255,255,0.05)',
              }}>
                <MapPin style={{ width: '11px', height: '11px', color: '#00D4C8' }} />
                {l}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Dots navigation */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '12px', zIndex: 3,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => { goTo(i); startTimer(); }} style={{
            width: i === current ? '36px' : '9px',
            height: '9px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            backgroundColor: i === current ? '#00D4C8' : 'rgba(255,255,255,0.28)',
            transition: 'all 0.4s ease',
          }} />
        ))}
      </div>

      {/* Badge Odoo */}
      <div style={{
        position: 'absolute', top: '88px', right: '36px', zIndex: 3,
        backgroundColor: 'rgba(11,15,25,0.7)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '16px', padding: '12px 18px',
        display: 'flex', alignItems: 'center', gap: '10px',
      }}>
        <div style={{
          width: '36px', height: '36px', backgroundColor: '#F59E0B',
          borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Award style={{ width: '18px', height: '18px', color: '#FFFFFF' }} />
        </div>
        <div>
          <p style={{ fontSize: '12px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>Odoo Gold Partner</p>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', margin: 0 }}>Certifié Suisse</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
import { useEffect, useState } from 'react';
import { Award, MapPin, ArrowRight } from 'lucide-react';

const slides = [
  {
    img: '/frustrated-woman.jpg',
    accent: '#00D4C8',
    badge: '⚠ Le problème',
    badgeBg: 'rgba(0,212,200,0.15)',
    badgeBorder: 'rgba(0,212,200,0.3)',
    badgeColor: '#00D4C8',
    headline: 'Vous pilotez encore',
    headlineAccent: 'à l\'aveugle ?',
    sub: 'Excel, données éparpillées, marges floues… La plupart des PME perdent 15 à 20% de marge faute de visibilité.',
  },
  {
    img: '/happy-man.jpg',
    accent: '#F59E0B',
    badge: '✓ La solution',
    badgeBg: 'rgba(245,158,11,0.15)',
    badgeBorder: 'rgba(245,158,11,0.3)',
    badgeColor: '#F59E0B',
    headline: 'Avec Odoo,',
    headlineAccent: 'tout change.',
    sub: 'D4E déploie votre ERP en quelques jours. Pilotage en temps réel, marges visibles, équipes synchronisées.',
  },
  {
    img: '/happy-woman.jpg',
    accent: '#00D4C8',
    badge: '🚀 Le résultat',
    badgeBg: 'rgba(0,212,200,0.15)',
    badgeBorder: 'rgba(0,212,200,0.3)',
    badgeColor: '#00D4C8',
    headline: 'Votre activité',
    headlineAccent: 'tourne enfin.',
    sub: 'Nos clients gagnent en moyenne 2h/jour par collaborateur. Opérationnel en quelques jours, pas en plusieurs mois.',
  },
];

export function HeroIntegrateur() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number|null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [current]);

  function goTo(idx: number) {
    if (idx === current || animating) return;
    setAnimating(true);
    setPrev(current);
    setCurrent(idx);
    setTimeout(() => { setPrev(null); setAnimating(false); }, 900);
  }

  const s = slides[current];

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>

      {/* BG Images */}
      {slides.map((sl, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${sl.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 0.9s cubic-bezier(0.4,0,0.2,1)',
          opacity: i === current ? 1 : 0,
          transform: i === current ? 'scale(1.04)' : 'scale(1)',
          transitionProperty: 'opacity, transform',
          transitionDuration: '0.9s, 6s',
          transitionTimingFunction: 'ease, ease-out',
          zIndex: 0,
        }} />
      ))}

      {/* Overlay gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(90deg, rgba(11,15,25,0.82) 0%, rgba(11,15,25,0.55) 60%, rgba(11,15,25,0.2) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(0deg, rgba(11,15,25,0.7) 0%, transparent 40%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '800px',
        margin: '0 auto 0 8vw',
        padding: '0 24px',
      }}>

        {/* Badge */}
        <div key={current + '-badge'} style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '7px 18px',
          border: `1px solid ${s.badgeBorder}`,
          borderRadius: '999px',
          backgroundColor: s.badgeBg,
          marginBottom: '24px',
          animation: 'fadeUp 0.6s ease both',
        }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: s.badgeColor }}>{s.badge}</span>
        </div>

        {/* H1 */}
        <h1 key={current + '-h1'} style={{
          fontSize: 'clamp(2.8rem, 6vw, 6rem)',
          fontWeight: 900,
          lineHeight: 1.0,
          color: '#FFFFFF',
          letterSpacing: '-2px',
          marginBottom: '20px',
          animation: 'fadeUp 0.65s 0.05s ease both',
        }}>
          {s.headline}<br />
          <span style={{ color: s.accent }}>{s.headlineAccent}</span>
        </h1>

        {/* Sub */}
        <p key={current + '-sub'} style={{
          fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.65,
          maxWidth: '540px',
          marginBottom: '36px',
          animation: 'fadeUp 0.7s 0.1s ease both',
        }}>
          {s.sub}
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '14px', flexWrap: 'wrap',
          animation: 'fadeUp 0.75s 0.15s ease both',
        }}>
          <a href="/#contact-form" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 30px', backgroundColor: '#00D4C8',
            color: '#FFFFFF', fontWeight: 700, borderRadius: '12px',
            fontSize: '1rem', textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(0,212,200,0.4)',
          }}>
            Discuter de mon projet <ArrowRight style={{ width: '18px', height: '18px' }} />
          </a>
          <a href="/#elvy" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 30px',
            border: '1px solid rgba(255,255,255,0.3)',
            backgroundColor: 'rgba(255,255,255,0.08)',
            color: '#FFFFFF', fontWeight: 600, borderRadius: '12px',
            fontSize: '1rem', textDecoration: 'none',
            backdropFilter: 'blur(4px)',
          }}>
            Découvrir la suite Elvy
          </a>
        </div>

        {/* Locations */}
        <div style={{
          display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap',
          animation: 'fadeUp 0.8s 0.2s ease both',
        }}>
          {['Genève', 'Sion', 'Barcelone'].map((l) => (
            <div key={l} style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '5px 14px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '999px',
              fontSize: '12px', color: 'rgba(255,255,255,0.6)',
              backgroundColor: 'rgba(255,255,255,0.06)',
            }}>
              <MapPin style={{ width: '11px', height: '11px', color: '#00D4C8' }} />
              {l}
            </div>
          ))}
        </div>
      </div>

      {/* Progress dots */}
      <div style={{
        position: 'absolute', bottom: '36px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '10px', zIndex: 3,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === current ? '32px' : '8px',
            height: '8px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            backgroundColor: i === current ? '#00D4C8' : 'rgba(255,255,255,0.35)',
            transition: 'all 0.4s ease',
          }} />
        ))}
      </div>

      {/* Badge Odoo Gold */}
      <div style={{
        position: 'absolute', top: '100px', right: '40px', zIndex: 3,
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '14px', padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <div style={{
          width: '32px', height: '32px', backgroundColor: '#F59E0B',
          borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Award style={{ width: '16px', height: '16px', color: '#FFFFFF' }} />
        </div>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>Odoo Gold Partner</p>
          <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Certifié Suisse</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
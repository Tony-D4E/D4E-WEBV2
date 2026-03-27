import { Button } from '@/components/ui/button';
import { ArrowRight, Award, MapPin, CheckCircle, TrendingUp, Clock, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const checks = ['Prix fixe transparent', 'Déploiement en quelques jours', 'Spécificités suisses incluses'];

const kpis = [
  { icon: TrendingUp, value: '150+', label: 'Projets réalisés' },
  { icon: Users,      value: '4 ans', label: "D'expertise" },
  { icon: Clock,      value: '24h',   label: 'Réponse garantie' },
];

export function HeroIntegrateur() {
  const { ref: leftRef,  isVisible: leftVisible  } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section style={{
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background subtle gradient */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(0,212,200,0.06) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 40% at 20% 80%, rgba(245,158,11,0.04) 0%, transparent 60%)',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

          {/* LEFT */}
          <div
            ref={leftRef}
            className={`animate-on-scroll ${leftVisible ? 'is-visible' : ''}`}
          >
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 18px', backgroundColor: '#F59E0B',
              borderRadius: '999px', marginBottom: '32px',
              boxShadow: '0 4px 20px rgba(245,158,11,0.3)',
            }}>
              <Award style={{ width: '16px', height: '16px', color: '#FFFFFF' }} />
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>
                Gold Partner Odoo · Suisse
              </span>
            </div>

            {/* H1 massif */}
            <h1 style={{
              fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              color: '#0F1D3A',
              marginBottom: '24px',
              letterSpacing: '-2px',
            }}>
              Éditeur &amp;{' '}
              intégrateur{' '}
              <span style={{ color: '#00D4C8' }}>Odoo</span>{' '}
              en Suisse
            </h1>

            <p style={{
              fontSize: '1.2rem', color: '#64748B', lineHeight: 1.7,
              marginBottom: '32px', maxWidth: '480px',
            }}>
              D4E conçoit la suite Elvy — des solutions métier prêtes à l'emploi
              pour le BTP, le juridique et l'imprimerie, construites sur Odoo Enterprise.
            </p>

            {/* Checks */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
              {checks.map((c) => (
                <div key={c} style={{
                  display: 'flex', alignItems: 'center', gap: '7px',
                  padding: '7px 14px', border: '1px solid #E2E8F0',
                  borderRadius: '999px', fontSize: '13px', color: '#334155',
                  backgroundColor: '#FFFFFF',
                }}>
                  <CheckCircle style={{ width: '14px', height: '14px', color: '#00D4C8', flexShrink: 0 }} />
                  {c}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a href="/#elvy" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', backgroundColor: '#00D4C8',
                color: '#FFFFFF', fontWeight: 700, borderRadius: '12px',
                fontSize: '1rem', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,212,200,0.35)',
                transition: 'background 0.2s',
              }}>
                Découvrir la suite Elvy
                <ArrowRight style={{ width: '18px', height: '18px' }} />
              </a>
              <a href="/#contact-form" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', backgroundColor: '#F59E0B',
                color: '#FFFFFF', fontWeight: 700, borderRadius: '12px',
                fontSize: '1rem', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(245,158,11,0.3)',
              }}>
                Discuter de mon projet
              </a>
            </div>

            {/* Lieux */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Genève', 'Sion', 'Barcelone'].map((l) => (
                <div key={l} style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  padding: '5px 14px', border: '1px solid #E2E8F0',
                  borderRadius: '999px', fontSize: '12px', color: '#94A3B8',
                }}>
                  <MapPin style={{ width: '11px', height: '11px', color: '#00D4C8' }} />
                  {l}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            ref={rightRef}
            className={`animate-on-scroll delay-1 ${rightVisible ? 'is-visible' : ''}`}
            style={{ position: 'relative' }}
          >
            {/* Image principale */}
            <div style={{
              borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(15,29,58,0.15)',
              border: '1px solid rgba(0,212,200,0.1)',
              position: 'relative',
            }}>
              <img
                src="/team-working.jpg"
                alt="Équipe Digital4Efficiency"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
              {/* Overlay gradient bas */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                background: 'linear-gradient(to top, rgba(15,29,58,0.9), transparent)',
              }} />
              {/* Team overlay */}
              <div style={{
                position: 'absolute', bottom: '20px', left: '20px',
                display: 'flex', alignItems: 'center', gap: '12px',
              }}>
                <div style={{ display: 'flex' }}>
                  <img src="/team-antonio.jpg" alt="Antonio"
                    style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #00D4C8', objectFit: 'cover', marginRight: '-10px' }} />
                  <img src="/team-laetitia.jpg" alt="Laëtitia"
                    style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #F59E0B', objectFit: 'cover' }} />
                </div>
                <div>
                  <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px', margin: 0 }}>Antonio &amp; Laëtitia</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', margin: 0 }}>Vos interlocuteurs dédiés</p>
                </div>
              </div>
            </div>

            {/* KPI cards flottantes */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
              gap: '12px', marginTop: '16px',
            }}>
              {kpis.map((k, i) => (
                <div key={i} style={{
                  backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0',
                  borderRadius: '14px', padding: '16px 12px', textAlign: 'center',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}>
                  <div style={{
                    width: '36px', height: '36px', backgroundColor: 'rgba(0,212,200,0.1)',
                    borderRadius: '10px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', margin: '0 auto 8px',
                  }}>
                    <k.icon style={{ width: '16px', height: '16px', color: '#00D4C8' }} />
                  </div>
                  <p style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0F1D3A', margin: 0 }}>{k.value}</p>
                  <p style={{ fontSize: '0.7rem', color: '#94A3B8', margin: '2px 0 0' }}>{k.label}</p>
                </div>
              ))}
            </div>

            {/* Badge Odoo flottant */}
            <div style={{
              position: 'absolute', top: '-16px', right: '-16px',
              backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0',
              borderRadius: '14px', padding: '10px 16px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <div style={{
                width: '32px', height: '32px', backgroundColor: '#F59E0B',
                borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Award style={{ width: '16px', height: '16px', color: '#FFFFFF' }} />
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#0F1D3A', margin: 0 }}>Odoo Gold Partner</p>
                <p style={{ fontSize: '10px', color: '#94A3B8', margin: 0 }}>Certifié Suisse</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
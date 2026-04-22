import React from 'react';
import { ResponsiveImage } from '../components/ResponsiveImage';

const EntreprisePage: React.FC = () => {
  return (
    <>
      <style>{`
        #d4e-ent, #d4e-ent * { box-sizing: border-box !important; }
        #d4e-ent { font-family: 'Inter', sans-serif !important; background-color: #F0FDF9 !important; min-height: 100vh !important; overflow-x: hidden !important; }
        #d4e-ent .ent-dark, #d4e-ent .ent-dark * { color: #FFFFFF !important; }

        /* HERO FULL WIDTH */
        #d4e-ent .ent-hero {
          position: relative !important; min-height: 600px !important;
          display: flex !important; align-items: flex-end !important;
          overflow: hidden !important;
        }
        #d4e-ent .ent-hero-img { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; object-fit: cover !important; object-position: center 30% !important; }
        #d4e-ent .ent-hero-overlay { position: absolute !important; inset: 0 !important; background: linear-gradient(to top, rgba(11,15,25,0.95) 0%, rgba(11,15,25,0.5) 50%, rgba(11,15,25,0.15) 100%) !important; }
        #d4e-ent .ent-hero-inner { position: relative !important; z-index: 1 !important; padding: 64px 48px !important; max-width: 1280px !important; margin: 0 auto !important; width: 100% !important; }
        #d4e-ent .ent-gold-logo { position: absolute !important; top: 100px !important; right: 48px !important; height: 80px !important; z-index: 2 !important; }
        #d4e-ent .ent-hero-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: clamp(44px, 7vw, 76px) !important; font-weight: 700 !important;
          line-height: 1 !important; letter-spacing: -0.03em !important; margin: 0 0 20px !important;
        }
        #d4e-ent .ent-gradient {
          background: linear-gradient(90deg, #00E5CC, #00D4C8, #06B6D4) !important;
          -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; background-clip: text !important;
        }
        #d4e-ent .ent-hero-sub { font-size: 22px !important; color: rgba(255,255,255,0.7) !important; margin: 0 !important; max-width: 580px !important; line-height: 1.5 !important; }

        /* STATS BAR */
        #d4e-ent .ent-stats { display: flex !important; justify-content: center !important; gap: 0 !important; flex-wrap: wrap !important; background-color: #0F172A !important; }
        #d4e-ent .ent-stat {
          flex: 1 1 200px !important; padding: 40px 32px !important; text-align: center !important;
          border-right: 1px solid rgba(255,255,255,0.06) !important;
        }
        #d4e-ent .ent-stat:last-child { border-right: none !important; }
        #d4e-ent .ent-stat-val { font-family: 'Space Grotesk', sans-serif !important; font-size: 40px !important; font-weight: 700 !important; color: #00D4C8 !important; margin-bottom: 4px !important; }
        #d4e-ent .ent-stat-label { font-size: 14px !important; color: rgba(255,255,255,0.45) !important; }

        /* STORY */
        #d4e-ent .ent-story { max-width: 800px !important; margin: 0 auto !important; }
        #d4e-ent .ent-story-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 36px !important; font-weight: 700 !important; color: #0B0F19 !important;
          margin: 0 0 28px !important; text-align: center !important;
        }
        #d4e-ent .ent-story-text { font-size: 18px !important; color: #475569 !important; line-height: 1.9 !important; margin: 0 0 20px !important; text-align: center !important; }

        /* FOUNDERS */
        #d4e-ent .ent-founder {
          display: flex !important; align-items: center !important; gap: 40px !important;
          padding: 48px !important; border-radius: 28px !important;
          background-color: #0F172A !important; border: 1px solid rgba(255,255,255,0.06) !important;
        }
        #d4e-ent .ent-founder-photo {
          width: 180px !important; height: 180px !important;
          border-radius: 24px !important; object-fit: cover !important; flex-shrink: 0 !important;
          border: 3px solid transparent !important;
        }
        #d4e-ent .ent-founder-name { font-family: 'Space Grotesk', sans-serif !important; font-size: 26px !important; font-weight: 700 !important; color: #FFFFFF !important; margin-bottom: 4px !important; }
        #d4e-ent .ent-founder-role { font-size: 16px !important; font-weight: 600 !important; margin-bottom: 14px !important; }
        #d4e-ent .ent-founder-desc { font-size: 16px !important; color: rgba(255,255,255,0.55) !important; line-height: 1.7 !important; }
        #d4e-ent .ent-founder-contact { margin-top: 16px !important; font-size: 14px !important; }
        #d4e-ent .ent-founder-contact a { color: rgba(255,255,255,0.4) !important; text-decoration: none !important; transition: color 0.2s !important; }
        #d4e-ent .ent-founder-contact a:hover { color: #00D4C8 !important; }

        /* TIMELINE */
        #d4e-ent .ent-tl-item { display: flex !important; gap: 24px !important; align-items: flex-start !important; margin-bottom: 32px !important; }
        #d4e-ent .ent-tl-year {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 20px !important; font-weight: 700 !important; color: #00D4C8 !important;
          min-width: 64px !important; flex-shrink: 0 !important; padding-top: 2px !important;
        }
        #d4e-ent .ent-tl-text { font-size: 16px !important; color: #475569 !important; line-height: 1.6 !important; }
        #d4e-ent .ent-tl-dot {
          width: 12px !important; height: 12px !important; border-radius: 50% !important;
          background-color: #00D4C8 !important; flex-shrink: 0 !important; margin-top: 6px !important;
          box-shadow: 0 0 10px rgba(0,212,200,0.4) !important;
        }

        /* OFFICES */
        #d4e-ent .ent-office {
          background-color: #FFFFFF !important; border: 1.5px solid #E2E8F0 !important;
          border-radius: 20px !important; padding: 32px 28px !important; text-align: center !important;
          transition: all 0.3s !important;
        }
        #d4e-ent .ent-office:hover { border-color: #00D4C8 !important; transform: translateY(-4px) !important; box-shadow: 0 12px 32px rgba(0,0,0,0.06) !important; }
        #d4e-ent .ent-office-city { font-family: 'Space Grotesk', sans-serif !important; font-size: 22px !important; font-weight: 700 !important; color: #0B0F19 !important; margin-bottom: 6px !important; }
        #d4e-ent .ent-office-addr { font-size: 14px !important; color: #64748B !important; line-height: 1.5 !important; }

        @media (max-width: 860px) {
          #d4e-ent .ent-founder { flex-direction: column !important; text-align: center !important; padding: 36px 28px !important; }
          #d4e-ent .ent-founder-photo { width: 140px !important; height: 140px !important; }
          #d4e-ent .ent-gold-logo { height: 56px !important; top: 80px !important; right: 24px !important; }
          #d4e-ent .ent-hero-inner { padding: 40px 24px !important; }
          #d4e-ent .ent-offices-grid { grid-template-columns: 1fr !important; }
          #d4e-ent .ent-founders-grid { flex-direction: column !important; }
        }
      `}</style>

      <div id="d4e-ent">
        {/* HERO FULL WIDTH */}
        <div className="ent-hero">
          <ResponsiveImage
            src="/team-odoo-event.jpg"
            alt="Equipe D4E à Odoo Experience"
            className="ent-hero-img"
            pictureStyle={{ position: 'absolute', inset: 0, display: 'block' }}
            widths={[640, 1024]}
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
          />
          <div className="ent-hero-overlay" />
          <img src="/odoo-gold-partner.svg" alt="Odoo Gold Partner" className="ent-gold-logo" />
          <div className="ent-hero-inner">
            <div className="ent-hero-title">
              <span style={{ color: '#FFFFFF' }}>Deux passionnés,</span><br />
              <span className="ent-gradient">une conviction.</span>
            </div>
            <p className="ent-hero-sub">
              On a découvert Odoo en l'installant pour nous-mêmes. On l'a trouvé si bon qu'on en a fait notre métier.
            </p>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="ent-stats ent-dark">
          {[
            { val: '2017', label: 'Création de D4E' },
            { val: 'Gold', label: 'Partenaire Odoo' },
            { val: '3', label: 'Bureaux en Europe' },
            { val: '4+', label: 'Solutions Elvy' },
          ].map((s, i) => (
            <div key={i} className="ent-stat">
              <div className="ent-stat-val">{s.val}</div>
              <div className="ent-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* STORY */}
        <div style={{ padding: '80px 32px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="ent-story">
            <div className="ent-story-title">Notre histoire</div>
            <p className="ent-story-text">
              Avant D4E, on faisait de l'intégration entre notre solution de gestion documentaire et les logiciels de nos clients. En 2017, on installe Odoo pour nos propres besoins. Le déclic est immédiat.
            </p>
            <p className="ent-story-text">
              Cet ERP est pensé pour les PME : modulaire, ouvert, puissant. On fonde Digital4Efficiency avec une idée simple : apporter aux PME suisses un outil qui tourne vraiment, intégré par des gens qui l'utilisent eux-mêmes au quotidien.
            </p>
            <p className="ent-story-text" style={{ fontWeight: 600, color: '#0B0F19' }}>
              Pas de la théorie. Du terrain.
            </p>
          </div>
        </div>

        {/* FOUNDERS */}
        <div style={{ padding: '0 32px 80px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="ent-founders-grid" style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            <div className="ent-founder ent-dark" style={{ flex: '1 1 440px' }}>
              <ResponsiveImage
                src="/team-antonio-new.jpg"
                alt="Antonio Spedicato"
                className="ent-founder-photo"
                pictureStyle={{ flexShrink: 0 }}
                widths={[160, 320]}
                sizes="180px"
                width={180}
                height={180}
                style={{ borderColor: '#00D4C8' }}
              />
              <div>
                <div className="ent-founder-name">Antonio Spedicato</div>
                <div className="ent-founder-role" style={{ color: '#00D4C8' }}>Fondateur &amp; Commercial</div>
                <p className="ent-founder-desc">Le contact client, la vision produit, la stratégie. Antonio pilote D4E côté business et s'assure que chaque projet répond à un vrai besoin terrain.</p>
                <div className="ent-founder-contact">
                  <a href="tel:+41764344595">+41 76 434 45 95</a>
                  <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 10px' }}>·</span>
                  <a href="mailto:antonio@d4e.cool">antonio@d4e.cool</a>
                </div>
              </div>
            </div>

            <div className="ent-founder ent-dark" style={{ flex: '1 1 440px' }}>
              <ResponsiveImage
                src="/team-alexandre.jpg"
                alt="Alexandre"
                className="ent-founder-photo"
                pictureStyle={{ flexShrink: 0 }}
                widths={[160, 320]}
                sizes="180px"
                width={180}
                height={180}
                style={{ borderColor: '#F59E0B' }}
              />
              <div>
                <div className="ent-founder-name">Alexandre</div>
                <div className="ent-founder-role" style={{ color: '#F59E0B' }}>Co-fondateur &amp; Technique</div>
                <p className="ent-founder-desc">L'architecture, le code, les intégrations complexes. Alexandre est le pilier technique de D4E et le cerveau derrière les solutions Elvy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div style={{ padding: '0 32px 80px', maxWidth: 800, margin: '0 auto' }}>
          <div className="ent-story-title">Nos étapes clés</div>
          {[
            { year: '2017', text: 'Création de D4E. On installe Odoo pour nos propres besoins. Le déclic.' },
            { year: '2019', text: 'Partenaire Odoo officiel. Premiers clients en Suisse romande.' },
            { year: '2022', text: '25 collaborateurs. Lancement d\'ElvyBât pour le secteur BTP.' },
            { year: '2025', text: 'Partenaire Odoo Gold. Bureau à Barcelone. Gamme Elvy complète.' },
          ].map((t, i) => (
            <div key={i} className="ent-tl-item">
              <div className="ent-tl-year">{t.year}</div>
              <div className="ent-tl-dot" />
              <div className="ent-tl-text">{t.text}</div>
            </div>
          ))}
        </div>

        {/* OFFICES */}
        <div style={{ padding: '0 32px 100px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="ent-story-title">Nos bureaux</div>
          <div className="ent-offices-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { city: 'Genève', addr: 'Chemin du Pavillon 2\n1218 Le Grand-Saconnex', dot: '#00D4C8' },
              { city: 'Sion', addr: 'Place du Midi 48\n1950 Sion', dot: '#F59E0B' },
              { city: 'Barcelone', addr: 'Espagne', dot: '#8B5CF6' },
            ].map((o, i) => (
              <div key={i} className="ent-office">
                <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: o.dot, margin: '0 auto 16px', boxShadow: `0 0 12px ${o.dot}50` }} />
                <div className="ent-office-city">{o.city}</div>
                <div className="ent-office-addr">{o.addr.split('\n').map((l, j) => <span key={j}>{l}<br/></span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EntreprisePage;

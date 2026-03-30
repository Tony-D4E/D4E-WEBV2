import React from 'react';

const EntreprisePage: React.FC = () => {
  return (
    <>
      <style>{`
        #d4e-entreprise, #d4e-entreprise * { box-sizing: border-box !important; }
        #d4e-entreprise { font-family: 'Inter', sans-serif !important; background-color: #F0FDF9 !important; min-height: 100vh !important; padding-bottom: 100px !important; }
        #d4e-entreprise .ep-dark, #d4e-entreprise .ep-dark * { color: #FFFFFF !important; }
        #d4e-entreprise .ep-title { font-family: 'Space Grotesk', sans-serif !important; font-size: clamp(36px, 5vw, 52px) !important; font-weight: 700 !important; color: #0B0F19 !important; margin: 0 0 16px !important; letter-spacing: -0.02em !important; }
        #d4e-entreprise .ep-subtitle { font-size: 20px !important; color: #475569 !important; margin: 0 !important; line-height: 1.6 !important; max-width: 640px !important; }
        #d4e-entreprise .ep-h2 { font-family: 'Space Grotesk', sans-serif !important; font-size: 28px !important; font-weight: 700 !important; color: #0B0F19 !important; margin: 0 0 16px !important; }
        #d4e-entreprise .ep-h2-white { font-family: 'Space Grotesk', sans-serif !important; font-size: 28px !important; font-weight: 700 !important; color: #FFFFFF !important; margin: 0 0 16px !important; }
        #d4e-entreprise .ep-text { font-size: 16px !important; color: #475569 !important; line-height: 1.8 !important; margin: 0 0 16px !important; }
        #d4e-entreprise .ep-text-light { font-size: 16px !important; color: rgba(255,255,255,0.6) !important; line-height: 1.8 !important; margin: 0 0 16px !important; }
        #d4e-entreprise .ep-card { background-color: #0F172A !important; border-radius: 24px !important; padding: 48px 44px !important; border: 1px solid rgba(255,255,255,0.06) !important; }
        #d4e-entreprise .ep-card-white { background-color: #FFFFFF !important; border-radius: 20px !important; padding: 40px 36px !important; border: 1px solid #E2E8F0 !important; box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important; }
        #d4e-entreprise .ep-badge { display: inline-flex !important; align-items: center !important; gap: 8px !important; background-color: rgba(245,158,11,0.1) !important; border: 1px solid rgba(245,158,11,0.3) !important; border-radius: 100px !important; padding: 8px 20px !important; font-size: 14px !important; font-weight: 600 !important; color: #F59E0B !important; margin-bottom: 28px !important; }
        #d4e-entreprise .ep-team-photo { width: 140px !important; height: 140px !important; border-radius: 20px !important; object-fit: cover !important; flex-shrink: 0 !important; }
        #d4e-entreprise .ep-team-name { font-family: 'Space Grotesk', sans-serif !important; font-size: 22px !important; font-weight: 700 !important; color: #FFFFFF !important; margin-bottom: 4px !important; }
        #d4e-entreprise .ep-team-role { font-size: 14px !important; font-weight: 600 !important; margin-bottom: 12px !important; }
        #d4e-entreprise .ep-team-desc { font-size: 15px !important; color: rgba(255,255,255,0.5) !important; line-height: 1.7 !important; }
        #d4e-entreprise .ep-timeline { display: flex !important; gap: 0 !important; flex-wrap: wrap !important; }
        #d4e-entreprise .ep-tl-item { flex: 1 1 200px !important; padding: 24px 28px !important; position: relative !important; border-left: 2px solid rgba(0,212,200,0.2) !important; }
        #d4e-entreprise .ep-tl-year { font-family: 'Space Grotesk', sans-serif !important; font-size: 32px !important; font-weight: 700 !important; color: #00D4C8 !important; margin-bottom: 8px !important; }
        #d4e-entreprise .ep-tl-text { font-size: 14px !important; color: rgba(255,255,255,0.5) !important; line-height: 1.6 !important; }
        #d4e-entreprise .ep-loc { display: flex !important; align-items: center !important; gap: 12px !important; padding: 20px 0 !important; border-bottom: 1px solid #F1F5F9 !important; }
        #d4e-entreprise .ep-loc:last-child { border-bottom: none !important; }
        #d4e-entreprise .ep-loc-dot { width: 10px !important; height: 10px !important; border-radius: 50% !important; flex-shrink: 0 !important; }
        #d4e-entreprise .ep-loc-city { font-family: 'Space Grotesk', sans-serif !important; font-size: 17px !important; font-weight: 700 !important; color: #0B0F19 !important; }
        #d4e-entreprise .ep-loc-addr { font-size: 14px !important; color: #64748B !important; }
        @media (max-width: 768px) {
          #d4e-entreprise .ep-team-grid { flex-direction: column !important; }
          #d4e-entreprise .ep-cols { flex-direction: column !important; }
        }
      `}</style>

      <div id="d4e-entreprise">
        {/* HEADER */}
        <div style={{ padding: '110px 32px 52px', maxWidth: 1280, margin: '0 auto' }}>
          <img src="/odoo-gold-badge.png" alt="Odoo Gold Partner" style={{ height: 56, marginBottom: 28 }} />
          <h1 className="ep-title">Deux passionnés, une conviction</h1>
          <p className="ep-subtitle">
            On a découvert Odoo en l'installant pour nous-mêmes. On l'a trouvé si bon qu'on en a fait notre métier.
          </p>
        </div>

        {/* HISTOIRE */}
        <div style={{ padding: '0 32px 60px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="ep-card ep-dark">
            <div className="ep-h2-white" style={{ marginBottom: 28 }}>Notre histoire</div>
            <p className="ep-text-light">
              Avant D4E, on faisait de l'intégration entre notre solution de gestion documentaire (GED) et les logiciels de nos clients. En 2017, on installe Odoo pour nos propres besoins. Le déclic est immédiat : cet ERP est pensé pour les PME, modulaire, ouvert, puissant.
            </p>
            <p className="ep-text-light">
              On fonde Digital4Efficiency avec une idée simple : apporter aux PME suisses un outil qui tourne vraiment, intégré par des gens qui l'utilisent eux-mêmes au quotidien. Pas de la théorie. Du terrain.
            </p>
            <p className="ep-text-light" style={{ marginBottom: 36 }}>
              Aujourd'hui, D4E est partenaire Odoo Gold, avec des bureaux à Genève, Sion et Barcelone, et des solutions métiers (ElvyBat, ElvyDoc, ElvyPrint) que personne d'autre ne propose.
            </p>

            <div className="ep-timeline">
              <div className="ep-tl-item">
                <div className="ep-tl-year">2017</div>
                <div className="ep-tl-text">Création de D4E. Premiers pas avec Odoo pour nos propres besoins.</div>
              </div>
              <div className="ep-tl-item">
                <div className="ep-tl-year">2019</div>
                <div className="ep-tl-text">Partenaire Odoo officiel. Premiers clients en Suisse romande.</div>
              </div>
              <div className="ep-tl-item">
                <div className="ep-tl-year">2022</div>
                <div className="ep-tl-text">25 collaborateurs. Lancement d'ElvyBat pour le BTP.</div>
              </div>
              <div className="ep-tl-item">
                <div className="ep-tl-year">2025</div>
                <div className="ep-tl-text">Partenaire Odoo Gold. Bureau à Barcelone. Gamme Elvy complète.</div>
              </div>
            </div>
          </div>
        </div>

        {/* ÉQUIPE */}
        <div style={{ padding: '0 32px 60px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="ep-h2" style={{ marginBottom: 28 }}>Les fondateurs</div>
          <div className="ep-team-grid" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div className="ep-card ep-dark" style={{ flex: '1 1 400px' }}>
              <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <img src="/team-antonio-new.jpg" alt="Antonio Spedicato" className="ep-team-photo" />
                <div style={{ flex: '1 1 200px' }}>
                  <div className="ep-team-name">Antonio Spedicato</div>
                  <div className="ep-team-role" style={{ color: '#00D4C8' }}>Fondateur &amp; Commercial</div>
                  <p className="ep-team-desc">
                    Le contact client, la vision produit, la stratégie. Antonio pilote D4E côté business et s'assure que chaque projet répond à un vrai besoin terrain.
                  </p>
                  <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                    <a href="tel:+41764344595" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>+41 76 434 45 95</a>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                    <a href="mailto:antonio@d4e.cool" style={{ fontSize: 14, color: '#00D4C8', textDecoration: 'none' }}>antonio@d4e.cool</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="ep-card ep-dark" style={{ flex: '1 1 400px' }}>
              <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <img src="/team-alexandre.jpg" alt="Alexandre" className="ep-team-photo" />
                <div style={{ flex: '1 1 200px' }}>
                  <div className="ep-team-name">Alexandre</div>
                  <div className="ep-team-role" style={{ color: '#F59E0B' }}>Co-fondateur &amp; Technique</div>
                  <p className="ep-team-desc">
                    L'architecture, le code, les intégrations complexes. Alexandre est le pilier technique de D4E et le cerveau derrière les solutions Elvy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BUREAUX */}
        <div style={{ padding: '0 32px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="ep-cols" style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            <div className="ep-card-white" style={{ flex: '1 1 360px' }}>
              <div className="ep-h2" style={{ marginBottom: 24 }}>Nos bureaux</div>
              <div className="ep-loc">
                <div className="ep-loc-dot" style={{ backgroundColor: '#00D4C8' }} />
                <div>
                  <div className="ep-loc-city">Genève</div>
                  <div className="ep-loc-addr">Chemin du Pavillon 2, 1218 Le Grand-Saconnex</div>
                </div>
              </div>
              <div className="ep-loc">
                <div className="ep-loc-dot" style={{ backgroundColor: '#F59E0B' }} />
                <div>
                  <div className="ep-loc-city">Sion</div>
                  <div className="ep-loc-addr">Place du Midi 48, 1950 Sion</div>
                </div>
              </div>
              <div className="ep-loc">
                <div className="ep-loc-dot" style={{ backgroundColor: '#8B5CF6' }} />
                <div>
                  <div className="ep-loc-city">Barcelone</div>
                  <div className="ep-loc-addr">Espagne</div>
                </div>
              </div>
            </div>

            <div className="ep-card-white" style={{ flex: '1 1 360px' }}>
              <div className="ep-h2" style={{ marginBottom: 24 }}>En chiffres</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[
                  { val: '2017', label: 'Année de création' },
                  { val: 'Gold', label: 'Partenaire Odoo' },
                  { val: '3', label: 'Bureaux en Europe' },
                  { val: '4+', label: 'Solutions Elvy' },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center', padding: 20, backgroundColor: '#F0FDF9', borderRadius: 16 }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: '#00D4C8' }}>{s.val}</div>
                    <div style={{ fontSize: 13, color: '#64748B', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntreprisePage;

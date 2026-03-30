import React from 'react';

const TarifsPage: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('offres-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        #d4e-offres, #d4e-offres * { box-sizing: border-box !important; }
        #d4e-offres { font-family: 'Inter', sans-serif !important; background-color: #F0FDF9 !important; min-height: 100vh !important; overflow-x: hidden !important; }
        #d4e-offres .of-dark, #d4e-offres .of-dark * { color: #FFFFFF !important; }

        /* HERO */
        #d4e-offres .of-hero {
          position: relative !important; min-height: 540px !important;
          display: flex !important; align-items: center !important;
          overflow: hidden !important;
        }
        #d4e-offres .of-hero-img { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; object-fit: cover !important; object-position: left center !important; }
        #d4e-offres .of-hero-overlay { position: absolute !important; inset: 0 !important; background: linear-gradient(to right, rgba(11,15,25,0.92) 0%, rgba(11,15,25,0.7) 50%, rgba(11,15,25,0.1) 100%) !important; }
        #d4e-offres .of-hero-inner { position: relative !important; z-index: 1 !important; padding: 140px 48px 80px !important; max-width: 1280px !important; margin: 0 auto !important; width: 100% !important; }
        #d4e-offres .of-gold-logo { position: absolute !important; top: 100px !important; right: 48px !important; height: 76px !important; z-index: 2 !important; }
        #d4e-offres .of-hero-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: clamp(48px, 7vw, 76px) !important; font-weight: 700 !important;
          line-height: 1 !important; letter-spacing: -0.03em !important; margin: 0 0 20px !important;
        }
        #d4e-offres .of-gradient { background: linear-gradient(90deg, #00E5CC, #00D4C8, #06B6D4) !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; background-clip: text !important; }
        #d4e-offres .of-hero-sub { font-size: 22px !important; color: rgba(255,255,255,0.7) !important; margin: 0 !important; max-width: 500px !important; line-height: 1.5 !important; }

        /* STARTER PACK - big feature */
        #d4e-offres .of-starter {
          background-color: #0F172A !important; border-radius: 32px !important;
          overflow: hidden !important; border: 1px solid rgba(0,212,200,0.15) !important;
        }
        #d4e-offres .of-starter-inner { display: flex !important; align-items: stretch !important; }
        #d4e-offres .of-starter-text { flex: 1 1 55% !important; padding: 56px 52px !important; }
        #d4e-offres .of-starter-photo { flex: 1 1 45% !important; min-height: 400px !important; position: relative !important; }
        #d4e-offres .of-starter-photo img { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; object-fit: cover !important; }
        #d4e-offres .of-section-title { font-family: 'Space Grotesk', sans-serif !important; font-size: 36px !important; font-weight: 700 !important; color: #0B0F19 !important; margin: 0 0 36px !important; }
        #d4e-offres .of-h2 { font-family: 'Space Grotesk', sans-serif !important; font-size: 28px !important; font-weight: 700 !important; margin: 0 0 12px !important; }
        #d4e-offres .of-h3 { font-family: 'Space Grotesk', sans-serif !important; font-size: 20px !important; font-weight: 700 !important; margin: 0 0 16px !important; }
        #d4e-offres .of-badge { display: inline-block !important; font-size: 13px !important; font-weight: 600 !important; padding: 6px 16px !important; border-radius: 100px !important; margin-bottom: 16px !important; }
        #d4e-offres .of-text { font-size: 17px !important; color: rgba(255,255,255,0.55) !important; line-height: 1.8 !important; }
        #d4e-offres .of-result { display: flex !important; align-items: flex-start !important; gap: 14px !important; margin-bottom: 16px !important; }
        #d4e-offres .of-check { width: 26px !important; height: 26px !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; font-size: 13px !important; font-weight: 700 !important; flex-shrink: 0 !important; margin-top: 2px !important; }
        #d4e-offres .of-result-text { font-size: 16px !important; color: rgba(255,255,255,0.7) !important; line-height: 1.5 !important; }
        #d4e-offres .of-btn {
          display: inline-block !important; background-color: #00D4C8 !important; color: #0B0F19 !important;
          border: none !important; border-radius: 14px !important; padding: 18px 36px !important;
          font-size: 17px !important; font-weight: 600 !important; cursor: pointer !important;
          font-family: 'Space Grotesk', sans-serif !important; text-decoration: none !important;
        }
        #d4e-offres .of-btn:hover { background-color: #00B4A6 !important; }

        /* PHOTO BAND */
        #d4e-offres .of-photo-band { width: 100% !important; height: 300px !important; object-fit: cover !important; border-radius: 28px !important; }

        /* COMPACT CARDS */
        #d4e-offres .of-card {
          background-color: #FFFFFF !important; border: 1.5px solid #E2E8F0 !important;
          border-radius: 24px !important; padding: 36px 28px !important;
          transition: all 0.3s !important; display: flex !important; flex-direction: column !important;
        }
        #d4e-offres .of-card:hover { transform: translateY(-4px) !important; box-shadow: 0 16px 40px rgba(0,0,0,0.06) !important; }
        #d4e-offres .of-card-img { width: 100% !important; height: 160px !important; object-fit: cover !important; border-radius: 16px !important; margin-bottom: 20px !important; }
        #d4e-offres .of-card-title { font-family: 'Space Grotesk', sans-serif !important; font-size: 22px !important; font-weight: 700 !important; color: #0B0F19 !important; margin-bottom: 8px !important; }
        #d4e-offres .of-card-desc { font-size: 15px !important; color: #64748B !important; line-height: 1.6 !important; margin-bottom: 20px !important; flex-grow: 1 !important; }
        #d4e-offres .of-card-feats { margin-bottom: 24px !important; }
        #d4e-offres .of-card-feat { display: flex !important; align-items: center !important; gap: 10px !important; margin-bottom: 8px !important; font-size: 14px !important; color: #475569 !important; }
        #d4e-offres .of-card-dot { width: 6px !important; height: 6px !important; border-radius: 50% !important; flex-shrink: 0 !important; }
        #d4e-offres .of-card-btn {
          display: block !important; text-align: center !important; padding: 14px !important;
          border-radius: 12px !important; font-size: 15px !important; font-weight: 600 !important;
          font-family: 'Space Grotesk', sans-serif !important; text-decoration: none !important;
          cursor: pointer !important; border: 1.5px solid #E2E8F0 !important;
          color: #0B0F19 !important; background-color: transparent !important;
          transition: all 0.2s !important; margin-top: auto !important;
        }
        #d4e-offres .of-card-btn:hover { border-color: #00D4C8 !important; color: #00B4A6 !important; }

        /* NOTE */
        #d4e-offres .of-note { background-color: #0F172A !important; border-radius: 28px !important; padding: 56px 52px !important; border: 1px solid rgba(255,255,255,0.06) !important; display: flex !important; align-items: center !important; gap: 48px !important; }
        #d4e-offres .of-note-img { width: 200px !important; height: 200px !important; border-radius: 24px !important; object-fit: cover !important; flex-shrink: 0 !important; }
        #d4e-offres .of-note-title { font-family: 'Space Grotesk', sans-serif !important; font-size: 28px !important; font-weight: 700 !important; color: #FFFFFF !important; margin-bottom: 12px !important; }
        #d4e-offres .of-note-text { font-size: 17px !important; color: rgba(255,255,255,0.55) !important; line-height: 1.7 !important; }
        #d4e-offres .of-note a { color: #00D4C8 !important; text-decoration: none !important; font-weight: 600 !important; }

        @media (max-width: 860px) {
          #d4e-offres .of-starter-inner { flex-direction: column !important; }
          #d4e-offres .of-starter-photo { min-height: 250px !important; }
          #d4e-offres .of-starter-text { padding: 40px 28px !important; }
          #d4e-offres .of-cards-grid { grid-template-columns: 1fr !important; }
          #d4e-offres .of-gold-logo { height: 56px !important; top: 80px !important; right: 24px !important; }
          #d4e-offres .of-hero-inner { padding: 120px 24px 60px !important; }
          #d4e-offres .of-note { flex-direction: column !important; padding: 40px 28px !important; }
          #d4e-offres .of-note-img { width: 100% !important; height: 200px !important; }
        }
      `}</style>

      <div id="d4e-offres">
        {/* HERO */}
        <div className="of-hero">
          <img src="/offres-hero.jpg" alt="" className="of-hero-img" />
          <div className="of-hero-overlay" />
          <img src="/odoo-gold-partner.svg" alt="Odoo Gold Partner" className="of-gold-logo" />
          <div className="of-hero-inner">
            <div className="of-hero-title">
              <span style={{ color: '#FFFFFF' }}>Nos</span>{' '}
              <span className="of-gradient">offres</span>
            </div>
            <p className="of-hero-sub">
              Pas de grille tarifaire générique. On construit une offre adaptée à votre contexte, votre taille et vos priorités.
            </p>
          </div>
        </div>

        {/* STARTER PACK */}
        <div style={{ padding: '72px 32px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="of-starter of-dark">
            <div className="of-starter-inner">
              <div className="of-starter-text">
                <div className="of-badge" style={{ backgroundColor: 'rgba(0,212,200,0.15)', color: '#00D4C8' }}>Démarrage rapide</div>
                <div className="of-h2" style={{ color: '#FFFFFF', fontSize: 32, marginBottom: 16 }}>Starter Pack Odoo</div>
                <p className="of-text" style={{ marginBottom: 32, maxWidth: 480 }}>
                  Votre gestion opérationnelle en 2 semaines. CRM, ventes, facturation, comptabilité. Opérationnel sans compétence technique.
                </p>

                <div className="of-h3" style={{ color: '#00D4C8', marginBottom: 20 }}>Ce que ça change</div>
                {[
                  'Une vision claire de votre pipeline commercial',
                  'Des devis et factures en quelques clics',
                  'Une comptabilité structurée et conforme',
                  'Fini les Excel dispersés',
                ].map((r, i) => (
                  <div key={i} className="of-result">
                    <div className="of-check" style={{ backgroundColor: 'rgba(0,212,200,0.15)', color: '#00D4C8' }}>✓</div>
                    <span className="of-result-text">{r}</span>
                  </div>
                ))}

                <div style={{ marginTop: 32 }}>
                  <button className="of-btn" onClick={scrollToContact}>Démarrer mon Starter Pack</button>
                </div>
              </div>
              <div className="of-starter-photo">
                <img src="/offres-happy.jpg" alt="Client satisfait" />
              </div>
            </div>
          </div>
        </div>

        {/* PHOTO BAND */}
        <div style={{ padding: '0 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
          <img src="/offres-collab.jpg" alt="Collaboration" className="of-photo-band" />
        </div>

        {/* 3 CARDS */}
        <div style={{ padding: '0 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="of-section-title" style={{ textAlign: 'center' }}>Nos autres accompagnements</div>
          <div className="of-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>

            <div className="of-card">
              <div className="of-badge" style={{ backgroundColor: '#EDE9FE', color: '#7C3AED' }}>Projet</div>
              <div className="of-card-title">Sur-mesure</div>
              <div className="of-card-desc">Intégration complète, développements spécifiques, solutions Elvy. On s'adapte à la complexité de votre activité.</div>
              <div className="of-card-feats">
                {['Audit et cadrage', 'Développements spécifiques', 'Solutions Elvy (BTP, GED, Print)', 'Chef de projet dédié'].map((f, i) => (
                  <div key={i} className="of-card-feat"><div className="of-card-dot" style={{ backgroundColor: '#8B5CF6' }} />{f}</div>
                ))}
              </div>
              <button className="of-card-btn" onClick={scrollToContact}>Discuter de mon projet</button>
            </div>

            <div className="of-card">
              <div className="of-badge" style={{ backgroundColor: '#CCFBF1', color: '#0F766E' }}>Montée en compétence</div>
              <div className="of-card-title">Formation</div>
              <div className="of-card-desc">Vos équipes autonomes sur Odoo. Sessions adaptées à votre configuration, pas un cours générique.</div>
              <div className="of-card-feats">
                {['Sur votre environnement', 'Par module ou par métier', 'Présentiel ou distance', 'Support post-formation'].map((f, i) => (
                  <div key={i} className="of-card-feat"><div className="of-card-dot" style={{ backgroundColor: '#00D4C8' }} />{f}</div>
                ))}
              </div>
              <button className="of-card-btn" onClick={scrollToContact}>Planifier une formation</button>
            </div>

            <div className="of-card">
              <div className="of-badge" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>Continu</div>
              <div className="of-card-title">Pack SOS</div>
              <div className="of-card-desc">Support continu pour votre Odoo en production. Hotline, tickets, maintenance, migrations.</div>
              <div className="of-card-feats">
                {['Téléphone + email + portail', 'Interventions correctives', 'Accompagnement migrations', 'Prise en main à distance'].map((f, i) => (
                  <div key={i} className="of-card-feat"><div className="of-card-dot" style={{ backgroundColor: '#F59E0B' }} />{f}</div>
                ))}
              </div>
              <a href="#/support" className="of-card-btn">Accéder au support</a>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div id="offres-contact" style={{ padding: '0 32px 100px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="of-note of-dark">
            <img src="/offres-success.jpg" alt="Succès" className="of-note-img" />
            <div>
              <div className="of-note-title">Chaque projet est différent</div>
              <p className="of-note-text" style={{ marginBottom: 24 }}>
                On ne pratique pas le tarif au kilo. Chaque offre est construite après un échange pour comprendre votre contexte, vos priorités et votre budget.
              </p>
              <p className="of-note-text">
                Appelez-nous au <a href="tel:+41582551115">+41 (0) 58 255 11 15</a> ou écrivez à <a href="mailto:info@d4e.cool">info@d4e.cool</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { TarifsPage };

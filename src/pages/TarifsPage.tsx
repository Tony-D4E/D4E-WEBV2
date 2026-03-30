import React from 'react';

const TarifsPage: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('tarif-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        #d4e-tarifs, #d4e-tarifs * { box-sizing: border-box !important; }
        #d4e-tarifs { font-family: 'Inter', sans-serif !important; background-color: #F0FDF9 !important; min-height: 100vh !important; padding-bottom: 100px !important; }
        #d4e-tarifs .tp-dark, #d4e-tarifs .tp-dark * { color: #FFFFFF !important; }
        #d4e-tarifs .tp-title { font-family: 'Space Grotesk', sans-serif !important; font-size: clamp(36px, 5vw, 52px) !important; font-weight: 700 !important; color: #0B0F19 !important; margin: 0 0 16px !important; }
        #d4e-tarifs .tp-subtitle { font-size: 20px !important; color: #475569 !important; margin: 0 !important; line-height: 1.6 !important; max-width: 600px !important; }
        #d4e-tarifs .tp-h2 { font-family: 'Space Grotesk', sans-serif !important; font-size: 26px !important; font-weight: 700 !important; margin: 0 0 12px !important; }
        #d4e-tarifs .tp-card { background-color: #0F172A !important; border-radius: 24px !important; padding: 48px 44px !important; border: 1px solid rgba(255,255,255,0.06) !important; display: flex !important; flex-direction: column !important; }
        #d4e-tarifs .tp-card-accent { border-color: rgba(0,212,200,0.3) !important; }
        #d4e-tarifs .tp-card-gold { border-color: rgba(245,158,11,0.3) !important; }
        #d4e-tarifs .tp-text { font-size: 16px !important; color: rgba(255,255,255,0.55) !important; line-height: 1.7 !important; margin-bottom: 28px !important; }
        #d4e-tarifs .tp-feature { display: flex !important; align-items: flex-start !important; gap: 12px !important; margin-bottom: 16px !important; }
        #d4e-tarifs .tp-check { width: 22px !important; height: 22px !important; border-radius: 6px !important; display: flex !important; align-items: center !important; justify-content: center !important; font-size: 12px !important; font-weight: 700 !important; flex-shrink: 0 !important; margin-top: 2px !important; }
        #d4e-tarifs .tp-check-teal { background-color: rgba(0,212,200,0.15) !important; color: #00D4C8 !important; }
        #d4e-tarifs .tp-check-gold { background-color: rgba(245,158,11,0.15) !important; color: #F59E0B !important; }
        #d4e-tarifs .tp-check-purple { background-color: rgba(139,92,246,0.15) !important; color: #8B5CF6 !important; }
        #d4e-tarifs .tp-feat-text { font-size: 15px !important; color: rgba(255,255,255,0.7) !important; line-height: 1.5 !important; }
        #d4e-tarifs .tp-btn {
          display: inline-block !important; background-color: #00D4C8 !important; color: #0B0F19 !important;
          border: none !important; border-radius: 12px !important; padding: 16px 32px !important;
          font-size: 16px !important; font-weight: 600 !important; cursor: pointer !important;
          font-family: 'Space Grotesk', sans-serif !important; text-decoration: none !important;
          text-align: center !important; margin-top: auto !important; width: 100% !important;
        }
        #d4e-tarifs .tp-btn:hover { background-color: #00B4A6 !important; }
        #d4e-tarifs .tp-btn-gold { background-color: #F59E0B !important; }
        #d4e-tarifs .tp-btn-gold:hover { background-color: #D97706 !important; }
        #d4e-tarifs .tp-badge { display: inline-block !important; font-size: 12px !important; font-weight: 600 !important; padding: 4px 12px !important; border-radius: 100px !important; margin-bottom: 16px !important; }
        #d4e-tarifs .tp-note { background-color: #FFFFFF !important; border: 1px solid #E2E8F0 !important; border-radius: 20px !important; padding: 36px 32px !important; margin-top: 48px !important; }
        #d4e-tarifs .tp-note-title { font-family: 'Space Grotesk', sans-serif !important; font-size: 20px !important; font-weight: 700 !important; color: #0B0F19 !important; margin-bottom: 12px !important; }
        #d4e-tarifs .tp-note-text { font-size: 15px !important; color: #475569 !important; line-height: 1.7 !important; }
        @media (max-width: 860px) {
          #d4e-tarifs .tp-grid { flex-direction: column !important; }
          #d4e-tarifs .tp-card { padding: 36px 28px !important; }
        }
      `}</style>

      <div id="d4e-tarifs">
        <div style={{ padding: '110px 32px 52px', maxWidth: 1280, margin: '0 auto' }}>
          <h1 className="tp-title">Comment on travaille</h1>
          <p className="tp-subtitle">
            Pas de grille tarifaire générique. On construit une offre adaptée à votre contexte, votre taille et vos priorités.
          </p>
        </div>

        <div style={{ padding: '0 32px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="tp-grid" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>

            {/* STARTER */}
            <div className="tp-card tp-card-accent tp-dark" style={{ flex: '1 1 340px' }}>
              <div className="tp-badge" style={{ backgroundColor: 'rgba(0,212,200,0.15)', color: '#00D4C8' }}>Démarrage rapide</div>
              <div className="tp-h2" style={{ color: '#FFFFFF' }}>Starter Pack</div>
              <p className="tp-text">L'essentiel pour démarrer avec Odoo. Configuration, import de données, formation de vos équipes. Opérationnel en quelques semaines.</p>
              <div style={{ marginBottom: 28 }}>
                {['CRM + Ventes + Facturation configurés', 'Import de vos données existantes', 'Formation de vos équipes (2 sessions)', 'Support post-lancement 30 jours'].map((f, i) => (
                  <div key={i} className="tp-feature"><div className="tp-check tp-check-teal">✓</div><span className="tp-feat-text">{f}</span></div>
                ))}
              </div>
              <button className="tp-btn" onClick={scrollToContact}>Demander un devis</button>
            </div>

            {/* SUPPORT */}
            <div className="tp-card tp-card-gold tp-dark" style={{ flex: '1 1 340px' }}>
              <div className="tp-badge" style={{ backgroundColor: 'rgba(245,158,11,0.15)', color: '#F59E0B' }}>Continu</div>
              <div className="tp-h2" style={{ color: '#FFFFFF' }}>Pack SOS</div>
              <p className="tp-text">Support continu pour votre Odoo en production. Hotline, tickets, maintenance, accompagnement migrations. Votre filet de sécurité.</p>
              <div style={{ marginBottom: 28 }}>
                {['Support téléphone + email + portail', 'Interventions correctives', 'Accompagnement migrations', 'Prise en main à distance (AnyDesk)'].map((f, i) => (
                  <div key={i} className="tp-feature"><div className="tp-check tp-check-gold">✓</div><span className="tp-feat-text">{f}</span></div>
                ))}
              </div>
              <button className="tp-btn tp-btn-gold" onClick={scrollToContact}>Demander un devis</button>
            </div>

            {/* SUR-MESURE */}
            <div className="tp-card tp-dark" style={{ flex: '1 1 340px' }}>
              <div className="tp-badge" style={{ backgroundColor: 'rgba(139,92,246,0.15)', color: '#8B5CF6' }}>Sur-mesure</div>
              <div className="tp-h2" style={{ color: '#FFFFFF' }}>Projet complet</div>
              <p className="tp-text">Intégration complète, développements spécifiques, solutions métiers Elvy. On s'adapte à la complexité de votre activité.</p>
              <div style={{ marginBottom: 28 }}>
                {['Audit et cadrage de vos besoins', 'Développements sur-mesure', 'Solutions Elvy (BTP, GED, Print)', 'Chef de projet dédié'].map((f, i) => (
                  <div key={i} className="tp-feature"><div className="tp-check tp-check-purple">✓</div><span className="tp-feat-text">{f}</span></div>
                ))}
              </div>
              <a href="#/support" className="tp-btn" style={{ backgroundColor: '#8B5CF6' }}>Discuter de mon projet</a>
            </div>
          </div>

          {/* NOTE */}
          <div className="tp-note" id="tarif-contact">
            <div className="tp-note-title">Chaque projet est différent</div>
            <p className="tp-note-text">
              On ne pratique pas le tarif au kilo. Chaque offre est construite après un échange pour comprendre votre contexte, vos priorités et votre budget. Appelez-nous au <a href="tel:+41582551115" style={{ color: '#00D4C8', textDecoration: 'none', fontWeight: 600 }}>+41 (0) 58 255 11 15</a> ou écrivez à <a href="mailto:info@d4e.cool" style={{ color: '#00D4C8', textDecoration: 'none', fontWeight: 600 }}>info@d4e.cool</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { TarifsPage };

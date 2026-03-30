import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (path: string) => {
    window.location.hash = path;
  };

  return (
    <>
      <style>{`
        #d4e-footer, #d4e-footer * { box-sizing: border-box !important; }
        #d4e-footer {
          background-color: #0B0F19 !important;
          color: #94A3B8 !important;
          font-family: 'Inter', sans-serif !important;
          padding: 80px 32px 40px !important;
        }
        #d4e-footer a { color: #94A3B8 !important; text-decoration: none !important; transition: color 0.2s !important; }
        #d4e-footer a:hover { color: #00D4C8 !important; }
        #d4e-footer .ft-brand { font-family: 'Space Grotesk', sans-serif !important; font-size: 22px !important; font-weight: 700 !important; color: #FFFFFF !important; margin-bottom: 12px !important; }
        #d4e-footer .ft-tagline { font-size: 14px !important; color: #64748B !important; line-height: 1.6 !important; max-width: 300px !important; }
        #d4e-footer .ft-heading { font-family: 'Space Grotesk', sans-serif !important; font-size: 14px !important; font-weight: 600 !important; color: #FFFFFF !important; text-transform: uppercase !important; letter-spacing: 0.06em !important; margin-bottom: 20px !important; }
        #d4e-footer .ft-link { display: block !important; font-size: 14px !important; margin-bottom: 12px !important; cursor: pointer !important; }
        #d4e-footer .ft-addr { font-size: 14px !important; line-height: 1.7 !important; margin-bottom: 20px !important; }
        #d4e-footer .ft-addr-title { color: #FFFFFF !important; font-weight: 600 !important; margin-bottom: 4px !important; }
        #d4e-footer .ft-contact { font-size: 14px !important; margin-bottom: 8px !important; }
        #d4e-footer .ft-divider { border: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; margin: 40px 0 24px !important; }
        #d4e-footer .ft-bottom { display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 12px !important; font-size: 13px !important; color: #475569 !important; }
        #d4e-footer .ft-bottom a { color: #475569 !important; font-size: 13px !important; }
        #d4e-footer .ft-bottom a:hover { color: #00D4C8 !important; }
        #d4e-footer .ft-grid {
          display: grid !important;
          grid-template-columns: 2fr 1fr 1fr 1.5fr !important;
          gap: 48px !important;
          max-width: 1280px !important;
          margin: 0 auto !important;
        }
        @media (max-width: 860px) {
          #d4e-footer .ft-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 520px) {
          #d4e-footer .ft-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <footer id="d4e-footer">
        <div className="ft-grid">
          {/* Brand */}
          <div>
            <div className="ft-brand">Digital4Efficiency</div>
            <p className="ft-tagline">
              Partenaire Odoo Gold en Suisse. Intégration ERP, solutions métiers Elvy et accompagnement de proximité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="ft-heading">Navigation</div>
            <a className="ft-link" href="#/" onClick={() => scrollTo('/')}>Accueil</a>
            <a className="ft-link" href="#/odoo" onClick={() => scrollTo('/odoo')}>Odoo</a>
            <a className="ft-link" href="#/elvy" onClick={() => scrollTo('/elvy')}>Solutions Elvy</a>
            <a className="ft-link" href="#/elvybat" onClick={() => scrollTo('/elvybat')}>ElvyBat</a>
            <a className="ft-link" href="#/support" onClick={() => scrollTo('/support')}>Support</a>
            <a className="ft-link" href="#/tarifs" onClick={() => scrollTo('/tarifs')}>Tarifs</a>
          </div>

          {/* Légal */}
          <div>
            <div className="ft-heading">Légal</div>
            <a className="ft-link" href="#/cgu">Conditions générales</a>
          </div>

          {/* Adresses + Contact */}
          <div>
            <div className="ft-heading">Nos bureaux</div>
            <div className="ft-addr">
              <div className="ft-addr-title">Genève</div>
              Chemin du Pavillon 2<br />1218 Le Grand-Saconnex
            </div>
            <div className="ft-addr">
              <div className="ft-addr-title">Sion</div>
              Place du Midi 48<br />1950 Sion
            </div>
            <div style={{ marginTop: 24 }}>
              <div className="ft-heading">Contact</div>
              <div className="ft-contact">
                <a href="tel:+41582551115">+41 (0) 58 255 11 15</a>
              </div>
              <div className="ft-contact">
                <a href="mailto:info@d4e.cool">info@d4e.cool</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="ft-divider" />

        <div className="ft-bottom" style={{ maxWidth: 1280, margin: '0 auto' }}>
          <span>&copy; {new Date().getFullYear()} Digital4Efficiency Sàrl. Tous droits réservés.</span>
          <a href="#/cgu">Conditions générales</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

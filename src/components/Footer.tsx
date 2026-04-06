import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <style>{`
        #d4e-footer, #d4e-footer * { box-sizing: border-box !important; color: #FFFFFF !important; }
        #d4e-footer {
          background-color: #0F172A !important;
          font-family: 'Inter', sans-serif !important;
          padding: 72px 48px 0 !important;
          width: 100% !important;
        }
        #d4e-footer .ft-grid {
          display: grid !important;
          grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr !important;
          gap: 48px !important;
          max-width: 1400px !important;
          margin: 0 auto !important;
        }
        #d4e-footer .ft-brand { font-family: 'Space Grotesk', sans-serif !important; font-size: 20px !important; font-weight: 700 !important; }
        #d4e-footer .ft-tagline { font-size: 14px !important; color: rgba(255,255,255,0.5) !important; line-height: 1.7 !important; margin-bottom: 24px !important; max-width: 300px !important; }
        #d4e-footer .ft-contact-item { display: flex !important; align-items: center !important; gap: 10px !important; margin-bottom: 10px !important; }
        #d4e-footer .ft-contact-icon { width: 18px !important; height: 18px !important; color: #00D4C8 !important; stroke: #00D4C8 !important; flex-shrink: 0 !important; }
        #d4e-footer .ft-contact-link { font-size: 14px !important; color: rgba(255,255,255,0.7) !important; text-decoration: none !important; transition: color 0.2s !important; }
        #d4e-footer .ft-contact-link:hover { color: #00D4C8 !important; }
        #d4e-footer .ft-social { display: flex !important; gap: 12px !important; margin-top: 20px !important; }
        #d4e-footer .ft-social-btn {
          width: 40px !important; height: 40px !important; border-radius: 10px !important;
          background-color: rgba(0,212,200,0.1) !important;
          display: flex !important; align-items: center !important; justify-content: center !important;
          transition: background-color 0.2s !important; cursor: pointer !important; text-decoration: none !important;
        }
        #d4e-footer .ft-social-btn:hover { background-color: rgba(0,212,200,0.25) !important; }
        #d4e-footer .ft-social-btn svg { width: 18px !important; height: 18px !important; color: #00D4C8 !important; fill: #00D4C8 !important; }
        #d4e-footer .ft-heading {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 13px !important; font-weight: 700 !important; color: #FFFFFF !important;
          text-transform: uppercase !important; letter-spacing: 0.08em !important; margin-bottom: 20px !important;
        }
        #d4e-footer .ft-link {
          display: block !important; font-size: 14px !important; color: rgba(255,255,255,0.5) !important;
          text-decoration: none !important; margin-bottom: 14px !important; transition: color 0.2s !important;
        }
        #d4e-footer .ft-link:hover { color: #00D4C8 !important; }
        #d4e-footer .ft-divider {
          border: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important;
          margin: 48px 0 0 !important;
        }
        #d4e-footer .ft-bottom {
          display: flex !important; justify-content: space-between !important; align-items: center !important;
          padding: 24px 0 !important; flex-wrap: wrap !important; gap: 16px !important;
          max-width: 1400px !important; margin: 0 auto !important;
        }
        #d4e-footer .ft-bottom-left { display: flex !important; align-items: center !important; gap: 8px !important; font-size: 13px !important; color: rgba(255,255,255,0.4) !important; }
        #d4e-footer .ft-bottom-left span { color: rgba(255,255,255,0.4) !important; }
        #d4e-footer .ft-loc-dot { width: 6px !important; height: 6px !important; border-radius: 50% !important; background-color: #00D4C8 !important; display: inline-block !important; margin-right: 6px !important; }
        #d4e-footer .ft-odoo-badge { height: 20px !important; opacity: 0.5 !important; }
        @media (max-width: 960px) {
          #d4e-footer .ft-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
          #d4e-footer { padding: 56px 32px 0 !important; }
        }
        @media (max-width: 520px) {
          #d4e-footer .ft-grid { grid-template-columns: 1fr !important; }
          #d4e-footer { padding: 48px 24px 0 !important; }
        }
      `}</style>

      <footer id="d4e-footer">
        <div className="ft-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src="/picto-d4e.png" alt="D4E" style={{ width: 36, height: 36, borderRadius: 8 }} />
              <span className="ft-brand">Digital4Efficiency</span>
            </div>
            <p className="ft-tagline">Partenaire Odoo Gold. Intégrateur suisse depuis 2017.</p>
            <div className="ft-contact-item">
              <svg className="ft-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:+41582551115" className="ft-contact-link">+41 (0)58 255 11 15</a>
            </div>
            <div className="ft-contact-item">
              <svg className="ft-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:info@digital4efficiency.ch" className="ft-contact-link">info@digital4efficiency.ch</a>
            </div>
            <div className="ft-social">
              <a href="https://www.linkedin.com/company/digital4efficiency" target="_blank" rel="noopener noreferrer" className="ft-social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.facebook.com/Digital4Efficiency/" target="_blank" rel="noopener noreferrer" className="ft-social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/digital4efficiency/" target="_blank" rel="noopener noreferrer" className="ft-social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <div className="ft-heading">Services</div>
            <a className="ft-link" href="/odoo">Odoo</a>
            <a className="ft-link" href="/tarifs">Nos offres</a>
            <a className="ft-link" href="/support">Support</a>
          </div>

          <div>
            <div className="ft-heading">Solutions Elvy</div>
            <a className="ft-link" href="/elvybat">ElvyBat</a>
            <a className="ft-link" href="/elvyprint">ElvyPrint</a>
            <a className="ft-link" href="/elvyinsurance">ElvyAssurance</a>
            <a className="ft-link" href="/elvyeduca">ElvyEduca</a>
          </div>

          <div>
            <div className="ft-heading">Entreprise</div>
            <a className="ft-link" href="/entreprise">Qui sommes-nous</a>
            <a className="ft-link" href="/jobs">Jobs</a>
          </div>

          <div>
            <div className="ft-heading">Légal</div>
            <a className="ft-link" href="/conditions-generales">Conditions générales</a>
          </div>
        </div>

        <hr className="ft-divider" />

        <div className="ft-bottom">
          <div className="ft-bottom-left">
            <span>&copy; {new Date().getFullYear()} Digital4Efficiency</span>
            <span>·</span>
            <span><span className="ft-loc-dot" />Genève &amp; Sion</span>
          </div>
          <div className="ft-bottom-right">
            <span>Partenaire</span>
            <img src="/odoo-gold-partner.svg" alt="Odoo Gold" className="ft-odoo-badge" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

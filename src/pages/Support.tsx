import React, { useState } from 'react';

const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    prenom: '', nom: '', email: '', entreprise: '',
    module: '', urgence: '', description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setSending(true);
    try {
      await fetch('https://formspree.io/f/xdawrgoz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: 'Nouveau ticket support - ' + formData.entreprise,
        }),
      });
      setSubmitted(true);
    } catch {
      alert('Erreur. Contactez support@digital4efficiency.ch');
    }
    setSending(false);
  };

  return (
    <>
      <style>{`
        #d4e-support,
        #d4e-support * {
          box-sizing: border-box !important;
        }
        #d4e-support {
          font-family: 'Inter', sans-serif !important;
          background-color: #F0FDF9 !important;
          min-height: 100vh !important;
          padding-bottom: 100px !important;
        }
        #d4e-support .sp-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: clamp(36px, 5vw, 52px) !important;
          font-weight: 700 !important;
          color: #0B0F19 !important;
          margin: 0 0 12px !important;
          letter-spacing: -0.02em !important;
        }
        #d4e-support .sp-subtitle {
          font-size: 19px !important;
          color: #475569 !important;
          margin: 0 !important;
          line-height: 1.6 !important;
        }
        #d4e-support .sp-h2 {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 24px !important;
          font-weight: 700 !important;
          color: #0B0F19 !important;
          margin: 0 !important;
        }
        #d4e-support .sp-status-bar {
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          margin-bottom: 24px !important;
        }
        #d4e-support .sp-dot {
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          background-color: #22C55E !important;
          box-shadow: 0 0 10px rgba(34,197,94,0.5) !important;
          display: inline-block !important;
        }
        #d4e-support .sp-status-text {
          font-size: 14px !important;
          color: #64748B !important;
          font-weight: 500 !important;
        }
        #d4e-support .sp-label {
          display: block !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          color: #475569 !important;
          margin-bottom: 8px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.04em !important;
        }
        #d4e-support .sp-input {
          width: 100% !important;
          background-color: #FFFFFF !important;
          border: 1.5px solid #E2E8F0 !important;
          border-radius: 12px !important;
          padding: 16px 18px !important;
          color: #0B0F19 !important;
          font-size: 16px !important;
          outline: none !important;
          font-family: 'Inter', sans-serif !important;
          transition: border-color 0.2s !important;
        }
        #d4e-support .sp-input:focus {
          border-color: #00D4C8 !important;
          box-shadow: 0 0 0 3px rgba(0,212,200,0.1) !important;
        }
        #d4e-support .sp-input::placeholder {
          color: #94A3B8 !important;
        }
        #d4e-support select.sp-input {
          appearance: none !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%2394A3B8' stroke-width='1.5' fill='none'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: right 18px center !important;
          background-color: #FFFFFF !important;
        }
        #d4e-support option {
          background-color: #FFFFFF !important;
          color: #0B0F19 !important;
        }
        #d4e-support .sp-form-box {
          background-color: #FFFFFF !important;
          border: 1px solid #E2E8F0 !important;
          border-radius: 24px !important;
          padding: 48px 44px !important;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important;
        }
        #d4e-support .sp-btn {
          width: 100% !important;
          background-color: #00D4C8 !important;
          color: #FFFFFF !important;
          border: none !important;
          border-radius: 12px !important;
          padding: 18px !important;
          font-size: 17px !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          font-family: 'Space Grotesk', sans-serif !important;
          transition: background-color 0.2s !important;
        }
        #d4e-support .sp-btn:hover { background-color: #00B4A6 !important; }
        #d4e-support .sp-btn:disabled { opacity: 0.7 !important; cursor: wait !important; }
        #d4e-support .sp-btn-reset {
          background-color: #F0FDF9 !important;
          color: #0B0F19 !important;
          border: 1.5px solid #CCFBF1 !important;
          border-radius: 10px !important;
          padding: 12px 24px !important;
          font-size: 15px !important;
          font-weight: 500 !important;
          cursor: pointer !important;
        }
        #d4e-support .sp-card {
          background-color: #FFFFFF !important;
          border-radius: 16px !important;
          padding: 24px 22px !important;
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
          text-decoration: none !important;
          transition: all 0.2s !important;
          cursor: pointer !important;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04) !important;
        }
        #d4e-support .sp-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
          transform: translateY(-1px) !important;
        }
        #d4e-support .sp-card-teal { border: 1.5px solid rgba(0,212,200,0.25) !important; }
        #d4e-support .sp-card-teal:hover { border-color: #00D4C8 !important; }
        #d4e-support .sp-card-gold { border: 1.5px solid rgba(245,158,11,0.25) !important; }
        #d4e-support .sp-card-gold:hover { border-color: #F59E0B !important; }
        #d4e-support .sp-card-purple { border: 1.5px solid rgba(139,92,246,0.25) !important; }
        #d4e-support .sp-card-purple:hover { border-color: #8B5CF6 !important; }
        #d4e-support .sp-card-default { border: 1.5px solid #E2E8F0 !important; }
        #d4e-support .sp-card-default:hover { border-color: #CBD5E1 !important; }
        #d4e-support .sp-card-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #0B0F19 !important;
          margin-bottom: 2px !important;
        }
        #d4e-support .sp-teal { color: #00B4A6 !important; }
        #d4e-support .sp-gold { color: #D97706 !important; }
        #d4e-support .sp-purple { color: #7C3AED !important; }
        #d4e-support .sp-dim { color: #64748B !important; }
        #d4e-support .sp-icon {
          width: 48px !important;
          height: 48px !important;
          border-radius: 12px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 22px !important;
          flex-shrink: 0 !important;
        }
        #d4e-support .sp-icon-teal { background-color: #CCFBF1 !important; }
        #d4e-support .sp-icon-gold { background-color: #FEF3C7 !important; }
        #d4e-support .sp-icon-purple { background-color: #EDE9FE !important; }
        #d4e-support .sp-icon-default { background-color: #F1F5F9 !important; }
        #d4e-support .sp-icon-ticket {
          width: 44px !important; height: 44px !important; border-radius: 12px !important;
          background-color: #CCFBF1 !important;
          display: flex !important; align-items: center !important; justify-content: center !important;
          font-size: 22px !important;
        }
        #d4e-support .sp-tipbox {
          background-color: #FFFFFF !important;
          border: 1.5px solid #E2E8F0 !important;
          border-radius: 16px !important;
          padding: 24px !important;
          margin-top: 8px !important;
        }
        #d4e-support .sp-tip-label {
          color: #94A3B8 !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.06em !important;
          margin-bottom: 10px !important;
        }
        #d4e-support .sp-tip-text {
          color: #64748B !important;
          font-size: 14px !important;
          line-height: 1.7 !important;
        }
        #d4e-support .sp-success-icon {
          width: 64px !important; height: 64px !important; border-radius: 16px !important;
          background-color: #CCFBF1 !important;
          display: inline-flex !important; align-items: center !important; justify-content: center !important;
          font-size: 32px !important; margin-bottom: 20px !important;
          color: #00B4A6 !important;
        }
        #d4e-support .sp-success-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 24px !important; font-weight: 700 !important;
          color: #00B4A6 !important; margin-bottom: 8px !important;
        }
        @media (max-width: 768px) {
          #d4e-support .sp-layout { flex-direction: column !important; }
          #d4e-support .sp-grid-2 { grid-template-columns: 1fr !important; }
          #d4e-support .sp-form-box { padding: 32px 24px !important; }
        }
      `}</style>

      <div id="d4e-support">
        {/* HEADER */}
        <div style={{ padding: '110px 32px 48px', maxWidth: 1200, margin: '0 auto' }}>
          <div className="sp-status-bar">
            <span className="sp-dot" />
            <span className="sp-status-text">Support disponible · Lun-Ven 8h-18h</span>
          </div>
          <h1 className="sp-title">Support client</h1>
          <p className="sp-subtitle">
            Ouvrez un ticket, suivez vos demandes ou préparez une session à distance.
          </p>
        </div>

        {/* LAYOUT */}
        <div style={{ padding: '0 32px', maxWidth: 1200, margin: '0 auto' }}>
          <div className="sp-layout" style={{ display: 'flex', gap: 36, alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* FORMULAIRE */}
            <div style={{ flex: '1 1 620px', minWidth: 0 }}>
              <div className="sp-form-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
                  <span className="sp-icon-ticket">🎫</span>
                  <span className="sp-h2">Ouvrir un ticket</span>
                </div>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '56px 20px' }}>
                    <div className="sp-success-icon">✓</div>
                    <div className="sp-success-title">Ticket envoyé</div>
                    <p className="sp-dim" style={{ fontSize: 16, marginBottom: 28 }}>
                      Nous revenons vers vous dans les plus brefs délais.
                    </p>
                    <button className="sp-btn-reset" onClick={() => { setSubmitted(false); setFormData({ prenom: '', nom: '', email: '', entreprise: '', module: '', urgence: '', description: '' }); }}>
                      Ouvrir un autre ticket
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="sp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div>
                        <span className="sp-label">Prénom</span>
                        <input className="sp-input" name="prenom" type="text" value={formData.prenom} onChange={handleChange} required />
                      </div>
                      <div>
                        <span className="sp-label">Nom</span>
                        <input className="sp-input" name="nom" type="text" value={formData.nom} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="sp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div>
                        <span className="sp-label">Email</span>
                        <input className="sp-input" name="email" type="email" value={formData.email} onChange={handleChange} required />
                      </div>
                      <div>
                        <span className="sp-label">Entreprise</span>
                        <input className="sp-input" name="entreprise" type="text" value={formData.entreprise} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="sp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div>
                        <span className="sp-label">Module Odoo concerné</span>
                        <select className="sp-input" name="module" value={formData.module} onChange={handleChange}>
                          <option value="">Sélectionner...</option>
                          <option value="CRM">CRM</option>
                          <option value="Ventes">Ventes</option>
                          <option value="Achats">Achats</option>
                          <option value="Comptabilité">Comptabilité</option>
                          <option value="Stock">Stock / Inventaire</option>
                          <option value="Fabrication">Fabrication</option>
                          <option value="Projet">Projet</option>
                          <option value="RH">RH / Congés</option>
                          <option value="Site Web">Site Web / eCommerce</option>
                          <option value="ElvyBat">ElvyBat</option>
                          <option value="ElvyDoc">ElvyDoc (GED)</option>
                          <option value="ElvyPrint">ElvyPrint</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                      <div>
                        <span className="sp-label">Urgence</span>
                        <select className="sp-input" name="urgence" value={formData.urgence} onChange={handleChange}>
                          <option value="">Sélectionner...</option>
                          <option value="Bloquant">Bloquant</option>
                          <option value="Gênant">Gênant</option>
                          <option value="Amélioration">Amélioration</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: 28 }}>
                      <span className="sp-label">Description du problème</span>
                      <textarea className="sp-input" name="description" value={formData.description} onChange={handleChange}
                        rows={6} required style={{ resize: 'vertical' }}
                        placeholder="Décrivez le problème, les étapes pour le reproduire, et joignez des captures d'écran par email si besoin." />
                    </div>
                    <button className="sp-btn" onClick={handleSubmit} disabled={sending}>
                      {sending ? 'Envoi en cours...' : 'Envoyer le ticket'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* SIDEBAR */}
            <div style={{ flex: '0 1 380px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a href="https://odoo.d4e.app/" target="_blank" rel="noopener noreferrer" className="sp-card sp-card-teal">
                <div className="sp-icon sp-icon-teal">📋</div>
                <div>
                  <div className="sp-card-title">Suivre mes tickets</div>
                  <div className="sp-teal" style={{ fontSize: 14, fontWeight: 500 }}>Portail client →</div>
                </div>
              </a>
              <a href="https://anydesk.com/fr/downloads" target="_blank" rel="noopener noreferrer" className="sp-card sp-card-gold">
                <div className="sp-icon sp-icon-gold">🖥️</div>
                <div>
                  <div className="sp-card-title">Télécharger AnyDesk</div>
                  <div className="sp-gold" style={{ fontSize: 14, fontWeight: 500 }}>Session à distance →</div>
                </div>
              </a>
              <a href="tel:+41582551115" className="sp-card sp-card-purple">
                <div className="sp-icon sp-icon-purple">📞</div>
                <div>
                  <div className="sp-card-title">+41 (0) 58 255 11 15</div>
                  <div className="sp-purple" style={{ fontSize: 14, fontWeight: 500 }}>Lun-Ven · 8h-18h</div>
                </div>
              </a>
              <a href="mailto:support@digital4efficiency.ch" className="sp-card sp-card-default">
                <div className="sp-icon sp-icon-default">✉️</div>
                <div>
                  <div className="sp-card-title">Email support</div>
                  <div className="sp-dim" style={{ fontSize: 14, fontWeight: 500 }}>support@digital4efficiency.ch</div>
                </div>
              </a>
              <div className="sp-tipbox">
                <div className="sp-tip-label">Astuce</div>
                <p className="sp-tip-text" style={{ margin: 0 }}>
                  Pour un traitement plus rapide, joignez une capture d'écran et précisez les étapes pour reproduire le problème.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Support };

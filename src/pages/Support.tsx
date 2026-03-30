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
          color: #FFFFFF !important;
          background-color: transparent !important;
          border-color: rgba(255,255,255,0.06) !important;
        }
        #d4e-support {
          font-family: 'Inter', sans-serif !important;
          background-color: #0B0F19 !important;
          min-height: 100vh !important;
          padding-bottom: 80px !important;
        }
        #d4e-support h1 { font-family: 'Space Grotesk', sans-serif !important; font-size: clamp(32px, 4vw, 48px) !important; font-weight: 700 !important; }
        #d4e-support h2 { font-family: 'Space Grotesk', sans-serif !important; font-size: 22px !important; font-weight: 700 !important; }
        #d4e-support .sp-muted { color: rgba(255,255,255,0.45) !important; }
        #d4e-support .sp-label { color: rgba(255,255,255,0.4) !important; font-size: 13px !important; font-weight: 500 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 8px !important; display: block !important; }
        #d4e-support .sp-status { color: rgba(255,255,255,0.5) !important; font-size: 14px !important; font-weight: 500 !important; }
        #d4e-support .sp-teal { color: #00D4C8 !important; }
        #d4e-support .sp-gold { color: #F59E0B !important; }
        #d4e-support .sp-purple { color: #8B5CF6 !important; }
        #d4e-support .sp-dim { color: rgba(255,255,255,0.5) !important; }
        #d4e-support .sp-card-title { font-family: 'Space Grotesk', sans-serif !important; font-size: 16px !important; font-weight: 700 !important; }
        #d4e-support .sp-success { color: #00D4C8 !important; }
        #d4e-support .sp-input {
          width: 100% !important;
          background-color: rgba(255,255,255,0.05) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
          border-radius: 10px !important;
          padding: 14px 16px !important;
          color: #FFFFFF !important;
          font-size: 15px !important;
          outline: none !important;
          font-family: 'Inter', sans-serif !important;
        }
        #d4e-support .sp-input:focus { border-color: rgba(0,212,200,0.4) !important; }
        #d4e-support .sp-input::placeholder { color: rgba(255,255,255,0.25) !important; }
        #d4e-support select.sp-input {
          appearance: none !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%23666' stroke-width='1.5' fill='none'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: right 16px center !important;
        }
        #d4e-support option { background-color: #1E293B !important; color: #FFFFFF !important; }
        #d4e-support .sp-btn {
          width: 100% !important; background-color: #00D4C8 !important; color: #0B0F19 !important;
          border: none !important; border-radius: 10px !important; padding: 16px !important;
          font-size: 16px !important; font-weight: 600 !important; cursor: pointer !important;
          font-family: 'Space Grotesk', sans-serif !important;
        }
        #d4e-support .sp-btn:hover { background-color: #00B4A6 !important; }
        #d4e-support .sp-btn:disabled { opacity: 0.7 !important; cursor: wait !important; }
        #d4e-support .sp-btn-reset {
          background-color: rgba(255,255,255,0.06) !important; color: rgba(255,255,255,0.6) !important;
          border: 1px solid rgba(255,255,255,0.1) !important; border-radius: 8px !important;
          padding: 10px 20px !important; font-size: 14px !important; cursor: pointer !important;
        }
        #d4e-support .sp-form-box {
          background-color: rgba(255,255,255,0.02) !important;
          border: 1px solid rgba(255,255,255,0.06) !important;
          border-radius: 20px !important; padding: 40px 36px !important;
        }
        #d4e-support .sp-card {
          background-color: rgba(255,255,255,0.02) !important;
          border-radius: 16px !important; padding: 28px 24px !important;
          display: flex !important; align-items: center !important; gap: 16px !important;
          text-decoration: none !important; transition: all 0.2s !important; cursor: pointer !important;
        }
        #d4e-support .sp-card:hover { background-color: rgba(255,255,255,0.05) !important; }
        #d4e-support .sp-card-teal { border: 1px solid rgba(0,212,200,0.15) !important; }
        #d4e-support .sp-card-teal:hover { background-color: rgba(0,212,200,0.10) !important; }
        #d4e-support .sp-card-gold { border: 1px solid rgba(245,158,11,0.15) !important; }
        #d4e-support .sp-card-gold:hover { background-color: rgba(245,158,11,0.10) !important; }
        #d4e-support .sp-card-purple { border: 1px solid rgba(139,92,246,0.15) !important; }
        #d4e-support .sp-card-purple:hover { background-color: rgba(139,92,246,0.10) !important; }
        #d4e-support .sp-card-default { border: 1px solid rgba(255,255,255,0.08) !important; }
        #d4e-support .sp-card-default:hover { background-color: rgba(255,255,255,0.06) !important; }
        #d4e-support .sp-icon {
          width: 44px !important; height: 44px !important; border-radius: 10px !important;
          display: flex !important; align-items: center !important; justify-content: center !important;
          font-size: 20px !important; flex-shrink: 0 !important;
        }
        #d4e-support .sp-icon-teal { background-color: rgba(0,212,200,0.12) !important; }
        #d4e-support .sp-icon-gold { background-color: rgba(245,158,11,0.12) !important; }
        #d4e-support .sp-icon-purple { background-color: rgba(139,92,246,0.12) !important; }
        #d4e-support .sp-icon-default { background-color: rgba(255,255,255,0.06) !important; }
        #d4e-support .sp-icon-ticket {
          width: 40px !important; height: 40px !important; border-radius: 10px !important;
          background-color: rgba(0,212,200,0.12) !important;
          display: flex !important; align-items: center !important; justify-content: center !important;
          font-size: 20px !important;
        }
        #d4e-support .sp-dot {
          width: 10px !important; height: 10px !important; border-radius: 50% !important;
          background-color: #22C55E !important;
          box-shadow: 0 0 12px rgba(34,197,94,0.5) !important;
          display: inline-block !important;
        }
        #d4e-support .sp-tipbox {
          background-color: rgba(255,255,255,0.02) !important;
          border: 1px solid rgba(255,255,255,0.06) !important;
          border-radius: 16px !important; padding: 24px !important; margin-top: 8px !important;
        }
        #d4e-support .sp-tip-label { color: rgba(255,255,255,0.3) !important; font-size: 13px !important; font-weight: 600 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 12px !important; }
        #d4e-support .sp-tip-text { color: rgba(255,255,255,0.5) !important; font-size: 14px !important; line-height: 1.7 !important; }
        #d4e-support .sp-success-icon {
          width: 56px !important; height: 56px !important; border-radius: 14px !important;
          background-color: rgba(0,212,200,0.12) !important;
          display: inline-flex !important; align-items: center !important; justify-content: center !important;
          font-size: 28px !important; margin-bottom: 16px !important;
        }
        @media (max-width: 768px) {
          #d4e-support .sp-layout { flex-direction: column !important; }
          #d4e-support .sp-grid-2 { grid-template-columns: 1fr !important; }
          #d4e-support .sp-form-box { padding: 28px 20px !important; }
        }
      `}</style>

      <div id="d4e-support">
        <div style={{ padding: '100px 32px 40px', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span className="sp-dot" />
            <span className="sp-status">Support disponible · Lun-Ven 8h-18h</span>
          </div>
          <h1 style={{ margin: '0 0 12px' }}>Support client</h1>
          <p className="sp-muted" style={{ fontSize: 18, margin: 0 }}>
            Ouvrez un ticket, suivez vos demandes ou préparez une session à distance.
          </p>
        </div>

        <div style={{ padding: '0 32px', maxWidth: 1100, margin: '0 auto' }}>
          <div className="sp-layout" style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 560px', minWidth: 0 }}>
              <div className="sp-form-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                  <span className="sp-icon-ticket">🎫</span>
                  <h2 style={{ margin: 0 }}>Ouvrir un ticket</h2>
                </div>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                    <div className="sp-success-icon">✓</div>
                    <h2 className="sp-success" style={{ marginBottom: 8 }}>Ticket envoyé</h2>
                    <p className="sp-dim" style={{ fontSize: 15, marginBottom: 24 }}>Nous revenons vers vous dans les plus brefs délais.</p>
                    <button className="sp-btn-reset" onClick={() => { setSubmitted(false); setFormData({ prenom: '', nom: '', email: '', entreprise: '', module: '', urgence: '', description: '' }); }}>Ouvrir un autre ticket</button>
                  </div>
                ) : (
                  <div>
                    <div className="sp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div><span className="sp-label">Prénom</span><input className="sp-input" name="prenom" type="text" value={formData.prenom} onChange={handleChange} required /></div>
                      <div><span className="sp-label">Nom</span><input className="sp-input" name="nom" type="text" value={formData.nom} onChange={handleChange} required /></div>
                    </div>
                    <div className="sp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div><span className="sp-label">Email</span><input className="sp-input" name="email" type="email" value={formData.email} onChange={handleChange} required /></div>
                      <div><span className="sp-label">Entreprise</span><input className="sp-input" name="entreprise" type="text" value={formData.entreprise} onChange={handleChange} /></div>
                    </div>
                    <div className="sp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div><span className="sp-label">Module Odoo concerné</span><select className="sp-input" name="module" value={formData.module} onChange={handleChange}><option value="">Sélectionner...</option><option value="CRM">CRM</option><option value="Ventes">Ventes</option><option value="Achats">Achats</option><option value="Comptabilité">Comptabilité</option><option value="Stock">Stock / Inventaire</option><option value="Fabrication">Fabrication</option><option value="Projet">Projet</option><option value="RH">RH / Congés</option><option value="Site Web">Site Web / eCommerce</option><option value="ElvyBat">ElvyBat</option><option value="ElvyDoc">ElvyDoc (GED)</option><option value="ElvyPrint">ElvyPrint</option><option value="Autre">Autre</option></select></div>
                      <div><span className="sp-label">Urgence</span><select className="sp-input" name="urgence" value={formData.urgence} onChange={handleChange}><option value="">Sélectionner...</option><option value="Bloquant">Bloquant</option><option value="Gênant">Gênant</option><option value="Amélioration">Amélioration</option></select></div>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <span className="sp-label">Description du problème</span>
                      <textarea className="sp-input" name="description" value={formData.description} onChange={handleChange} rows={5} required style={{ resize: 'vertical' }} placeholder="Décrivez le problème, les étapes pour le reproduire, et joignez des captures d'écran par email si besoin." />
                    </div>
                    <button className="sp-btn" onClick={handleSubmit} disabled={sending}>{sending ? 'Envoi en cours...' : 'Envoyer le ticket'}</button>
                  </div>
                )}
              </div>
            </div>
            <div style={{ flex: '0 1 340px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a href="https://odoo.d4e.app/" target="_blank" rel="noopener noreferrer" className="sp-card sp-card-teal"><div className="sp-icon sp-icon-teal">📋</div><div><div className="sp-card-title">Suivre mes tickets</div><div className="sp-teal" style={{ fontSize: 13, fontWeight: 500 }}>Portail client →</div></div></a>
              <a href="https://anydesk.com/fr/downloads" target="_blank" rel="noopener noreferrer" className="sp-card sp-card-gold"><div className="sp-icon sp-icon-gold">🖥️</div><div><div className="sp-card-title">Télécharger AnyDesk</div><div className="sp-gold" style={{ fontSize: 13, fontWeight: 500 }}>Session à distance →</div></div></a>
              <a href="tel:+41582551115" className="sp-card sp-card-purple"><div className="sp-icon sp-icon-purple">📞</div><div><div className="sp-card-title">+41 (0) 58 255 11 15</div><div className="sp-purple" style={{ fontSize: 13, fontWeight: 500 }}>Lun-Ven · 8h-18h</div></div></a>
              <a href="mailto:support@digital4efficiency.ch" className="sp-card sp-card-default"><div className="sp-icon sp-icon-default">✉️</div><div><div className="sp-card-title">Email support</div><div className="sp-dim" style={{ fontSize: 13, fontWeight: 500 }}>support@digital4efficiency.ch</div></div></a>
              <div className="sp-tipbox"><div className="sp-tip-label">Astuce</div><p className="sp-tip-text" style={{ margin: 0 }}>Pour un traitement plus rapide, joignez une capture d'écran et précisez les étapes pour reproduire le problème.</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Support };

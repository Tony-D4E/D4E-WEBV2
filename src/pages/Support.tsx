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
        #d4e-support, #d4e-support * { box-sizing: border-box !important; }
        #d4e-support {
          font-family: 'Inter', sans-serif !important;
          background-color: #F0FDF9 !important;
          min-height: 100vh !important;
          padding-bottom: 120px !important;
        }
        /* HEADER - texte sombre sur fond clair */
        #d4e-support .sp-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: clamp(38px, 5vw, 56px) !important;
          font-weight: 700 !important;
          color: #0B0F19 !important;
          margin: 0 0 14px !important;
          letter-spacing: -0.02em !important;
        }
        #d4e-support .sp-subtitle { font-size: 20px !important; color: #475569 !important; margin: 0 !important; line-height: 1.6 !important; }
        #d4e-support .sp-dot {
          width: 10px !important; height: 10px !important; border-radius: 50% !important;
          background-color: #22C55E !important; box-shadow: 0 0 10px rgba(34,197,94,0.5) !important;
          display: inline-block !important;
        }
        #d4e-support .sp-status-text { font-size: 15px !important; color: #64748B !important; font-weight: 500 !important; }

        /* === DARK BOXES : form + cards === */
        #d4e-support .sp-dark,
        #d4e-support .sp-dark * {
          color: #FFFFFF !important;
        }
        #d4e-support .sp-form-box {
          background-color: #0F172A !important;
          border: 1px solid rgba(255,255,255,0.06) !important;
          border-radius: 28px !important;
          padding: 56px 52px !important;
        }
        #d4e-support .sp-h2 {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 26px !important; font-weight: 700 !important;
          color: #FFFFFF !important; margin: 0 !important;
        }
        #d4e-support .sp-label {
          display: block !important; font-size: 13px !important; font-weight: 600 !important;
          color: rgba(255,255,255,0.4) !important; margin-bottom: 10px !important;
          text-transform: uppercase !important; letter-spacing: 0.05em !important;
        }
        #d4e-support .sp-input {
          width: 100% !important;
          background-color: rgba(255,255,255,0.05) !important;
          border: 1.5px solid rgba(255,255,255,0.1) !important;
          border-radius: 12px !important;
          padding: 18px 20px !important;
          color: #FFFFFF !important;
          font-size: 16px !important;
          outline: none !important;
          font-family: 'Inter', sans-serif !important;
          transition: border-color 0.2s !important;
        }
        #d4e-support .sp-input:focus { border-color: rgba(0,212,200,0.5) !important; box-shadow: 0 0 0 3px rgba(0,212,200,0.1) !important; }
        #d4e-support .sp-input::placeholder { color: rgba(255,255,255,0.25) !important; }
        #d4e-support select.sp-input {
          appearance: none !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%23666' stroke-width='1.5' fill='none'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important; background-position: right 20px center !important;
          background-color: rgba(255,255,255,0.05) !important;
        }
        #d4e-support option { background-color: #1E293B !important; color: #FFFFFF !important; }
        #d4e-support .sp-btn {
          width: 100% !important; background-color: #00D4C8 !important; color: #0B0F19 !important;
          border: none !important; border-radius: 14px !important; padding: 20px !important;
          font-size: 18px !important; font-weight: 600 !important; cursor: pointer !important;
          font-family: 'Space Grotesk', sans-serif !important; transition: background-color 0.2s !important;
        }
        #d4e-support .sp-btn:hover { background-color: #00B4A6 !important; }
        #d4e-support .sp-btn:disabled { opacity: 0.7 !important; cursor: wait !important; }
        #d4e-support .sp-btn-reset {
          background-color: rgba(255,255,255,0.06) !important; color: rgba(255,255,255,0.6) !important;
          border: 1px solid rgba(255,255,255,0.1) !important; border-radius: 10px !important;
          padding: 12px 24px !important; font-size: 15px !important; cursor: pointer !important;
        }
        #d4e-support .sp-icon-ticket {
          width: 48px !important; height: 48px !important; border-radius: 12px !important;
          background-color: rgba(0,212,200,0.12) !important;
          display: flex !important; align-items: center !important; justify-content: center !important;
          font-size: 24px !important;
        }
        #d4e-support .sp-success-icon {
          width: 68px !important; height: 68px !important; border-radius: 18px !important;
          background-color: rgba(0,212,200,0.12) !important;
          display: inline-flex !important; align-items: center !important; justify-content: center !important;
          font-size: 34px !important; margin-bottom: 20px !important; color: #00D4C8 !important;
        }
        #d4e-support .sp-success-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 26px !important; font-weight: 700 !important; color: #00D4C8 !important; margin-bottom: 10px !important;
        }

        /* === SIDEBAR CARDS === */
        #d4e-support .sp-card {
          background-color: #0F172A !important;
          border-radius: 18px !important; padding: 28px 26px !important;
          display: flex !important; align-items: center !important; gap: 18px !important;
          text-decoration: none !important; transition: all 0.2s !important; cursor: pointer !important;
        }
        #d4e-support .sp-card:hover { background-color: #1E293B !important; transform: translateY(-2px) !important; }
        #d4e-support .sp-card-teal { border: 1.5px solid rgba(0,212,200,0.2) !important; }
        #d4e-support .sp-card-teal:hover { border-color: rgba(0,212,200,0.5) !important; }
        #d4e-support .sp-card-gold { border: 1.5px solid rgba(245,158,11,0.2) !important; }
        #d4e-support .sp-card-gold:hover { border-color: rgba(245,158,11,0.5) !important; }
        #d4e-support .sp-card-purple { border: 1.5px solid rgba(139,92,246,0.2) !important; }
        #d4e-support .sp-card-purple:hover { border-color: rgba(139,92,246,0.5) !important; }
        #d4e-support .sp-card-default { border: 1.5px solid rgba(255,255,255,0.08) !important; }
        #d4e-support .sp-card-default:hover { border-color: rgba(255,255,255,0.2) !important; }
        #d4e-support .sp-card-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 17px !important; font-weight: 700 !important; color: #FFFFFF !important; margin-bottom: 3px !important;
        }
        #d4e-support .sp-teal { color: #00D4C8 !important; }
        #d4e-support .sp-gold { color: #F59E0B !important; }
        #d4e-support .sp-purple { color: #8B5CF6 !important; }
        #d4e-support .sp-dim { color: rgba(255,255,255,0.5) !important; }
        #d4e-support .sp-icon {
          width: 52px !important; height: 52px !important; border-radius: 14px !important;
          display: flex !important; align-items: center !important; justify-content: center !important;
          font-size: 24px !important; flex-shrink: 0 !important;
        }
        #d4e-support .sp-icon-teal { background-color: rgba(0,212,200,0.12) !important; }
        #d4e-support .sp-icon-gold { background-color: rgba(245,158,11,0.12) !important; }
        #d4e-support .sp-icon-purple { background-color: rgba(139,92,246,0.12) !important; }
        #d4e-support .sp-icon-default { background-color: rgba(255,255,255,0.06) !important; }

        #d4e-support .sp-tipbox {
          background-color: #0F172A !important; border: 1.5px solid rgba(255,255,255,0.06) !important;
          border-radius: 18px !important; padding: 28px !important; margin-top: 8px !important;
        }
        #d4e-support .sp-tip-label { color: rgba(255,255,255,0.3) !important; font-size: 12px !important; font-weight: 600 !important; text-transform: uppercase !important; letter-spacing: 0.06em !important; margin-bottom: 10px !important; }
        #d4e-support .sp-tip-text { color: rgba(255,255,255,0.5) !important; font-size: 14px !important; line-height: 1.7 !important; }

        @media (max-width: 860px) {
          #d4e-support .sp-layout { flex-direction: column !important; }
          #d4e-support .sp-grid-2 { grid-template-columns: 1fr !important; }
          #d4e-support .sp-form-box { padding: 36px 28px !important; }
        }
              @media (max-width: 768px) {
          #d4e-support .sp-layout { flex-direction: column !important; }
          #d4e-support .sp-form { padding: 28px 20px !important; }
        }
      `}</style>

      <div id="d4e-support">
        {/* HEADER */}
        <div style={{ padding: '110px 32px 52px', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                <span className="sp-dot" />
                <span className="sp-status-text">Support disponible - Lun-Ven 8h-18h</span>
              </div>
              <h1 className="sp-title">Support client</h1>
              <p className="sp-subtitle">Ouvrez un ticket, suivez vos demandes ou preparez une session a distance.</p>
            </div>
            <img src="/odoo-gold-partner.svg" alt="Odoo Gold Partner" style={{ height: 72, flexShrink: 0, marginTop: 8 }} />
          </div>
        </div>

        {/* LAYOUT */}
        <div style={{ padding: '0 32px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="sp-layout" style={{ display: 'flex', gap: 36, alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* FORMULAIRE */}
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div className="sp-form-box sp-dark">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
                  <span className="sp-icon-ticket">TICKET</span>
                  <span className="sp-h2">Ouvrir un ticket</span>
                </div>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                    <div className="sp-success-icon">OK</div>
                    <div className="sp-success-title">Ticket envoye</div>
                    <p className="sp-dim" style={{ fontSize: 17, marginBottom: 32 }}>Nous revenons vers vous dans les plus brefs delais.</p>
                    <button className="sp-btn-reset" onClick={() => { setSubmitted(false); setFormData({ prenom: '', nom: '', email: '', entreprise: '', module: '', urgence: '', description: '' }); }}>Ouvrir un autre ticket</button>
                  </div>
                ) : (
                  <div>
                    <div className="sp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginBottom: 22 }}>
                      <div><span className="sp-label">Prenom</span><input className="sp-input" name="prenom" type="text" value={formData.prenom} onChange={handleChange} required /></div>
                      <div><span className="sp-label">Nom</span><input className="sp-input" name="nom" type="text" value={formData.nom} onChange={handleChange} required /></div>
                    </div>
                    <div className="sp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginBottom: 22 }}>
                      <div><span className="sp-label">Email</span><input className="sp-input" name="email" type="email" value={formData.email} onChange={handleChange} required /></div>
                      <div><span className="sp-label">Entreprise</span><input className="sp-input" name="entreprise" type="text" value={formData.entreprise} onChange={handleChange} /></div>
                    </div>
                    <div className="sp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginBottom: 22 }}>
                      <div><span className="sp-label">Module Odoo concerne</span><select className="sp-input" name="module" value={formData.module} onChange={handleChange}><option value="">Selectionner...</option><option value="CRM">CRM</option><option value="Ventes">Ventes</option><option value="Achats">Achats</option><option value="Comptabilite">Comptabilite</option><option value="Stock">Stock / Inventaire</option><option value="Fabrication">Fabrication</option><option value="Projet">Projet</option><option value="RH">RH / Conges</option><option value="Site Web">Site Web / eCommerce</option><option value="ElvyBat">ElvyBat</option><option value="ElvyDoc">ElvyDoc (GED)</option><option value="ElvyPrint">ElvyPrint</option><option value="Autre">Autre</option></select></div>
                      <div><span className="sp-label">Urgence</span><select className="sp-input" name="urgence" value={formData.urgence} onChange={handleChange}><option value="">Selectionner...</option><option value="Bloquant">Bloquant</option><option value="Genant">Genant</option><option value="Amelioration">Amelioration</option></select></div>
                    </div>
                    <div style={{ marginBottom: 32 }}>
                      <span className="sp-label">Description du probleme</span>
                      <textarea className="sp-input" name="description" value={formData.description} onChange={handleChange} rows={7} required style={{ resize: 'vertical' }} placeholder="Decrivez le probleme, les etapes pour le reproduire, et joignez des captures d'ecran par email si besoin." />
                    </div>
                    <button className="sp-btn" onClick={handleSubmit} disabled={sending}>{sending ? 'Envoi en cours...' : 'Envoyer le ticket'}</button>
                  </div>
                )}
              </div>
            </div>

            {/* SIDEBAR */}
            <div style={{ flex: '0 1 400px', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <a href="https://odoo.d4e.app/" target="_blank" rel="noopener noreferrer" className="sp-card sp-card-teal sp-dark">
                <div className="sp-icon sp-icon-teal">LIST</div>
                <div><div className="sp-card-title">Suivre mes tickets</div><div className="sp-teal" style={{ fontSize: 14, fontWeight: 500 }}>Portail client -></div></div>
              </a>
              <a href="https://anydesk.com/fr/downloads" target="_blank" rel="noopener noreferrer" className="sp-card sp-card-gold sp-dark">
                <div className="sp-icon sp-icon-gold">PC</div>
                <div><div className="sp-card-title">Telecharger AnyDesk</div><div className="sp-gold" style={{ fontSize: 14, fontWeight: 500 }}>Session a distance -></div></div>
              </a>
              <a href="tel:+41582551115" className="sp-card sp-card-purple sp-dark">
                <div className="sp-icon sp-icon-purple">TEL</div>
                <div><div className="sp-card-title">+41 (0) 58 255 11 15</div><div className="sp-purple" style={{ fontSize: 14, fontWeight: 500 }}>Lun-Ven - 8h-18h</div></div>
              </a>
              <a href="mailto:support@digital4efficiency.ch" className="sp-card sp-card-default sp-dark">
                <div className="sp-icon sp-icon-default">MAIL</div>
                <div><div className="sp-card-title">Email support</div><div className="sp-dim" style={{ fontSize: 14, fontWeight: 500 }}>support@digital4efficiency.ch</div></div>
              </a>
              <div className="sp-tipbox sp-dark">
                <div className="sp-tip-label">Astuce</div>
                <p className="sp-tip-text" style={{ margin: 0 }}>Pour un traitement plus rapide, joignez une capture d'ecran et precisez les etapes pour reproduire le probleme.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Support };

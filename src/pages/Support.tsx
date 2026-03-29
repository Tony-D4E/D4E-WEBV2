import React, { useState } from 'react';

const Support: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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
      alert('Erreur. Veuillez contacter support@digital4efficiency.ch');
    }
    setSending(false);
  };

  return (
    <>
      <style>{`
        .d4e-support-page {
          font-family: 'Inter', sans-serif !important;
          background: #0B0F19 !important;
          color: #fff !important;
          min-height: 100vh !important;
        }
        .d4e-support-page * { box-sizing: border-box; }
        .d4e-support-page h1 { font-family: 'Space Grotesk', sans-serif !important; color: #FFFFFF !important; }
        .d4e-support-page h2 { font-family: 'Space Grotesk', sans-serif !important; color: #FFFFFF !important; }
        .d4e-support-page h3 { font-family: 'Space Grotesk', sans-serif !important; color: #FFFFFF !important; }
        .d4e-support-page p { color: rgba(255,255,255,0.45) !important; }
        .d4e-support-page .sp-input {
          width: 100% !important;
          background: rgba(255,255,255,0.05) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
          border-radius: 10px !important;
          padding: 14px 16px !important;
          color: #FFFFFF !important;
          font-size: 15px !important;
          outline: none !important;
          font-family: 'Inter', sans-serif !important;
        }
        .d4e-support-page .sp-input:focus { border-color: rgba(0,212,200,0.4) !important; }
        .d4e-support-page .sp-input::placeholder { color: rgba(255,255,255,0.25) !important; }
        .d4e-support-page .sp-input option { background: #1E293B !important; color: #FFFFFF !important; }
        .d4e-support-page .sp-label {
          display: block !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          color: rgba(255,255,255,0.4) !important;
          margin-bottom: 8px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
        }
        .d4e-support-page .sp-card {
          background: rgba(255,255,255,0.02) !important;
          border-radius: 16px !important;
          padding: 28px 24px !important;
          text-decoration: none !important;
          color: inherit !important;
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
          transition: all 0.2s !important;
          cursor: pointer !important;
        }
        .d4e-support-page .sp-card:hover { background: rgba(255,255,255,0.05) !important; }
        .d4e-support-page .sp-card-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #FFFFFF !important;
          margin-bottom: 2px !important;
        }
        .d4e-support-page .sp-btn {
          width: 100% !important;
          background: #00D4C8 !important;
          color: #0B0F19 !important;
          border: none !important;
          border-radius: 10px !important;
          padding: 16px !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          font-family: 'Space Grotesk', sans-serif !important;
        }
        .d4e-support-page .sp-btn:hover { background: #00B4A6 !important; }
        .d4e-support-page .sp-btn:disabled { opacity: 0.7 !important; cursor: wait !important; }
      `}</style>

      <div className="d4e-support-page">

        <section style={{ padding: '100px 32px 40px', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 12px rgba(34,197,94,0.5)', display: 'inline-block' }} />
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Support disponible &middot; Lun-Ven 8h-18h</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, margin: '0 0 12px' }}>Support client</h1>
          <p style={{ fontSize: 18, margin: 0 }}>Ouvrez un ticket, suivez vos demandes ou pr&#233;parez une session &#224; distance.</p>
        </section>

        <section style={{ padding: '0 32px 80px', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' as const }}>

            <div style={{ flex: '1 1 560px', minWidth: 0 }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: '40px 36px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                  <span style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,212,200,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>&#127915;</span>
                  <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Ouvrir un ticket</h2>
                </div>

                {submitted ? (
                  <div style={{ textAlign: 'center' as const, padding: '48px 20px' }}>
                    <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(0,212,200,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 16, color: '#00D4C8' }}>&#10003;</div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>Ticket envoy&#233;</h3>
                    <p style={{ fontSize: 15, margin: '0 0 24px' }}>Nous revenons vers vous dans les plus brefs d&#233;lais.</p>
                    <button onClick={() => { setSubmitted(false); setFormData({ prenom: '', nom: '', email: '', entreprise: '', module: '', urgence: '', description: '' }); }}
                      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '10px 20px', fontSize: 14, cursor: 'pointer' }}>
                      Ouvrir un autre ticket
                    </button>
                  </div>
                ) : (
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div><label className="sp-label">Pr&#233;nom</label><input name="prenom" type="text" value={formData.prenom} onChange={handleChange} required className="sp-input" /></div>
                      <div><label className="sp-label">Nom</label><input name="nom" type="text" value={formData.nom} onChange={handleChange} required className="sp-input" /></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div><label className="sp-label">Email</label><input name="email" type="email" value={formData.email} onChange={handleChange} required className="sp-input" /></div>
                      <div><label className="sp-label">Entreprise</label><input name="entreprise" type="text" value={formData.entreprise} onChange={handleChange} className="sp-input" /></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div>
                        <label className="sp-label">Module Odoo concern&#233;</label>
                        <select name="module" value={formData.module} onChange={handleChange} className="sp-input" style={{ appearance: 'none' as const }}>
                          <option value="">S&#233;lectionner...</option>
                          <option value="CRM">CRM</option>
                          <option value="Ventes">Ventes</option>
                          <option value="Achats">Achats</option>
                          <option value="Comptabilité">Comptabilit&#233;</option>
                          <option value="Stock">Stock / Inventaire</option>
                          <option value="Fabrication">Fabrication</option>
                          <option value="Projet">Projet</option>
                          <option value="RH">RH / Cong&#233;s</option>
                          <option value="Site Web">Site Web / eCommerce</option>
                          <option value="ElvyBat">ElvyBat</option>
                          <option value="ElvyDoc">ElvyDoc (GED)</option>
                          <option value="ElvyPrint">ElvyPrint</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                      <div>
                        <label className="sp-label">Urgence</label>
                        <select name="urgence" value={formData.urgence} onChange={handleChange} className="sp-input" style={{ appearance: 'none' as const }}>
                          <option value="">S&#233;lectionner...</option>
                          <option value="Bloquant">Bloquant</option>
                          <option value="Gênant">G&#234;nant</option>
                          <option value="Amélioration">Am&#233;lioration</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label className="sp-label">Description du probl&#232;me</label>
                      <textarea name="description" value={formData.description} onChange={handleChange} rows={5} required className="sp-input"
                        placeholder="Décrivez le problème, les étapes pour le reproduire, et joignez des captures d'écran par email si besoin."
                        style={{ resize: 'vertical' as const }} />
                    </div>
                    <button onClick={handleSubmit} disabled={sending} className="sp-btn">
                      {sending ? 'Envoi en cours...' : 'Envoyer le ticket'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div style={{ flex: '0 1 340px', display: 'flex', flexDirection: 'column' as const, gap: 16 }}>

              <a href="https://odoo.d4e.app/" target="_blank" rel="noopener noreferrer" className="sp-card" style={{ border: '1px solid rgba(0,212,200,0.15)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(0,212,200,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>&#128203;</div>
                <div><div className="sp-card-title">Suivre mes tickets</div><div style={{ fontSize: 13, color: '#00D4C8', fontWeight: 500 }}>Portail client &#8594;</div></div>
              </a>

              <a href="https://anydesk.com/fr/downloads" target="_blank" rel="noopener noreferrer" className="sp-card" style={{ border: '1px solid rgba(245,158,11,0.15)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(245,158,11,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>&#128421;</div>
                <div><div className="sp-card-title">T&#233;l&#233;charger AnyDesk</div><div style={{ fontSize: 13, color: '#F59E0B', fontWeight: 500 }}>Session &#224; distance &#8594;</div></div>
              </a>

              <a href="tel:+41582551115" className="sp-card" style={{ border: '1px solid rgba(139,92,246,0.15)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(139,92,246,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>&#128222;</div>
                <div><div className="sp-card-title">+41 (0) 58 255 11 15</div><div style={{ fontSize: 13, color: '#8B5CF6', fontWeight: 500 }}>Lun-Ven &#183; 8h-18h</div></div>
              </a>

              <a href="mailto:support@digital4efficiency.ch" className="sp-card" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>&#9993;</div>
                <div><div className="sp-card-title">Email support</div><div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>support@digital4efficiency.ch</div></div>
              </a>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 24, marginTop: 8 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: 12 }}>Astuce</div>
                <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0 }}>Pour un traitement plus rapide, joignez une capture d&#8217;&#233;cran et pr&#233;cisez les &#233;tapes pour reproduire le probl&#232;me.</p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export { Support };

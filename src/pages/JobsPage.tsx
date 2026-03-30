import React, { useState } from 'react';

const JobsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    prenom: '', nom: '', email: '', telephone: '', poste: '', message: ''
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
        body: JSON.stringify({ ...formData, _subject: 'Candidature - ' + formData.prenom + ' ' + formData.nom }),
      });
      setSubmitted(true);
    } catch { /* silent */ }
    setSending(false);
  };

  return (
    <>
      <style>{`
        #d4e-jobs, #d4e-jobs * { box-sizing: border-box !important; }
        #d4e-jobs { font-family: 'Inter', sans-serif !important; background-color: #F0FDF9 !important; min-height: 100vh !important; padding-bottom: 100px !important; }
        #d4e-jobs .jb-dark, #d4e-jobs .jb-dark * { color: #FFFFFF !important; }
        #d4e-jobs .jb-title { font-family: 'Space Grotesk', sans-serif !important; font-size: clamp(36px, 5vw, 52px) !important; font-weight: 700 !important; color: #0B0F19 !important; margin: 0 0 16px !important; }
        #d4e-jobs .jb-subtitle { font-size: 20px !important; color: #475569 !important; margin: 0 !important; line-height: 1.6 !important; max-width: 600px !important; }
        #d4e-jobs .jb-h2 { font-family: 'Space Grotesk', sans-serif !important; font-size: 24px !important; font-weight: 700 !important; margin: 0 !important; }
        #d4e-jobs .jb-card { background-color: #0F172A !important; border-radius: 24px !important; padding: 48px 44px !important; border: 1px solid rgba(255,255,255,0.06) !important; }
        #d4e-jobs .jb-card-white { background-color: #FFFFFF !important; border-radius: 20px !important; padding: 36px 32px !important; border: 1px solid #E2E8F0 !important; }
        #d4e-jobs .jb-label { display: block !important; font-size: 13px !important; font-weight: 600 !important; color: rgba(255,255,255,0.4) !important; margin-bottom: 10px !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; }
        #d4e-jobs .jb-input {
          width: 100% !important; background-color: rgba(255,255,255,0.05) !important;
          border: 1.5px solid rgba(255,255,255,0.1) !important; border-radius: 12px !important;
          padding: 16px 18px !important; color: #FFFFFF !important; font-size: 16px !important;
          outline: none !important; font-family: 'Inter', sans-serif !important;
        }
        #d4e-jobs .jb-input:focus { border-color: rgba(0,212,200,0.5) !important; }
        #d4e-jobs .jb-input::placeholder { color: rgba(255,255,255,0.25) !important; }
        #d4e-jobs select.jb-input {
          appearance: none !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%23666' stroke-width='1.5' fill='none'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important; background-position: right 18px center !important;
          background-color: rgba(255,255,255,0.05) !important;
        }
        #d4e-jobs option { background-color: #1E293B !important; color: #FFFFFF !important; }
        #d4e-jobs .jb-btn {
          width: 100% !important; background-color: #00D4C8 !important; color: #0B0F19 !important;
          border: none !important; border-radius: 12px !important; padding: 18px !important;
          font-size: 17px !important; font-weight: 600 !important; cursor: pointer !important;
          font-family: 'Space Grotesk', sans-serif !important;
        }
        #d4e-jobs .jb-btn:hover { background-color: #00B4A6 !important; }
        #d4e-jobs .jb-btn:disabled { opacity: 0.7 !important; }
        #d4e-jobs .jb-perk { display: flex !important; align-items: flex-start !important; gap: 14px !important; margin-bottom: 20px !important; }
        #d4e-jobs .jb-perk-icon { width: 36px !important; height: 36px !important; border-radius: 10px !important; display: flex !important; align-items: center !important; justify-content: center !important; font-size: 18px !important; flex-shrink: 0 !important; background-color: rgba(0,212,200,0.1) !important; }
        #d4e-jobs .jb-perk-title { font-weight: 600 !important; color: #0B0F19 !important; font-size: 15px !important; margin-bottom: 2px !important; }
        #d4e-jobs .jb-perk-desc { font-size: 14px !important; color: #64748B !important; line-height: 1.5 !important; }
        #d4e-jobs .jb-success-icon { width: 64px !important; height: 64px !important; border-radius: 16px !important; background-color: rgba(0,212,200,0.12) !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; font-size: 32px !important; margin-bottom: 20px !important; color: #00D4C8 !important; }
        @media (max-width: 768px) {
          #d4e-jobs .jb-layout { flex-direction: column !important; }
          #d4e-jobs .jb-grid-2 { grid-template-columns: 1fr !important; }
          #d4e-jobs .jb-card { padding: 36px 28px !important; }
        }
      `}</style>

      <div id="d4e-jobs">
        <div style={{ padding: '110px 32px 52px', maxWidth: 1280, margin: '0 auto' }}>
          <h1 className="jb-title">Rejoignez D4E</h1>
          <p className="jb-subtitle">
            On cherche des gens passionnés par Odoo, les PME et le terrain. Pas de slides, du concret.
          </p>
        </div>

        <div style={{ padding: '0 32px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="jb-layout" style={{ display: 'flex', gap: 36, alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* FORMULAIRE */}
            <div style={{ flex: '1 1 620px', minWidth: 0 }}>
              <div className="jb-card jb-dark">
                <div className="jb-h2" style={{ color: '#FFFFFF', marginBottom: 32 }}>Candidature spontanée</div>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                    <div className="jb-success-icon">✓</div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, color: '#00D4C8', marginBottom: 10 }}>Candidature envoyée</div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>Merci pour votre intérêt. On revient vers vous rapidement.</p>
                  </div>
                ) : (
                  <div>
                    <div className="jb-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div><span className="jb-label">Prénom</span><input className="jb-input" name="prenom" type="text" value={formData.prenom} onChange={handleChange} required /></div>
                      <div><span className="jb-label">Nom</span><input className="jb-input" name="nom" type="text" value={formData.nom} onChange={handleChange} required /></div>
                    </div>
                    <div className="jb-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div><span className="jb-label">Email</span><input className="jb-input" name="email" type="email" value={formData.email} onChange={handleChange} required /></div>
                      <div><span className="jb-label">Téléphone</span><input className="jb-input" name="telephone" type="tel" value={formData.telephone} onChange={handleChange} /></div>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <span className="jb-label">Domaine</span>
                      <select className="jb-input" name="poste" value={formData.poste} onChange={handleChange}>
                        <option value="">Sélectionner...</option>
                        <option value="Consultant Odoo">Consultant Odoo</option>
                        <option value="Développeur Odoo">Développeur Odoo</option>
                        <option value="Chef de projet">Chef de projet</option>
                        <option value="Support technique">Support technique</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: 28 }}>
                      <span className="jb-label">Votre message</span>
                      <textarea className="jb-input" name="message" value={formData.message} onChange={handleChange} rows={5} style={{ resize: 'vertical' }} placeholder="Parlez-nous de vous, de votre expérience, et de ce qui vous motive." />
                    </div>
                    <button className="jb-btn" onClick={handleSubmit} disabled={sending}>{sending ? 'Envoi...' : 'Envoyer ma candidature'}</button>
                  </div>
                )}
              </div>
            </div>

            {/* SIDEBAR */}
            <div style={{ flex: '0 1 420px' }}>
              <div className="jb-card-white">
                <div className="jb-h2" style={{ color: '#0B0F19', marginBottom: 28 }}>Pourquoi D4E ?</div>
                <div className="jb-perk"><div className="jb-perk-icon">🚀</div><div><div className="jb-perk-title">Impact direct</div><div className="jb-perk-desc">Chaque projet compte. Pas de hiérarchie à 12 niveaux.</div></div></div>
                <div className="jb-perk"><div className="jb-perk-icon">🏔️</div><div><div className="jb-perk-title">Suisse + Barcelone</div><div className="jb-perk-desc">Bureaux à Genève, Sion et Barcelone.</div></div></div>
                <div className="jb-perk"><div className="jb-perk-icon">🧠</div><div><div className="jb-perk-title">Odoo à fond</div><div className="jb-perk-desc">On ne fait pas 10 ERP. On fait Odoo, et on le fait bien.</div></div></div>
                <div className="jb-perk"><div className="jb-perk-icon">🤝</div><div><div className="jb-perk-title">Équipe soudée</div><div className="jb-perk-desc">Fondé en 2017 par deux passionnés. L'esprit startup, la stabilité en plus.</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsPage;

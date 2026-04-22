import React, { useState } from 'react';
import { ResponsiveImage } from '../components/ResponsiveImage';

/* ═══════════════════════════════════════════
   ANNONCES - Modifier ici pour ajouter/retirer des offres
   ═══════════════════════════════════════════ */
const OFFRES = [
  {
    titre: 'Consultant Odoo',
    lieu: 'Genève ou Sion',
    type: 'CDI',
    desc: 'Vous accompagnez nos clients dans leur projet Odoo : cadrage, configuration, formation, support. Expérience Odoo ou ERP requise.',
  },
  {
    titre: 'Développeur Odoo (Python)',
    lieu: 'Genève ou Barcelone',
    type: 'CDI',
    desc: 'Vous développez des modules sur mesure et contribuez à la gamme Elvy. Python, OWL et connaissance Odoo appréciés.',
  },
];
/* ═══════════════════════════════════════════ */

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
        #d4e-jobs { font-family: 'Inter', sans-serif !important; background-color: #F0FDF9 !important; min-height: 100vh !important; }
        #d4e-jobs .jb-dark, #d4e-jobs .jb-dark * { color: #FFFFFF !important; }

        /* HERO */
        #d4e-jobs .jb-hero {
          position: relative !important; min-height: 560px !important;
          display: flex !important; align-items: flex-end !important;
          overflow: hidden !important; border-radius: 0 0 32px 32px !important;
        }
        #d4e-jobs .jb-hero-img { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; object-fit: cover !important; }
        #d4e-jobs .jb-hero-overlay { position: absolute !important; inset: 0 !important; background: linear-gradient(to top, rgba(11,15,25,0.95) 0%, rgba(11,15,25,0.65) 40%, rgba(11,15,25,0.25) 100%) !important; }
        #d4e-jobs .jb-hero-inner {
          position: relative !important; z-index: 1 !important;
          padding: 60px 48px !important; max-width: 1280px !important;
          margin: 0 auto !important; width: 100% !important;
        }
        #d4e-jobs .jb-gold-logo {
          position: absolute !important; top: 110px !important; right: 48px !important;
          height: 80px !important; z-index: 2 !important;
        }
        #d4e-jobs .jb-hero-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: clamp(48px, 7vw, 80px) !important; font-weight: 700 !important;
          margin: 0 0 20px !important;
          letter-spacing: -0.03em !important; line-height: 1 !important;
        }
        #d4e-jobs .jb-hero-title-white { color: #FFFFFF !important; }
        #d4e-jobs .jb-hero-title-gradient {
          background: linear-gradient(90deg, #00E5CC, #00D4C8, #06B6D4) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }
        #d4e-jobs .jb-hero-sub { font-size: 21px !important; color: rgba(255,255,255,0.7) !important; margin: 0 !important; max-width: 540px !important; line-height: 1.6 !important; }

        /* SECTION TITLES */
        #d4e-jobs .jb-section-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 36px !important; font-weight: 700 !important;
          color: #0B0F19 !important; margin: 0 0 36px !important;
        }

        /* PERKS */
        #d4e-jobs .jb-perk-card {
          background-color: #FFFFFF !important; border: 1.5px solid #E2E8F0 !important;
          border-radius: 24px !important; padding: 40px 28px !important;
          text-align: center !important; transition: all 0.3s !important;
        }
        #d4e-jobs .jb-perk-card:hover { transform: translateY(-6px) !important; box-shadow: 0 16px 40px rgba(0,0,0,0.08) !important; border-color: #00D4C8 !important; }
        #d4e-jobs .jb-perk-icon {
          width: 64px !important; height: 64px !important; border-radius: 18px !important;
          display: inline-flex !important; align-items: center !important; justify-content: center !important;
          margin-bottom: 20px !important;
        }
        #d4e-jobs .jb-perk-icon img { height: 32px !important; width: auto !important; }
        #d4e-jobs .jb-perk-icon svg { height: 32px !important; width: 32px !important; }
        #d4e-jobs .jb-perk-name { font-family: 'Space Grotesk', sans-serif !important; font-size: 19px !important; font-weight: 700 !important; color: #0B0F19 !important; margin-bottom: 10px !important; }
        #d4e-jobs .jb-perk-desc { font-size: 15px !important; color: #64748B !important; line-height: 1.6 !important; }

        /* OFFERS */
        #d4e-jobs .jb-offer {
          background-color: #FFFFFF !important; border: 1.5px solid #E2E8F0 !important;
          border-radius: 20px !important; padding: 36px 32px !important;
          transition: all 0.3s !important;
        }
        #d4e-jobs .jb-offer:hover { border-color: #00D4C8 !important; box-shadow: 0 8px 24px rgba(0,0,0,0.06) !important; transform: translateY(-2px) !important; }
        #d4e-jobs .jb-offer-title { font-family: 'Space Grotesk', sans-serif !important; font-size: 22px !important; font-weight: 700 !important; color: #0B0F19 !important; margin-bottom: 10px !important; }
        #d4e-jobs .jb-offer-meta { display: flex !important; gap: 12px !important; margin-bottom: 14px !important; flex-wrap: wrap !important; }
        #d4e-jobs .jb-offer-tag { font-size: 13px !important; font-weight: 600 !important; padding: 5px 14px !important; border-radius: 10px !important; }
        #d4e-jobs .jb-offer-desc { font-size: 15px !important; color: #64748B !important; line-height: 1.7 !important; margin-bottom: 20px !important; }
        #d4e-jobs .jb-offer-btn {
          display: inline-block !important; background-color: #00D4C8 !important; color: #0B0F19 !important;
          border: none !important; border-radius: 12px !important; padding: 14px 28px !important;
          font-size: 15px !important; font-weight: 600 !important; cursor: pointer !important;
          font-family: 'Space Grotesk', sans-serif !important;
        }
        #d4e-jobs .jb-offer-btn:hover { background-color: #00B4A6 !important; }
        #d4e-jobs .jb-no-offer { text-align: center !important; padding: 56px 20px !important; background-color: #FFFFFF !important; border: 2px dashed #E2E8F0 !important; border-radius: 24px !important; }

        /* PHOTO */
        #d4e-jobs .jb-photo-band { width: 100% !important; height: 340px !important; object-fit: cover !important; border-radius: 28px !important; }

        /* FORM */
        #d4e-jobs .jb-form-section { background-color: #0F172A !important; border-radius: 32px !important; padding: 64px 52px !important; border: 1px solid rgba(255,255,255,0.06) !important; }
        #d4e-jobs .jb-form-title { font-family: 'Space Grotesk', sans-serif !important; font-size: 32px !important; font-weight: 700 !important; color: #FFFFFF !important; margin: 0 0 12px !important; }
        #d4e-jobs .jb-form-sub { font-size: 17px !important; color: rgba(255,255,255,0.5) !important; margin: 0 0 40px !important; }
        #d4e-jobs .jb-label { display: block !important; font-size: 13px !important; font-weight: 600 !important; color: rgba(255,255,255,0.4) !important; margin-bottom: 10px !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; }
        #d4e-jobs .jb-input { width: 100% !important; background-color: rgba(255,255,255,0.05) !important; border: 1.5px solid rgba(255,255,255,0.1) !important; border-radius: 14px !important; padding: 18px 20px !important; color: #FFFFFF !important; font-size: 16px !important; outline: none !important; font-family: 'Inter', sans-serif !important; }
        #d4e-jobs .jb-input:focus { border-color: rgba(0,212,200,0.5) !important; box-shadow: 0 0 0 3px rgba(0,212,200,0.1) !important; }
        #d4e-jobs .jb-input::placeholder { color: rgba(255,255,255,0.2) !important; }
        #d4e-jobs select.jb-input { appearance: none !important; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%23666' stroke-width='1.5' fill='none'/%3E%3C/svg%3E") !important; background-repeat: no-repeat !important; background-position: right 20px center !important; background-color: rgba(255,255,255,0.05) !important; }
        #d4e-jobs option { background-color: #1E293B !important; color: #FFFFFF !important; }
        #d4e-jobs .jb-btn { width: 100% !important; background-color: #00D4C8 !important; color: #0B0F19 !important; border: none !important; border-radius: 14px !important; padding: 20px !important; font-size: 18px !important; font-weight: 600 !important; cursor: pointer !important; font-family: 'Space Grotesk', sans-serif !important; }
        #d4e-jobs .jb-btn:hover { background-color: #00B4A6 !important; }
        #d4e-jobs .jb-btn:disabled { opacity: 0.7 !important; }
        #d4e-jobs .jb-success-icon { width: 72px !important; height: 72px !important; border-radius: 20px !important; background-color: rgba(0,212,200,0.12) !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; font-size: 36px !important; margin-bottom: 20px !important; color: #00D4C8 !important; }
        @media (max-width: 860px) {
          #d4e-jobs .jb-perks-grid { grid-template-columns: 1fr 1fr !important; }
          #d4e-jobs .jb-form-section { padding: 40px 28px !important; }
          #d4e-jobs .jb-hero-inner { padding: 40px 24px !important; }
          #d4e-jobs .jb-gold-logo { top: 90px !important; right: 24px !important; height: 56px !important; }
          #d4e-jobs .jb-form-grid { grid-template-columns: 1fr !important; }
          #d4e-jobs .jb-offers-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          #d4e-jobs .jb-perks-grid { grid-template-columns: 1fr !important; }
          #d4e-jobs .jb-gold-logo { height: 44px !important; top: 80px !important; right: 16px !important; }
        }
      `}</style>

      <div id="d4e-jobs">
        {/* HERO */}
        <div className="jb-hero">
          <ResponsiveImage
            src="/team-jobs-2.jpg"
            alt="Equipe D4E"
            className="jb-hero-img"
            pictureStyle={{ position: 'absolute', inset: 0, display: 'block' }}
            widths={[640, 1024]}
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
          />
          <div className="jb-hero-overlay" />
          <img src="/odoo-gold-partner.svg" alt="Odoo Gold Partner" className="jb-gold-logo" />
          <div className="jb-hero-inner">
            <div className="jb-hero-title">
              <span className="jb-hero-title-white">Rejoignez</span><br />
              <span className="jb-hero-title-gradient">l'aventure D4E</span>
            </div>
            <p className="jb-hero-sub">On cherche des gens passionnés par Odoo, les PME et le terrain. Pas de slides, du concret.</p>
          </div>
        </div>

        {/* OFFRES */}
        <div style={{ padding: '72px 32px 48px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="jb-section-title">
            {OFFRES.length > 0 ? `${OFFRES.length} poste${OFFRES.length > 1 ? 's' : ''} ouvert${OFFRES.length > 1 ? 's' : ''}` : "Offres d'emploi"}
          </div>
          {OFFRES.length > 0 ? (
            <div className="jb-offers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: 24 }}>
              {OFFRES.map((o, i) => (
                <div key={i} className="jb-offer">
                  <div className="jb-offer-title">{o.titre}</div>
                  <div className="jb-offer-meta">
                    <span className="jb-offer-tag" style={{ backgroundColor: '#CCFBF1', color: '#0F766E' }}>{o.lieu}</span>
                    <span className="jb-offer-tag" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>{o.type}</span>
                  </div>
                  <div className="jb-offer-desc">{o.desc}</div>
                  <button className="jb-offer-btn" onClick={() => document.getElementById('candidature')?.scrollIntoView({ behavior: 'smooth' })}>Postuler</button>
                </div>
              ))}
            </div>
          ) : (
            <div className="jb-no-offer">
              <div style={{ fontSize: 44, marginBottom: 16 }}>📭</div>
              <div style={{ fontSize: 18, color: '#64748B' }}>Pas d'offre ouverte pour le moment.</div>
              <div style={{ fontSize: 15, color: '#94A3B8', marginTop: 8 }}>Envoyez-nous une candidature spontanée ci-dessous.</div>
            </div>
          )}
        </div>

        {/* PERKS */}
        <div style={{ padding: '24px 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="jb-section-title" style={{ textAlign: 'center' }}>Pourquoi nous rejoindre ?</div>
          <div className="jb-perks-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            <div className="jb-perk-card">
              <div className="jb-perk-icon" style={{ backgroundColor: '#CCFBF1' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 30, height: 30 }}><path d="M22 2L11 13"/><polygon points="22,2 15,22 11,13 2,9"/></svg>
              </div>
              <div className="jb-perk-name">Impact direct</div>
              <div className="jb-perk-desc">Chaque projet compte. Votre travail est visible immédiatement, pas noyé dans une hiérarchie.</div>
            </div>
            <div className="jb-perk-card">
              <div className="jb-perk-icon" style={{ backgroundColor: '#FEF3C7' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 30, height: 30 }}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div className="jb-perk-name">Suisse + Barcelone</div>
              <div className="jb-perk-desc">Bureaux à Genève, Sion et Barcelone. Flexibilité et cadre de vie.</div>
            </div>
            <div className="jb-perk-card" style={{ borderColor: '#00D4C8' }}>
              <div className="jb-perk-icon" style={{ backgroundColor: '#F0FDF9', padding: 14 }}>
                <img src="/odoo-logo.svg" alt="Odoo" style={{ height: 28 }} />
              </div>
              <div className="jb-perk-name">Odoo, point final</div>
              <div className="jb-perk-desc">On fait Odoo, et on le fait mieux que quiconque. Partenaire Gold certifié.</div>
            </div>
            <div className="jb-perk-card">
              <div className="jb-perk-icon" style={{ backgroundColor: '#EDE9FE' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 30, height: 30 }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="jb-perk-name">Equipe soudée</div>
              <div className="jb-perk-desc">Fondé en 2017 par deux passionnés. L'esprit startup, la stabilité en plus.</div>
            </div>
          </div>
        </div>

        {/* PHOTO */}
        <div style={{ padding: '0 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
          <ResponsiveImage
            src="/team-jobs-1.jpg"
            alt="Equipe"
            className="jb-photo-band"
            widths={[320, 640]}
            sizes="(max-width: 1280px) calc(100vw - 64px), 1280px"
          />
        </div>

        {/* FORM */}
        <div id="candidature" style={{ padding: '0 32px 100px', maxWidth: 900, margin: '0 auto' }}>
          <div className="jb-form-section jb-dark">
            <div className="jb-form-title">Candidature spontanée</div>
            <p className="jb-form-sub">Pas d'offre qui vous correspond ? Envoyez-nous votre profil.</p>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '56px 20px' }}>
                <div className="jb-success-icon">✓</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, color: '#00D4C8', marginBottom: 12 }}>Candidature envoyée</div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 17 }}>Merci. On revient vers vous rapidement.</p>
              </div>
            ) : (
              <div>
                <div className="jb-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                  <div><span className="jb-label">Prénom</span><input className="jb-input" name="prenom" type="text" value={formData.prenom} onChange={handleChange} required /></div>
                  <div><span className="jb-label">Nom</span><input className="jb-input" name="nom" type="text" value={formData.nom} onChange={handleChange} required /></div>
                </div>
                <div className="jb-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
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
                <div style={{ marginBottom: 32 }}>
                  <span className="jb-label">Votre message</span>
                  <textarea className="jb-input" name="message" value={formData.message} onChange={handleChange} rows={5} style={{ resize: 'vertical' }} placeholder="Parlez-nous de vous et de ce qui vous motive." />
                </div>
                <button className="jb-btn" onClick={handleSubmit} disabled={sending}>{sending ? 'Envoi...' : 'Envoyer ma candidature'}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsPage;

import React, { useState } from 'react';

const SupportPage: React.FC = () => {
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
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou contacter support@digital4efficiency.ch');
    }
    setSending(false);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: '14px 16px',
    color: '#FFFFFF',
    fontSize: 15,
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: "'Inter', sans-serif",
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 500,
    color: 'rgba(255,255,255,0.4)',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const selectArrow = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%23666' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#0B0F19', color: '#fff', minHeight: '100vh' }}>

      {/* HEADER */}
      <section style={{ padding: '100px 32px 40px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <span style={{
            width: 10, height: 10, borderRadius: '50%', background: '#22C55E',
            boxShadow: '0 0 12px rgba(34,197,94,0.5)',
          }} />
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
            Support disponible · Lun-Ven 8h-18h
          </span>
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 700, margin: '0 0 12px', color: '#FFFFFF',
        }}>Support client</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', margin: 0 }}>
          Ouvrez un ticket, suivez vos demandes ou préparez une session à distance.
        </p>
      </section>

      {/* LAYOUT : FORMULAIRE + SIDEBAR */}
      <section style={{ padding: '0 32px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* COLONNE GAUCHE : FORMULAIRE TICKET */}
          <div style={{ flex: '1 1 560px', minWidth: 0 }}>
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20, padding: '40px 36px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <span style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'rgba(0,212,200,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20,
                }}>🎫</span>
                <h2 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 22, fontWeight: 700, color: '#FFFFFF', margin: 0,
                }}>Ouvrir un ticket</h2>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: 'rgba(0,212,200,0.12)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, marginBottom: 16,
                  }}>✓</div>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 22, fontWeight: 700, color: '#00D4C8', margin: '0 0 8px',
                  }}>Ticket envoyé</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, margin: '0 0 24px' }}>
                    Nous revenons vers vous dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ prenom: '', nom: '', email: '', entreprise: '', module: '', urgence: '', description: '' }); }}
                    style={{
                      background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
                      padding: '10px 20px', fontSize: 14, cursor: 'pointer',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >Ouvrir un autre ticket</button>
                </div>
              ) : (
                <div>
                  {/* Prénom / Nom */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>Prénom</label>
                      <input name="prenom" type="text" value={formData.prenom} onChange={handleChange} required style={inputStyle}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(0,212,200,0.4)'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>
                    <div>
                      <label style={labelStyle}>Nom</label>
                      <input name="nom" type="text" value={formData.nom} onChange={handleChange} required style={inputStyle}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(0,212,200,0.4)'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>
                  </div>

                  {/* Email / Entreprise */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} required style={inputStyle}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(0,212,200,0.4)'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>
                    <div>
                      <label style={labelStyle}>Entreprise</label>
                      <input name="entreprise" type="text" value={formData.entreprise} onChange={handleChange} style={inputStyle}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(0,212,200,0.4)'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>
                  </div>

                  {/* Module / Urgence */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>Module Odoo concerné</label>
                      <select name="module" value={formData.module} onChange={handleChange} style={{
                        ...inputStyle,
                        appearance: 'none' as const,
                        backgroundImage: selectArrow,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                      }}>
                        <option value="" style={{ background: '#1E293B' }}>Sélectionner...</option>
                        <option value="CRM" style={{ background: '#1E293B' }}>CRM</option>
                        <option value="Ventes" style={{ background: '#1E293B' }}>Ventes</option>
                        <option value="Achats" style={{ background: '#1E293B' }}>Achats</option>
                        <option value="Comptabilité" style={{ background: '#1E293B' }}>Comptabilité</option>
                        <option value="Stock" style={{ background: '#1E293B' }}>Stock / Inventaire</option>
                        <option value="Fabrication" style={{ background: '#1E293B' }}>Fabrication</option>
                        <option value="Projet" style={{ background: '#1E293B' }}>Projet</option>
                        <option value="RH" style={{ background: '#1E293B' }}>RH / Congés</option>
                        <option value="Site Web" style={{ background: '#1E293B' }}>Site Web / eCommerce</option>
                        <option value="ElvyBat" style={{ background: '#1E293B' }}>ElvyBat</option>
                        <option value="ElvyDoc" style={{ background: '#1E293B' }}>ElvyDoc (GED)</option>
                        <option value="ElvyPrint" style={{ background: '#1E293B' }}>ElvyPrint</option>
                        <option value="Autre" style={{ background: '#1E293B' }}>Autre</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Urgence</label>
                      <select name="urgence" value={formData.urgence} onChange={handleChange} style={{
                        ...inputStyle,
                        appearance: 'none' as const,
                        backgroundImage: selectArrow,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                      }}>
                        <option value="" style={{ background: '#1E293B' }}>Sélectionner...</option>
                        <option value="Bloquant" style={{ background: '#1E293B' }}>Bloquant</option>
                        <option value="Gênant" style={{ background: '#1E293B' }}>Gênant</option>
                        <option value="Amélioration" style={{ background: '#1E293B' }}>Amélioration</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div style={{ marginBottom: 24 }}>
                    <label style={labelStyle}>Description du problème</label>
                    <textarea
                      name="description" value={formData.description} onChange={handleChange}
                      rows={5} required
                      placeholder="Décrivez le problème, les étapes pour le reproduire, et joignez des captures d'écran par email si besoin."
                      style={{ ...inputStyle, resize: 'vertical' as const }}
                      onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(0,212,200,0.4)'}
                      onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={sending}
                    style={{
                      width: '100%', background: '#00D4C8', color: '#0B0F19',
                      border: 'none', borderRadius: 10, padding: '16px',
                      fontSize: 16, fontWeight: 600, cursor: sending ? 'wait' : 'pointer',
                      fontFamily: "'Space Grotesk', sans-serif",
                      opacity: sending ? 0.7 : 1,
                    }}
                    onMouseEnter={e => { if (!sending) (e.target as HTMLButtonElement).style.background = '#00B4A6'; }}
                    onMouseLeave={e => (e.target as HTMLButtonElement).style.background = '#00D4C8'}
                  >
                    {sending ? 'Envoi en cours...' : 'Envoyer le ticket'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* COLONNE DROITE : ACTIONS + INFOS */}
          <div style={{ flex: '0 1 340px', display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Suivre mes tickets */}
            <a
              href="https://odoo.d4e.app/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard('portal')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === 'portal' ? 'rgba(0,212,200,0.10)' : 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(0,212,200,0.15)',
                borderRadius: 16, padding: '28px 24px',
                textDecoration: 'none', color: 'inherit',
                display: 'flex', alignItems: 'center', gap: 16,
                transition: 'all 0.2s', cursor: 'pointer',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(0,212,200,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, flexShrink: 0,
              }}>📋</div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#FFFFFF', marginBottom: 2 }}>
                  Suivre mes tickets
                </div>
                <div style={{ fontSize: 13, color: '#00D4C8', fontWeight: 500 }}>
                  Portail client →
                </div>
              </div>
            </a>

            {/* AnyDesk */}
            <a
              href="https://anydesk.com/fr/downloads"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard('anydesk')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === 'anydesk' ? 'rgba(245,158,11,0.10)' : 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(245,158,11,0.15)',
                borderRadius: 16, padding: '28px 24px',
                textDecoration: 'none', color: 'inherit',
                display: 'flex', alignItems: 'center', gap: 16,
                transition: 'all 0.2s', cursor: 'pointer',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(245,158,11,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, flexShrink: 0,
              }}>🖥️</div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#FFFFFF', marginBottom: 2 }}>
                  Télécharger AnyDesk
                </div>
                <div style={{ fontSize: 13, color: '#F59E0B', fontWeight: 500 }}>
                  Session à distance →
                </div>
              </div>
            </a>

            {/* Appeler */}
            <a
              href="tel:+41582551115"
              onMouseEnter={() => setHoveredCard('phone')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === 'phone' ? 'rgba(139,92,246,0.10)' : 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(139,92,246,0.15)',
                borderRadius: 16, padding: '28px 24px',
                textDecoration: 'none', color: 'inherit',
                display: 'flex', alignItems: 'center', gap: 16,
                transition: 'all 0.2s', cursor: 'pointer',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(139,92,246,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, flexShrink: 0,
              }}>📞</div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#FFFFFF', marginBottom: 2 }}>
                  +41 (0) 58 255 11 15
                </div>
                <div style={{ fontSize: 13, color: '#8B5CF6', fontWeight: 500 }}>
                  Lun-Ven · 8h-18h
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:support@digital4efficiency.ch"
              onMouseEnter={() => setHoveredCard('email')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === 'email' ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16, padding: '28px 24px',
                textDecoration: 'none', color: 'inherit',
                display: 'flex', alignItems: 'center', gap: 16,
                transition: 'all 0.2s', cursor: 'pointer',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, flexShrink: 0,
              }}>✉️</div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#FFFFFF', marginBottom: 2 }}>
                  Email support
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                  support@digital4efficiency.ch
                </div>
              </div>
            </a>

            {/* Tip box */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16, padding: 24,
              marginTop: 8,
            }}>
              <div style={{
                fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12,
              }}>Astuce</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
                Pour un traitement plus rapide, joignez une capture d'écran à votre ticket et précisez les étapes pour reproduire le problème.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;

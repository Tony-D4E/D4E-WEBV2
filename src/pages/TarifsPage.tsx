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
        #d4e-tarifs .tp-title { font-family: 'Space Grotesk', sans-serif !important; font-size: clamp(36px, 5vw, 52px) !important; font-weight: 700 !important; color: #0B0F19 !important; margin: 0 0 16px !important; letter-spacing: -0.02em !important; }
        #d4e-tarifs .tp-h2 { font-family: 'Space Grotesk', sans-serif !important; font-size: 26px !important; font-weight: 700 !important; margin: 0 0 12px !important; }
        #d4e-tarifs .tp-h3 { font-family: 'Space Grotesk', sans-serif !important; font-size: 20px !important; font-weight: 700 !important; margin: 0 0 16px !important; }
        #d4e-tarifs .tp-subtitle { font-size: 20px !important; color: #475569 !important; margin: 0 !important; line-height: 1.6 !important; max-width: 640px !important; }
        #d4e-tarifs .tp-hero-box { background-color: #0F172A !important; border-radius: 28px !important; padding: 56px 52px !important; border: 1px solid rgba(0,212,200,0.15) !important; }
        #d4e-tarifs .tp-text-light { font-size: 17px !important; color: rgba(255,255,255,0.55) !important; line-height: 1.8 !important; }
        #d4e-tarifs .tp-result { display: flex !important; align-items: flex-start !important; gap: 14px !important; margin-bottom: 18px !important; }
        #d4e-tarifs .tp-result-icon { width: 28px !important; height: 28px !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; font-size: 14px !important; font-weight: 700 !important; flex-shrink: 0 !important; margin-top: 2px !important; }
        #d4e-tarifs .tp-result-text { font-size: 16px !important; color: rgba(255,255,255,0.75) !important; line-height: 1.5 !important; }
        #d4e-tarifs .tp-feature { display: flex !important; align-items: flex-start !important; gap: 12px !important; margin-bottom: 14px !important; }
        #d4e-tarifs .tp-check { width: 22px !important; height: 22px !important; border-radius: 6px !important; display: flex !important; align-items: center !important; justify-content: center !important; font-size: 12px !important; font-weight: 700 !important; flex-shrink: 0 !important; margin-top: 2px !important; }
        #d4e-tarifs .tp-feat-text { font-size: 15px !important; color: rgba(255,255,255,0.65) !important; line-height: 1.5 !important; }
        #d4e-tarifs .tp-highlight { font-size: 15px !important; color: rgba(255,255,255,0.4) !important; line-height: 1.7 !important; padding: 20px 24px !important; background-color: rgba(255,255,255,0.03) !important; border-radius: 14px !important; border: 1px solid rgba(255,255,255,0.06) !important; margin-top: 28px !important; }
        #d4e-tarifs .tp-btn {
          display: block !important; background-color: #00D4C8 !important; color: #0B0F19 !important;
          border: none !important; border-radius: 14px !important; padding: 20px 32px !important;
          font-size: 18px !important; font-weight: 600 !important; cursor: pointer !important;
          font-family: 'Space Grotesk', sans-serif !important; text-align: center !important; width: 100% !important;
        }
        #d4e-tarifs .tp-btn:hover { background-color: #00B4A6 !important; }
        /* Compact cards */
        #d4e-tarifs .tp-compact { background-color: #0F172A !important; border-radius: 20px !important; padding: 32px 28px !important; border: 1px solid rgba(255,255,255,0.06) !important; display: flex !important; flex-direction: column !important; height: 100% !important; }
        #d4e-tarifs .tp-compact-title { font-family: 'Space Grotesk', sans-serif !important; font-size: 20px !important; font-weight: 700 !important; color: #FFFFFF !important; margin: 0 0 8px !important; }
        #d4e-tarifs .tp-compact-desc { font-size: 14px !important; color: rgba(255,255,255,0.45) !important; line-height: 1.6 !important; margin-bottom: 20px !important; }
        #d4e-tarifs .tp-compact-feat { font-size: 14px !important; color: rgba(255,255,255,0.6) !important; display: flex !important; align-items: center !important; gap: 10px !important; margin-bottom: 10px !important; }
        #d4e-tarifs .tp-compact-dot { width: 6px !important; height: 6px !important; border-radius: 50% !important; flex-shrink: 0 !important; }
        #d4e-tarifs .tp-compact-btn {
          display: block !important; background-color: transparent !important;
          border: 1.5px solid rgba(255,255,255,0.12) !important; border-radius: 12px !important;
          padding: 14px !important; font-size: 15px !important; font-weight: 600 !important;
          cursor: pointer !important; font-family: 'Space Grotesk', sans-serif !important;
          text-align: center !important; width: 100% !important; margin-top: auto !important;
          color: #FFFFFF !important; text-decoration: none !important; transition: all 0.2s !important;
        }
        #d4e-tarifs .tp-compact-btn:hover { border-color: rgba(255,255,255,0.3) !important; background-color: rgba(255,255,255,0.03) !important; }
        #d4e-tarifs .tp-badge { display: inline-block !important; font-size: 12px !important; font-weight: 600 !important; padding: 4px 14px !important; border-radius: 100px !important; margin-bottom: 14px !important; }
        #d4e-tarifs .tp-note { background-color: #FFFFFF !important; border: 1px solid #E2E8F0 !important; border-radius: 20px !important; padding: 40px 36px !important; margin-top: 48px !important; }
        #d4e-tarifs .tp-note-title { font-family: 'Space Grotesk', sans-serif !important; font-size: 22px !important; font-weight: 700 !important; color: #0B0F19 !important; margin-bottom: 12px !important; }
        #d4e-tarifs .tp-note-text { font-size: 16px !important; color: #475569 !important; line-height: 1.7 !important; }
        #d4e-tarifs .tp-note a { color: #00B4A6 !important; text-decoration: none !important; font-weight: 600 !important; }
        @media (max-width: 860px) {
          #d4e-tarifs .tp-hero-cols { flex-direction: column !important; }
          #d4e-tarifs .tp-grid-3 { grid-template-columns: 1fr !important; }
          #d4e-tarifs .tp-hero-box { padding: 40px 28px !important; }
        }
      `}</style>

      <div id="d4e-tarifs">
        {/* HEADER */}
        <div style={{ padding: '110px 32px 48px', maxWidth: 1280, margin: '0 auto' }}>
          <img src="/odoo-gold-badge.png" alt="Odoo Gold Partner" style={{ height: 56, marginBottom: 24 }} />
          <h1 className="tp-title">Starter Pack Odoo</h1>
          <p className="tp-subtitle">
            Votre gestion opérationnelle en 2 semaines. Sans complexité. Sans projet lourd.
          </p>
        </div>

        {/* HERO STARTER PACK */}
        <div style={{ padding: '0 32px 64px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="tp-hero-box tp-dark">
            <p className="tp-text-light" style={{ maxWidth: 700, marginBottom: 40 }}>
              Vous êtes indépendant ou PME et vous voulez structurer votre activité sans investir des mois dans un projet ERP ?
              Le Starter Pack Odoo vous permet de gagner du temps dès le premier mois, avec un outil clair, structuré et prêt à l'emploi.
            </p>

            <div className="tp-hero-cols" style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 340px' }}>
                <div className="tp-h3" style={{ color: '#00D4C8', marginBottom: 24 }}>Ce que ça change concrètement</div>
                {[
                  'Une vision claire de votre pipeline commercial',
                  'Des devis et factures générés en quelques clics',
                  'Une comptabilité structurée et conforme',
                  'Une activité centralisée, sans Excel dispersé',
                  'De la visibilité sur votre business, enfin',
                ].map((r, i) => (
                  <div key={i} className="tp-result">
                    <div className="tp-result-icon" style={{ backgroundColor: 'rgba(0,212,200,0.15)', color: '#00D4C8' }}>✓</div>
                    <span className="tp-result-text">{r}</span>
                  </div>
                ))}
              </div>

              <div style={{ flex: '1 1 340px' }}>
                <div className="tp-h3" style={{ color: '#F59E0B', marginBottom: 24 }}>Inclus dans le pack</div>
                {[
                  'Configuration complète de votre base Odoo',
                  'Paramétrage adapté à votre activité',
                  'Modules essentiels : CRM, ventes, facturation, comptabilité, site web',
                  'Formation utilisateur pour une prise en main rapide',
                  'Support 30 jours après le lancement',
                ].map((f, i) => (
                  <div key={i} className="tp-feature">
                    <div className="tp-check" style={{ backgroundColor: 'rgba(245,158,11,0.15)', color: '#F59E0B' }}>✓</div>
                    <span className="tp-feat-text">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tp-highlight">
              Aucune compétence technique requise. Aucune équipe IT nécessaire. En 2 semaines, votre environnement Odoo est configuré, testé et prêt à être utilisé.
            </div>

            <div style={{ marginTop: 36, maxWidth: 400 }}>
              <button className="tp-btn" onClick={scrollToContact}>Démarrer mon Starter Pack</button>
            </div>
          </div>
        </div>

        {/* 3 PACKS COMPACTS : Sur-mesure / Formation / SOS */}
        <div style={{ padding: '0 32px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="tp-h2" style={{ color: '#0B0F19', marginBottom: 28 }}>Nos autres accompagnements</div>

          <div className="tp-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>

            {/* SUR-MESURE */}
            <div className="tp-compact tp-dark">
              <div className="tp-badge" style={{ backgroundColor: 'rgba(139,92,246,0.15)', color: '#8B5CF6' }}>Projet</div>
              <div className="tp-compact-title">Sur-mesure</div>
              <p className="tp-compact-desc">Intégration complète, développements spécifiques, solutions Elvy. On s'adapte à votre complexité.</p>
              <div style={{ marginBottom: 20 }}>
                {['Audit et cadrage', 'Développements spécifiques', 'Solutions Elvy (BTP, GED, Print)', 'Chef de projet dédié'].map((f, i) => (
                  <div key={i} className="tp-compact-feat"><div className="tp-compact-dot" style={{ backgroundColor: '#8B5CF6' }} /><span>{f}</span></div>
                ))}
              </div>
              <button className="tp-compact-btn" onClick={scrollToContact}>Discuter de mon projet</button>
            </div>

            {/* FORMATION */}
            <div className="tp-compact tp-dark">
              <div className="tp-badge" style={{ backgroundColor: 'rgba(0,212,200,0.15)', color: '#00D4C8' }}>Montée en compétence</div>
              <div className="tp-compact-title">Formation</div>
              <p className="tp-compact-desc">Vos équipes autonomes sur Odoo. Sessions adaptées à votre configuration, pas un cours générique.</p>
              <div style={{ marginBottom: 20 }}>
                {['Formation sur votre environnement', 'Sessions par module ou par métier', 'En présentiel ou à distance', 'Support post-formation inclus'].map((f, i) => (
                  <div key={i} className="tp-compact-feat"><div className="tp-compact-dot" style={{ backgroundColor: '#00D4C8' }} /><span>{f}</span></div>
                ))}
              </div>
              <button className="tp-compact-btn" onClick={scrollToContact}>Planifier une formation</button>
            </div>

            {/* SOS / SUPPORT */}
            <div className="tp-compact tp-dark">
              <div className="tp-badge" style={{ backgroundColor: 'rgba(245,158,11,0.15)', color: '#F59E0B' }}>Continu</div>
              <div className="tp-compact-title">Pack SOS</div>
              <p className="tp-compact-desc">Support continu pour votre Odoo en production. Hotline, tickets, maintenance, migrations.</p>
              <div style={{ marginBottom: 20 }}>
                {['Téléphone + email + portail', 'Interventions correctives', 'Accompagnement migrations', 'Prise en main à distance'].map((f, i) => (
                  <div key={i} className="tp-compact-feat"><div className="tp-compact-dot" style={{ backgroundColor: '#F59E0B' }} /><span>{f}</span></div>
                ))}
              </div>
              <a href="#/support" className="tp-compact-btn">Accéder au support</a>
            </div>
          </div>
        </div>

        {/* NOTE CONTACT */}
        <div style={{ padding: '0 32px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="tp-note" id="tarif-contact">
            <div className="tp-note-title">Chaque projet est différent</div>
            <p className="tp-note-text">
              On ne pratique pas le tarif au kilo. Chaque offre est construite après un échange pour comprendre votre contexte, vos priorités et votre budget. Appelez-nous au <a href="tel:+41582551115">+41 (0) 58 255 11 15</a> ou écrivez à <a href="mailto:info@d4e.cool">info@d4e.cool</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { TarifsPage };

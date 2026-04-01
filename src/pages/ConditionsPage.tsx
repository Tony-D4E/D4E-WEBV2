import React from 'react';

const ConditionsPage: React.FC = () => {
  return (
    <>
      <style>{`
        #d4e-cg, #d4e-cg * { box-sizing: border-box !important; }
        #d4e-cg { font-family: 'Inter', sans-serif !important; background-color: #F0FDF9 !important; min-height: 100vh !important; padding-bottom: 100px !important; }
        #d4e-cg .cg-card {
          background-color: #FFFFFF !important; border: 1px solid #E2E8F0 !important;
          border-radius: 24px !important; padding: 48px 40px !important;
          max-width: 800px !important; margin: 0 auto !important;
          text-align: center !important;
        }
        #d4e-cg .cg-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 32px !important; font-weight: 700 !important; color: #0B0F19 !important;
          margin: 0 0 12px !important;
        }
        #d4e-cg .cg-sub { font-size: 16px !important; color: #64748B !important; margin: 0 0 32px !important; line-height: 1.6 !important; }
        #d4e-cg .cg-btn {
          display: inline-flex !important; align-items: center !important; gap: 10px !important;
          background-color: #00D4C8 !important; color: #0B0F19 !important;
          border: none !important; border-radius: 14px !important; padding: 18px 36px !important;
          font-size: 17px !important; font-weight: 600 !important; cursor: pointer !important;
          font-family: 'Space Grotesk', sans-serif !important; text-decoration: none !important;
          margin-bottom: 32px !important;
        }
        #d4e-cg .cg-btn:hover { background-color: #00B4A6 !important; }
        #d4e-cg .cg-pdf {
          width: 100% !important; height: 800px !important;
          border: 1px solid #E2E8F0 !important; border-radius: 16px !important;
        }
        @media (max-width: 768px) {
          #d4e-cg .cg-card { padding: 32px 20px !important; }
          #d4e-cg .cg-pdf { height: 500px !important; }
        }
      `}</style>

      <div id="d4e-cg">
        <div style={{ padding: '120px 32px 48px', maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}>
            <div>
              <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 700, color: '#0B0F19', margin: '0 0 12px' }}>
                Conditions générales
              </h1>
              <p style={{ fontSize: 17, color: '#64748B', margin: 0 }}>
                D4E - Digital4Efficiency Sàrl
              </p>
            </div>
            <img src="/odoo-gold-partner.svg" alt="Odoo Gold Partner" style={{ height: 64, flexShrink: 0 }} />
          </div>
        </div>

        <div style={{ padding: '0 32px', maxWidth: 900, margin: '0 auto' }}>
          <div className="cg-card">
            <div style={{ fontSize: 48, marginBottom: 16 }}>📄</div>
            <div className="cg-title">Conditions générales de vente</div>
            <p className="cg-sub">
              Logiciels mis à disposition par D4E - Digital4Efficiency.<br />
              Document applicable aux prestations de services.
            </p>
            <a href="/cgv-d4e.pdf" download className="cg-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Télécharger le PDF
            </a>
            <iframe src="/cgv-d4e.pdf" className="cg-pdf" title="Conditions générales D4E" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConditionsPage;

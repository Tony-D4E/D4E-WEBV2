export function OdooCertifications() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '64px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '36px',
          textAlign: 'center',
        }}>

          <div>
            <p style={{
              fontSize: '13px',
              fontWeight: 800,
              color: '#0F1D3A',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '14px',
              marginTop: 0,
            }}>
              EXPERTISE ODOO CERTIFIEE
            </p>
            <h3 style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)',
              fontWeight: 900,
              color: '#F59E0B',
              margin: 0,
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
            }}>
              Partenaire Gold Odoo certifie depuis la v13
            </h3>
          </div>

          <img
            src="/odoo-certifications.png"
            alt="Certifications Odoo v13 a v19"
            style={{
              width: '100%',
              maxWidth: '580px',
              height: 'auto',
              objectFit: 'contain',
            }}
          />

        </div>
      </div>
    </section>
  );
}
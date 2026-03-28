export function OdooCertifications() {
  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '56px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{
          backgroundColor: '#0F1D3A',
          borderRadius: '24px',
          padding: '56px 48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>

          <div style={{
            position: 'absolute', width: '500px', height: '500px',
            borderRadius: '50%', top: '-150px', right: '-150px',
            opacity: 0.07, pointerEvents: 'none',
            background: 'radial-gradient(circle, #00D4C8, transparent)',
          }} />

          <div>
            <p style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#00D4C8',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '12px',
              marginTop: 0,
            }}>
              EXPERTISE ODOO CERTIFIEE
            </p>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              margin: '0 0 12px 0',
              letterSpacing: '-0.5px',
              lineHeight: 1.15,
            }}>
              Partenaire Gold Odoo certifie depuis la v13
            </h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
              color: '#94A3B8',
              margin: 0,
              lineHeight: 1.65,
            }}>
              7 versions consecutives — l'une des expertises les plus longues en Suisse
            </p>
          </div>

          <img
            src="/odoo-certifications.png"
            alt="Certifications Odoo v13 a v19"
            style={{
              width: '100%',
              maxWidth: '560px',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '12px',
            }}
          />

        </div>
      </div>
    </section>
  );
}
export function OdooCertifications() {
  return (
    <section style={{
      backgroundColor: '#0B1628',
      padding: '56px 24px',
      borderTop: '1px solid rgba(0,212,200,0.15)',
      borderBottom: '1px solid rgba(0,212,200,0.15)',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        textAlign: 'center',
      }}>

        <div>
          <p style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#00D4C8',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '10px',
            marginTop: 0,
          }}>
            EXPERTISE ODOO CERTIFIEE
          </p>
          <h3 style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
            fontWeight: 900,
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '-0.5px',
          }}>
            Partenaire Gold Odoo certifie depuis la v13
          </h3>
          <p style={{
            fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
            color: '#94A3B8',
            marginTop: '10px',
            marginBottom: 0,
            lineHeight: 1.6,
          }}>
            7 versions consecutives — l'une des expertises les plus longues en Suisse
          </p>
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
    </section>
  );
}

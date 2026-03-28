export function OdooCertifications() {
  return (
    <section style={{
      backgroundColor: '#0F1D3A',
      padding: '40px 0',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap',
        }}>

          {/* Texte gauche */}
          <div style={{ flex: '1', minWidth: '240px' }}>
            <p style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#00D4C8',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '8px',
              marginTop: 0,
            }}>
              EXPERTISE CERTIFIEE
            </p>
            <h3 style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              marginTop: 0,
              marginBottom: '8px',
              letterSpacing: '-0.5px',
              lineHeight: 1.15,
            }}>
              Certifies Odoo depuis la v13
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#94A3B8',
              margin: 0,
              lineHeight: 1.6,
            }}>
              7 versions consecutives — de la v13 a la v19.<br />
              L'un des rares partenaires avec une certification ininterrompue.
            </p>
          </div>

          {/* Médailles */}
          <div style={{
            flex: '2',
            minWidth: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src="/odoo-certifications.png"
              alt="Certifications Odoo v13 a v19"
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '120px',
                objectFit: 'contain',
                filter: 'brightness(1.1) saturate(0.9)',
              }}
            />
          </div>

          {/* Stats droite */}
          <div style={{
            display: 'flex',
            gap: '32px',
            flexShrink: 0,
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2.2rem', fontWeight: 900, color: '#00D4C8', margin: 0, lineHeight: 1 }}>7</p>
              <p style={{ fontSize: '0.75rem', color: '#64748B', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Versions</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2.2rem', fontWeight: 900, color: '#F59E0B', margin: 0, lineHeight: 1 }}>2019</p>
              <p style={{ fontSize: '0.75rem', color: '#64748B', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Depuis</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2.2rem', fontWeight: 900, color: '#00D4C8', margin: 0, lineHeight: 1 }}>Gold</p>
              <p style={{ fontSize: '0.75rem', color: '#64748B', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Partner</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

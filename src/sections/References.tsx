const clients = [
  { logo: '/logo-alc.svg',             name: 'ALC Tôlerie',       sector: 'Tôlerie industrielle',    url: '#' },
  { logo: '/logo-cave.svg',            name: 'La Cave de Genève', sector: 'Coopérative viticole',    url: '#' },
  { logo: '/logo-mbg.png',             name: 'MBG SA',            sector: 'Métiers techniques BTP',  url: '#' },
  { logo: '/logo-ingeni.jpg',          name: 'Ingeni SA',         sector: 'Ingénierie structurale',  url: '#' },
  { logo: '/logo-global-securite.png', name: 'Global Sécurité',   sector: 'Sécurité en Suisse',      url: '#' },
  { logo: '/logo-czapek.png',          name: 'Czapek Genève',     sector: 'Manufacture horlogère',   url: '#' },
];

export function References() {
  return (
    <section style={{ backgroundColor: '#F0FDF9', padding: '64px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00D4C8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            ILS NOUS FONT CONFIANCE
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#0F1D3A', letterSpacing: '-1px', marginTop: 0 }}>
            Nos références clients
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {clients.map((c) => (
            <a
              key={c.name}
              href={c.url}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                border: '1px solid #E2E8F0',
                textDecoration: 'none',
                transition: 'box-shadow 0.2s, transform 0.2s',
                minHeight: '160px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,212,200,0.15)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <img
                src={c.logo}
                alt={c.name}
                style={{
                  maxHeight: '64px',
                  maxWidth: '180px',
                  objectFit: 'contain',
                  filter: 'grayscale(100%)',
                  opacity: 0.7,
                  transition: 'filter 0.3s, opacity 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)';
                  (e.currentTarget as HTMLImageElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(100%)';
                  (e.currentTarget as HTMLImageElement).style.opacity = '0.7';
                }}
              />
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F1D3A', margin: '0 0 4px' }}>{c.name}</p>
                <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0 }}>{c.sector}</p>
              </div>
            </a>
          ))}
        </div>

        <style>{\`
          @media (max-width: 768px) {
            .refs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .refs-grid { grid-template-columns: 1fr !important; }
          }
        \`}</style>

      </div>
    </section>
  );
}
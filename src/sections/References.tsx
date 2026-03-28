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
    <>
      <style>{\`
        .refs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ref-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          border: 1px solid #E2E8F0;
          text-decoration: none;
          transition: box-shadow 0.2s, transform 0.2s;
          min-height: 160px;
        }
        .ref-card:hover {
          box-shadow: 0 8px 32px rgba(0,212,200,0.15);
          transform: translateY(-2px);
        }
        .ref-card img {
          max-height: 64px;
          max-width: 180px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: filter 0.3s, opacity 0.3s;
        }
        .ref-card:hover img {
          filter: grayscale(0%);
          opacity: 1;
        }
        @media (max-width: 768px) {
          .refs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .refs-grid { grid-template-columns: 1fr; }
        }
      \`}</style>

      <section style={{ backgroundColor: '#F0FDF9', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#00D4C8', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px', marginTop: 0 }}>
              ILS NOUS FONT CONFIANCE
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#0F1D3A', letterSpacing: '-1px', marginTop: 0 }}>
              Nos références clients
            </h2>
          </div>

          <div className="refs-grid">
            {clients.map((c) => (
              <a key={c.name} href={c.url} className="ref-card">
                <img src={c.logo} alt={c.name} />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F1D3A', margin: '0 0 4px' }}>{c.name}</p>
                  <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0 }}>{c.sector}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
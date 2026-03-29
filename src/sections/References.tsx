const clients = [
  { logo: '/logo-alc.png',             name: 'ALC Tolerie',       sector: 'Tolerie industrielle'    },
  { logo: '/logo-cave.svg',            name: 'La Cave de Geneve', sector: 'Cooperative viticole'    },
  { logo: '/logo-mbg.png',             name: 'MBG SA',            sector: 'Metiers techniques BTP'  },
  { logo: '/logo-ingeni.jpg',          name: 'Ingeni SA',         sector: 'Ingenierie structurale'  },
  { logo: '/logo-global-securite.png', name: 'Global Securite',   sector: 'Securite en Suisse'      },
  { logo: '/logo-czapek.png',          name: 'Czapek Geneve',     sector: 'Manufacture horlogere'   },
];

export function References() {
  return (
    <>
      <style>{`
        .refs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ref-card {
          background: #FFFFFF;
          border-radius: 14px;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          border: 1px solid #E2E8F0;
          min-height: 140px;
          box-sizing: border-box;
        }
        .ref-card img {
          max-height: 56px;
          max-width: 140px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: filter 0.3s, opacity 0.3s;
          display: block;
        }
        .ref-card:hover img {
          filter: grayscale(0%);
          opacity: 1;
        }
        .ref-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0F1D3A;
          margin: 0 0 3px;
          text-align: center;
        }
        .ref-sector {
          font-size: 0.75rem;
          color: #94A3B8;
          margin: 0;
          text-align: center;
        }
        @media (max-width: 900px) {
          .refs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .refs-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .ref-card { padding: 20px 12px; min-height: 110px; }
          .ref-card img { max-height: 44px; max-width: 110px; }
          .ref-name { font-size: 0.8rem; }
          .ref-sector { font-size: 0.7rem; }
        }
      `}</style>

      <section style={{ backgroundColor: '#F0FDF9', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#00D4C8', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px', marginTop: 0 }}>
              ILS NOUS FONT CONFIANCE
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#0F1D3A', letterSpacing: '-1px', marginTop: 0 }}>
              Nos references clients
            </h2>
          </div>

          <div className="refs-grid">
            {clients.map((c) => (
              <div key={c.name} className="ref-card">
                <img src={c.logo} alt={c.name} />
                <div>
                  <p className="ref-name">{c.name}</p>
                  <p className="ref-sector">{c.sector}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
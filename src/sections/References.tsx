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
    <section style={{ backgroundColor: '#F0FDF9', padding: '80px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: '#00D4C8', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px', marginTop: 0 }}>
            ILS NOUS FONT CONFIANCE
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#0F1D3A', letterSpacing: '-1px', marginTop: 0 }}>
            Nos references clients
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {clients.map((c) => (
            <div
              key={c.name}
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
                minHeight: '160px',
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
                  opacity: 0.75,
                }}
              />
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F1D3A', margin: '0 0 4px' }}>{c.name}</p>
                <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0 }}>{c.sector}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import Link from 'next/link'

export const metadata = { title: 'Liity jäseneksi' }

export default function RekisteroidyPage() {
  const benefits = [
    { icon: '🎸', title: 'Bändikämppä', desc: 'Pääsy PELMU:n harjoitustilaan Otaniemessä. Laadukas akustinen ympäristö harjoitteluun.' },
    { icon: '📅', title: 'Vuorokone', desc: 'Pääsy reaaliaikaiseen vuoronvarausjärjestelmään. Varaa harjoitusvuorosi helposti verkossa.' },
    { icon: '🎵', title: 'Keikkapörssi', desc: 'Mahdollisuus saada keikkoja PELMU:n kautta. Yhdistys auttaa bändejä löytämään esiintymismahdollisuuksia.' },
    { icon: '🤝', title: 'Yhteisö', desc: 'Pääsy Otaniemen muusikoiden yhteisöön. Verkostoidu muiden bändien ja muusikoiden kanssa.' },
    { icon: '🏪', title: 'Studio', desc: 'Pääsy PELMU:n studioon miksaukseen, nauhoituksiin ja soittamiseen edulliseen hintaan.' },
    { icon: '📦', title: 'Varastotilat', desc: 'Mahdollisuus vuokrata lukittuja kaappeja soitinten säilytykseen bändikämpän tiloissa.' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-40 bg-ink text-cream">
        <div className="page-container">
          <div className="max-w-3xl">
            <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">Jäsenyys</p>
            <h1 className="font-serif text-cream mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.05, letterSpacing: '-0.04em', fontWeight: 600 }}>
              Rekisteröidy PELMU:n jäseneksi
            </h1>
            <p className="text-20 text-cream/70 leading-relaxed max-w-xl">
              Rekisteröitymällä PELMU:n jäseneksi saat monia verrattomia etuja! Jäsenmaksu on vain 7 € per kausi.
            </p>
          </div>
        </div>
      </section>

      {/* Price card */}
      <section className="py-16 bg-dust">
        <div className="page-container">
          <div className="max-w-md mx-auto bg-cream rounded-[2rem] p-10 text-center shadow-sm">
            <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4">Jäsenmaksu</p>
            <div className="font-serif text-ink mb-2" style={{ fontSize: '5rem', lineHeight: 1 }}>7 €</div>
            <p className="text-stone text-18 mb-2">per kausi</p>
            <p className="text-14 text-stone/70 mb-8">Kevät ja kesä samaan hintaan</p>
            <a
              href="https://www.pelmu.fi/rekisteroi.php"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              Rekisteröidy nyt →
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32">
        <div className="page-container">
          <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4 text-center">Jäsenedut</p>
          <h2 className="font-serif text-56 text-ink text-center mb-16" style={{ lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Mitä saat jäsenyydellä?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div key={item.title} className="bg-dust rounded-[1.5rem] p-8 card-hover">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-24 text-ink mb-3">{item.title}</h3>
                <p className="text-16 text-stone leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal info */}
      <section className="bg-ink text-cream py-24 md:py-32">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">Jäsenportaali</p>
            <h2 className="font-serif text-56 text-cream mb-8" style={{ letterSpacing: '-0.03em' }}>
              PELMU:n sähköinen portaali
            </h2>
            <p className="text-20 text-cream/70 leading-relaxed mb-10">
              PELMU:n sähköinen portaali tarjoaa yhdistyksen jäsenille pääsyn kaikkiin jäsenpalveluihin — mukaan lukien Vuorokoneeseen ja muihin jäsentyökaluihin.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.pelmu.fi/rekisteroi.php"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Rekisteröidy →
              </a>
              <a href="mailto:pelmu@pelmu.fi" className="btn-outline" style={{ color: '#F8F3EA', borderColor: 'rgba(248,243,234,0.3)' }}>
                Kysy lisää
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Membership conditions note */}
      <section className="py-12 bg-dust">
        <div className="page-container max-w-2xl text-center">
          <p className="text-14 text-stone">
            Jotta voit liittyä varsinaiseksi jäseneksi, tulee täyttää yhdistyksen jäsenyysehdot.{' '}
            <a href="mailto:pelmu@pelmu.fi" className="text-ember hover:underline">
              Lisätietoja sähköpostitse.
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

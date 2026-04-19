export const metadata = { title: 'Käyttöohjesääntö' }

export default function OhjesaantoPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="page-container">
        <div className="max-w-3xl mx-auto">
          <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4">Bändikämppä</p>
          <h1 className="font-serif text-ink mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Käyttöohjesääntö
          </h1>
          <p className="text-16 text-stone mb-12">
            PELMU:n hallituksen 20.3.2005 vahvistama yhdistyksen tiloja koskeva sääntökokoelma.
            Käyttöohjesääntö sitoo jokaista yhdistyksen jäsentä.
          </p>

          <hr className="divider mb-12" />

          {/* TOC */}
          <nav className="bg-dust rounded-[1.5rem] p-8 mb-16">
            <h2 className="font-medium text-16 text-ink mb-4 uppercase tracking-wider text-14">Sisällysluettelo</h2>
            <ol className="space-y-2">
              {[
                'Yleistä',
                'Jäsenyys ja käyttöoikeus',
                'Tilojen käyttö',
                'Laitteiden käyttö',
                'Varastotilat',
                'Vastuut ja sanktiot',
                'Muut määräykset',
              ].map((item, i) => (
                <li key={i}>
                  <a href={`#kohta-${i + 1}`} className="text-16 text-stone hover:text-ember transition-colors">
                    {i + 1}. {item}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Rules content */}
          <div className="space-y-16">
            <section id="kohta-1">
              <h2 className="font-serif text-32 text-ink mb-6">1. Yleistä</h2>
              <div className="text-18 text-stone leading-relaxed space-y-4">
                <p>
                  Tämä dokumentti on PELMU:n hallituksen 20.3.2005 vahvistama yhdistyksen tiloja koskeva sääntökokoelma.
                </p>
                <p>
                  Käyttöohjesääntö sitoo jokaista yhdistyksen jäsentä. Sääntöjä rikkoviin jäseniin voidaan soveltaa yhdistyksen sääntöjen mukaisia toimenpiteitä.
                </p>
                <p>
                  PELMU:N BÄNDIKÄMPÄN KÄYTTÖOHJESÄÄNTÖ koskee kaikkia yhdistyksen tiloja ja laitteita.
                </p>
              </div>
            </section>

            <hr className="divider" />

            <section id="kohta-2">
              <h2 className="font-serif text-32 text-ink mb-6">2. Jäsenyys ja käyttöoikeus</h2>
              <div className="text-18 text-stone leading-relaxed space-y-4">
                <p>
                  Bändikämppää voivat käyttää ainoastaan PELMU:n rekisteröityneet jäsenbändit ja heidän yhteyshenkilönsä.
                </p>
                <p>
                  Käyttöoikeus edellyttää voimassaolevaa jäsenmaksua. Jäsenmaksu on 7 euroa per kausi.
                </p>
                <p className="italic text-stone/70 text-16">
                  TODO: Lisää täydellinen käyttöohjesääntöteksti hallitukselta saatavan virallisen dokumentin pohjalta.
                </p>
              </div>
            </section>

            <hr className="divider" />

            <section id="kohta-3">
              <h2 className="font-serif text-32 text-ink mb-6">3. Tilojen käyttö</h2>
              <div className="text-18 text-stone leading-relaxed space-y-4">
                <p>
                  Tiloja tulee käyttää asianmukaisesti ja siististi. Jokainen käyttäjä on vastuussa jättämästään tilasta.
                </p>
                <p>
                  Harjoitusvuorot tulee varata etukäteen Vuorokoneen kautta. Varaamatonta aikaa ei saa käyttää, mikäli joku toinen on varannut sen.
                </p>
                <p className="italic text-stone/70 text-16">
                  TODO: Lisää täydellinen käyttöohjesääntöteksti.
                </p>
              </div>
            </section>

            <hr className="divider" />

            {['4. Laitteiden käyttö', '5. Varastotilat', '6. Vastuut ja sanktiot', '7. Muut määräykset'].map((title, i) => (
              <section key={i} id={`kohta-${i + 4}`}>
                <h2 className="font-serif text-32 text-ink mb-6">{title}</h2>
                <p className="text-18 text-stone/70 italic">
                  TODO: Lisää {title.toLowerCase()} -osion sisältö hallitukselta saatavan virallisen dokumentin pohjalta.
                </p>
                <hr className="divider mt-16" />
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-16 bg-dust rounded-[1.5rem] p-8 text-center">
            <p className="text-16 text-stone mb-4">Kysymyksiä käyttöohjesäännöstä?</p>
            <a href="mailto:pelmu@pelmu.fi" className="btn-primary">
              pelmu@pelmu.fi
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

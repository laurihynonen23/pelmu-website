import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Yhdistys' }

export default function YhdistysPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-cream">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-ember text-14 font-medium uppercase tracking-widest mb-8">Perustettu 2004</p>
            <h1 className="font-serif text-ink mb-10" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1.05, letterSpacing: '-0.04em', fontWeight: 600 }}>
              Mikä on PELMU?
            </h1>
            <p className="text-20 md:text-24 text-stone leading-relaxed max-w-3xl mx-auto">
              PELMU eli Polyteknikkojen Elävän MUsiikin yhdistys on perustettu maaliskuussa 2004 tukemaan teekkarien elävää musiikkia kaikissa muodoissaan sekä tarjoamaan heille siihen tarvittavat puitteet.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Mission */}
      <section className="py-24 md:py-32">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">Tehtävä</p>
              <h2 className="font-serif text-56 text-ink mb-10" style={{ lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                Kolme ydintehtävää
              </h2>
              <div className="space-y-8">
                {[
                  { num: '01', title: 'Tukea jäsenten soittoharjoittelua', desc: 'PELMU tarjoaa jäsenbändeille laadukkaan bändikämppän ja tarvittavat laitteet harjoitteluun Otaniemessä.' },
                  { num: '02', title: 'Tukea jäsenten esiintymistoimintaa', desc: 'Keikkapörssin kautta PELMU auttaa bändejä löytämään esiintymismahdollisuuksia ja tilaisuuksia löytämään bändejä.' },
                  { num: '03', title: 'Edistää teekkarien elävää musiikkia', desc: 'PELMU edistää teekkarien tuottaman elävän musiikin käyttöä ja arvostusta Otaniemessä ja koko akateemisessa yhteisössä.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-6">
                    <span className="font-serif text-40 text-ember/30 font-bold leading-none flex-shrink-0 mt-1">{item.num}</span>
                    <div>
                      <h3 className="font-medium text-20 text-ink mb-2">{item.title}</h3>
                      <p className="text-16 text-stone leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/pexels-jacqueline.jpg"
                alt="PELMU - musiikkia Otaniemessä"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial section */}
      <section className="bg-dust py-24 md:py-32">
        <div className="page-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">Historia</p>
            <h2 className="font-serif text-56 text-ink mb-10" style={{ lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Vuodesta 2004
            </h2>
            <div className="text-20 text-stone leading-relaxed space-y-6">
              <p>
                PELMU perustettiin maaliskuussa 2004 vastaamaan Otaniemen muusikoiden tarpeeseen — yhteisölle, jossa teekkarimuusikot voisivat harjoitella, esiintyä ja verkostoitua.
              </p>
              <p>
                Yhdistyksen bändikämppä remontoitiin täydellisesti vuonna 2005, jolloin siitä tuli Otaniemen parhaiten varusteltu harjoitustila. Tilasta on muodostunut Otaniemen musiikkielämän sydän.
              </p>
              <p>
                PELMU toimii Smök-Areenan kupeessa ja on tiiviissä yhteistyössä muiden teekkarijärjestöjen kanssa. Yhdistys on avoin kaikille teekkareille — myös kansainvälisille opiskelijoille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International note */}
      <section className="py-24 md:py-32">
        <div className="page-container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-ink text-cream rounded-[2rem] p-10 md:p-12">
              <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4">For international members</p>
              <h2 className="font-serif text-40 text-cream mb-6" style={{ letterSpacing: '-0.02em' }}>
                International students welcome
              </h2>
              <p className="text-18 text-cream/70 leading-relaxed mb-8">
                For international members of AYY, please contact PELMU by email to learn more about joining and accessing the practice facilities.
              </p>
              <a href="mailto:pelmu@pelmu.fi" className="btn-primary">
                pelmu@pelmu.fi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-ember text-cream py-16 md:py-24">
        <div className="page-container text-center">
          <h2 className="font-serif text-56 text-cream mb-6" style={{ letterSpacing: '-0.03em' }}>Tule osaksi PELMUa</h2>
          <p className="text-cream/80 text-20 mb-8 max-w-lg mx-auto">Jäsenyys maksaa vain 7 € per kausi.</p>
          <Link href="/rekisteroidy" className="inline-flex items-center px-8 py-4 bg-cream text-ink font-medium text-14 uppercase tracking-widest rounded-full hover:bg-dust transition-colors">
            Rekisteröidy →
          </Link>
        </div>
      </section>
    </div>
  )
}

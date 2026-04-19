import Link from 'next/link'

export const metadata = { title: 'Varastotilat' }

export default function VarastotPage() {
  return (
    <div>
      <section className="py-24 md:py-40 bg-ink text-cream">
        <div className="page-container max-w-3xl">
          <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">Bändikämppä</p>
          <h1 className="font-serif text-cream mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Varastotilat
          </h1>
          <p className="text-20 text-cream/70 leading-relaxed">
            Bändeillä on mahdollisuus vuokrata lukittuja kaappeja soitinten ja musiikkilaitteiden säilytykseen suoraan bändikämpän yhteydessä.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-40 text-ink mb-8" style={{ letterSpacing: '-0.02em' }}>
                PELMU:N bändikämpän vuokrattavat varastotilat
              </h2>
              <div className="space-y-6 text-18 text-stone leading-relaxed">
                <p>
                  PELMU tarjoaa bändeille mahdollisuuden säilyttää soittimiaan ja musiikkikalustoaan lukituissa kaapeissa bändikämpässä.
                </p>
                <p>
                  Varastotilat on tarkoitettu PELMU:n rekisteröidyille jäsenbändeille. Kaappeja vuokrataan käytettävissä olevan tilan mukaan.
                </p>
                <p>
                  Varastokaapit sijaitsevat bändikämpässä ja niihin pääsee harjoitusvuorojen yhteydessä.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Kenelle?', desc: 'PELMU:n rekisteröidyille jäsenbändeille.' },
                { title: 'Mitä voi säilyttää?', desc: 'Soittimia, vahvistimia, kaapeleita ja muuta musiikkilaitteistoa.' },
                { title: 'Hinta', desc: 'TODO: Tarkista vuokrahinta hallitukselta tai pelmu@pelmu.fi.' },
                { title: 'Miten hakea?', desc: 'Ota yhteyttä sähköpostilla pelmu@pelmu.fi ja kerro bändisi nimi ja tarpeet.' },
              ].map((item) => (
                <div key={item.title} className="bg-dust rounded-[1.5rem] p-6">
                  <h3 className="font-medium text-16 text-ink mb-2">{item.title}</h3>
                  <p className="text-16 text-stone">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href="mailto:pelmu@pelmu.fi" className="btn-primary mr-4">
              Pyydä varastotilaa →
            </a>
            <Link href="/kamppa" className="btn-outline">
              Takaisin kämppään
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'

export const metadata = { title: 'Vuorokone' }

export default function VuorokonePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="bg-ink text-cream py-24 md:py-40">
        <div className="page-container max-w-3xl">
          <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">Bändikämppä</p>
          <h1 className="font-serif text-cream mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Vuorokone
          </h1>
          <p className="text-20 text-cream/70 leading-relaxed">
            Vuorokone on vain rekisteröityneille ja sisäänkirjautuneille jäsenille tarkoitettu vuorojen reaaliaikainen varausjärjestelmä.
          </p>
        </div>
      </section>

      {/* Status notice */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="max-w-2xl mx-auto">
            {/* Closed status */}
            <div className="bg-ember/10 border border-ember/20 rounded-[1.5rem] p-8 mb-10">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🔴</span>
                <div>
                  <h2 className="font-medium text-18 text-ink mb-2">Treenitila suljettu toistaiseksi</h2>
                  <p className="text-16 text-stone leading-relaxed">
                    Treenitila on suljettu alkaen 31.3.2026 sähköisen lukitusjärjestelmän vian vuoksi. Vuorokone ei ole tällä hetkellä käytettävissä. Seuraa uutisia tilanteen päivittymisestä.
                  </p>
                  <p className="text-14 text-stone/70 mt-2 italic">
                    Practice space is closed for the time being from 31.3.2026 due to a fault in the electric locking system.
                  </p>
                </div>
              </div>
            </div>

            {/* How it works */}
            <h2 className="font-serif text-40 text-ink mb-8" style={{ letterSpacing: '-0.02em' }}>
              Miten Vuorokone toimii?
            </h2>
            <div className="space-y-4 mb-12">
              {[
                { step: '1', title: 'Rekisteröidy jäseneksi', desc: 'Liity PELMU:n jäseneksi osoitteessa pelmu.fi/rekisteroidy. Jäsenmaksu on 7 € per kausi.' },
                { step: '2', title: 'Kirjaudu sisään', desc: 'Kirjaudu PELMU:n jäsenportaaliin sähköpostiosoitteellasi ja salasanallasi.' },
                { step: '3', title: 'Valitse vuoro', desc: 'Näet kalenterista vapaat harjoitusvuorot ja voit varata oman aikasi reaaliajassa.' },
                { step: '4', title: 'Tule soittamaan', desc: 'Tule bändikämppään varaamanasi aikana. Sähköinen lukitusjärjestelmä tunnistaa sinut.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 p-6 bg-dust rounded-[1.5rem]">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ember text-cream flex items-center justify-center font-medium text-16">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-medium text-18 text-ink mb-1">{item.title}</h3>
                    <p className="text-16 text-stone">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rekisteroidy" className="btn-primary text-center">
                Liity jäseneksi ensin →
              </Link>
              <a href="mailto:pelmu@pelmu.fi" className="btn-outline text-center">
                Kysy lisää
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

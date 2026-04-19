import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Bändikämppä' }

export default function KamppaPage() {
  const subpages = [
    { href: '/kamppa/vuorokone', label: 'Vuorokone', desc: 'Varaa harjoitusvuoro reaaliajassa' },
    { href: '/kamppa/faq', label: 'Usein kysyttyä', desc: 'Vastaukset yleisimpiin kysymyksiin' },
    { href: '/kamppa/ohjesaanto', label: 'Käyttöohjesääntö', desc: 'Tiloja koskevat säännöt' },
    { href: '/kamppa/varastot', label: 'Varastotilat', desc: 'Soitinten säilytys lukituissa kaapeissa' },
  ]

  return (
    <div>
      {/* Closure notice */}
      <div className="bg-ink text-cream py-4">
        <div className="page-container">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center">
            <span className="text-ember font-semibold text-14 uppercase tracking-wider flex-shrink-0">
              🔴 Tila suljettu
            </span>
            <div>
              <p className="text-14 font-medium">Treenitila suljettu toistaiseksi alkaen 31.3.2026.</p>
              <p className="text-14 text-cream/60">Practice space is closed for the time being from 31.3.2026 due to a fault in the electric locking system.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <Image
          src="/images/bandikamppa.jpg"
          alt="PELMU bändikämppä"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 page-container pb-12 md:pb-20">
          <p className="text-ember text-14 font-medium uppercase tracking-widest mb-3">Otaniemi</p>
          <h1 className="font-serif text-cream" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.05, letterSpacing: '-0.04em', fontWeight: 600 }}>
            Bändikämppä
          </h1>
        </div>
      </section>

      {/* Subpage nav */}
      <section className="bg-dust border-b border-ink/10">
        <div className="page-container">
          <div className="flex overflow-x-auto gap-0 divide-x divide-ink/10">
            {subpages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex-shrink-0 py-5 px-6 md:px-8 hover:bg-ink/5 transition-colors group"
              >
                <div className="font-medium text-14 text-ink group-hover:text-ember transition-colors">{item.label}</div>
                <div className="text-xs text-stone mt-0.5 hidden md:block">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">Esittely</p>
              <h2 className="font-serif text-56 text-ink mb-8" style={{ lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                Otaniemen kulttuuriscenen sydämessä
              </h2>
              <p className="text-20 leading-relaxed text-stone mb-6">
                2005 täydellisesti remontoitu PELMU:n loistelias bändikämppä sijaitsee suoraan Otaniemen kulttuuriscenen sydämessä Smök-Areenan kupeessa.
              </p>
              <p className="text-18 leading-relaxed text-stone mb-6">
                Harjoitushuone on suunniteltu ennen kaikkea laadukkaaksi akustiseksi soittopaikaksi. Tila soveltuu erinomaisesti bändiharjoitteluun, äänityksiin ja soittotunneille.
              </p>
              <p className="text-18 leading-relaxed text-stone">
                Kämppää voivat käyttää PELMU:n rekisteröityneet jäsenbändit. Vuorot varataan reaaliajassa Vuorokoneen kautta.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-dust rounded-[2rem] p-8">
                <h3 className="font-serif text-24 text-ink mb-6">Nopeat linkit</h3>
                <div className="space-y-3">
                  {subpages.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between p-4 bg-cream rounded-[1rem] hover:bg-ink hover:text-cream transition-all group"
                    >
                      <span className="font-medium text-16">{item.label}</span>
                      <span className="text-ember group-hover:text-cream">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-ink text-cream py-24 md:py-32">
        <div className="page-container">
          <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4 text-center">Varustelu</p>
          <h2 className="font-serif text-56 text-cream text-center mb-16" style={{ lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Kaikki mitä bändi tarvitsee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Akustiikka', desc: 'Tila on suunniteltu ennen kaikkea laadukkaaksi akustiseksi soittopaikaksi. Äänieriste vastaa ammattilaistasoa.' },
              { title: 'Laitteisto', desc: 'Harjoitustilassa on rummut, vahvistimet ja muu perusinfraa. Lisätiedot laitteistosta löydät FAQ:sta.' },
              { title: 'Sijainti', desc: 'Smök-Areenan kupeessa Otaniemessä. Helppo pääsy julkisilla kulkuneuvoilla ja pyörällä.' },
              { title: 'Vuorojärjestelmä', desc: 'Vuorot varataan Vuorokoneella reaaliajassa. Jäsenet voivat varata vakio- tai yksittäisvuoroja.' },
              { title: 'Varastotilat', desc: 'Bändeillä on mahdollisuus vuokrata lukittuja kaappeja soitinten säilytykseen.' },
              { title: 'Studio', desc: 'PELMUlla on myös studio bändeille miksaukseen, nauhoittamiseen ja soittamiseen edulliseen hintaan.' },
            ].map((item) => (
              <div key={item.title} className="bg-cream/5 rounded-[1.5rem] p-8 hover:bg-cream/10 transition-colors">
                <h3 className="font-serif text-24 text-cream mb-3">{item.title}</h3>
                <p className="text-16 text-cream/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32">
        <div className="page-container">
          <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4">Kuvagalleria</p>
          <h2 className="font-serif text-40 text-ink mb-10" style={{ letterSpacing: '-0.02em' }}>Tila kuvina</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              '/images/bandikamppa.jpg',
              '/images/pexels-ivan.jpg',
              '/images/pexels-darmel.jpg',
              '/images/pexels-acam.jpg',
              '/images/pexels-emi.jpg',
              '/images/pexels-gezerasph.jpg',
            ].map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-[1.5rem]">
                <Image src={img} alt={`Kuva ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dust py-16 md:py-24">
        <div className="page-container text-center">
          <h2 className="font-serif text-40 text-ink mb-6" style={{ letterSpacing: '-0.02em' }}>Valmis varaamaan?</h2>
          <p className="text-18 text-stone mb-8 max-w-lg mx-auto">
            Vuorokone on vain rekisteröityneille ja sisäänkirjautuneille jäsenille tarkoitettu reaaliaikainen varausjärjestelmä.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kamppa/vuorokone" className="btn-primary">Vuorokone →</Link>
            <Link href="/rekisteroidy" className="btn-outline">Liity jäseneksi</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { loadActiveBundle } from '@/content/server'

export default async function HomePage() {
  const bundle = await loadActiveBundle()
  const news = bundle.locales.fi.news.sections
    .filter((n) => n.visible)
    .slice(0, 5)

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end bg-ink overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bandikamppa.jpg"
            alt="PELMU bändikämppä"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 page-container pb-20 md:pb-32 w-full">
          <div className="max-w-3xl">
            <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">
              Polyteknikkojen elävän musiikin yhdistys
            </p>
            <h1 className="font-serif text-cream" style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', lineHeight: 1.05, letterSpacing: '-0.04em', fontWeight: 600 }}>
              Teekkarien elävä musiikki
            </h1>
            <p className="text-cream/70 text-20 leading-relaxed mt-8 max-w-xl">
              PELMU on Otaniemen musiikin sydän. Harjoitustila, bändiyhteisö, keikkaverkosto — kaikki saman katon alla vuodesta 2004.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/kamppa" className="btn-primary">
                Bändikämppä →
              </Link>
              <Link href="/rekisteroidy" className="btn-outline" style={{ color: '#F8F3EA', borderColor: 'rgba(248,243,234,0.4)' }}>
                Liity jäseneksi
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 md:right-16 text-cream/30 text-xs uppercase tracking-widest hidden md:block">
          ↓ Tutustu
        </div>
      </section>

      {/* Quick navigation strip */}
      <section className="bg-dust border-b border-ink/10">
        <div className="page-container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink/10">
            {[
              { href: '/kamppa/vuorokone', label: 'Vuorokone', sub: 'Varaa harjoitusvuoro' },
              { href: '/keikkaporssi', label: 'Keikkapörssi', sub: 'Löydä esiintyjä tai keikka' },
              { href: '/bandit', label: 'Bändit', sub: 'PELMUn bändirekisteri' },
              { href: '/rekisteroidy', label: 'Liity', sub: '7 € / kausi' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col py-6 px-6 md:px-8 hover:bg-ink/5 transition-colors group"
              >
                <span className="font-medium text-16 text-ink group-hover:text-ember transition-colors">
                  {item.label}
                </span>
                <span className="text-14 text-stone mt-1">{item.sub}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="py-24 md:py-32">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">Yhdistys</p>
              <h2 className="font-serif text-ink mb-8" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
                Musiikki kuuluu kaikille teekkareille
              </h2>
              <p className="text-20 leading-relaxed text-stone mb-8">
                PELMU eli Polyteknikkojen Elävän MUsiikin yhdistys on perustettu maaliskuussa 2004 tukemaan teekkarien elävää musiikkia kaikissa muodoissaan.
              </p>
              <p className="text-18 leading-relaxed text-stone mb-10">
                Yhdistys tarjoaa jäsenilleen harjoitustilan, keikkaverkoston ja yhteisön — kaiken mitä muusikko tarvitsee Otaniemessä.
              </p>
              <Link href="/yhdistys" className="btn-outline">
                Lue lisää →
              </Link>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/pexels-ivan.jpg"
                alt="Musiikkia Otaniemessä"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice room feature */}
      <section className="bg-ink text-cream py-24 md:py-32">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] order-2 md:order-1">
              <Image
                src="/images/bandikamppa.jpg"
                alt="PELMU bändikämppä sisältä"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">Bändikämppä</p>
              <h2 className="font-serif text-56 text-cream mb-8" style={{ lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                2005 remontoitu loistelias harjoitustila
              </h2>
              <p className="text-20 text-cream/70 leading-relaxed mb-6">
                PELMU:n bändikämppä sijaitsee suoraan Otaniemen kulttuuriscenen sydämessä Smök-Areenan kupeessa.
              </p>
              <p className="text-18 text-cream/60 leading-relaxed mb-10">
                Harjoitushuone on suunniteltu ennen kaikkea laadukkaaksi akustiseksi soittopaikaksi. Tilassa on kaikki mitä bändi tarvitsee — äänieriste, rummut, vahvistimet ja paljon muuta.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kamppa" className="btn-primary">
                  Tutustu tilaan →
                </Link>
                <Link href="/kamppa/vuorokone" className="btn-outline" style={{ color: '#F8F3EA', borderColor: 'rgba(248,243,234,0.3)' }}>
                  Varaa vuoro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band community */}
      <section className="py-24 md:py-32">
        <div className="page-container">
          <div className="text-center mb-16">
            <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4">Bändit</p>
            <h2 className="font-serif text-ink" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
              Elävä musiikki elää täällä
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[
              { img: '/images/pexels-acam.jpg', label: 'Rock & Metal' },
              { img: '/images/pexels-emi.jpg', label: 'Jazz & Blues' },
              { img: '/images/pexels-gezerasph.jpg', label: 'Pop & Indie' },
            ].map((item, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-[1.5rem] card-hover">
                <Image src={item.img} alt={item.label} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute bottom-4 left-5 text-cream font-medium text-18">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/bandit" className="btn-primary">
              Kaikki PELMUn bändit →
            </Link>
          </div>
        </div>
      </section>

      {/* Keikkapörssi */}
      <section className="bg-dust py-24 md:py-32">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4">Keikkapörssi</p>
              <h2 className="font-serif text-56 text-ink mb-6" style={{ lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                Yksi PELMU:n tärkeimmistä tehtävistä
              </h2>
              <p className="text-20 text-stone leading-relaxed mb-8">
                Tuomme bändeille keikkoja ja hankimme bändejä tilaisuuksiin esiintymään. Etsitpä sitten esiintyjää tai seuraavaa keikkaa, PELMU on oikea kanava.
              </p>
              <Link href="/keikkaporssi" className="btn-primary">
                Keikkapörssi →
              </Link>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/pexels-darmel.jpg"
                alt="Keikka"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-24 md:py-32">
        <div className="page-container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-ember text-14 font-medium uppercase tracking-widest mb-3">Ajankohtaista</p>
              <h2 className="font-serif text-40 md:text-56 text-ink" style={{ letterSpacing: '-0.03em' }}>
                Uutiset
              </h2>
            </div>
            <Link href="/uutiset" className="nav-link text-14 hidden md:block">
              Kaikki uutiset →
            </Link>
          </div>
          <div className="divide-y divide-ink/10">
            {news.map((item, i) => (
              <Link
                key={i}
                href="/uutiset"
                className={`flex items-start md:items-center justify-between py-6 gap-4 hover:bg-dust/50 -mx-4 px-4 rounded-[1rem] transition-colors group ${item.urgent ? 'bg-ember/5' : ''}`}
              >
                <div className="flex items-start md:items-center gap-4 md:gap-8">
                  {item.urgent && (
                    <span className="flex-shrink-0 text-ember text-xs font-semibold uppercase tracking-wider bg-ember/10 px-3 py-1 rounded-full mt-0.5 md:mt-0">
                      Tärkeä
                    </span>
                  )}
                  <span className="text-18 font-medium text-ink group-hover:text-ember transition-colors">
                    {item.title}
                  </span>
                </div>
                <span className="text-14 text-stone flex-shrink-0">{item.date}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link href="/uutiset" className="nav-link text-14">
              Kaikki uutiset →
            </Link>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-ember text-cream py-24 md:py-32">
        <div className="page-container text-center">
          <h2 className="font-serif text-cream mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Tule mukaan
          </h2>
          <p className="text-cream/80 text-20 max-w-xl mx-auto mb-10">
            Jäsenyys PELMU:ssa maksaa vain 7 € per kausi. Saat käyttöoikeuden bändikämppään, pääset mukaan yhteisöön ja verkostoon.
          </p>
          <Link href="/rekisteroidy" className="inline-flex items-center justify-center px-8 py-4 bg-cream text-ink font-medium text-14 uppercase tracking-widest rounded-full hover:bg-dust transition-colors">
            Rekisteröidy jäseneksi →
          </Link>
        </div>
      </section>
    </div>
  )
}

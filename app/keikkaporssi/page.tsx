import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Keikkapörssi' }

export default function KeikkaporssiPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-ink overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pexels-darmel.jpg"
            alt="Keikka"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 page-container py-24 md:py-40">
          <div className="max-w-3xl">
            <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">PELMU</p>
            <h1 className="font-serif text-cream mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.05, letterSpacing: '-0.04em', fontWeight: 600 }}>
              Keikkapörssi
            </h1>
            <p className="text-20 text-cream/70 leading-relaxed max-w-xl">
              Yksi PELMU:n tärkeimmistä tehtävistä on tuoda bändeille keikkoja ja hankkia bändejä tilaisuuksiin esiintymään.
            </p>
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="py-24 md:py-32">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For organizers */}
            <div className="bg-dust rounded-[2rem] p-10 md:p-12">
              <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4">Tilaisuuksien järjestäjille</p>
              <h2 className="font-serif text-40 text-ink mb-6" style={{ letterSpacing: '-0.02em' }}>
                Etsitkö esiintyjää?
              </h2>
              <p className="text-18 text-stone leading-relaxed mb-8">
                PELMU:n kautta voit löytää sopivan bändin tilaisuuteesi. Meillä on rekisteröityneinä laaja valikoima eri tyylisiä bändejä — rockista jazziin, metallista folk-musiikkiin.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  'Ota yhteyttä sähköpostilla',
                  'Kerro tilaisuudestasi ja toiveistasi',
                  'PELMU välittää tarjouksen sopivalle bändille',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-ember text-cream text-xs font-semibold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-16 text-stone">{step}</span>
                  </div>
                ))}
              </div>
              <a href="mailto:pelmu@pelmu.fi" className="btn-primary">
                Ota yhteyttä →
              </a>
            </div>

            {/* For bands */}
            <div className="bg-ink text-cream rounded-[2rem] p-10 md:p-12">
              <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4">Bändeille</p>
              <h2 className="font-serif text-40 text-cream mb-6" style={{ letterSpacing: '-0.02em' }}>
                Haluatko lisää keikkoja?
              </h2>
              <p className="text-18 text-cream/70 leading-relaxed mb-8">
                PELMU auttaa jäsenbändejä löytämään esiintymismahdollisuuksia. Rekisteröidy jäseneksi ja ilmoita bändisi keikkakiinnostuksesta.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  'Liity PELMU:n jäseneksi',
                  'Rekisteröi bändisi jäsenportaalissa',
                  'PELMU välittää keikkatarjouksia',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-ember text-cream text-xs font-semibold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-16 text-cream/80">{step}</span>
                  </div>
                ))}
              </div>
              <Link href="/rekisteroidy" className="inline-flex items-center justify-center px-6 py-3 bg-cream text-ink font-medium text-14 uppercase tracking-widest rounded-full hover:bg-dust transition-colors">
                Liity jäseneksi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Band directory link */}
      <section className="bg-dust py-16 md:py-24">
        <div className="page-container text-center">
          <h2 className="font-serif text-40 text-ink mb-6" style={{ letterSpacing: '-0.02em' }}>Tutustu PELMUn bändeihin</h2>
          <p className="text-18 text-stone mb-8 max-w-lg mx-auto">
            Selaa kaikkia PELMU:hun rekisteröityneitä bändejä bändirekisteristä.
          </p>
          <Link href="/bandit" className="btn-primary">
            Bändirekisteri →
          </Link>
        </div>
      </section>
    </div>
  )
}

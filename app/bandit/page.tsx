import Link from 'next/link'
import { loadActiveBundle } from '@/content/server'

export const metadata = { title: 'Bändit' }

export default async function BanditPage() {
  const bundle = await loadActiveBundle()
  const bands = bundle.locales.fi.bands.sections.filter((b) => b.visible)

  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="page-container text-center">
          <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">Yhteisö</p>
          <h1 className="font-serif text-ink mb-8" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1.05, letterSpacing: '-0.04em', fontWeight: 600 }}>
            PELMU:n bändit
          </h1>
          <p className="text-20 text-stone max-w-2xl mx-auto">
            PELMU:hun kuuluvat bändit kattavat laajan kirjon eri genrejä — rockista jazziin, metallista folk-musiikkiin. Kaikki ovat teekkarien tekemää elävää musiikkia.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* Band grid */}
      <section className="py-24 md:py-32">
        <div className="page-container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-32 text-ink">{bands.length} bändiä</h2>
            <p className="text-14 text-stone">Aakkosjärjestyksessä</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {bands.map((band) => (
              <div
                key={band.id}
                className="bg-dust rounded-[1rem] px-5 py-4 hover:bg-ember hover:text-cream transition-all cursor-default group"
              >
                <span className="text-16 font-medium text-ink group-hover:text-cream transition-colors">{band.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keikkapörssi CTA */}
      <section className="bg-ink text-cream py-16 md:py-24">
        <div className="page-container text-center">
          <h2 className="font-serif text-40 text-cream mb-4" style={{ letterSpacing: '-0.02em' }}>Etsitkö esiintyjää?</h2>
          <p className="text-18 text-cream/70 mb-8 max-w-lg mx-auto">
            PELMU:n keikkapörssin kautta voit löytää sopivan bändin tilaisuuteesi tai ilmoittaa keikkamahdollisuudesta bändeille.
          </p>
          <Link href="/keikkaporssi" className="btn-primary">
            Keikkapörssi →
          </Link>
        </div>
      </section>
    </div>
  )
}

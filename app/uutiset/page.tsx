import Link from 'next/link'
import { loadActiveBundle } from '@/content/server'

export const metadata = { title: 'Uutiset' }

export default async function UutisetPage() {
  const bundle = await loadActiveBundle()
  const allNews = bundle.locales.fi.news.sections.filter((n) => n.visible)
  const urgent = allNews.filter((n) => n.urgent)
  const regular = allNews.filter((n) => !n.urgent)

  return (
    <div>
      {/* Header */}
      <section className="pt-40 pb-24">
        <div className="page-container text-center">
          <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">Ajankohtaista</p>
          <h1 className="font-serif text-ink mb-8" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1.05, letterSpacing: '-0.04em', fontWeight: 600 }}>
            Kaikki uutiset
          </h1>
          <p className="text-18 text-stone max-w-xl mx-auto">
            Alla listaus kaikista pelmu.fi kautta julkaistuista uutisista, tiedotteista ja tapahtumista.
          </p>
        </div>
      </section>

      <hr className="divider" />

      <section className="py-24 md:py-32">
        <div className="page-container">
          <div className="max-w-3xl mx-auto">

            {/* Urgent notices */}
            {urgent.length > 0 && (
              <div className="mb-16">
                <h2 className="font-serif text-32 text-ink mb-6">Tärkeät tiedotteet</h2>
                {urgent.map((item, i) => (
                  <div key={i} className="border border-ember/30 bg-ember/5 rounded-[1.5rem] p-8 mb-4">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="flex-shrink-0 text-ember text-xs font-semibold uppercase tracking-wider bg-ember/10 px-3 py-1 rounded-full">
                        Tärkeä tiedote
                      </span>
                      <span className="text-14 text-stone">{item.date}</span>
                    </div>
                    <h3 className="font-serif text-24 text-ink mb-3">{item.title}</h3>
                    <p className="text-16 text-stone leading-relaxed">{item.summary}</p>
                  </div>
                ))}
              </div>
            )}

            {/* All news */}
            <h2 className="font-serif text-32 text-ink mb-6">Kaikki uutiset</h2>
            <div className="divide-y divide-ink/10">
              {regular.map((item, i) => (
                <div key={i} className="py-8 group">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-20 text-ink mb-2 group-hover:text-ember transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-16 text-stone leading-relaxed">{item.summary}</p>
                    </div>
                    <span className="text-14 text-stone/70 flex-shrink-0 font-mono">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

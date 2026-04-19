'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Alert banner */}
      <div className="alert-banner text-center text-14 font-medium">
        <span className="mr-2">🔴</span>
        <strong>Treenitila suljettu toistaiseksi</strong>
        <span className="mx-2 opacity-40">·</span>
        <span className="opacity-80">Practice space is closed for the time being.</span>
        <Link href="/kamppa" className="ml-3 underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity">
          Lisätietoja →
        </Link>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-cream border-b border-ink/10 transition-shadow duration-300">
        <div className="page-container flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-serif text-24 md:text-32 font-semibold text-ink tracking-tight">
              PELMU
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            <Link href="/bandit" className="nav-link">Bändit</Link>
            <Link href="/kamppa" className="nav-link">Kämppä</Link>
            <Link href="/yhdistys" className="nav-link">Yhdistys</Link>
            <Link href="/yhteystiedot" className="nav-link">Yhteystiedot</Link>
            <Link href="/uutiset" className="nav-link">Uutiset</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/kamppa/vuorokone" className="btn-outline text-xs py-2 px-4">
              Vuorokone
            </Link>
            <Link href="/keikkaporssi" className="nav-link text-14">Keikkapörssi</Link>
            <Link href="/rekisteroidy" className="btn-primary text-xs py-2 px-5">
              Liity jäseneksi
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg"
            aria-label="Avaa valikko"
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-6 bg-ink transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px w-6 bg-ink transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-ink transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-ink/10 py-6 px-6">
            <nav className="flex flex-col gap-4">
              {[
                { href: '/bandit', label: 'Bändit' },
                { href: '/kamppa', label: 'Kämppä' },
                { href: '/kamppa/faq', label: 'Kämppä FAQ' },
                { href: '/kamppa/vuorokone', label: 'Vuorokone' },
                { href: '/yhdistys', label: 'Yhdistys' },
                { href: '/yhteystiedot', label: 'Yhteystiedot' },
                { href: '/uutiset', label: 'Uutiset' },
                { href: '/keikkaporssi', label: 'Keikkapörssi' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-ink text-18 font-medium py-1 border-b border-ink/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/rekisteroidy" className="btn-primary text-center" onClick={() => setMobileOpen(false)}>
                  Liity jäseneksi
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

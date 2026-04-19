import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="page-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-serif text-32 font-semibold text-cream">PELMU</span>
            </Link>
            <p className="text-14 text-cream/60 leading-relaxed">
              Polyteknikkojen elävän musiikin yhdistys.<br />
              Perustettu maaliskuussa 2004.
            </p>
            <div className="mt-6">
              <a
                href="mailto:pelmu@pelmu.fi"
                className="text-ember text-14 font-medium hover:text-ember-hover transition-colors"
              >
                pelmu@pelmu.fi
              </a>
            </div>
          </div>

          {/* Bändikämppä */}
          <div>
            <h3 className="text-cream text-14 font-semibold uppercase tracking-widest mb-4 opacity-50">
              Bändikämppä
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/kamppa', label: 'Esittely' },
                { href: '/kamppa/vuorokone', label: 'Vuorokone' },
                { href: '/kamppa/faq', label: 'Usein kysyttyä' },
                { href: '/kamppa/ohjesaanto', label: 'Käyttöohjesääntö' },
                { href: '/kamppa/varastot', label: 'Varastotilat' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-14 text-cream/60 hover:text-cream transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yhdistys */}
          <div>
            <h3 className="text-cream text-14 font-semibold uppercase tracking-widest mb-4 opacity-50">
              Yhdistys
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/yhdistys', label: 'Mikä on PELMU?' },
                { href: '/bandit', label: 'Bändit' },
                { href: '/keikkaporssi', label: 'Keikkapörssi' },
                { href: '/uutiset', label: 'Uutiset' },
                { href: '/yhteystiedot', label: 'Yhteystiedot' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-14 text-cream/60 hover:text-cream transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jäsenyys */}
          <div>
            <h3 className="text-cream text-14 font-semibold uppercase tracking-widest mb-4 opacity-50">
              Jäsenyys
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/rekisteroidy" className="text-14 text-cream/60 hover:text-cream transition-colors">
                  Liity jäseneksi
                </Link>
              </li>
              <li>
                <Link href="/kamppa/vuorokone" className="text-14 text-cream/60 hover:text-cream transition-colors">
                  Kirjaudu sisään
                </Link>
              </li>
            </ul>
            <Link href="/rekisteroidy" className="btn-primary text-xs">
              Liity jäseneksi →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-14 text-cream/40">
            © {new Date().getFullYear()} PELMU ry · Polyteknikkojen elävän musiikin yhdistys
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/pelmu.ry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-14 text-cream/40 hover:text-cream/80 transition-colors"
            >
              Facebook
            </a>
            <a
              href="mailto:pelmu@pelmu.fi"
              className="text-14 text-cream/40 hover:text-cream/80 transition-colors"
            >
              Sähköposti
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

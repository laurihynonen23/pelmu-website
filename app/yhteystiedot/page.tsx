export const metadata = { title: 'Yhteystiedot' }

export default function YhteystiedotPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="page-container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-ember text-14 font-medium uppercase tracking-widest mb-6">PELMU</p>
            <h1 className="font-serif text-ink mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.04em', fontWeight: 600 }}>
              Yhteystiedot Pelmuun?
            </h1>
            <p className="text-20 text-stone leading-relaxed">
              Pelmuun saat parhaiten yhteyden sähköpostilla.<br />
              Contact Pelmu with e-mail.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Contact info */}
      <section className="py-24 md:py-32">
        <div className="page-container">
          <div className="max-w-2xl mx-auto">

            {/* Email */}
            <div className="bg-dust rounded-[2rem] p-10 md:p-12 mb-6 text-center">
              <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4">Sähköposti</p>
              <a
                href="mailto:pelmu@pelmu.fi"
                className="font-serif text-ink hover:text-ember transition-colors"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: '-0.02em' }}
              >
                pelmu@pelmu.fi
              </a>
              <p className="text-16 text-stone mt-4">
                Vastaamme sähköposteihin mahdollisimman nopeasti.
              </p>
            </div>

            {/* Facebook */}
            <div className="bg-dust rounded-[2rem] p-10 md:p-12 mb-12 text-center">
              <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4">Facebook</p>
              <a
                href="https://www.facebook.com/pelmu.ry"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-32 text-ink hover:text-ember transition-colors"
                style={{ letterSpacing: '-0.02em' }}
              >
                /pelmu.ry
              </a>
              <p className="text-16 text-stone mt-4">
                Seuraa PELMUa Facebookissa ajankohtaisten tietojen saamiseksi.
              </p>
            </div>

            {/* Contact topics */}
            <h2 className="font-serif text-32 text-ink mb-6">Mistä kysyä?</h2>
            <div className="space-y-3">
              {[
                { topic: 'Bändikämppä ja varaukset', email: 'pelmu@pelmu.fi' },
                { topic: 'Jäsenyys ja rekisteröityminen', email: 'pelmu@pelmu.fi' },
                { topic: 'Keikkapörssi ja esiintyjät', email: 'pelmu@pelmu.fi' },
                { topic: 'Varastotilat', email: 'pelmu@pelmu.fi' },
                { topic: 'Kansainväliset jäsenet / International members', email: 'pelmu@pelmu.fi' },
              ].map((item) => (
                <div key={item.topic} className="flex items-center justify-between p-5 bg-cream border border-ink/10 rounded-[1rem] hover:border-ember/30 transition-colors">
                  <span className="text-16 text-ink">{item.topic}</span>
                  <a href={`mailto:${item.email}`} className="text-ember text-14 font-medium hover:underline">
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

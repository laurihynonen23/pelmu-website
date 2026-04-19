import Link from 'next/link'
import { AccordionGroup } from '@/components/Accordion'

export const metadata = { title: 'Bändikämppä FAQ' }

const faqData = [
  {
    id: 'yleista',
    title: 'Yleistä',
    items: [
      { question: 'Mitä PELMU:n bändikämppä on?', answer: 'PELMU:n bändikämppä on vuonna 2005 täydellisesti remontoitu harjoitustila Otaniemessä Smök-Areenan kupeessa. Tila on suunniteltu ennen kaikkea laadukkaaksi akustiseksi soittopaikaksi teekkaribändeille.' },
      { question: 'Missä bändikämppä sijaitsee?', answer: 'Bändikämppä sijaitsee Otaniemessä, suoraan Otaniemen kulttuuriscenen sydämessä Smök-Areenan kupeessa. Tarkempi osoite löytyy ottamalla yhteyttä sähköpostilla pelmu@pelmu.fi.' },
      { question: 'Onko tila tällä hetkellä auki?', answer: 'Treenitila on suljettu toistaiseksi alkaen 31.3.2026 sähköisen lukitusjärjestelmän vian takia. Seuraa uutisia tilanteen päivittymisestä.' },
    ],
  },
  {
    id: 'mukaan',
    title: 'Miten pääsen mukaan?',
    items: [
      { question: 'Miten bändi pääsee käyttämään bändikämppää?', answer: 'Bändikämppää voivat käyttää PELMU:n rekisteröityneet jäsenbändit. Rekisteröidy ensin jäseneksi pelmu.fi:n kautta, jonka jälkeen bändisi voi hakea pääsyä harjoitustilaan.' },
      { question: 'Täytyykö kaikkien bändin jäsenten olla PELMU:n jäseniä?', answer: 'TODO: Tarkista tarkat jäsenyysvaatimukset hallitukselta tai ottamalla yhteyttä pelmu@pelmu.fi.' },
      { question: 'Voiko yksin tulla soittamaan?', answer: 'Jos haluaa tulla soittamaan yksin (esim. rumpuja) klo 8–16 välillä, tulee lähettää sähköpostia osoitteeseen pelmu@pelmu.fi.' },
    ],
  },
  {
    id: 'bandit',
    title: 'Bändit',
    items: [
      { question: 'Miten bändi rekisteröidään PELMU:hun?', answer: 'Bändin rekisteröiminen tapahtuu PELMU:n jäsenportaalin kautta. Ota tarvittaessa yhteyttä sähköpostilla pelmu@pelmu.fi.' },
      { question: 'Miten löydän muita muusikoita tai bändejä?', answer: 'PELMUn bändirekisteristä löydät kaikki yhdistykseen rekisteröityneet bändit. Myös keikkapörssi on hyvä kanava verkostoitua.' },
    ],
  },
  {
    id: 'infra',
    title: 'Kämpän infra ja tekniikka',
    items: [
      { question: 'Mitä laitteita tilassa on?', answer: 'Tilassa on rummut, vahvistimet ja muu peruslaitteisto. Tarkempi lista tilasta löytyvistä laitteista on saatavilla ottamalla yhteyttä pelmu@pelmu.fi. TODO: Lisää tarkka laitelista.' },
      { question: 'Onko tilassa äänieriste?', answer: 'Kyllä. Harjoitushuone on suunniteltu ennen kaikkea laadukkaaksi akustiseksi soittopaikaksi, ja äänieriste vastaa ammattilaistasoa.' },
      { question: 'Onko tilassa studio?', answer: 'PELMU:lla on myös studio, jossa jäsenet voivat miksata omia kappaleitaan, nauhoittaa ja soittaa yhtyeenä edulliseen hintaan. Studiolle löytyy myös käyttöohje.' },
    ],
  },
  {
    id: 'laitteet',
    title: 'Laitteet ja niiden käyttö',
    items: [
      { question: 'Saako laitteita käyttää vapaasti?', answer: 'Tilassa olevat laitteet ovat jäsenten käytettävissä normaalin käytön puitteissa. Laitteita tulee käyttää huolellisesti ja vahingoittamisesta vastaa käyttäjä. Tarkemmat ohjeet käyttöohjesäännöstä.' },
      { question: 'Mitä jos laite hajoaa?', answer: 'Laitteiden rikkoutuessa tulee ottaa välittömästi yhteyttä PELMU:n hallitukseen sähköpostilla pelmu@pelmu.fi.' },
    ],
  },
  {
    id: 'hinta',
    title: 'Mitä maksaa?',
    items: [
      { question: 'Paljonko jäsenyys maksaa?', answer: 'PELMU:n jäsenmaksu on 7 euroa per kausi. Kevät ja kesä ovat samaan hintaan.' },
      { question: 'Onko harjoitusvuoroilla erillinen hinta?', answer: 'TODO: Tarkista harjoitusvuorojen mahdollinen hinnoittelu hallitukselta tai pelmu@pelmu.fi.' },
      { question: 'Paljonko varastotilat maksavat?', answer: 'TODO: Tarkista varastokaappien hinnoittelu. Ota yhteyttä pelmu@pelmu.fi.' },
    ],
  },
]

export default function FaqPage() {
  return (
    <div className="pt-40 pb-32">
      <div className="page-container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-ember text-14 font-medium uppercase tracking-widest mb-4">Bändikämppä</p>
          <h1 className="font-serif text-ink mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Usein kysyttyä
          </h1>
          <p className="text-20 text-stone leading-relaxed">
            Lisätietoja saa myös sähköpostilla:{' '}
            <a href="mailto:pelmu@pelmu.fi" className="text-ember hover:underline">
              pelmu@pelmu.fi
            </a>
          </p>
        </div>

        {/* Jump nav */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 pb-8 border-b border-ink/10">
          {faqData.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="text-14 uppercase tracking-wider font-medium text-stone hover:text-ember transition-colors"
            >
              {group.title}
            </a>
          ))}
        </div>

        {/* FAQ content */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((group) => (
            <AccordionGroup
              key={group.id}
              id={group.id}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>

        {/* Back link */}
        <div className="text-center mt-16">
          <Link href="/kamppa" className="nav-link text-14">
            ← Takaisin bändikämppään
          </Link>
        </div>
      </div>
    </div>
  )
}

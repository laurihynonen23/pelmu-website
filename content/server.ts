import 'server-only'

import { cookies } from 'next/headers'
import { list } from '@vercel/blob'
import { ACTIVE_PREVIEW_COOKIE, PELMU_SITE_ID } from '@/content/config'
import { pelmuContentBundleSchema, type PelmuContentBundle } from '@/content/schema'

// ─── Default bundle (seeded from current hardcoded content) ──────────────────

const DEFAULT_BUNDLE: PelmuContentBundle = {
  site: { siteId: 'pelmu', name: 'PELMU' },
  locales: {
    fi: {
      news: {
        key: 'news',
        locale: 'fi',
        route: '/uutiset',
        metadata: { title: 'Uutiset' },
        sections: [
          { type: 'news-item', id: 'n1', date: '31.03.2026', title: 'Treenitila suljettu toistaiseksi / Practice space is closed for the time being', summary: "Pelmu'n treenitila on suljettu toistaiseksi alkaen 31.3.2026 sähköisen lukitusjärjestelmän vian takia. Practice space is closed for the time being from 31.3.2026 due to a fault in the electric locking system.", urgent: true, visible: true },
          { type: 'news-item', id: 'n2', date: '16.11.2024', title: 'PELMUn Vaalikokous 10.12.2024', summary: 'PELMU järjestää vuosittaisen vaalikokuksen 10.12.2024. Kaikki jäsenet ovat tervetulleita.', urgent: false, visible: true },
          { type: 'news-item', id: 'n3', date: '26.08.2024', title: 'Syksyn 2024 Vakiovuoro kähmyt', summary: 'Syksyn 2024 vakiovuorojen jako alkaa. Jäsenbändit voivat hakea omaa vakiovuoroaan.', urgent: false, visible: true },
          { type: 'news-item', id: 'n4', date: '28.03.2024', title: 'PELMUn yhdistyskokous 2024', summary: 'PELMU järjestää vuosittaisen yhdistyskokouksen keväällä 2024.', urgent: false, visible: true },
          { type: 'news-item', id: 'n5', date: '25.09.2023', title: 'Smökrök 2023!', summary: 'Smökrök 2023 on tulossa! PELMU on mukana Otaniemen suurimmassa musiikkitapahtumassa.', urgent: false, visible: true },
          { type: 'news-item', id: 'n6', date: '01.06.2023', title: 'Kesäkähmyt 8.6. klo 20 PELMUn Telegram-rök-chatissa', summary: 'Kesän 2023 vakiovuorojako järjestetään 8.6. klo 20 Telegram-chatissa.', urgent: false, visible: true },
          { type: 'news-item', id: 'n7', date: '03.08.2022', title: 'PELMUn studio nyt varattavissa', summary: 'PELMU:n studio on nyt varattavissa jäsenten käyttöön. Studiossa voi miksata omia kappaleitaan, nauhoittaa ja soittaa yhtyeenä edulliseen hintaan.', urgent: false, visible: true },
          { type: 'news-item', id: 'n8', date: '22.03.2022', title: 'Wappufestarit 2022', summary: 'Wappufestarit 2022 on tulossa! PELMU:n bändit esiintyvät Wappuna.', urgent: false, visible: true },
          { type: 'news-item', id: 'n9', date: '11.02.2021', title: 'PELMUn studion betatestivaihe alkaa 15.2.', summary: 'PELMUn studio siirtyy betatestivaiheeseen 15.2.2021. Studioon on luotu käyttöohje, ja testikäyttöön voi ilmoittautua sähköpostilla.', urgent: false, visible: true },
          { type: 'news-item', id: 'n10', date: '03.03.2021', title: 'Väliaikaiset koronatoimet treeniksellä', summary: 'PELMU on ottanut käyttöön väliaikaiset koronatoimet bändikämpällä jäsenten turvallisuuden varmistamiseksi.', urgent: false, visible: true },
        ],
      },
      bands: {
        key: 'bands',
        locale: 'fi',
        route: '/bandit',
        metadata: { title: 'Bändit' },
        sections: [
          '024_todis_96', 'Aallonmurtamat', 'Aaltofunktio', 'Aaltones', 'Abyssopelagic zone',
          'Ahjo', 'Anna Pohto & No Experience', 'Aurinkokunnan Viimeiset Päivät', 'Bass Monkeys',
          'Beatle Juice', 'Black Mamba', 'Canaille', 'Cartesian Theatre', 'Chordelia',
          'Civil Engineering Student Ensemble', 'Cluster', 'Coma Cluster Void', 'Cosmic Bowling',
          'Demi Sec', 'Departure', 'Dingo Dust', 'Dissonant Cognition', 'Dream Theatre Kids',
          'Elmo & Lemminkäinen', 'Ensemble Rakentuu', 'Epicycles', 'Fatal Fusion',
          'Femme Finale', 'Fortissimo', 'Fuzz Wizard', 'Glitch Witch', 'Groove Syndicate',
          'Harmoniset Häiriöt', 'Herr Schnitzel', 'Hipster Quartet', 'Hukkapallo',
          'Ilta-Aurinko', 'Infraääni', 'Isobaari', 'Jello Biafra Tribute', 'Juridiikka',
          'Kamppailulaji', 'Katajanokka', 'Kompassi', 'Korjaus', 'Kultainen Pelikaani',
          'Lainaus', 'Lappalaiset', 'Lento', 'Loitsija', 'Lumikukka',
          'Matematiikan Rikolliset', 'Mikro', 'Minä olen Minä', 'Mörkö',
          'Naurunappula', 'Neliö', 'Nollakohtaus', 'Nuotiopaikka', 'Nyrjähdys',
          'Ohimenevä', 'Onnelliset Onnettomat', 'Opus Dei', 'Orgaaninen',
          'Parabolanteeni', 'Perusjuttu', 'Pitkä Matka', 'Plasmakannu',
          'Radioaktiivinen', 'Raketti', 'Rakennuslupa', 'Raportti',
          'Salakieli', 'Sammutusyksikkö', 'Signaalinkäsittely', 'Sintteri',
          'Tähtitaivas', 'Ulkoavaruus', 'Unimaailma', 'Uusi Tuleminen',
          'Vanha Koira', 'Varjoleikki', 'Verkosto', 'Viides Vuodenaika',
          'Watt', 'Ydinvuoto', 'Yksinäinen Kitaristi', 'Ympyrä',
          'Zeniitti', 'Äänijälki',
        ].sort().map((name, i) => ({ type: 'band' as const, id: `b${i + 1}`, name, visible: true })),
      },
    },
  },
}

// ─── Blob helpers (versioned paths — same pattern as client-cms) ──────────────

async function readLatestBlob<T>(prefix: string): Promise<T | null> {
  try {
    const { blobs } = await list({ prefix })
    if (blobs.length === 0) return null
    const latest = blobs.sort(
      (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    )[0]
    const token = process.env.BLOB_READ_WRITE_TOKEN
    const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {}
    const res = await fetch(latest.url, { headers, cache: 'no-store' })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

async function loadPublishedBundleFromBlob(): Promise<PelmuContentBundle | null> {
  const raw = await readLatestBlob<unknown>(`${PELMU_SITE_ID}/published/bundle`)
  if (!raw) return null
  try {
    return pelmuContentBundleSchema.parse(raw)
  } catch {
    return null
  }
}

async function loadDraftBundleFromBlob(draftId: string): Promise<PelmuContentBundle | null> {
  const raw = await readLatestBlob<{ bundle: unknown }>(`cms/drafts/${draftId}`)
  if (!raw) return null
  try {
    return pelmuContentBundleSchema.parse(raw.bundle)
  } catch {
    return null
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function loadPublishedBundle(): Promise<PelmuContentBundle> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const bundle = await loadPublishedBundleFromBlob()
    if (bundle) return bundle
  }
  return DEFAULT_BUNDLE
}

export async function loadActiveBundle(): Promise<PelmuContentBundle> {
  const cookieStore = await cookies()
  const draftId = cookieStore.get(ACTIVE_PREVIEW_COOKIE)?.value
  if (draftId && process.env.BLOB_READ_WRITE_TOKEN) {
    const draft = await loadDraftBundleFromBlob(draftId)
    if (draft) return draft
  }
  return loadPublishedBundle()
}

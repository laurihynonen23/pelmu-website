// Publish content/data/*.json to Vercel Blob as the live published bundle.
// Run: npm run publish-content
// This writes the same format the CMS editor uses — they won't conflict.

import { readFile } from 'fs/promises'
import { put, list, del } from '@vercel/blob'
import { fileURLToPath } from 'url'
import path from 'path'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const SITE_ID = 'pelmu'
const TOKEN = process.env.BLOB_READ_WRITE_TOKEN

if (!TOKEN) {
  console.error('Missing BLOB_READ_WRITE_TOKEN — run with: node --env-file=.env.local scripts/publish-content.mjs')
  process.exit(1)
}

async function blobWrite(blobPath, value) {
  const base = blobPath.replace(/\.json$/, '')
  const url = `${base}-${Date.now()}.json`
  await put(url, JSON.stringify(value, null, 2), {
    access: 'public',
    addRandomSuffix: false,
    contentType: 'application/json',
    token: TOKEN,
  })
  // Keep only the 3 most recent versions
  const { blobs } = await list({ prefix: base, token: TOKEN })
  const old = blobs
    .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())
    .slice(3)
  if (old.length > 0) await del(old.map((b) => b.url), { token: TOKEN })
}

const news = JSON.parse(await readFile(path.join(root, 'content/data/news.json'), 'utf-8'))
const bands = JSON.parse(await readFile(path.join(root, 'content/data/bands.json'), 'utf-8'))

const bundle = {
  site: { siteId: SITE_ID, name: 'PELMU' },
  locales: {
    fi: {
      news: {
        key: 'news',
        locale: 'fi',
        route: '/uutiset',
        metadata: { title: 'Uutiset' },
        sections: news,
      },
      bands: {
        key: 'bands',
        locale: 'fi',
        route: '/bandit',
        metadata: { title: 'Bändit' },
        sections: bands,
      },
    },
  },
}

console.log(`Publishing ${news.length} news items and ${bands.length} bands...`)
await blobWrite(`${SITE_ID}/published/bundle.json`, bundle)
console.log('Done. Changes are live.')

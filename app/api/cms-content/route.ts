import { NextResponse } from 'next/server'
import { loadPublishedBundle } from '@/content/server'

export const runtime = 'nodejs'

export async function GET() {
  const bundle = await loadPublishedBundle()
  return NextResponse.json(bundle, {
    headers: {
      'Access-Control-Allow-Origin': process.env.CMS_CONTENT_URL ?? '*',
      'Cache-Control': 'no-store',
    },
  })
}

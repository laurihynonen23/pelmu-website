import { NextResponse } from 'next/server'
import { ACTIVE_PREVIEW_COOKIE } from '@/content/config'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const draftId = url.searchParams.get('draftId') ?? ''
  const redirectParam = url.searchParams.get('redirect') ?? '/'
  const safePath = redirectParam.startsWith('/') && !redirectParam.startsWith('//') ? redirectParam : '/'

  const response = NextResponse.redirect(new URL(safePath, request.url))
  if (draftId) {
    response.cookies.set(ACTIVE_PREVIEW_COOKIE, draftId, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    })
  } else {
    response.cookies.delete(ACTIVE_PREVIEW_COOKIE)
  }
  return response
}

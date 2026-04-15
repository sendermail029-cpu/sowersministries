import { NextResponse } from 'next/server'
import { getAdminCookieName, createAdminSessionToken, isValidAdminLogin } from '@/lib/admin-auth'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const { mobile = '', pin = '' } = (await request.json()) as {
      mobile?: string
      pin?: string
    }

    if (!isValidAdminLogin(String(mobile).trim(), String(pin).trim())) {
      return NextResponse.json(
        { error: 'Invalid mobile number or PIN.' },
        { status: 401 }
      )
    }

    const response = NextResponse.json({
      ok: true,
      message: 'Login successful.',
    })

    response.cookies.set({
      name: getAdminCookieName(),
      value: createAdminSessionToken(),
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 12,
    })

    return response
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Unable to login.' }, { status: 500 })
  }
}

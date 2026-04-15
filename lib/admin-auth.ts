import { createHash } from 'crypto'
import { cookies } from 'next/headers'

const ADMIN_COOKIE_NAME = 'sowers_admin_session'

function getRequiredEnv(name: string, fallback = '') {
  return process.env[name]?.trim() || fallback
}

export function getAdminCredentials() {
  return {
    mobile: getRequiredEnv('ADMIN_LOGIN_MOBILE'),
    pin: getRequiredEnv('ADMIN_LOGIN_PIN'),
    secret: getRequiredEnv('ADMIN_SESSION_SECRET', 'sowers-admin-session-secret'),
  }
}

export function createAdminSessionToken() {
  const { mobile, pin, secret } = getAdminCredentials()
  return createHash('sha256')
    .update(`${mobile}:${pin}:${secret}`)
    .digest('hex')
}

export function isValidAdminLogin(mobile: string, pin: string) {
  const credentials = getAdminCredentials()
  return mobile === credentials.mobile && pin === credentials.pin
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value
  return session === createAdminSessionToken()
}

export function getAdminCookieName() {
  return ADMIN_COOKIE_NAME
}

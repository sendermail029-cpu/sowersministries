import AdminLoginPanel from '@/components/AdminLoginPanel'
import AdminPanel from '@/components/AdminPanel'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { getGalleryItems, getLatestUpdate } from '@/lib/content-store'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated()
  if (!authenticated) {
    return <AdminLoginPanel />
  }

  const [update, galleryItems] = await Promise.all([
    getLatestUpdate(),
    getGalleryItems(),
  ])

  return <AdminPanel update={update} galleryCount={galleryItems.length} />
}

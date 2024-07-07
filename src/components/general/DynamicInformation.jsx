import { AnydayInvitation } from './AnydayInvitation'

export function DynamicInformation({ pathname }) {
  if (pathname.includes('/dashboard')) return <AnydayInvitation />
  if (pathname.includes('/activity')) return <AnydayInvitation />
  if (pathname.includes('/groups')) return <div>Groups</div>
  if (pathname.includes('/friends')) return <div>Friend</div>
}

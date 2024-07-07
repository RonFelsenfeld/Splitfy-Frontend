export function DynamicInformation({ pathname }) {
  if (pathname.includes('/dashboard')) return <div>Dashboard</div>
  if (pathname.includes('/activity')) return <div>Activity</div>
  if (pathname.includes('/groups')) return <div>Groups</div>
  if (pathname.includes('/friends')) return <div>Friend</div>
}

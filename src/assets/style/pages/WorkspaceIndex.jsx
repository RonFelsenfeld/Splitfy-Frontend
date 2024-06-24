import { useEffect } from 'react'
import { Outlet } from 'react-router'

import { loadGroups } from '../../../store/actions/group.actions'

import { Sidebar } from '../../../components/sidebar/Sidebar'

export function WorkspaceIndex() {
  useEffect(() => {
    loadGroups()
  }, [])

  return (
    <section className="workspace-index">
      <Sidebar />
      <Outlet />
    </section>
  )
}

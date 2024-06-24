import { useEffect } from 'react'

import { loadGroups } from '../../store/actions/group.actions'

import { Sidebar } from '../sidebar/Sidebar'

export function WorkspaceIndex() {
  useEffect(() => {
    loadGroups()
  }, [])

  return (
    <section className="workspace-index">
      <Sidebar />
    </section>
  )
}

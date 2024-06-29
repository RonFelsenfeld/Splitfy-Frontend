import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'

import { loadGroups } from '../store/actions/group.actions'
import { Sidebar } from '../components/sidebar/Sidebar'
import { MainLoader } from '../components/general/MainLoader'

export function WorkspaceIndex() {
  const isLoading = useSelector(store => store.systemModule.isLoading)

  useEffect(() => {
    loadGroups()
  }, [])

  return (
    <section className="workspace-index">
      {isLoading ? (
        <MainLoader />
      ) : (
        <div className="main-content animate__animated animate__fadeIn">
          <Sidebar />
          <Outlet />
        </div>
      )}
    </section>
  )
}

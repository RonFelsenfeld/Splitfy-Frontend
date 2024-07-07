import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation } from 'react-router'

import { loadGroups } from '../store/actions/group.actions'
import { Sidebar } from '../components/sidebar/Sidebar'
import { MainLoader } from '../components/general/MainLoader'
import { DynamicInformation } from '../components/general/DynamicInformation'

export function WorkspaceIndex() {
  const isLoading = useSelector(store => store.systemModule.isLoading)
  const { pathname } = useLocation()

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
          <DynamicInformation pathname={pathname} />
        </div>
      )}
    </section>
  )
}

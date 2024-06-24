import { useSelector } from 'react-redux'
import { GroupList } from '../group/GroupList'

export function SidebarGroupList() {
  const groups = useSelector(store => store.groupModule.groups)

  return (
    <section className="sidebar-groups-section">
      <header className="group-list-header flex align-center justify-between">
        <h4 className="groups-title">Groups</h4>
        <button className="btn-add-group">add</button>
      </header>

      <GroupList groups={groups} />
    </section>
  )
}

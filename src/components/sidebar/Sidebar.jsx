import { NavLink } from 'react-router-dom'
import { FlagIcon, HomeIcon, ListIcon } from '../../services/svg.service'

import { SidebarGroupList } from './SidebarGroupList'
import { SidebarFriendList } from './SidebarFriendList'

export function Sidebar() {
  return (
    <section className="sidebar">
      <nav className="main-nav clean-list flex column">
        <NavLink to="/dashboard" className="main-nav-link">
          <div className="link-container flex align-center ">
            <HomeIcon />
            <h4 className="link-title">Dashboard</h4>
          </div>
        </NavLink>

        <NavLink to="/activity" className="main-nav-link">
          <div className="link-container flex align-center">
            <FlagIcon />
            <h4 className="link-title">Recent activity</h4>
          </div>
        </NavLink>

        <NavLink to="/all" className="main-nav-link">
          <div className="link-container smaller flex align-center">
            <ListIcon />
            <h4 className="link-title">All Expenses</h4>
          </div>
        </NavLink>

        <SidebarGroupList />
        <SidebarFriendList />
      </nav>
    </section>
  )
}

import { useSelector } from 'react-redux'
import { groupService } from '../../services/group.service.local'

import { FriendList } from '../friend/FriendList'

export function SidebarFriendList() {
  const groups = useSelector(store => store.groupModule.groups)

  return (
    <section className="sidebar-friends-section">
      <header className="friend-list-header flex align-center justify-between">
        <h4 className="friends-title">Friends</h4>
        <button className="btn-add-friend">add</button>
      </header>

      <FriendList friends={groupService.getAllFriendsFromGroups(groups)} />
    </section>
  )
}

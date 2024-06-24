import { FriendList } from '../friend/FriendList'

export function SidebarFriendList() {
  return (
    <section className="sidebar-friends-section">
      <header className="friend-list-header flex align-center justify-between">
        <h4 className="friends-title">Friends</h4>
        <button className="btn-add-friend">add</button>
      </header>

      <FriendList />
    </section>
  )
}

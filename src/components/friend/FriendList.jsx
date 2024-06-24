import { NavLink } from 'react-router-dom'
import { FriendPreview } from './FriendPreview'

export function FriendList({ friends }) {
  return (
    <ul className="friend-list clean-list">
      {friends.map((friend, idx) => (
        <NavLink to={`/friends/${friend}`} key={friend._id + idx} className="friend-link">
          <li>
            <FriendPreview friend={friend} />
          </li>
        </NavLink>
      ))}
    </ul>
  )
}

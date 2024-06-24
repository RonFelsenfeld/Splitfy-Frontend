import { NavLink } from 'react-router-dom'
import { FriendPreview } from './FriendPreview'

export function FriendList() {
  return (
    <ul className="friend-list clean-list">
      <NavLink to="/" className="friend-link">
        <li>
          <FriendPreview />
        </li>
      </NavLink>
    </ul>
  )
}

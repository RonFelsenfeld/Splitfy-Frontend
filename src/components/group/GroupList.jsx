import { NavLink } from 'react-router-dom'
import { GroupPreview } from './GroupPreview'

export function GroupList() {
  return (
    <ul className="group-list clean-list">
      <NavLink to="/" className="group-link">
        <li>
          <GroupPreview />
        </li>
      </NavLink>
    </ul>
  )
}

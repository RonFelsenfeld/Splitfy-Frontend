import { NavLink } from 'react-router-dom'
import { GroupPreview } from './GroupPreview'

export function GroupList({ groups }) {
  return (
    <ul className="group-list clean-list">
      {groups.map(group => (
        <NavLink to={`/groups/${group._id}`} key={group._id} className="group-link">
          <li>
            <GroupPreview group={group} />
          </li>
        </NavLink>
      ))}
    </ul>
  )
}

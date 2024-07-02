import { useSelector } from 'react-redux'
import { GroupSelectPreview } from './GroupSelectPreview'

export function GroupSelector({ onSubmit }) {
  const groups = useSelector(store => store.groupModule.groups)

  return (
    <ul className="group-selector clean-list">
      {!!groups.length &&
        groups.map(group => (
          <li key={group._id}>
            <GroupSelectPreview group={group} onPickGroup={onSubmit} />
          </li>
        ))}
    </ul>
  )
}

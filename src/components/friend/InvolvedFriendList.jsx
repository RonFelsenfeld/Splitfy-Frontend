import { InvolvedFriendPreview } from './InvolvedFriendPreivew'

export function InvolvedFriendList({ friends, onRemoveMember }) {
  return (
    <ul className="involved-friend-list clean-list flex wrap">
      {friends.map(friend => (
        <li key={friend._id}>
          <InvolvedFriendPreview friend={friend} onRemoveMember={onRemoveMember} />
        </li>
      ))}
    </ul>
  )
}

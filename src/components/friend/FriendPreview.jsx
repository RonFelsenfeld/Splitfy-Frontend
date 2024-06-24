import { UserIcon } from '../../services/svg.service'

export function FriendPreview({ friend }) {
  return (
    <article className="friend-preview flex align-center">
      <UserIcon />
      <h4 className="friend-name">{friend.fullName}</h4>
    </article>
  )
}

import { UserIcon } from '../../services/svg.service'

export function FriendPreview() {
  return (
    <article className="friend-preview flex align-center">
      <UserIcon />
      <h4 className="friend-name">FRIEND NAME</h4>
    </article>
  )
}

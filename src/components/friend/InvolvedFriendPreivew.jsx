import { utilService } from '../../services/util.service'

export function InvolvedFriendPreview({ friend, onRemoveMember }) {
  return (
    <article className="involved-friend-preview flex align-center">
      <img
        src="/assets/img/general/user-default.png"
        alt="Friend profile picture"
        className="friend-image"
      />

      <h3 className="friend-name">{utilService.getShortenName(friend.fullName)}</h3>

      <button
        className="btn-remove-friend flex align-center justify-center"
        onClick={() => onRemoveMember(friend._id)}
      ></button>
    </article>
  )
}

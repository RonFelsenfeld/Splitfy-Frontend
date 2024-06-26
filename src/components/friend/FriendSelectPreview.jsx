import { useHighlightText } from '../../customHooks/useHighlightText'

export function FriendSelectPreview({ member, memberFilterBy, onSelectMember }) {
  const highlightedName = useHighlightText(memberFilterBy, member.fullName)

  return (
    <article className="friend-select flex align-center" onClick={() => onSelectMember(member._id)}>
      <img
        src="/assets/img/general/user-default.png"
        alt="Friend profile picture"
        className="friend-image"
      />
      <h3 className="friend-name">{highlightedName}</h3>
    </article>
  )
}

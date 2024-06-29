import { useHighlightText } from '../../customHooks/useHighlightText'

export function FriendSelectPreview({ member, memberFilterBy, onSelectMember }) {
  const highlightedName = useHighlightText(memberFilterBy, member.fullName)

  const { _id, imgUrl } = member
  return (
    <article className="friend-select flex align-center" onClick={() => onSelectMember(_id)}>
      <img src={imgUrl} alt="Friend profile picture" className="friend-image" />
      <h3 className="friend-name">{highlightedName}</h3>
    </article>
  )
}

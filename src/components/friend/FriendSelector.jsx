import { FriendSelectPreview } from './FriendSelectPreview'

export function FriendSelector({ friends, expenseToEdit, memberFilterBy, onSelectMember }) {
  const filteredMembers = friends.filter(member => {
    const filterRegex = new RegExp(memberFilterBy, 'i')
    const { involvedMembersIds } = expenseToEdit

    // ! Passes only if matches the filter AND not already included
    return filterRegex.test(member.fullName) && !involvedMembersIds.includes(member._id)
  })

  return (
    <ul className="friend-selector clean-list">
      {!!filteredMembers.length ? (
        filteredMembers.map(member => (
          <li key={member._id}>
            <FriendSelectPreview
              member={member}
              memberFilterBy={memberFilterBy}
              onSelectMember={onSelectMember}
            />
          </li>
        ))
      ) : (
        <p className="friend-select not-found">Members not found</p>
      )}
    </ul>
  )
}

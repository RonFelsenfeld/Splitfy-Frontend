import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

import { groupService } from '../../services/group.service.local'
import { GeneralHeader } from '../general/GeneralHeader'
import { MainLoader } from '../general/MainLoader'

export function FriendDetails() {
  const [friend, setFriend] = useState(null)
  const [group, setGroup] = useState(null)
  const { friendId } = useParams()

  useEffect(() => {
    loadFriendDetails()
  }, [friendId])

  async function loadFriendDetails() {
    try {
      const friend = await groupService.getFriendById(friendId)
      const group = await groupService.getFriendGroup(friendId)
      setFriend(friend)
      setGroup(group)
    } catch (err) {
      console.log('Friend details -> Had issues with loading friend:', err)
    }
  }

  if (!friend || !group) return <MainLoader />

  const { fullName, imgUrl } = friend
  return (
    <section className="friend-details">
      <GeneralHeader
        title={fullName}
        imgUrl={imgUrl}
        editedExpense={groupService.getDefaultExpense(friendId)}
        currentGroup={group}
      />
    </section>
  )
}

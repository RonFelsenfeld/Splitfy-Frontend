import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { groupService } from '../../services/group.service.local'
import { GeneralHeader } from '../general/GeneralHeader'
import { SecondaryLoader } from '../loaders/SecondaryLoader'

export function FriendDetails() {
  const [friend, setFriend] = useState(null)
  const [group, setGroup] = useState(null)
  const { friendId } = useParams()

  useEffect(() => {
    loadFriendDetails()

    return () => {
      setFriend(null)
      setGroup(null)
    }
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

  if (!friend || !group) return <SecondaryLoader />

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

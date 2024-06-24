import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

import { loadGroup } from '../../store/actions/group.actions'
import { AddExpenseBtn } from '../general/AddExpenseBtn'

export function GroupDetails() {
  const group = useSelector(store => store.groupModule.currentGroup)
  const { groupId } = useParams()

  useEffect(() => {
    loadGroup(groupId)
  }, [groupId])

  if (!group) return <div>Loading group...</div>
  return (
    <section className="group-details">
      <header className="group-header flex align-center justify-between">
        <div className="details-container flex align-center">
          <img
            src="/assets/img/group-default.png"
            alt="Group profile image"
            className="group-image"
          />
          <h2 className="group-title">{group.title}</h2>
        </div>

        <AddExpenseBtn />
      </header>
    </section>
  )
}

import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

import { loadGroup } from '../../store/actions/group.actions'
import { AddExpenseBtn } from '../general/AddExpenseBtn'
import { ExpenseList } from '../expense/ExpenseList'
import { EmptyExpenses } from '../general/EmptyExpenses'

export function GroupDetails() {
  const group = useSelector(store => store.groupModule.currentGroup)
  const { groupId } = useParams()

  useEffect(() => {
    loadGroup(groupId)
  }, [groupId])

  if (!group) return <div>Loading group...</div>

  const { expenses } = group
  return (
    <section className="group-details">
      <header className="group-header flex align-center justify-between">
        <div className="details-container flex align-center">
          <img
            src="/assets/img/general/group-default.png"
            alt="Group profile image"
            className="group-image"
          />
          <h2 className="group-title">{group.title}</h2>
        </div>

        <AddExpenseBtn />
      </header>

      {expenses.length ? <ExpenseList expenses={expenses} /> : <EmptyExpenses />}
    </section>
  )
}

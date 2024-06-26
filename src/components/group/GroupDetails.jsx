import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { loadGroup, removeExpense } from '../../store/actions/group.actions'

import { EmptyExpenses } from '../general/EmptyExpenses'
import { ExpenseList } from '../expense/ExpenseList'
import { EditExpenseModal } from '../modals/EditExpenseModal'

export function GroupDetails() {
  const [isAddingExpense, setIsAddingExpense] = useState(true)
  const group = useSelector(store => store.groupModule.currentGroup)
  const { groupId } = useParams()

  useEffect(() => {
    loadGroup(groupId)
  }, [groupId])

  // todo - show user msg
  async function onRemoveExpense(expenseId) {
    try {
      await removeExpense(group, expenseId)
    } catch (err) {
      console.log('Had issues with removing expense:', err)
    }
  }

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

        <button className="btn-add-expense" onClick={() => setIsAddingExpense(true)}>
          Add an expense
        </button>
      </header>

      {expenses.length ? (
        <ExpenseList expenses={expenses} onRemoveExpense={onRemoveExpense} />
      ) : (
        <EmptyExpenses />
      )}

      {isAddingExpense && (
        <EditExpenseModal onCloseModal={() => setIsAddingExpense(false)} group={group} />
      )}
    </section>
  )
}

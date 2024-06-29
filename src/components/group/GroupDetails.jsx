import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

import { groupService } from '../../services/group.service.local'
import { loadGroup, removeExpenseFromGroup } from '../../store/actions/group.actions'

import { EmptyExpenses } from '../general/EmptyExpenses'
import { MainLoader } from '../general/MainLoader'
import { ExpenseList } from '../expense/ExpenseList'
import { EditExpenseModal } from '../modals/EditExpenseModal'

export function GroupDetails() {
  const [expenseToEdit, setExpenseToEdit] = useState(null)
  const group = useSelector(store => store.groupModule.currentGroup)
  const { groupId } = useParams()

  useEffect(() => {
    loadGroup(groupId)
  }, [groupId])

  // todo - show user msg
  async function onRemoveExpense(expenseId) {
    try {
      await removeExpenseFromGroup(group, expenseId)
    } catch (err) {
      console.log('Had issues with removing expense:', err)
    }
  }

  if (!group) return

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

        <button
          className="btn-add-expense"
          onClick={() => setExpenseToEdit(groupService.getDefaultExpense())}
        >
          Add an expense
        </button>
      </header>

      {expenses.length ? (
        <ExpenseList
          expenses={expenses}
          onRemoveExpense={onRemoveExpense}
          setExpenseToEdit={setExpenseToEdit}
        />
      ) : (
        <EmptyExpenses />
      )}

      {expenseToEdit && (
        <EditExpenseModal
          onCloseModal={() => setExpenseToEdit(null)}
          group={group}
          currentExpense={expenseToEdit}
        />
      )}
    </section>
  )
}

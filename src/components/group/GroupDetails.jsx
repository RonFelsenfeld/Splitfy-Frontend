import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'

import { groupService } from '../../services/group.service.local'
import { loadGroup, removeExpenseFromGroup } from '../../store/actions/group.actions'

import { EmptyExpenses } from '../general/EmptyExpenses'
import { GeneralHeader } from '../general/GeneralHeader'
import { ExpenseList } from '../expense/ExpenseList'
import { EditExpenseModal } from '../modals/EditExpenseModal'

export function GroupDetails() {
  const group = useSelector(store => store.groupModule.currentGroup)
  const [expenseToEdit, setExpenseToEdit] = useState(null)
  const { groupId, isAdding } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadGroup(groupId)

    // ! If click on add expense from another route --> automatically setExpenseToEdit

    if (isAdding) {
      setExpenseToEdit(groupService.getDefaultExpense())
      navigate(`/groups/${group._id}`)
    }
  }, [groupId])

  // todo - show user msg
  async function onRemoveExpense(expenseId) {
    try {
      await removeExpenseFromGroup(group, expenseId)
    } catch (err) {
      console.log('Had issues with removing expense:', err)
    }
  }

  // todo add loader
  if (!group) return

  const { expenses, title, imgUrl } = group
  return (
    <section className="group-details">
      <GeneralHeader
        title={title}
        imgUrl={imgUrl}
        editedExpense={groupService.getDefaultExpense()}
        currentGroup={group}
      />

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

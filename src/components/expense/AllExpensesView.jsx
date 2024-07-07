import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { groupService } from '../../services/group.service.local'
import { removeExpenseFromGroup } from '../../store/actions/group.actions'

import { GeneralHeader } from '../general/GeneralHeader'
import { ExpenseList } from './ExpenseList'
import { EditExpenseModal } from '../modals/EditExpenseModal'

export function AllExpensesView() {
  const groups = useSelector(store => store.groupModule.groups)
  const [expenses, setExpenses] = useState([])
  const [expenseToEdit, setExpenseToEdit] = useState(null)
  const [expenseToEditGroup, setExpenseToEditGroup] = useState(null)

  useEffect(() => {
    loadAllExpenses()
  }, [groups])

  function loadAllExpenses() {
    const expenses = groupService.getAllExpensesFromGroups(groups)
    setExpenses(expenses)
  }

  function onSetExpenseToEdit(expense) {
    const group = groups.find(g => g._id === expense.group._id)
    const expenseCopy = { ...expense }
    delete expenseCopy.group

    setExpenseToEdit(expenseCopy)
    setExpenseToEditGroup(group)
  }

  async function onRemoveExpense(ev, expense) {
    ev.preventDefault()
    const { _id, group } = expense

    try {
      const fullGroup = groups.find(g => g._id === group._id)
      await removeExpenseFromGroup(fullGroup, _id)
    } catch (err) {
      console.log('Had issues with removing expense:', err)
    }
  }

  if (!expenses) return <div>Loading...</div>
  return (
    <section className="all-expenses-view">
      <GeneralHeader title="All expenses" />
      <ExpenseList
        expenses={expenses}
        onRemoveExpense={onRemoveExpense}
        setExpenseToEdit={onSetExpenseToEdit}
      />

      {expenseToEdit && (
        <EditExpenseModal
          onCloseModal={() => setExpenseToEdit(null)}
          group={expenseToEditGroup}
          currentExpense={expenseToEdit}
        />
      )}
    </section>
  )
}

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { groupService } from '../../services/group.service.local'
import { loadGroup, removeExpenseFromGroup } from '../../store/actions/group.actions'
import { SET_GROUP } from '../../store/reducers/group.reducer'

import { EmptyExpenses } from '../general/EmptyExpenses'
import { GeneralHeader } from '../general/GeneralHeader'
import { ExpenseList } from '../expense/ExpenseList'
import { EditExpenseModal } from '../modals/EditExpenseModal'
import { SecondaryLoader } from '../loaders/SecondaryLoader'

export function GroupDetails() {
  const group = useSelector(store => store.groupModule.currentGroup)
  const [expenseToEdit, setExpenseToEdit] = useState(null)

  const { groupId, isAdding } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    loadGroup(groupId)

    // ! If click on add expense from another route --> automatically setExpenseToEdit
    if (isAdding) {
      setExpenseToEdit(groupService.getDefaultExpense())
      navigate(`/groups/${groupId}`)
    }

    return () => dispatch({ type: SET_GROUP, group: null })
  }, [groupId])

  // todo - show user msg
  async function onRemoveExpense(ev, { _id }) {
    ev.preventDefault()
    try {
      await removeExpenseFromGroup(group, _id)
    } catch (err) {
      console.log('Had issues with removing expense:', err)
    }
  }

  if (!group) return <SecondaryLoader />

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

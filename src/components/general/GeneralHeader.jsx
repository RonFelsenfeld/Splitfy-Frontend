import { useState } from 'react'
import { useNavigate } from 'react-router'

import { hideDynamicModal, showDynamicModal } from '../../store/actions/system.actions'
import { EditExpenseModal } from '../modals/EditExpenseModal'

export function GeneralHeader({
  title,
  imgUrl,
  editedExpense,
  currentGroup,
  showAddExpenseBtn = true,
}) {
  const [expenseToEdit, setExpenseToEdit] = useState(null)
  const [group, setGroup] = useState(currentGroup)
  const navigate = useNavigate()

  // ! When on dashboard/all expenses sections - there is no group
  function handleAddExpenseClick() {
    if (group) {
      setExpenseToEdit(editedExpense)
    } else {
      handleAddExpenseWithoutGroup()
    }
  }

  // ! Showing group selector modal and navigating to it's route when user picked
  function handleAddExpenseWithoutGroup() {
    const cmpOptions = {
      type: 'groupSelector',
      title: 'Choose group',
      onSubmit: group => {
        setGroup(group)
        hideDynamicModal()
        navigate(`/groups/${group._id}/add`)
      },
    }
    showDynamicModal(cmpOptions, true)
  }

  return (
    <>
      <header className="general-header flex align-center justify-between">
        <div className="details-container flex align-center">
          {imgUrl && <img src={imgUrl} alt="Profile image" className="header-image" />}

          <h2 className="header-title">{title}</h2>
        </div>

        {showAddExpenseBtn && (
          <button className="btn-add-expense" onClick={handleAddExpenseClick}>
            Add an expense
          </button>
        )}
      </header>

      {expenseToEdit && (
        <EditExpenseModal
          onCloseModal={() => setExpenseToEdit(null)}
          group={group}
          currentExpense={expenseToEdit}
        />
      )}
    </>
  )
}

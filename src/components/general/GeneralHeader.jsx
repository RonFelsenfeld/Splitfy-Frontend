import { useState } from 'react'
import { EditExpenseModal } from '../modals/EditExpenseModal'

export function GeneralHeader({ title, imgUrl, editedExpense, group }) {
  const [expenseToEdit, setExpenseToEdit] = useState(null)

  return (
    <>
      <header className="general-header flex align-center justify-between">
        <div className="details-container flex align-center">
          {imgUrl && <img src={imgUrl} alt="Profile image" className="header-image" />}

          <h2 className="header-title">{title}</h2>
        </div>

        <button className="btn-add-expense" onClick={() => setExpenseToEdit(editedExpense)}>
          Add an expense
        </button>
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

import { useRef, useState } from 'react'

import { useClickOutside } from '../../customHooks/useClickOutside'
import { groupService } from '../../services/group.service.local'
import { saveGroup } from '../../store/actions/group.actions'

export function EditExpenseModal({ onCloseModal, group }) {
  const [expenseToEdit, setExpenseToEdit] = useState(groupService.getEmptyExpense())
  const modalRef = useRef()

  useClickOutside(modalRef, onCloseModal)

  function handleChange({ target }) {
    let { value, name: field, type } = target

    if (type === 'number') value = +value || 0

    setExpenseToEdit(prevExpenseToEdit => ({
      ...prevExpenseToEdit,
      [field]: value,
    }))
  }

  // todo - show user msg
  async function onSaveExpense() {
    console.log(expenseToEdit)
    // group.expenses.push(expenseToEdit)

    // try {
    //   await saveGroup(group)
    // } catch (err) {
    //   console.log('Had issues with saving expense:', err)
    // } finally {
    //   onCloseModal()
    // }
  }

  return (
    <>
      <div className="modal-backdrop"></div>

      <section className="edit-expense-modal" ref={modalRef}>
        <header className="modal-header flex align-center justify-between">
          <h1 className="modal-title">Add an expense</h1>
          <button className="btn-close-modal" onClick={onCloseModal}></button>
        </header>

        <div className="with-field flex align-center">
          <p className="with-msg">
            With <span>you</span> and:
          </p>

          <div className="input-container">
            <input
              type="text"
              className="members-input"
              placeholder="Enter member name"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="description-field flex column align-center">
          <div className="main-details-container flex">
            <img
              src="/assets/img/expense-icons/uncategorized.png"
              alt="Expense icon"
              className="expense-img"
            />

            <div className="inputs-container">
              <input
                type="text"
                name="title"
                className="description-input"
                placeholder="Enter a description"
                onChange={handleChange}
                value={expenseToEdit.title}
              />

              <div className="amount-input-container flex">
                <span className="ILS-icon">&#8362;</span>

                <input
                  type="number"
                  name="amount"
                  className="amount-input"
                  placeholder="0.00"
                  onChange={handleChange}
                  value={expenseToEdit.amount || ''}
                />
              </div>
            </div>
          </div>

          <div className="distribution-field">
            <p className="distribution-action">
              Paid by &nbsp;
              <button className="btn-distribution">you</button>
              &nbsp; and split &nbsp;
              <button className="btn-distribution">equally</button>.
            </p>

            <p className="distribution-msg">(Distribution MSG)</p>
          </div>

          <div className="actions-field flex">
            <button className="btn-action">DATE</button>
            <button className="btn-action">Add notes</button>
          </div>
        </div>

        <footer className="modal-footer flex">
          <button className="btn btn-cancel" onClick={onCloseModal}>
            Cancel
          </button>
          <button className="btn btn-save" onClick={onSaveExpense}>
            Save
          </button>
        </footer>
      </section>
    </>
  )
}

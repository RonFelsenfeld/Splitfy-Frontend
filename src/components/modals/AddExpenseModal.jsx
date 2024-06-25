import { useRef } from 'react'
import { useClickOutside } from '../../customHooks/useClickOutside'

export function AddExpenseModal({ onCloseModal }) {
  const modalRef = useRef()

  useClickOutside(modalRef, onCloseModal)
  function handleChange(ev) {}

  return (
    <>
      <div className="modal-backdrop"></div>

      <section className="add-expense-modal" ref={modalRef}>
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
                className="description-input"
                placeholder="Enter a description"
                onChange={handleChange}
              />

              <div className="amount-input-container flex">
                <span className="ILS-icon">&#8362;</span>

                <input
                  type="number"
                  className="amount-input"
                  placeholder="0.00"
                  onChange={handleChange}
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
          <button className="btn btn-cancel">Cancel</button>
          <button className="btn btn-save">Save</button>
        </footer>
      </section>
    </>
  )
}

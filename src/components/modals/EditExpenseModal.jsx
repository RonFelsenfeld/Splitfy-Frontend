import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { groupService } from '../../services/group.service.local'
import { utilService } from '../../services/util.service'

import { useClickOutside } from '../../customHooks/useClickOutside'
import { useForm } from '../../customHooks/useForm'
import { addExpenseToGroup } from '../../store/actions/group.actions'
import { hideDynamicModal, showDynamicModal } from '../../store/actions/system.actions'

import { FriendSelector } from '../friend/FriendSelector'
import { InvolvedFriendList } from '../friend/InvolvedFriendList'

export function EditExpenseModal({ onCloseModal, group, currentExpense }) {
  const modal = useSelector(store => store.systemModule.modal)
  const [expenseToEdit, handleChange, setExpenseToEdit] = useForm(currentExpense)
  const [memberFilterBy, setMemberFilterBy] = useState('')
  const backdropRef = useRef()
  const modalRef = useRef()

  useClickOutside(modalRef, closeModal)

  function closeModal() {
    utilService.animateCSS(modalRef.current, 'fadeOut')

    setTimeout(() => {
      utilService.animateCSS(backdropRef.current, 'fadeOut')
    }, 300)

    setTimeout(() => {
      onCloseModal()
    }, 600)
  }

  function onSetMemberFilterBy({ target }) {
    setMemberFilterBy(target.value)
  }

  function onSelectMember(memberId) {
    setExpenseToEdit(prevExpense => ({
      ...prevExpense,
      involvedMembersIds: [...prevExpense.involvedMembersIds, memberId],
    }))
    setMemberFilterBy('')
  }

  function onRemoveMember(memberId) {
    const { involvedMembersIds } = expenseToEdit

    setExpenseToEdit(prevExpense => ({
      ...prevExpense,
      involvedMembersIds: involvedMembersIds.filter(id => id !== memberId),
    }))
  }

  function onDatePickerClick() {
    const cmpOptions = {
      type: 'datePicker',
      title: 'Choose date',
      currentDate: expenseToEdit.at,
      onSubmit: date => setExpenseToEdit(prevExpense => ({ ...prevExpense, at: date })),
    }
    showDynamicModal(cmpOptions)
  }

  function onNotesFieldClick() {
    const cmpOptions = {
      type: 'notesField',
      title: 'Add notes',
      onSubmit: notes => setExpenseToEdit(prevExpense => ({ ...prevExpense, notes })),
    }
    showDynamicModal(cmpOptions)
  }

  // todo - show user msg
  async function onSaveExpense() {
    const { involvedMembersIds, title, amount } = expenseToEdit
    if (!involvedMembersIds.length || !title || !amount) {
      return alert('Must enter all details')
    }

    try {
      await addExpenseToGroup(group, expenseToEdit)
    } catch (err) {
      console.log('Had issues with saving expense:', err)
    } finally {
      closeModal()
    }
  }

  const { title, amount, involvedMembersIds, at } = expenseToEdit
  const { isOpen } = modal

  return (
    <>
      <div ref={backdropRef} className="modal-backdrop"></div>

      <section
        className={`edit-expense-modal animate__animated animate__fadeIn ${
          isOpen ? 'dynamic-modal-open' : ''
        }`}
        ref={modalRef}
      >
        <header className="modal-header flex align-center justify-between">
          <h1 className="modal-title">Add an expense</h1>
          <button className="btn-close-modal" onClick={closeModal}></button>
        </header>

        <div className="with-field flex">
          <p className="with-msg">
            With <span>you</span> and:
          </p>

          <div className="input-container flex align-center wrap">
            {!!involvedMembersIds.length && (
              <InvolvedFriendList
                friends={groupService.getMembersFullDetails(group, involvedMembersIds)}
                onRemoveMember={onRemoveMember}
              />
            )}

            <input
              type="text"
              className="members-input"
              placeholder="Enter member name"
              onChange={onSetMemberFilterBy}
              value={memberFilterBy}
            />

            {memberFilterBy && (
              <FriendSelector
                friends={group.members}
                expenseToEdit={expenseToEdit}
                memberFilterBy={memberFilterBy}
                onSelectMember={onSelectMember}
              />
            )}
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
                value={title}
              />

              <div className="amount-input-container flex">
                <span className="ILS-icon">&#8362;</span>

                <input
                  type="number"
                  name="amount"
                  className="amount-input"
                  placeholder="0.00"
                  onChange={handleChange}
                  value={amount || ''}
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

            <p className="distribution-msg">
              {`(${groupService.getExpenseDistribution(expenseToEdit)}/person`}
            </p>
          </div>

          <div className="actions-field flex">
            <button className="btn-action" onClick={onDatePickerClick}>
              {utilService.getFormattedTimeStr(at)}
            </button>
            <button className="btn-action" onClick={onNotesFieldClick}>
              Add notes
            </button>
          </div>
        </div>

        <footer className="modal-footer flex">
          <button className="btn btn-cancel" onClick={closeModal}>
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

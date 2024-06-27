import { useRef, useState } from 'react'

import { groupService } from '../../services/group.service.local'
import { utilService } from '../../services/util.service'

import { useClickOutside } from '../../customHooks/useClickOutside'
import { useForm } from '../../customHooks/useForm'
import { showModal } from '../../store/actions/system.actions'

import { FriendSelector } from '../friend/FriendSelector'
import { InvolvedFriendList } from '../friend/InvolvedFriendList'
import { DynamicModal } from './DynamicModal'

export function EditExpenseModal({ onCloseModal, group }) {
  const [expenseToEdit, handleChange, setExpenseToEdit] = useForm(groupService.getDefaultExpense())
  const [memberFilterBy, setMemberFilterBy] = useState('')
  const modalRef = useRef()

  useClickOutside(modalRef, onCloseModal)

  function onSetMemberFilterBy({ target }) {
    setMemberFilterBy(target.value)
  }

  function onSelectMember(memberId) {
    setExpenseToEdit(prevExpense => ({
      ...prevExpense,
      membersInvolvedIds: [...prevExpense.membersInvolvedIds, memberId],
    }))
    setMemberFilterBy('')
  }

  function onRemoveMember(memberId) {
    const { membersInvolvedIds } = expenseToEdit

    setExpenseToEdit(prevExpense => ({
      ...prevExpense,
      membersInvolvedIds: membersInvolvedIds.filter(id => id !== memberId),
    }))
  }

  function onDatePickerClick() {
    const cmpOptions = {
      type: 'datePicker',
      title: 'Choose date',
      currentDate: expenseToEdit.at,
      onSubmit: date => setExpenseToEdit(prevExpense => ({ ...prevExpense, at: date })),
    }
    showModal(cmpOptions)
  }

  function onNotesFieldClick() {
    const cmpOptions = {
      type: 'notesField',
      title: 'Add notes',
      onSubmit: notes => setExpenseToEdit(prevExpense => ({ ...prevExpense, notes })),
    }
    showModal(cmpOptions)
  }

  // todo - show user msg
  async function onSaveExpense() {
    const { membersInvolvedIds, title, amount } = expenseToEdit
    if (!membersInvolvedIds.length) return alert('Must have at least one member (expect you)')
    if (!title) return alert('Must enter title')
    if (!amount) return alert('Must enter amount')
    // group.expenses.push(expenseToEdit)

    // try {
    //   await saveGroup(group)
    // } catch (err) {
    //   console.log('Had issues with saving expense:', err)
    // } finally {
    //   onCloseModal()
    // }
  }

  const { title, amount, membersInvolvedIds, at } = expenseToEdit
  return (
    <>
      <div className="modal-backdrop"></div>

      <section className="edit-expense-modal" ref={modalRef}>
        <header className="modal-header flex align-center justify-between">
          <h1 className="modal-title">Add an expense</h1>
          <button className="btn-close-modal" onClick={onCloseModal}></button>
        </header>

        <div className="with-field flex">
          <p className="with-msg">
            With <span>you</span> and:
          </p>

          <div className="input-container flex align-center wrap">
            {!!membersInvolvedIds.length && (
              <InvolvedFriendList
                friends={groupService.getMembersFullDetails(group, membersInvolvedIds)}
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
          <button className="btn btn-cancel" onClick={onCloseModal}>
            Cancel
          </button>
          <button className="btn btn-save" onClick={onSaveExpense}>
            Save
          </button>
        </footer>

        <DynamicModal />
      </section>
    </>
  )
}

import { useRef, useState } from 'react'

import { useClickOutside } from '../../customHooks/useClickOutside'
import { groupService } from '../../services/group.service.local'
import { saveGroup } from '../../store/actions/group.actions'
import { FriendSelector } from '../friend/FriendSelector'
import { InvolvedFriendList } from '../friend/InvolvedFriendList'

export function EditExpenseModal({ onCloseModal, group }) {
  const [expenseToEdit, setExpenseToEdit] = useState(groupService.getDefaultExpense(group))
  const [memberFilterBy, setMemberFilterBy] = useState('')
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

  function onSetMemberFilterBy({ target }) {
    setMemberFilterBy(target.value)
  }

  function onSelectMember(memberId) {
    setExpenseToEdit(prevExpenseToEdit => ({
      ...prevExpenseToEdit,
      membersInvolvedIds: [...prevExpenseToEdit.membersInvolvedIds, memberId],
    }))
    setMemberFilterBy('')
  }

  function onRemoveMember(memberId) {
    const { membersInvolvedIds } = expenseToEdit

    setExpenseToEdit(prevExpenseToEdit => ({
      ...prevExpenseToEdit,
      membersInvolvedIds: membersInvolvedIds.filter(id => id !== memberId),
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

  function getInvolvedMembersFullDetails() {
    const { membersInvolvedIds } = expenseToEdit

    return membersInvolvedIds.map(memberId => {
      const fullMember = group.members.find(m => m._id === memberId)
      return fullMember
    })
  }

  const { membersInvolvedIds } = expenseToEdit

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
                friends={getInvolvedMembersFullDetails()}
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

import { useState } from 'react'
import { utilService } from '../../services/util.service'
import { ExpenseDetails } from './ExpenseDetails'

export function ExpensePreview({ expense, onRemoveExpense, setExpenseToEdit }) {
  const [isDetailsShown, setIsDetailsShown] = useState(false)

  function onToggleDetails() {
    setIsDetailsShown(prevIsShown => !prevIsShown)
  }

  function onEditExpense() {
    setExpenseToEdit(expense)
  }

  function getFormattedDebtDistribution() {
    const { amount, involvedMembersIds } = expense

    // ! Dividing by the involved members + 1 (the paying one)
    const totalPerMember = (amount / (involvedMembersIds.length + 1)).toFixed(2)

    return utilService.getFormattedCurrency(totalPerMember)
  }

  const { title, at, paidBy, amount } = expense
  return (
    <>
      <article className="expense-preview" onClick={onToggleDetails}>
        <div className="expense-date flex column align-center">
          <span className="month">{utilService.getMonthFromTimestamp(at)}</span>
          <span className="date">{utilService.getDateFromTimestamp(at)}</span>
        </div>

        <img
          src="/assets/img/expense-icons/uncategorized.png"
          alt="Expense icon"
          className="expense-icon"
        />

        <h3 className="expense-title">{title}</h3>

        {paidBy && <p className="paid-desc">{utilService.getShortenName(paidBy.fullName)} paid</p>}

        <span className="paid-amount">{utilService.getFormattedCurrency(amount)}</span>

        <p className="lent-desc">SOMEONE lent</p>
        <span className="lent-amount">{getFormattedDebtDistribution()}</span>

        <button
          className="btn-remove-expense"
          onClick={() => onRemoveExpense(expense._id)}
        ></button>
      </article>
      <ExpenseDetails
        expense={expense}
        isDetailsShown={isDetailsShown}
        onEditExpense={onEditExpense}
      />
    </>
  )
}

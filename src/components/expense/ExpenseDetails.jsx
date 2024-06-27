import { utilService } from '../../services/util.service'

export function ExpenseDetails({ expense, isDetailsShown, onEditExpense }) {
  const { title, amount, createdAt, lastUpdated } = expense

  return (
    <section className={`expense-details ${isDetailsShown ? 'open' : ''}`}>
      <header className="details-header flex">
        <img
          src="/assets/img/expense-icons/uncategorized.png"
          alt="Expense icon"
          className="expense-icon"
        />

        <div>
          <h3 className="expense-title">{title}</h3>
          <h3 className="expense-amount">{utilService.getFormattedCurrency(amount)}</h3>

          <h4 className="expense-time">{`Added on ${utilService.getFormattedTimeStr(
            createdAt
          )}`}</h4>
          <h4 className="expense-time">{`Last updated on ${utilService.getFormattedTimeStr(
            lastUpdated
          )}`}</h4>

          <button className="btn-edit-expense" onClick={onEditExpense}>
            Edit expense
          </button>
        </div>
      </header>
    </section>
  )
}

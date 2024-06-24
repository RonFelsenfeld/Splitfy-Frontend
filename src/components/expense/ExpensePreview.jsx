export function ExpensePreview({ expense }) {
  return (
    <article className="expense-preview">
      <div className="expense-date">19</div>
      <img
        src="/assets/img/expense-icons/uncategorized.png"
        alt="Expense icon"
        className="expense-icon"
      />

      <h3 className="expense-title">TITLE</h3>

      <p className="paid-desc">SOMEONE paid</p>
      <span className="paid-amount ">50</span>

      <p className="lent-desc">SOMEONE lent</p>
      <span className="lent-amount ">25</span>

      <button className="btn-remove-expense"></button>
    </article>
  )
}

export function EmptyExpenses() {
  return (
    <section className="empty-expenses flex">
      <img
        src="/assets/img/general/empty-expenses.png"
        alt="Cartoon character"
        className="no-expense-image"
      />

      <div>
        <h1 className="no-expense-title">You have not added any expenses yet</h1>
        <p className="no-expenses-desc">
          To add a new expense, click the orange “Add an expense” button.
        </p>
      </div>
    </section>
  )
}

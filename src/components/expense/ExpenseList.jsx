import { ExpensePreview } from './ExpensePreview'

export function ExpenseList({ expenses, onRemoveExpense }) {
  return (
    <ul className="expense-list clean-list">
      {expenses.map(expense => (
        <li key={expense._id}>
          <ExpensePreview expense={expense} onRemoveExpense={onRemoveExpense} />
        </li>
      ))}
    </ul>
  )
}

import { ExpensePreview } from './ExpensePreview'

export function ExpenseList({ expenses }) {
  return (
    <ul className="expense-list clean-list">
      {expenses.map(expense => (
        <li key={expense._id}>
          <ExpensePreview expense={expense} />
        </li>
      ))}
    </ul>
  )
}

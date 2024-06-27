import { useState } from 'react'

export function DatePicker({ onSubmit }) {
  const [date, setDate] = useState(null)

  return <section className="date-picker">Hello from DatePicker</section>
}

import { useState } from 'react'
import { hideModal } from '../../store/actions/system.actions'

export function NotesField({ onSubmit }) {
  const [notes, setNotes] = useState('')

  function handleChange({ target }) {
    setNotes(target.value)
  }

  function onSaveNotes() {
    onSubmit(notes)
    hideModal()
  }

  return (
    <section className="notes-field flex column">
      <textarea
        name="notes"
        id="notes"
        placeholder="Add notes"
        onChange={handleChange}
        value={notes}
      ></textarea>

      <button className="btn-save-notes" onClick={onSaveNotes}>
        Done
      </button>
    </section>
  )
}

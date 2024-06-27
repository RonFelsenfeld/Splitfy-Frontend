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
      <div className="textarea-container">
        <textarea
          name="notes"
          id="notes"
          placeholder="Add notes"
          onChange={handleChange}
          value={notes}
        ></textarea>
      </div>

      <button className="btn-save-notes" onClick={onSaveNotes}>
        Done
      </button>
    </section>
  )
}

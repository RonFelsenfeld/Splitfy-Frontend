import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { hideModal } from '../../store/actions/system.actions'

export function DatePickerField({ currentDate, onSubmit }) {
  function onDatePick(date) {
    onSubmit(date.getTime())
    hideModal()
  }

  return (
    <section className="date-picker-field">
      <DatePicker selected={currentDate} onChange={onDatePick} inline />
    </section>
  )
}

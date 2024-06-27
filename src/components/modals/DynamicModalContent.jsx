import { DatePickerField } from '../general/DatePickerField'
import { NotesField } from '../general/NotesField'

export function DynamicModalContent(cmp) {
  switch (cmp.type) {
    case 'datePicker':
      return <DatePickerField {...cmp} />

    case 'notesField':
      return <NotesField {...cmp} />
  }
}

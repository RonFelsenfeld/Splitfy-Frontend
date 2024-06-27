import { DatePicker } from '../general/DatePicker'
import { NotesField } from '../general/NotesField'

export function DynamicModalContent(cmp) {
  switch (cmp.type) {
    case 'datePicker':
      return <DatePicker {...cmp} />

    case 'notesField':
      return <NotesField {...cmp} />
  }
}

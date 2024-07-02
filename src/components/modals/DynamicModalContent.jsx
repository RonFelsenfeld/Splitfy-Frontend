import { DatePickerField } from '../general/DatePickerField'
import { NotesField } from '../general/NotesField'
import { GroupSelector } from '../group/GroupSelector'

export function DynamicModalContent(cmp) {
  switch (cmp.type) {
    case 'datePicker':
      return <DatePickerField {...cmp} />

    case 'notesField':
      return <NotesField {...cmp} />

    case 'groupSelector':
      return <GroupSelector {...cmp} />
  }
}

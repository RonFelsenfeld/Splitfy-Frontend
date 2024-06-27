import { SHOW_MODAL, HIDE_MODAL } from '../reducers/system.reducer'
import { store } from '../store'

export function showModal(cmp) {
  store.dispatch({
    type: SHOW_MODAL,
    modal: { isOpen: true, cmp },
  })
}

export function hideModal() {
  store.dispatch({ type: HIDE_MODAL })
}

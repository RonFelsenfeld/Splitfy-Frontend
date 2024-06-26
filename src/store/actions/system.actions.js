import { SHOW_MODAL, HIDE_MODAL } from '../reducers/system.reducer'
import { store } from '../store'

export function showModal(cmp, title) {
  store.dispatch({
    type: SHOW_MODAL,
    modal: { isOpen: true, cmp, title },
  })
}

export function hideModal() {
  store.dispatch({ type: HIDE_MODAL })
}

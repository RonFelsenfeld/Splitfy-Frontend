import { SHOW_MODAL, HIDE_MODAL, SET_IS_LOADING } from '../reducers/system.reducer'
import { store } from '../store'

export function setIsLoading(isLoading) {
  store.dispatch({ type: SET_IS_LOADING, isLoading })
}

export function showDynamicModal(cmp, isCentered = false) {
  store.dispatch({
    type: SHOW_MODAL,
    modal: { isOpen: true, cmp, isCentered },
  })
}

export function hideDynamicModal() {
  store.dispatch({ type: HIDE_MODAL })
}

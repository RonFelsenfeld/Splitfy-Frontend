export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

const initialState = {
  isLoading: false,
  modal: {
    isOpen: false,
    cmp: null,
  },
}

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }

    case SHOW_MODAL:
      return {
        ...state,
        modal: { ...action.modal },
      }

    case HIDE_MODAL:
      return {
        ...state,
        modal: { isOpen: false, cmp: null },
      }

    default:
      return state
  }
}

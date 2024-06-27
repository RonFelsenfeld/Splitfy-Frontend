export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

const initialState = {
  modal: {
    isOpen: false,
    cmp: null,
  },
}

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
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

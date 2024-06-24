export const SET_GROUPS = 'SET_GROUPS'
export const SET_GROUP = 'SET_GROUP'
export const ADD_GROUP = 'ADD_GROUP'
export const REMOVE_GROUP = 'REMOVE_GROUP'
export const EDIT_GROUP = 'EDIT_GROUP'

const initialState = {
  groups: [],
  currentGroup: null,
}

export function groupReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_GROUPS:
      return {
        ...state,
        groups: action.groups,
      }

    case SET_GROUP:
      return {
        ...state,
        currentGroup: action.group,
      }

    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.group],
      }

    case REMOVE_GROUP:
      return {
        ...state,
        groups: state.groups.filter(g => g._id !== action.groupId),
      }

    case EDIT_GROUP:
      const { group } = action
      return {
        ...state,
        groups: state.groups.map(g => (g._id === group._id ? group : g)),
      }

    default:
      return state
  }
}

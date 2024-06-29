import { groupService } from '../../services/group.service.local'
import { utilService } from '../../services/util.service'
import {
  ADD_GROUP,
  EDIT_GROUP,
  REMOVE_GROUP,
  SET_GROUP,
  SET_GROUPS,
} from '../reducers/group.reducer'
import { store } from '../store'
import { setIsLoading } from './system.actions'

export async function loadGroups() {
  setIsLoading(true)
  try {
    const groups = await groupService.query()
    store.dispatch({ type: SET_GROUPS, groups })
  } catch (err) {
    console.log('GROUP ACTIONS -> Had issues with loading groups:', err)
    throw err
  } finally {
    setIsLoading(false)
  }
}

export async function loadGroup(groupId) {
  try {
    const group = await groupService.getById(groupId)
    store.dispatch({ type: SET_GROUP, group })
  } catch (err) {
    console.log('GROUP ACTIONS -> Had issues with loading group:', err)
    throw err
  }
}

export async function removeGroup(groupId) {
  try {
    await groupService.remove(groupId)
    store.dispatch({ type: REMOVE_GROUP, groupId })
  } catch (err) {
    console.log('GROUP ACTIONS -> Had issues with removing group:', err)
    throw err
  }
}

export async function saveGroup(group) {
  const type = group._id ? EDIT_GROUP : ADD_GROUP
  try {
    const savedGroup = await groupService.save(group)
    store.dispatch({ type, group: savedGroup })
  } catch (err) {
    console.log('GROUP ACTIONS -> Had issues with saving group:', err)
    throw err
  }
}

export async function removeExpenseFromGroup(group, expenseId) {
  try {
    const savedGroup = await groupService.removeExpense(group, expenseId)
    store.dispatch({ type: EDIT_GROUP, group: savedGroup })
    return savedGroup
  } catch (err) {
    console.log('GROUP ACTIONS -> Had issues with removing expense:', err)
    throw err
  }
}

export async function addExpenseToGroup(group, expense) {
  try {
    const savedGroup = await groupService.saveExpense(group, expense)
    store.dispatch({ type: EDIT_GROUP, group: savedGroup })
    return savedGroup
  } catch (err) {
    console.log('GROUP ACTIONS -> Had issues with saving expense:', err)
    throw err
  }
}

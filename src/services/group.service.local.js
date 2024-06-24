import { storageService } from './async-storage.service'
import { utilService } from './util.service'

const GROUPS_KEY = 'groupDB'
_createDemoGroups()

export const groupService = {
  query,
  getById,
  remove,
  save,
  getEmptyGroup,
  getEmptyExpense,
}

async function query() {
  try {
    const groups = await storageService.query(GROUPS_KEY)
    return groups
  } catch (err) {
    console.log('Query -> Had issues querying groups', err)
    throw new Error(err)
  }
}

async function getById(groupId) {
  const group = await storageService.get(GROUPS_KEY, groupId)
  return group
}

function remove(groupId) {
  return storageService.remove(GROUPS_KEY, groupId)
}

function save(group) {
  if (group._id) {
    return storageService.put(GROUPS_KEY, group)
  } else {
    return storageService.post(GROUPS_KEY, group)
  }
}

////////////////////////////////////////////////////

function getEmptyGroup() {
  return {
    title: '',
    imgUrl: null,
    members: [],
    expenses: [],
    activities: [],
  }
}

function getEmptyExpense() {
  return {
    title: '',
    amount: 0,
    at: null,
    paidBy: null,
    membersInvolvedIds: [],
    notes: [],
  }
}

////////////////////////////////////////////////////

// * -------------------- DEMO DATA --------------------

function _createDemoGroups() {
  let groups = utilService.loadFromStorage(GROUPS_KEY)

  if (!groups || !groups.length) {
    groups = []

    const group1 = _createDemoGroup('Familia')
    const group2 = _createDemoGroup('The Squad')
    const group3 = _createDemoGroup('Microsoft Fullstack Office')

    groups = [group1, group2, group3]
    utilService.saveToStorage(GROUPS_KEY, groups)
  }
}

function _createDemoGroup(title) {
  const group = getEmptyGroup()

  group._id = utilService.makeId()
  group.title = title
  group.members = _generateGroupMembers(title)
  group.expenses = _generateDemoExpenses(group)

  return group
}

function _generateDemoExpenses({ title, members }) {
  const lowercasedGroupTitle = title.toLowerCase().replaceAll(' ', '')
  const expensesPerGroupMap = {
    familia: [
      'Grocery Shopping',
      'Family Dinner',
      'New Refrigerator',
      'Utility Bill',
      'Weekend Getaway',
      'School Supplies',
      'Home Repairs',
      'Internet Bill',
      'Gas Bill',
      'Movie Night',
    ],
    thesquad: [
      'Concert Tickets',
      'Beach Trip',
      'Birthday Party',
      'Road Trip',
      'Barbecue Party',
      'Group Dinner',
      'Escape Room',
      'Camping Trip',
      'Game Night',
      'Coffee Meetup',
    ],
    microsoftfullstackoffice: [
      'Team Lunch',
      'Office Supplies',
      'Software Licenses',
      'Conference Tickets',
      'Team Building Activity',
      'Client Meeting Lunch',
      'Office Party',
      'Remote Work Equipment',
      'Coffee for Office',
      'Business Travel Expenses',
    ],
  }
  const expenses = expensesPerGroupMap[lowercasedGroupTitle]

  const fullExpenses = expenses.map(expense => {
    const newExpense = _generateDemoExpense(expense, members)
    return newExpense
  })

  return fullExpenses
}

function _generateDemoExpense(expense, members) {
  const newExpense = getEmptyExpense()

  newExpense.title = expense
  newExpense.amount = utilService.getRandomIntInclusive(10, 250)

  // ! Generating random paying member
  const rndMember = members[utilService.getRandomIntInclusive(0, members.length - 1)]
  newExpense.paidBy = rndMember

  // ! Generating random involved members ids
  const rndInvolvedMembers = members.filter(member => {
    if (member._id !== rndMember._id && Math.random() > 0.5) return member
  })

  // ! Insure that there is at least one involved member
  if (!rndInvolvedMembers.length) {
    const rndInvolvedMember = members.find(m => m._id !== rndMember._id)
    rndInvolvedMembers.push(rndInvolvedMember)
  }

  newExpense.involvedMembersIds = rndInvolvedMembers.map(m => m._id)

  // ! Generating random timestamp
  newExpense.at = utilService.getRandomTimestampLastMonth()

  return newExpense
}

function _generateGroupMembers(group) {
  switch (group) {
    case 'Familia':
      return [
        { _id: utilService.makeId(), fullName: 'Avi Cohen', imgUrl: null },
        { _id: utilService.makeId(), fullName: 'Mor Cohen', imgUrl: null },
        { _id: utilService.makeId(), fullName: 'Daniel Cohen', imgUrl: null },
        { _id: utilService.makeId(), fullName: 'Yotam Cohen', imgUrl: null },
      ]

    case 'The Squad':
      return [
        { _id: utilService.makeId(), fullName: 'Bar Levi', imgUrl: null },
        { _id: utilService.makeId(), fullName: 'Moshe Shaked', imgUrl: null },
        { _id: utilService.makeId(), fullName: 'Ori Lahav', imgUrl: null },
        { _id: utilService.makeId(), fullName: 'Ron Aran', imgUrl: null },
      ]

    case 'Microsoft Fullstack Office':
      return [
        { _id: utilService.makeId(), fullName: 'Limor Bar', imgUrl: null },
        { i_idd: utilService.makeId(), fullName: 'Assaf Hollander', imgUrl: null },
        { _id: utilService.makeId(), fullName: 'Michael Yerushalmi', imgUrl: null },
        { _id: utilService.makeId(), fullName: 'Shilat Brudo', imgUrl: null },
      ]

    default:
      return
  }
}

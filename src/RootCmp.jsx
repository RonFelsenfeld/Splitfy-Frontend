import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { store } from './store/store'

import { WorkspaceIndex } from './pages/WorkspaceIndex'

import { AppHeader } from './components/general/AppHeader'
import { Dashboard } from './components/general/Dashboard'
import { GroupDetails } from './components/group/GroupDetails'
import { FriendDetails } from './components/friend/FriendDetails'
import { DynamicModal } from './components/modals/DynamicModal'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <AppHeader />

          <main className="main-layout">
            <Routes>
              <Route element={<WorkspaceIndex />} path="/">
                <Route element={<Dashboard />} path="/dashboard" />
                <Route element={<GroupDetails />} path="/groups/:groupId/:isAdding?" />
                <Route element={<FriendDetails />} path="/friends/:friendId" />
              </Route>
            </Routes>
          </main>

          <DynamicModal />
        </section>
      </Router>
    </Provider>
  )
}

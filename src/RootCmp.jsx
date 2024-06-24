import { Provider, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { store } from './store/store'

import { AppHeader } from './components/general/AppHeader'
import { WorkspaceIndex } from './assets/style/pages/WorkspaceIndex'
import { GroupDetails } from './components/group/GroupDetails'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <AppHeader />

          <main className="main-layout">
            <Routes>
              <Route element={<WorkspaceIndex />} path="/">
                <Route element={<GroupDetails />} path="/groups/:groupId" />
              </Route>
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  )
}

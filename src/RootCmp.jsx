import { Provider, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { store } from './store/store'

import { AppHeader } from './components/general/AppHeader'
import { WorkspaceIndex } from './components/general/WorkspaceIndex'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <AppHeader />

          <main className="main-layout">
            <Routes>
              <Route element={<WorkspaceIndex />} path="/" />
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  )
}

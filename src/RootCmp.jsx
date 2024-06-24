import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AppHeader } from './components/general/AppHeader'
import { WorkspaceIndex } from './components/general/WorkspaceIndex'

export function App() {
  return (
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
  )
}

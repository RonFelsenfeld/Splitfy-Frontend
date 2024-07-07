import { GeneralHeader } from '../general/GeneralHeader'
import { DashboardOwnList } from './DashboardOwnList'

export function Dashboard() {
  return (
    <section className="dashboard">
      <GeneralHeader title="Dashboard" />

      <div className="balance-section">
        <div className="balance-container">
          <p className="balance-txt">total balance</p>
          <p className="balance-amount">BALANCE</p>
        </div>

        <div className="owe-container">
          <p className="owe-txt">you owe</p>
          <p className="owe-amount">OWE</p>
        </div>

        <div className="owed-container">
          <p className="owed-txt">you are owed</p>
          <p className="owed-amount">OWED</p>
        </div>
      </div>

      <div className="main-details">
        <div className="container">
          <h3 className="title">You owe</h3>
          <DashboardOwnList />
          {/* <p className="not-owe-msg">You do not owe anything</p> */}
        </div>

        <div className="container">
          <h3 className="title">You are owed</h3>
          <DashboardOwnList />
          {/* <p className="not-owe-msg">You are not owed anything</p> */}
        </div>
      </div>
    </section>
  )
}

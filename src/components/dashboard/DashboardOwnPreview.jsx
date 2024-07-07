import { utilService } from '../../services/util.service'

export function DashboardOwnPreview() {
  return (
    <article className="dashboard-own-preview flex align-center">
      <img
        src="/assets/img/general/user-default.png"
        alt="Friend profile picture"
        className="member-image"
      />

      <div className="details-container">
        <h3 className="member-name">ISRAELI ISRAELI</h3>
        <p className="member-owe-amount">
          you owe/owed <span>{utilService.getFormattedCurrency(123)}</span>
        </p>
      </div>
    </article>
  )
}

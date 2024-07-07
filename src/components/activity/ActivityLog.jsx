import { GeneralHeader } from '../general/GeneralHeader'

export function ActivityLog() {
  return (
    <section className="activity-log">
      <GeneralHeader title="Recent activity" showAddExpenseBtn={false} />
    </section>
  )
}

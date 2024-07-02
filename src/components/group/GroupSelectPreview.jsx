export function GroupSelectPreview({ group, onPickGroup }) {
  const { title } = group
  return (
    <article className="group-select flex align-center" onClick={() => onPickGroup(group)}>
      <h3 className="group-name">{title}</h3>
    </article>
  )
}

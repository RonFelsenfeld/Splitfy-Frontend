import { TagIcon } from '../../services/svg.service'

export function GroupPreview({ group }) {
  return (
    <article className="group-preview flex align-center">
      <TagIcon />
      <h4 className="group-title">{group.title}</h4>
    </article>
  )
}

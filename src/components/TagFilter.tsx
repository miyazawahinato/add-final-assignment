interface TagFilterProps {
  tags: string[]
  selected: string | null
  onSelect: (tag: string | null) => void
}

export function TagFilter({ tags, selected, onSelect }: TagFilterProps) {
  if (tags.length === 0) return null

  return (
    <div className="tag-filter">
      <span className="tag-filter-label">タグで絞り込み:</span>
      <button
        className={`tag-chip ${selected === null ? 'active' : ''}`}
        onClick={() => onSelect(null)}
      >
        すべて
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`tag-chip ${selected === tag ? 'active' : ''}`}
          onClick={() => onSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

import type { Bookmark } from '../types'

interface BookmarkListProps {
  bookmarks: Bookmark[]
  onDelete: (id: string) => void
}

export function BookmarkList({ bookmarks, onDelete }: BookmarkListProps) {
  if (bookmarks.length === 0) {
    return (
      <div className="empty-state">
        <p>ブックマークがありません</p>
        <p className="hint">上のフォームから URL を追加してみましょう</p>
      </div>
    )
  }

  return (
    <ul className="bookmark-list">
      {bookmarks.map((bookmark) => (
        <li key={bookmark.id} className="bookmark-item">
          <div className="bookmark-main">
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.title}
            </a>
            <span className="bookmark-url">{bookmark.url}</span>
          </div>
          {bookmark.tags.length > 0 && (
            <div className="bookmark-tags">
              {bookmark.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <button
            className="delete-btn"
            onClick={() => onDelete(bookmark.id)}
            aria-label="削除"
          >
            削除
          </button>
        </li>
      ))}
    </ul>
  )
}

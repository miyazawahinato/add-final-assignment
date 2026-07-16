import { useMemo, useState } from 'react'
import { BookmarkForm } from './components/BookmarkForm'
import { BookmarkList } from './components/BookmarkList'
import { SearchBar } from './components/SearchBar'
import { TagFilter } from './components/TagFilter'
import { useBookmarks } from './hooks/useBookmarks'
import './App.css'

function App() {
  const { bookmarks, addBookmark, deleteBookmark, allTags } = useBookmarks()
  const [search, setSearch] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim()
    return bookmarks.filter((b) => {
      const matchesTag = selectedTag === null || b.tags.includes(selectedTag)
      if (!matchesTag) return false
      if (!query) return true
      const haystack = [b.title, b.url, ...b.tags].join(' ').toLowerCase()
      return haystack.includes(query)
    })
  }, [bookmarks, search, selectedTag])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Bookmark Manager</h1>
        <p>お気に入りの URL をタグ付きで管理</p>
      </header>

      <main className="app-main">
        <BookmarkForm onAdd={addBookmark} />
        <SearchBar value={search} onChange={setSearch} />
        <TagFilter
          tags={allTags}
          selected={selectedTag}
          onSelect={setSelectedTag}
        />
        <p className="result-count">{filtered.length} 件のブックマーク</p>
        <BookmarkList bookmarks={filtered} onDelete={deleteBookmark} />
      </main>
    </div>
  )
}

export default App

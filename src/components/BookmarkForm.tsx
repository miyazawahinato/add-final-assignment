import { useState, type FormEvent } from 'react'
import type { BookmarkInput } from '../types'

interface BookmarkFormProps {
  onAdd: (input: BookmarkInput) => void
}

export function BookmarkForm({ onAdd }: BookmarkFormProps) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [tagsText, setTagsText] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !url.trim()) return

    const tags = tagsText
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)

    onAdd({ title, url, tags })
    setTitle('')
    setUrl('')
    setTagsText('')
  }

  return (
    <form className="bookmark-form" onSubmit={handleSubmit}>
      <h2>ブックマークを追加</h2>
      <div className="form-row">
        <label>
          タイトル
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="例: React 公式ドキュメント"
            required
          />
        </label>
        <label>
          URL
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
        </label>
      </div>
      <label>
        タグ（カンマ区切り）
        <input
          type="text"
          value={tagsText}
          onChange={(e) => setTagsText(e.target.value)}
          placeholder="例: react, docs, frontend"
        />
      </label>
      <button type="submit">追加</button>
    </form>
  )
}

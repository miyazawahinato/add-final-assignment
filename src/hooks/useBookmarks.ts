import { useEffect, useState } from 'react'
import type { Bookmark, BookmarkInput } from '../types'

const STORAGE_KEY = 'bookmark-manager:data'

function loadBookmarks(): Bookmark[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as Bookmark[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveBookmarks(bookmarks: Bookmark[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks))
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(loadBookmarks)

  useEffect(() => {
    saveBookmarks(bookmarks)
  }, [bookmarks])

  const addBookmark = (input: BookmarkInput) => {
    const bookmark: Bookmark = {
      id: crypto.randomUUID(),
      title: input.title.trim(),
      url: input.url.trim(),
      tags: input.tags,
      createdAt: new Date().toISOString(),
    }
    setBookmarks((prev) => [bookmark, ...prev])
  }

  const deleteBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id))
  }

  const allTags = Array.from(
    new Set(bookmarks.flatMap((b) => b.tags))
  ).sort()

  return { bookmarks, addBookmark, deleteBookmark, allTags }
}

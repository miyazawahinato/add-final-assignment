export interface Bookmark {
  id: string
  title: string
  url: string
  tags: string[]
  createdAt: string
}

export interface BookmarkInput {
  title: string
  url: string
  tags: string[]
}

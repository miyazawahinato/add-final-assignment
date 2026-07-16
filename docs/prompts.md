# 使用したプロンプト記録

AI駆動開発 最終課題で Cursor Agent に送ったプロンプトを記録します。

---

## 1. 課題の着手

**プロンプト:**
> https://class-document.vercel.app/classes/2026年度/前期/AI駆動開発/general/最終課題.html 課題を完成させたいのですが、何から手を付ければいいでしょうか

**結果:** 課題要件の整理、GitHub リポジトリの確認、推奨ステップの提示

---

## 2. プロジェクトの場所確認

**プロンプト:**
> どこにadd-final-assignmentがありますか

**結果:** ローカルパス `C:\Users\...\Projects\add-final-assignment` と GitHub URL を特定

---

## 3. 開発開始

**プロンプト:**
> 進めます

**選択:** ブックマーク管理アプリ

**結果:**
- Vite + React + TypeScript プロジェクトの構築
- ブックマーク追加・削除・検索・タグ絞り込み機能の実装
- AGENTS.md、.cursor/rules、README の作成

---

## AI に任せたこと

- プロジェクトの初期構成（package.json, vite.config.ts, tsconfig 等）
- 全コンポーネントの実装（BookmarkForm, BookmarkList, SearchBar, TagFilter）
- useBookmarks フック（localStorage 永続化）
- CSS スタイリング
- AI 環境整備ファイル（AGENTS.md, rules, このファイル）

## 自分で確認・修正したこと

- （開発中 — 動作確認後に追記予定）

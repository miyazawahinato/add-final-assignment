# Bookmark Manager

AI駆動開発 最終課題 — ブックマーク管理 Web アプリ

## 概要

お気に入りの URL をタグ付きで保存・検索・削除できるシンプルなブックマーク管理アプリです。
データはブラウザの localStorage に保存されるため、サーバー不要で動作します。

## 機能

- ブックマークの追加（タイトル・URL・タグ）
- ブックマークの削除
- タイトル・URL・タグによる検索
- タグによる絞り込み
- localStorage による永続化

## 技術スタック

- React 19 + TypeScript
- Vite 7
- localStorage（バックエンド不要）

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで http://localhost:5173 を開いてください。

## ビルド

```bash
npm run build
npm run preview
```

## AI 開発環境

このプロジェクトは Cursor Agent を使って AI 駆動で開発しました。

| ファイル | 内容 |
|---|---|
| `AGENTS.md` | AI エージェントへのプロジェクト指示 |
| `.cursor/rules/` | Cursor 用のプロジェクトルール |
| `docs/prompts.md` | 開発で使用したプロンプトの記録 |
| `agent/skills` | エージェント用スキル定義（予定） |

## リポジトリ

https://github.com/miyazawahinato/add-final-assignment

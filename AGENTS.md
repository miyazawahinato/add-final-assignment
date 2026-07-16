# AGENTS.md — AI エージェント向けプロジェクト指示

## プロジェクト概要

ブックマーク管理 Web アプリ（React + TypeScript + Vite）。
localStorage でデータを永続化し、タグ付きの URL 管理を行う。

## 技術スタック

- React 19, TypeScript, Vite 7
- スタイル: プレーン CSS（フレームワーク不使用）
- データ保存: localStorage（外部 API・DB 不使用）

## ディレクトリ構成

```
src/
├── components/   # UI コンポーネント
├── hooks/        # カスタムフック（useBookmarks）
├── types.ts      # 型定義
├── App.tsx       # メインアプリ
└── main.tsx      # エントリポイント
```

## コーディング規約

- TypeScript strict モード
- 関数コンポーネント + hooks パターン
- 1 ファイル 1 コンポーネント
- CSS はコンポーネント単位ではなく App.css に集約
- 日本語 UI（ラベル・プレースホルダー・メッセージ）

## 開発方針

- シンプルさ優先。過度な抽象化やライブラリ追加は避ける
- MVP 機能（追加・削除・検索・タグ絞り込み）を先に完成させる
- 新機能追加時は既存の useBookmarks フックを拡張する

## 禁止事項

- バックエンド・認証・外部 API の追加（スコープ外）
- CSS フレームワーク（Tailwind 等）の導入
- 不要なテストファイルの大量生成

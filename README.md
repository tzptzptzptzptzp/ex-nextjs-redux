# Redux による状態管理学習リポジトリ

このリポジトリは、Redux を使用した状態管理を深く探究するために作成しました。実際のアプリケーション制作に代わり、Redux の基礎、利用法、および効果的なディレクトリ構成に重点を置いて実装しました。フロントエンドの構築には Next.js を採用し、最新のフロントエンド技術を取り入れました。

## 主な特徴

- **Redux での状態管理**: 新しい状態管理ライブラリの選択肢もありながら、広範囲に使われている Redux の深い理解を目指しました。これにより、実際の開発現場で役立つ技術を習得しました。
- **Reducks パターン**: [Reducks パターン](https://github.com/alexnm/re-ducks)を取り入れ、状態ごとにフォルダを分けることで、ロジックをモジュール化しました。これにより、スケーラビリティと保守性の向上を図りました。
- **JsonPlaceholder からのデータ取得**: [JsonPlaceholder](https://jsonplaceholder.typicode.com/)の API からユーザーデータを取得し、それを Redux で管理しました。これにより、非同期通信と状態管理を組み合わせた取り組みを実施しました。

## 学習目標

- Redux の基本概念と利用方法をしっかりと把握しました。
- 非同期通信のデータを Redux で管理する方法を実践しました。
- Reducks パターンを用いて、大規模プロジェクトでの Redux の効果的な利用方法を学びました。
- 実際の開発で必要とされる Redux の応用技術を身に付けました。

このリポジトリを通じて、Redux の全体像から応用に至るまで幅広い知識を習得し、複雑な状態管理が求められるプロジェクトに対応できるようになりました。Next.js との組み合わせにより、実際のプロジェクトで遭遇する様々な課題に対する解決策を検証しました。非同期データ処理やコンポーネント間での状態共有など、現代のウェブアプリ開発において中心的なトピックに取り組み、実用的なスキルを習得しました。

## 使用技術

フロントエンド

- [Next.js](https://nextjs.org/)
- [React](https://ja.react.dev/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)

## ディレクトリ構成

```

reducks/
├── initializes.ts
├── operations.ts
├── reducers.ts
├── selectors.ts
├── slice.ts
├── types.ts

```

## 開発手順

npm を使用しています

```bash
npm
npm run dev // 開発用サーバー起動
```

# Keyboard Layout Viewer

分割キーボードのレイアウトを表示・設定できるアプリケーションです。

https://github.com/user-attachments/assets/209acbab-b92d-404f-a75c-e4e660150dd7


## 機能

- 分割キーボードのレイアウト表示
- ショートカットキーによる操作（Command/Ctrl + Shift + I/O/P）
- カスタマイズ可能なキー配列（JSONで設定可能）

## 技術スタック

- [Tauri](https://tauri.app/) - クロスプラットフォームアプリケーションフレームワーク
- [React](https://react.dev/) - UIフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な JavaScript
- [Vite](https://vitejs.dev/) - 開発環境

## 開発環境のセットアップ

### 必要な環境

- [Node.js](https://nodejs.org/) (v18以上)
- [Rust](https://www.rust-lang.org/)
- [VS Code](https://code.visualstudio.com/) (推奨)

### 推奨VS Code拡張機能

- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

### インストール手順

1. リポジトリをクローン
```bash
git clone [repository-url]
cd keyboard-layout
```

2. 依存関係のインストール
```bash
npm install
```

3. 開発サーバーの起動
```bash
npm run tauri dev
```

## ビルド方法

リリース用のビルドを行う場合：

```bash
npm run tauri build
```

ビルドされたアプリケーションは`src-tauri/target/release`に生成されます。

## キーボードレイアウトのカスタマイズ

キーボードレイアウトは`keymap.ts`ファイルで定義されています。JSONフォーマットで以下のように設定可能です：

```typescript
const keyboardLayout = {
  left: {
    main: [
      [{ label: "Q" }, { label: "W" }, ...],
      [{ label: "A" }, { label: "S" }, ...],
      [{ label: "Z" }, { label: "X" }, ...]
    ],
    thumb: [{ label: "Ctrl" }, { label: "Alt" }, { label: "⌘" }]
  },
  right: {
    // 同様の構造
  }
};
```

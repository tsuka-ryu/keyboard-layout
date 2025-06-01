# Keyboard Layout Viewer

分割キーボードのレイアウトを表示・設定できるアプリケーションです。

## 機能

- 分割キーボードのレイアウト表示
- レイヤー切り替え機能
  - Layer 1 (デフォルト): `Command/Ctrl + Shift + J`
  - Layer 2 (記号・特殊キー): `Command/Ctrl + Shift + K`
- JSONで設定可能なキー配列

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

## キーマップのカスタマイズ

キーマップは`src/keymap.ts`で定義されています。以下の形式で設定可能です：

```typescript
export const LAYER_ONE = {
  left: {
    main: [
      [{ label: "ESC" }, { label: "Q" }, ...],
      [{ label: "Ctrl" }, { label: "A" }, ...],
      // ...
    ],
    thumb: [{ label: "Space" }, ...]
  },
  right: {
    // 同様の構造
  }
};
```

## 利用可能なショートカット

- `Command/Ctrl + Shift + J`: レイヤー1（メインレイヤー）を表示
- `Command/Ctrl + Shift + K`: レイヤー2（シンボル・機能キー）を表示

## ライセンス

MIT

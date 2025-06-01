# Keyboard Layout Viewer

分割キーボードのレイアウトを表示・設定できるアプリケーションです。

## 機能

- 分割キーボードのレイアウトをリアルタイム表示
- グローバルショートカットによるレイヤー切り替え
  - レイヤー1（標準レイアウト）: `Command + Shift + J`
  - レイヤー2（テンキー）: `Command + Shift + K`
  - レイヤー3（記号・特殊キー）: `Command + Shift + L`
- キーマップのJSONカスタマイズ対応
  - レイヤーごとの独立したマッピング
  - 左右分割キーボード対応
  - メインキーと親指キーの個別設定

## インストール方法

### 事前準備

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
      [{ label: "ESC" }, { label: "Q" }, { label: "W" }, { label: "E" }, { label: "R" }, { label: "T" }],
      [{ label: "Ctrl" }, { label: "A" }, { label: "S" }, { label: "D" }, { label: "F" }, { label: "G" }],
      [{ label: "Shift" }, { label: "Z" }, { label: "X" }, { label: "C" }, { label: "V" }, { label: "B" }],
      [{ label: "" }, { label: "" }, { label: "Alt" }, { label: "Cmd" }, { label: "" }, { label: "" }]
    ],
    thumb: [{ label: "Space" }, ...]
  },
  right: {
    // 右側も同様の構造
  }
};
```

## 利用可能なショートカット
- `Command/Ctrl + Shift + J`: レイヤー1（メインレイヤー）を表示
- `Command/Ctrl + Shift + K`: レイヤー2（シンボル・機能キー）を表示
- `Command/Ctrl + Shift + L`: レイヤー3（記号・特殊キー）を表示

## ライセンス

MIT

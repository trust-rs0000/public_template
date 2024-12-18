# テンプレート

## はじめに

このテンプレートは BXI 用のテンプレートです。

このテンプレートは以下の目的で作成いたしました。

- 部署内でのテンプレートを統一し、保守性を高める。
- 他部署でもクラス名で修正できるようにする。
- CSSDoc、JSDoc の作成[^1]

[^1]: [JSDoc とは](https://qiita.com/yamatai12/items/3482fc31b9c73c6938bd)

使用段階で CSS の記述ミスや機能不足な点が発見されると思います。
定期的にリファクタリングしていますので、コーディングに入る前にテンプレートを更新していただけると幸いです。

## 更新履歴

- 2024-12-18 README.md を作成

## 環境

### ディレクトリ構成

├─css
├─images --- ローカル開発用
│ ├─mv
│ └─utility
├─js
│ ├─module
│ └─utility
└─scss
├─base --- BXI リセット・リブート
├─block --- ブロック用クラス(ブロック単体で実現できるデザインの CSS)
├─config --- 設定(カラー、フォント等)
├─includes --- 全ページ共通のパーツ用 CSS
├─keyframes --- アニメーション keyframes
├─mixin --- mixin
├─module --- モジュール用クラス(ブロッククラス以外の CSS)
├─page --- 固定ページ用
└─utility --- ユーティリティクラス

### 開発環境構築方法

#### vscode をインストールする

[インストールはこちら](https://code.visualstudio.com/download)

#### vscode プラグインインストール

1. .vscode/extensions.json があることを確認する。
2. プラグインインストール画面を開く。
3. 検索バーに「@recommended」と入力する。
4. 表示されたプラグインを全てインストールする。

## 使い方

### 初期設定

#### scss/config を設定する

## 参考サイト

[GitHub README の書き方](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

[README で重宝される書き方](https://www.whaletech.co.jp/blog/readme-markdown-1/)

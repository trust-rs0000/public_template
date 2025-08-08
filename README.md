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

### 開発環境構築方法

### ディレクトリ構成

```
E:.
│ .gitignore < git をダウンロードしたときに自動でついてくるファイル(削除可能)
│ dtd.html < BXI の[デザイン設定] > [基本設定] の dtd にコピペする用
│ index.html < header, footer を構築する html
│ README.md < このテンプレートの使用方法
│ robots.txt < リモートサーバーにアップする用のファイル
│
├─.vscode < vscode 設定ファイル
│ extensions.json
│ settings.json
│
├─css
│ bxi.css < BXI で自動作成されるファイル(ローカルで header, footer 作成の際に環境揃えるために設置)
│ common_style.css < カスタムスタイルシート
│ common_style.css.map < 開発者ツールでどの scss に記載されているか表示させるための CSS
│ style.css < CS の方等が修正するようの CSS
│
├─images < (どの案件でも良く使うように画像をまとめています)
│ ├─credit < クレジットカードロゴ
│ │ american_express.png
│ │ dinors_club.png
│ │ discover.png
│ │ jcb.png
│ │ mastercard.png
│ │ visa.png
│ │
│ ├─logo < 企業ロゴ
│ │ footer_logo.png
│ │ header_logo.png
│ │
│ ├─logo_company < よく使う有名企業のロゴ
│ │ amazon_horizontal_color.png
│ │ amazon_horizontal_color_rev.png
│ │ amazon_vertical_color.png
│ │ amazon_vertical_color_rev.png
│ │ facebook_finduson_black.png
│ │ facebook_finduson_blue.png
│ │ facebook_finduson_white.png
│ │ facebook_logo_black.png
│ │ facebook_logo_blue.png
│ │ facebook_logo_grey.png
│ │ facebook_logo_white.png
│ │ hatenablog-logotype.png
│ │ instagram_black.png
│ │ instagram_color.png
│ │ instagram_white.png
│ │ line_android.png
│ │ line_apple_green.png
│ │ logo_facebook_white.png
│ │ logo_instagram_white.png
│ │ logo_x_white.png
│ │ rakuten.png
│ │ x_black.png
│ │ x_white.png
│ │ yt_icon_rgb.png
│ │ yt_logo_mono_dark.png
│ │ yt_logo_mono_light.png
│ │ yt_logo_rgb_dark.png
│ │ yt_logo_rgb_light.png
│ │
│ ├─mv < メインビジュアル
│ │ main_1.jpg
│ │ main_2.jpg
│ │ main_3.jpg
│ │ main_pc_1.jpg
│ │ main_pc_2.jpg
│ │ main_pc_3.jpg
│ │
│ └─sample < サンプル画像
│ sample_16_9.jpg
│ sample_1920x1440.jpg
│ sample_1_1.jpg
│ sample_1_2.jpg
│ sample_2_1.jpg
│ sample_2_3.jpg
│ sample_3_2.jpg
│ sample_3_4.jpg
│ sample_4_3.jpg
│ sample_9_16.jpg
│
├─js < カスタム js
│ │ function.js
│ │
│ └─module < カスタム js で使用しているモジュール
│ accordion.js < アコーディオン機能(FAQ で使用しています)
│ breadcrumb.js < ぱんくず機能
│ hamburger.js < ハンバーガーメニューで使用
│ text.js < インスタの文字数制限で使用
│
└─scss
│ common_style.scss < common_style.css に変換されます
│ \_forward.scss < 全ページで使う必要な機能がまとめられています
│
├─base < BXI の reset 系の css が記述されています
│ \_base.scss < html, body などの属性セレクタに対する記述
│ \_bxi-reset.scss < BXI の CSS を打ち消したりしています。（インナーサイズ等）
│
├─block < BXI のブロック(画像 + テキスト等)に対する記述
│ \_blog.scss < blog 記事
│ \_dl.scss < dl リスト
│ \_flexbox.scss < flexbox
│ \_form.scss < フォーム
│ \_shop.scss < 商品アイテム
│ \_sns.scss < インスタグラム連動
│ \_table.scss < テーブル
│ \_ul.scss < ul リスト
│
├─config < 私のテンプレートを使用する際に設定するファイルが集められています
│ \_breakpoints.scss < ブレイクポイントを設定します
│ \_color.scss < サイトカラーを設定します
│ \_font-family.scss < フォントファミリーを設定します
│ \_font-size.scss < フォントサイズを設定します
│ \_font.scss < 文字に対する css を設定します(letter-spacing 等)
│ \_global.scss < その他 css を設定します(ヘッダーが被らないようにする上部マージン css 等)
│ \_inner.scss < インナーサイズを設定します
│
├─includes < ヘッダー・フッターに対する記述
│ \_footer.scss
│ \_header.scss
│
├─mixin < mixin がまとめられています
│ \_aspect-ratio.scss < アスペクト比用の mixin
│ \_breakpoints.scss < ブレイクポイント用の mixin
│ \_font-family.scss < フォントファミリー用の mixin
│ \_font-size.scss < フォントサイズ用の mixin
│ \_grid.scss < grid システム(実質 flex)用の mixin
│ \_inner.scss < インナーサイズ設定用の mixin
│ \_mixin.scss < 退職済みの方から引き継いだ mixin
│ \_scroll-bar.scss < スクロールバー用の mixin
│ \_size.scss < サイズの単位用の mixin
│
├─module < よく使用する block 以外のモジュール
│ \_breadcrumb.scss < ぱんくず
│ \_buillingual.scss < バイリンガル
│ \_drawer.scss < ドロワー
│ \_dropdown.scss < ドロップダウン
│ \_hamburger.scss < ハンバーガー
│ \_heading.scss < 見出し
│ \_mv.scss < メインビジュアル
│ \_nav.scss < ナビゲーション
│ \_page-header.scss < 下層用ページヘッダー
│ \_row.scss < メディア型のコンテンツ
│
├─page < 各ページ
│ \_index.scss < index.html
│ \_page-blog.scss < ブログページ
│ \_page-form.scss < フォーム
│ \_page-shop.scss < ショップページ
│ \_policy.scss < ポリシーページ
│ \_style.scss < その他ページ(使用用途不問)
│
├─plugin < プラグイン用
│ \_fancybox.scss < fancybox
│ \_gsap.scss < gsap
│ \_slick.scss < slick
│
└─utility < 微調整で済む css 用
\_background.scss < 背景関連
\_border-radius.scss < 角丸関連
\_border.scss < border 関連
\_br.scss < 改行関連
\_display.scss < 表示・非表示関連(消しても可能)
\_font-family.scss < フォントファミリー関連
\_font-size.scss < フォントサイズ関連
\_grid.scss < grid システム(実質 flex)関連
\_inner.scss < インナーサイズ関連
\_letter-spacing.scss < 文字間関連
\_line-height.scss < 行間関連
\_margin.scss < margin 関連
\_marker.scss < マーカー関連
\_text-align.scss < 水平方向配置関連
\_width.scss < width 関連(max-width とか)
```

#### vscode をインストールする

[インストールはこちら](https://code.visualstudio.com/download)

#### vscode プラグインインストール

1. .vscode/extensions.json があることを確認する。
2. プラグインインストール画面を開く。
3. 検索バーに「@recommended」と入力する。
4. 表示されたプラグインを全てインストールする。

## 初期設定(scss/config/以下のファイルを設定する)

### ブレイクポイントを設定する

[\_breakpoints.scss](scss/config/_breakpoints.scss)

### サイトカラーを設定する

[\_color.scss](scss/config/_color.scss)

### フォントファミリーを設定する

[\_font-family.scss](scss/config/_font-family.scss)

### フォントサイズを設定する

[\_font-size.scss](scss/config/_font-size.scss)

### 文字組みを設定する

[\_font.scss](scss/config/_font.scss)

### その他設定

[\_global.scss](scss/config/_global.scss)

### インナーサイズ設定(\_inner.scss)

[\_inner.scss](scss/config/_inner.scss)

## よく使う mixin の使い方

### ブレイクポイントの mixin

ブレイクポイントの mixin は以下の通りになります。
[\_breakpoints.scss](scss/config/_breakpoints.scss)の値を参照しています。

```
// max-width指定
@include media-max(sp) {
    // scssを記載してください
}

// min-width指定
@include media-min(sp) {
    // scssを記載してください
}
```

### フォントファミリーの mixin

フォントファミリー

フォントファミリーの mixin は以下の通りになります。
[\_font-family.scss](scss/config/_font-family.scss)

```
.sample-class {
    @include font-family(base, bold);
}
```

## よく使う utility・module の使い方

## 参考サイト

[GitHub README の書き方](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

[README で重宝される書き方](https://www.whaletech.co.jp/blog/readme-markdown-1/)

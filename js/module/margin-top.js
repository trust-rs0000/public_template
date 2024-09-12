/**
 * header上部に余白を設ける。に関するクラス
 * position:fixed;用
 */
export default class MarginTop {
  /**
   *
   * @param {node} headerElement header要素
   */
  constructor(headerElement) {
    try {
      if (!headerElement) {
        throw new Error("ERROR: header is null");
      }
    } catch (error) {
      console.log(error);
      return;
    }

    this.headerElement = headerElement;
    this.headerHeight = this.headerElement.clientHeight;

    /**
     * 下層ページ用
     */
    this.contentsWrap = document.querySelector("#contents_wrap");

    /**
     * TOPページ用
     */
    this.mv = document.querySelector(".mv");

    /**
     * ブログページ用
     */
    this.blogMarginTop = document.querySelector("#blog-margin-top");

    /**
     * ショッピングページ用
     */
    this.shopMarginTop = document.querySelector("#js-shop");
  }

  /**
   * headerの高さを取得します。
   */
  setHeaderHeight() {
    this.headerHeight = this.headerElement.clientHeight;
  }

  /**
   * headerの高さ分、余白を設定します。
   */
  setMarginTop() {
    if (!this.mv && this.contentsWrap) {
      this.contentsWrap.style.marginTop = `${this.headerHeight}px`;
    }

    // mvがあるページの場合
    if (this.mv) {
      this.mv.style.marginTop = `${this.headerHeight}px`;
    }

    // ブログページの場合
    if (this.blogMarginTop) {
      this.blogMarginTop.style.marginTop = `${this.headerHeight}px`;
    }

    // ショップページの場合
    if (this.shopMarginTop) {
      this.shopMarginTop.style.marginTop = `${this.headerHeight}px`;
    }
  }

  /**
   * 読み込み時、リサイズ時にヘッダーの高さを調整します。
   */
  bootMarginTop() {
    try {
      this.setHeaderHeight();
      this.setMarginTop();

      window.addEventListener("resize", () => {
        try {
          this.setHeaderHeight();
          this.setMarginTop();
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}

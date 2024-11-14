/**
 * headerに関するクラス
 */
export default class Header {
  /**
   *
   * @param {node} headerElement ヘッダー
   */
  constructor(headerElement) {
    try {
      if (!headerElement) {
        throw new Error("ERROR: header is null");
      }
    } catch (error) {
      console.log(error);
    }

    this.header = headerElement;
  }

  /**
   * スクロール時、ヘッダーの色を変更します。
   */
  changeHeaderBackgroundColor() {
    window.addEventListener("scroll", () => {
      try {
        const SCROLL_Y = window.scrollY;

        if (SCROLL_Y >= 100) {
          this.header.classList.add("js-change-header-bg");
        } else if (SCROLL_Y < 100) {
          this.header.classList.remove("js-change-header-bg");
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}

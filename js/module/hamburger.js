/**
 * ハンバーガーに関するクラス
 */
export default class Hamburger {
  /**
   *
   * @param {node} hamburgerElement ハンバーガー
   */
  constructor(hamburgerElement) {
    try {
      if (!hamburgerElement) {
        throw new Error("ERROR: hamburger is null");
      }
    } catch (error) {
      console.log(error);
    }

    this.hamburger = hamburgerElement;
  }

  /**
   * ハンバーガーを開閉します。
   */
  toggleHamburger() {
    this.hamburger.addEventListener("click", function () {
      try {
        document.querySelector("html").classList.toggle("js-drawer-open");
      } catch (error) {
        console.log(error);
      }
    });
  }

  /**
   * 内部アンカーリンクをクリックしたら、ドロワーを閉じる。
   */
  clickAnchor() {
    const ANCHORS = document.querySelectorAll('a[href*="#"]');
    ANCHORS.forEach(function (anchor) {
      anchor.addEventListener("click", function () {
        try {
          document.querySelector("html").classList.remove("js-drawer-open");
        } catch (error) {
          console.log(error);
        }
      });
    });
  }
}

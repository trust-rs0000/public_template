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
  static className = "js-drawer-open";
  static drawerName = ".drawer";

  fadeDrawer() {
    try {
      if (!document.querySelector("html").classList.contains(Hamburger.className)) {
        $(Hamburger.drawerName).fadeIn();
      } else {
        $(Hamburger.drawerName).fadeOut();
      }
      document.querySelector("html").classList.toggle(Hamburger.className);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * ハンバーガーを開閉します。
   */
  toggleHamburger() {
    this.hamburger.addEventListener("click", () => {
      this.fadeDrawer();
    });
  }

  /**
   * 内部アンカーリンクをクリックしたら、ドロワーを閉じる。
   */
  clickAnchor() {
    const ANCHORS = document.querySelectorAll('a[href*="#"]');
    ANCHORS.forEach(
      function (anchor) {
        anchor.addEventListener("click", () => {
          const HTML = document.querySelector("html");
          if (HTML.classList.contains(Hamburger.className)) {
            HTML.classList.remove(Hamburger.className);
            $(Hamburger.drawerName).fadeOut();
          }
        });
      }.bind(this)
    );
  }
}

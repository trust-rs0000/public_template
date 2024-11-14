/**
 * アコーディオン(FLEXBOX使用前提 : FAQ等で使用できます)に関するクラス
 */

export default class Accordion {
  /**
   *
   * @param {node} accordionElement
   */
  constructor(accordionElement) {
    try {
      if (!accordionElement) {
        throw new Error("ERROR: accordion is null");
      }
    } catch (error) {
      console.log(error);
    }
    this.accordionElement = accordionElement;
    this.accordionElementFirst = this.accordionElement.querySelector(".box:first-child");
    this.accordionElementLast = this.accordionElement.querySelector(".box:last-child");
  }

  /**
   * アコーディオンを開閉します。
   */
  click() {
    this.accordionElement.addEventListener("click", () => {
      try {
        // 閉じているアコーディオンコンテンツの高さを取得します。
        const LAST_BOX_HEIGHT = this.accordionElementLast.querySelector("div").clientHeight;

        this.accordionElement.classList.toggle("js-accordion-open");

        // アニメーションを利かせるため、高さを設定します。
        this.accordionElementLast.style.height = `${LAST_BOX_HEIGHT}px`;

        if (!this.accordionElement.classList.contains("js-accordion-open")) {
          this.accordionElementLast.style.height = "0px";
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}

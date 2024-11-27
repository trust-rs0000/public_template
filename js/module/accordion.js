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
        // バイリンガル対応済み。スタイルのdisplay取得して、バイリンガル使用しているのかで切り分け。
        let lastBoxHeight;

        const DIV_NORMAL = this.accordionElement.querySelector(".box:last-child>div:first-child");
        let isDivNormalDisplay = window.getComputedStyle(DIV_NORMAL).display;

        const DIV_TRANSLATE = this.accordionElementLast.querySelector(".translate");

        // 通常のDIVがnoneの場合は、バイリンガルがONの時。
        if (isDivNormalDisplay === "none") {
          lastBoxHeight = DIV_TRANSLATE.clientHeight;
          console.log("trans");
        } else {
          // それ以外は、バイリンガルがOFFの時。
          lastBoxHeight = DIV_NORMAL.clientHeight;
          console.log("normal");
        }

        this.accordionElement.classList.toggle("js-accordion-open");

        // アニメーションを利かせるため、高さを設定します。
        this.accordionElementLast.style.height = `${lastBoxHeight}px`;

        if (!this.accordionElement.classList.contains("js-accordion-open")) {
          this.accordionElementLast.style.height = "0px";
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}

/**
 * スクロール位置に関するクラス
 */

export default class Position {
  constructor(positionElement) {
    try {
      if (!positionElement) {
        throw new Error("ERROR: positionElement is null");
      }
    } catch (error) {
      console.log(error);
    }
    this.positionElement = positionElement;
    this.relativePosition = 0;
    this.absolutePosition = 0;
  }

  /**
   * 対象の要素の絶対位置を返します。
   * @returns {double}
   */
  calcAbsolutePosition() {
    this.relativePosition = this.positionElement.getBoundingClientRect().top;
    return window.scrollY + this.relativePosition;
  }

  /**
   * 対象の位置まで到達したか真偽値を返します。
   * @returns {boolean}
   */
  isArrive() {
    const ABSOLUTE_POSITION = this.calcAbsolutePosition();
    return window.scrollY > ABSOLUTE_POSITION - window.innerHeight;
  }
}

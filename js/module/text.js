/**
 * テキストに関するクラス
 */

export default class TextSpliter {
  /**
   *
   * @param {node} textElement
   */
  constructor(textElement) {
    this.textElement = textElement;
  }

  /**
   *
   * @param {int} count 文字数
   * @param {string} endString テキスト最後の文字
   */
  split(count, endString = "...") {
    try {
      const TEXT = this.textElement.textContent;

      if (TEXT.length > count) {
        this.textElement.textContent = TEXT.substring(0, count) + endString;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

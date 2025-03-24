/**
 * ぱんくず
 */
export default class BreadCrumb {
  /**
   *
   * @param {text} topText トップページへのテキスト
   * @param {text} divider ぱんくずの区切り文字
   * @param {text} h1Text 現在ページのテキスト
   */
  constructor({
    topText = "トップページへ",
    divider = "/",
    h1Text = document.querySelector(".page-header h1").textContent,
  } = {}) {
    // フロントページへのURL
    this.topURL = `https://${location.host}`;

    // フロントページのテキスト
    this.topText = topText;

    // 区切り文字
    this.divider = divider;

    // 現在のURL
    this.currentURL = location.href;

    // ぱんくずの現在ページとして表示する文字列
    this.h1Text = h1Text;

    const panElement = document.querySelector("pan");

    try {
      if (!panElement) {
        throw new Error("ERROR: pan is null");
      }
    } catch (error) {
      console.log(error);
    }

    // ぱんくずにあたる要素
    this.pan = panElement;
  }

  /**
   * ぱんくずを表示します。
   * @param {string} topText トップページ用のテキスト
   */
  displayBreadCrumb() {
    try {
      const BREADCRUMB_HTML = `
      <ul class="breadcrumb__list" itemscope="itemscope" itemtype="https://schema.org/BreadcrumbList">
          <li class="breadcrumb__li" itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem">
              <meta itemprop="position" content="1">
              <a class="breadcrumb__link" itemprop="item" itemscope="itemscope" itemtype="http://schema.org/Thing" href="${this.topURL}" itemid="${this.topURL}">
                  <meta itemprop="name" content="${this.topText}">
                  ${this.topText}
              </a>
          </li>
          <li class="breadcrumb__divide">${this.divider}</li>
          <li class="breadcrumb__li" itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem" class="kasou">
              <meta itemprop="position" content="2">
              <a class="breadcrumb__link" itemprop="item" itemscope="itemscope" itemtype="http://schema.org/Thing" href="${this.currentURL}" itemid="${this.currentURL}">
                  <meta itemprop="name" content="${this.h1Text}">
                  ${this.h1Text}
              </a>
          </li>
      </ul>
      `;
      this.pan.insertAdjacentHTML("afterbegin", BREADCRUMB_HTML);
    } catch (error) {
      console.log(error);
    }
  }
}

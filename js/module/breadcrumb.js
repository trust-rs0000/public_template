/**
 * ぱんくず
 */
export default class BreadCrumb {
  /**
   *
   * @param {node} h1Element h1要素
   */
  constructor(h1Element) {
    try {
      if (!h1Element) {
        throw new Error("ERROR: h1 is null");
      }
    } catch (error) {
      console.log(error);
    }

    // ぱんくずの現在ページとして表示する文字列
    this.h1Text = h1Element;

    // 現在のURL
    this.currentURL = location.href;

    // フロントページへのURL
    this.topURL = `https://${location.host}`;

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
  displayBreadCrumb(topText = "トップページへ") {
    try {
      // トップページのリンクテキストを設定
      const HOME_TEXT = topText;

      // 現在のh1テキストからリンクテキストを設定
      const H1_TEXT = this.h1Text.textContent;

      const BREADCRUMB_HTML = `
      <ul class="breadcrumb" itemscope="itemscope" itemtype="https://schema.org/BreadcrumbList" class="pankuzu">
          <li class="breadcrumb__li" itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem">
              <meta itemprop="position" content="1">
              <a class="breadcrumb__link" itemprop="item" itemscope="itemscope" itemtype="http://schema.org/Thing" href="${this.topURL}" itemid="${this.topURL}">
                  <meta itemprop="name" content="${HOME_TEXT}">
                  ${HOME_TEXT}
              </a>
          </li>
          <li class="breadcrumb__divide"><i class="fa-solid fa-angle-right"></i></li>
          <li class="breadcrumb__li" itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem" class="kasou">
              <meta itemprop="position" content="2">
              <a class="breadcrumb__link" itemprop="item" itemscope="itemscope" itemtype="http://schema.org/Thing" href="${this.currentURL}" itemid="${this.currentURL}">
                  <meta itemprop="name" content="${H1_TEXT}">
                  ${H1_TEXT}
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

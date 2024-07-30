/**
 * スムーズスクロールに関するクラス
 */
export default class SmoothScroller {
  /**
   *
   * @param {node} headerElement ヘッダー
   * @param {int} marginHeight スムーズスクロールした際に、ピッタリくっつかないようにするための余白
   */
  constructor(headerElement, marginHeight) {
    this.headerElement = headerElement;
    this.marginHeight = marginHeight;
    this.headerHeight = 0;
  }

  get _headerHeight() {
    return this.headerElement.clientHeight + this.marginHeight;
  }

  set _headerHeight(height) {
    this.headerHeight = height;
  }

  getHashTarget(hash) {
    try {
      const HASH_EXCLUDE_MARK = hash.replace(/#/, "");
      return document.querySelector(`#${HASH_EXCLUDE_MARK}`);
    } catch (error) {
      console.log(error);
    }
  }

  resizeAbsoluteTop(hashTarget) {
    try {
      const RELATIVE_TOP = hashTarget.getBoundingClientRect().top;
      const ABSOLUTE_TOP = RELATIVE_TOP + window.scrollY;
      return ABSOLUTE_TOP - this._headerHeight;
    } catch (error) {
      console.log(error);
    }
  }

  scroll(absoluteTop) {
    try {
      window.scrollTo({
        top: absoluteTop,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error);
    }
  }

  scrollOuter(absoluteTop) {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
      this.scroll(absoluteTop);
    } catch (error) {
      console.log(error);
    }
  }

  smoothScroll() {
    this._headerHeight = this.headerHeight;

    window.addEventListener("resize", function () {
      this._headerHeight = this.headerHeight;
    });

    // 内部リンク
    const ANCHORS = document.querySelectorAll('a[href*="#"]');
    ANCHORS.forEach(
      function (anchor) {
        anchor.addEventListener("click", (e) => {
          const HREF = anchor.getAttribute("href");
          const HASH = HREF.split("#").pop();
          const HASH_TARGET = this.getHashTarget(HASH);

          if (!HASH_TARGET) {
            return;
          }

          e.preventDefault();

          const RESIZE_ABSOLUTE_TOP = this.resizeAbsoluteTop(HASH_TARGET);

          this.scroll(RESIZE_ABSOLUTE_TOP);
        });
      }.bind(this)
    );

    // 外部リンク
    window.addEventListener(
      "load",
      function (e) {
        const OUTER_HASH = location.hash;

        if (!OUTER_HASH) {
          return;
        }

        e.preventDefault();

        const HASH_TARGET = this.getHashTarget(OUTER_HASH);

        if (!HASH_TARGET) {
          return;
        }

        const RESIZE_ABSOLUTE_TOP = this.resizeAbsoluteTop(HASH_TARGET);

        this.scrollOuter(RESIZE_ABSOLUTE_TOP);
      }.bind(this)
    );
  }
}

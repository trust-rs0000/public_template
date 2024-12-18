import Position from "../utility/position.js";

/**
 * 対象の要素までスクロールしたらクラス付与
 */

export default class Scroller {
  constructor(element) {
    try {
      if (!element) {
        throw new Error("target is null");
      }
    } catch (error) {
      console.log(error);
    }

    this.targetElement = element;
    this.position = new Position(this.targetElement);
  }

  /**
   *
   * @param {*} param0
   */
  in({ className = "js-arrive-in", gaveClassElement = this.targetElement, ratio = 1 }) {
    if (gaveClassElement === null) return;

    if (this.position.isArrive(ratio)) {
      gaveClassElement.classList.add(className);
    }

    window.addEventListener("scroll", () => {
      if (this.position.isArrive(ratio)) {
        gaveClassElement.classList.add(className);
      }
    });
  }

  inOut({ className = "js-arrive-in-out", gaveClassElement = this.targetElement, ratio = 1 }) {
    if (gaveClassElement === null) return;

    if (this.position.isArrive(ratio)) {
      gaveClassElement.classList.add(className);
    }

    window.addEventListener("scroll", () => {
      if (this.position.isArrive(ratio)) {
        gaveClassElement.classList.add(className);
      } else {
        gaveClassElement.classList.remove(className);
      }
    });
  }

  scrolled({ className = "js-scrolled", gaveClassElement = this.targetElement }) {
    window.addEventListener("scroll", () => {
      try {
        const SCROLL_Y = window.scrollY;

        if (SCROLL_Y >= 100) {
          gaveClassElement.classList.add(className);
        } else if (SCROLL_Y < 100) {
          gaveClassElement.classList.remove(className);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}

// fadeinアニメーション end

/**
 *
 */

export default class Slider {
  constructor(className) {
    try {
      if (!className) {
        throw new Error("ERROR: slider is null");
      }
    } catch (error) {
      console.log(error);
    }

    this.slider = className;
  }

  mainSlider() {
    try {
      $(this.slider).slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 3000,
        fade: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

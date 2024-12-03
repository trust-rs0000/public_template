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

  itemSlider() {
    try {
      $(this.slider).slick({
        autoplay: true, // 自動でスクロール
        autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
        speed: 5000, // スライドが流れる速度を設定
        slidesToShow: 4, // 表示するスライドの数
        swipe: false, // 操作による切り替えはさせない
        arrows: false, // 矢印非表示
        pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
        pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
        responsive: [
          {
            breakpoint: 834,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  }

  dotImageSlider() {
    try {
      // ドットが画像タイプのスライダー
      $(this.slider).slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: true,
        arrows: false,
        customPaging: function (slick, index) {
          var targetImage = slick.$slides.eq(index).find("img").attr("src");
          return "<img src=" + targetImage + ">";
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

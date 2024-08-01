import Accordion from "./module/accordion.js";
import Breadcrumb from "./module/breadcrumb.js";
import Hamburger from "./module/hamburger.js";
import MarginTop from "./module/margin-top.js";
import Scroller from "./module/scroller.js";
import Slider from "./module/slider.js";
import SmoothScroller from "./module/smooth-scroll.js";

// 必須
window.addEventListener("DOMContentLoaded", () => {
  try {
    // 以下、ディレクターも知っている人がいるので、入れられるように
    // 変更禁止
    document.querySelectorAll(".disnone").forEach((el) => {
      el.remove();
    });
  } catch (error) {
    console.log(error);
  }

  try {
    // バイリンガル
    var switch_btn =
      '<div class="switch"><input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox"><label for="cmn-toggle-1"><span></spsn></label></div>';
    $("#builingual").prepend(switch_btn);
    var windowSize = window.innerWidth;
    if (windowSize > 1001) {
    } else {
      $("#builingual").prependTo("#global_header");
    }
    $("span.translate").next().hide();
    $("div.translate").hide();
    $(".switch").on("click", function () {
      if ($("#cmn-toggle-1").prop("checked")) {
        console.log("チェックされています。");
        $("span.translate").next().show();
        $("span.translate").hide();
        $("div.translate").show();
        $("div.translate").prev().hide();
      } else {
        console.log("チェックされていません。");
        $("span.translate").next().hide();
        $("span.translate").show();
        $("div.translate").hide();
        $("div.translate").prev().show();
      }
    });
  } catch (error) {
    console.log(error);
  }

  try {
    // fancybox
    $(".fancybox").each(function (i) {
      $(this)
        .find("a")
        .attr({
          "data-fancybox": "group" + i,
          "data-type": "image",
        });
    });
  } catch (error) {
    console.log(error);
  }
});

// クラス実装
window.addEventListener("DOMContentLoaded", function () {
  // 定数
  const HEADER = document.querySelector(".header");

  // スライダー
  const slider = new Slider(".mv-slider");
  slider.mainSlider();

  // ハンバーガー
  // クラス名を変更して使用してください。
  const HAMBURGER_NODE = document.querySelector(".hamburger");
  if (HAMBURGER_NODE) {
    const hamburger = new Hamburger(HAMBURGER_NODE);
    hamburger.toggleHamburger();
  }

  // ぱんくず
  // クラス名を変更して使用してください。
  const BREADCRUMB_NODE = document.querySelector(".mv-sub h1");
  if (BREADCRUMB_NODE) {
    const breadcrumb = new Breadcrumb(BREADCRUMB_NODE);
    breadcrumb.displayBreadCrumb("HOME");
  }

  // アコーディオン
  // クラス名を変更して使用してください。
  const ACCRODIONS = document.querySelectorAll(".flex-faq");
  ACCRODIONS.forEach(function (item) {
    const accordion = new Accordion(item);
    accordion.click();
  });

  // ヘッダーの高さ分、margin-topを設ける。
  // クラス名を変更して使用してください。
  // if (HEADER) {
  //   const marginTop = new MarginTop(HEADER);
  //   marginTop.bootMarginTop();
  // }

  // フッター位置まで来たらクラス付与する。
  // クラス名を変更して使用してください。
  const FOOTER = document.querySelector(".footer");
  if (FOOTER) {
    const footer = new Scroller(FOOTER);
    footer.inOut({
      className: "js-arrive-in-out",
      gaveClassElement: document.querySelector(".header-contact"),
    });
  }

  // スクロール時、ヘッダーにクラス付与する。
  // クラス名を変更して使用してください。
  if (HEADER) {
    const HEADER_SCROLLER = new Scroller(HEADER);
    HEADER_SCROLLER.scrolled({
      className: "js-scrolled-header",
      gaveClassElement: document.querySelector(".header"),
    });
  }

  // スムーズスクロール
  const smoothScroller = new SmoothScroller(HEADER, 20);
  smoothScroller.smoothScroll();
});

// クラス実装以外
window.addEventListener("DOMContentLoaded", function () {
  try {
    // sns等のスライダー
    // $(".flex-slider, .sns-slider .sns_list").slick({
    //   autoplay: true, // 自動でスクロール
    //   autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    //   speed: 5000, // スライドが流れる速度を設定
    //   cssEase: "linear", // スライドの流れ方を等速に設定
    //   slidesToShow: 5, // 表示するスライドの数
    //   swipe: false, // 操作による切り替えはさせない
    //   arrows: false, // 矢印非表示
    //   pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    //   pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    //   responsive: [
    //     {
    //       breakpoint: 834,
    //       settings: {
    //         slidesToShow: 3,
    //       },
    //     },
    //     {
    //       breakpoint: 640,
    //       settings: {
    //         slidesToShow: 1,
    //       },
    //     },
    //   ],
    // });
  } catch (error) {
    console.log(error);
  }

  try {
    // snsのテキスト制限
    const LIMIT_STRING_LENGTH = 50; // 文字数

    const SNS_LIST = document.querySelectorAll(".sns_list .slick-slide");

    if (SNS_LIST) {
      SNS_LIST.forEach(function (item) {
        const TEXT = item.querySelector(".caption");
        const TEXT_SPLIT = TEXT.textContent;

        if (TEXT.textContent.length > LIMIT_STRING_LENGTH) {
          TEXT.textContent = TEXT_SPLIT.substring(0, LIMIT_STRING_LENGTH) + "...";
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

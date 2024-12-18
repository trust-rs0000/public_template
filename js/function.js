import Accordion from "./module/accordion.js";
import Breadcrumb from "./module/breadcrumb.js";
import Hamburger from "./module/hamburger.js";
import MarginTop from "./module/margin-top.js";
import OpeningAnimation from "./module/opening-animation.js";
import Scroller from "./module/scroller.js";
import Slider from "./module/slider.js";
import SmoothScroller from "./module/smooth-scroll.js";
import Text from "./module/text.js";

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
        .find("a:has(img)")
        .attr({
          "data-fancybox": "group" + i,
          "data-type": "image",
        });
    });
  } catch (error) {
    console.log(error);
  }

  // scroll-hint
  try {
    new ScrollHint(".tbl_scroll", {
      i18n: {
        scrollable: "スクロールできます",
      },
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

  // SNSスライダー
  const itemSlider = new Slider(".sns-slider .sns_list");
  itemSlider.itemSlider();

  // ドットが画像のスライダー
  const flexGallery = new Slider(".flex-gallery");
  flexGallery.dotImageSlider();

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

  // 文字数省略
  const SNS_LIST = document.querySelectorAll(".sns_list > div");
  if (SNS_LIST) {
    SNS_LIST.forEach(function (sns) {
      const SNS_TEXT = sns.querySelector(".caption");
      const textSpliter = new Text(SNS_TEXT);
      textSpliter.split(220);
    });
  }

  // オープニングアニメーション
  const LOADER = document.querySelector(".loader");
  if (LOADER) {
    const op = new OpeningAnimation(LOADER);

    // 来訪済みか判断。
    op.checkVisited();

    // 以下、アニメーションの詳細な記述を記載してください。
  }
});

// バイリンガルでヘッダーを翻訳したときも動作するように、loadイベントに記載。
window.addEventListener("load", function () {
  // ハンバーガー
  // クラス名を変更して使用してください。
  const HAMBURGER_NODE = document.querySelectorAll(".hamburger");
  HAMBURGER_NODE.forEach(function (element) {
    if (element) {
      const hamburger = new Hamburger(element);
      hamburger.toggleHamburger();
      hamburger.clickAnchor();
    }
  });
});

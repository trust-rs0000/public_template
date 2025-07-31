import Accordion from "./module/accordion.js";
import Breadcrumb from "./module/breadcrumb.js";
import Hamburger from "./module/hamburger.js";
import OpeningAnimation from "./module/opening-animation.js";
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

  // smooth-scroll
  // https://github.com/cferdinandi/smooth-scroll
  try {
    new SmoothScroll('a[href*="#"]', {
      speed: 500,
      // easing: "easeInOutQuint",
      speedAsDuration: true,
      header: ".header",
    });
  } catch (error) {
    console.log(error);
  }
});

// smooth-scroll 外部アンカーリンク
// 公式サイトにも掲載されているが、外部アンカーリンクの実装は不可能らしい。
// なので、一瞬ページトップに戻ってからスクロールしている。
window.addEventListener("load", function () {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);

    if (targetId) {
      // ターゲット要素の画面上の位置を取得して調整
      window.scrollTo({ top: 0, behavior: "auto" });

      const SCROLL = new SmoothScroll();
      SCROLL.animateScroll(this.document.querySelector(`#${targetId}`), "", {
        speed: 500,
        // easing: "easeInOutQuint",
        speedAsDuration: true,
        header: ".header",
      });
    }
  }
});

// 準必須
window.addEventListener("DOMContentLoaded", function () {
  // ぱんくず
  // クラス名を変更して使用してください。
  try {
    const H1 = document.querySelector(".page-header h1");
    if (H1) {
      const H1_TEXT = H1.textContent;
      const breadcrumb = new Breadcrumb({
        topText: "トップページへ",
        divider: "/",
        h1Text: H1_TEXT,
      });
      breadcrumb.displayBreadCrumb();
    }
  } catch (error) {
    console.log(error);
  }

  // アコーディオン
  // クラス名を変更して使用してください。
  const ACCRODIONS = document.querySelectorAll(".flex-faq");
  ACCRODIONS.forEach(function (item) {
    const accordion = new Accordion(item);
    accordion.click();
  });

  // 文字数省略
  const SNS_LIST = document.querySelectorAll(".sns_list > div");
  if (SNS_LIST) {
    SNS_LIST.forEach(function (sns) {
      const SNS_TEXT = sns.querySelector(".caption");
      const textSpliter = new Text(SNS_TEXT);
      textSpliter.split(60);
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

  // headerお問い合わせボタンの複製
  try {
    const DRAWER_WRAPPER = this.document.querySelector(".drawer__wrapper");
    const HEADER_CONTACT = this.document.querySelector(".header-contact");
    const CLONED_HEADER_CONTACT = HEADER_CONTACT.cloneNode(true);

    CLONED_HEADER_CONTACT.classList.add("js-cloned-header-contact");
    DRAWER_WRAPPER.appendChild(CLONED_HEADER_CONTACT);
  } catch (error) {
    console.log(error);
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

// masonry
// window.addEventListener("DOMContentLoaded", function () {
//   const FLEX_MASONRY = $(".flex-masonry");
//   FLEX_MASONRY.imagesLoaded(function () {
//     FLEX_MASONRY.masonry({
//       itemSelector: ".box",
//       // columnWidth: 320,
//       // fitWidth: true,
//       percentPosition: true,
//       gutter: 18,
//     });
//   });
// });

// gsap
window.addEventListener("load", function () {
  // 固定ボタンがフッターと被らないように
  // gsap.to(".header-contact", {
  //   autoAlpha: 0,
  //   scrollTrigger: {
  //     trigger: "footer",
  //     scrub: true,
  //     start: "top bottom",
  //     end: "bottom bottom",
  //   },
  // });

  // スクロール時、下からフェードイン
  gsap.utils.toArray(".gsap-fadein").forEach((target) => {
    gsap.fromTo(
      target,
      {
        y: 20,
        autoAlpha: 0,
        durarion: 1,
      },
      {
        y: 0,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: target,
          start: "top center",
        },
      }
    );
  });

  // 画像にカーテンアニメーション
  gsap.utils.toArray(".gsap-image-overlay").forEach((target) => {
    ScrollTrigger.create({
      trigger: target,
      start: "top center",
      toggleClass: { targets: target, className: "gsap-scrollIn" },
      once: true,
    });
  });
});

// slick
window.addEventListener("DOMContentLoaded", function () {
  // メインビジュアルスライダー
  $(".mv-slick").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    fade: true,
  });

  // instagramスライダー
  $(".flex-slick-side-overflow, .sns-slick .sns_list").slick({
    // infinite: false,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    arrows: true,
    prevArrow: '<div class="slick-arrow slick-prev-arrow"><i class="las la-angle-left"></i></div>',
    nextArrow: '<div class="slick-arrow slick-next-arrow"><i class="las la-angle-right"></i></div>',
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    pauseOnHover: false,
    swipeToSlide: true,
    variableWidth: true,
    // waitForAnimate: false,

    responsive: [
      {
        breakpoint: 640,
        settings: {
          infinite: true,
          dots: true,
          dotsClass: "js-slick-dots",
          variableWidth: false,
        },
      },
    ],
  });

  // ドット付スライダー
  $(".flex-slick").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    dotsClass: "flex-slick__dots",
    arrows: false,
  });

  // ドットが画像タイプのスライダー
  $(".flex-slick-gallery").slick({
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

  // 無限スライダー
  $(".flex-slick-infinite , .sns-slick-infinite .sns_list").slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 6000, // スライドが流れる速度を設定
    slidesToShow: 5, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    cssEase: "linear",
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

// カスタム記述
window.addEventListener("DOMContentLoaded", function () {
  // 追加で記述する際はここから記載してください
});

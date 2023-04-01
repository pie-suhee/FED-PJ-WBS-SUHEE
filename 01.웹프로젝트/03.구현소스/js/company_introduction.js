const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const create = (x) => document.createElement(x);

/* poster 슬라이드 시작 */
$(document).ready(function () {
  let posterSwiper = new Swiper(".posterSwiper", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
             '<span class="' + totalClass + '"></span>';
      }
    },
    speed: 500,
    loop: true,
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      }
    }
  });
});
/* poster 슬라이드 끝 */
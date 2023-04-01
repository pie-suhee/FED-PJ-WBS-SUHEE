import nav from "./nav.js";

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const create = (x) => document.createElement(x);

/* nav html 동적 생성 시작 */

/* nav html 동적 생성 끝 */

/* nav 시작 */
const body = qs("body");
const w_logo = qs("#top .w_con .logo img");
const m_logo = qs("#top .m_con .logo img");

qs("#m_nav > .contents_con .close_btn").style.top = `calc(4vh + ${m_logo.offsetHeight/2}px)`;
qs("#top .btn_con").style.top =`calc(4vh + ${m_logo.offsetHeight/2}px)`;

window.addEventListener('resize', function() {
  qs("#m_nav > .contents_con .close_btn").style.top = `calc(4vh + ${m_logo.offsetHeight/2}px)`;
  qs("#top .btn_con").style.top =`calc(4vh + ${m_logo.offsetHeight/2}px)`;
});
/* nav 끝 */

/* history 배치 시작 */
const year = qs(".timeline_slide .swiper-slide .year_con");

if (body.offsetWidth > 1000){
  qs("#company section.history > .contents_con").style.paddingTop = `calc(${w_logo.offsetHeight}px + 4vh)`;
  qs(".timeline_slide").style.height = `calc(100vh - ${w_logo.offsetHeight}px - 4vh - 5vw)`;
} else{
  qs("#company section.history > .contents_con").style.paddingTop = `calc(${m_logo.offsetHeight}px + 10vh)`;
  qs(".timeline_slide").style.height = `100%`;
  qs(".timeline_slide .swiper-slide").style.marginTop = `0`;
  qs(".timeline_slide .swiper-button-next").style.top = `calc(${m_logo.offsetHeight + year.offsetHeight/2}px + 10vh)`;
  qs(".timeline_slide .swiper-button-prev").style.top = `calc(${m_logo.offsetHeight + year.offsetHeight/2}px + 10vh)`;
}

window.addEventListener('resize', function() {
  if (body.offsetWidth > 1000){
    qs("#company section.history > .contents_con").style.paddingTop = `calc(${w_logo.offsetHeight}px + 4vh)`;
    qs(".timeline_slide").style.height = `calc(100vh - ${w_logo.offsetHeight}px - 4vh - 5vw)`;
  } else{
    qs("#company section.history > .contents_con").style.paddingTop = `calc(${m_logo.offsetHeight}px + 10vh)`;
    qs(".timeline_slide").style.height = `100%`;
    qs(".timeline_slide .swiper-slide").style.marginTop = `0`;
    qs(".timeline_slide .swiper-button-next").style.top = `calc(${m_logo.offsetHeight + year.offsetHeight/2}px + 10vh)`;
    qs(".timeline_slide .swiper-button-prev").style.top = `calc(${m_logo.offsetHeight + year.offsetHeight/2}px + 10vh)`;
  }
});
/* history 배치 끝 */

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

/* timeline 슬라이드 시작 */
let timelineSwiper = new Swiper ('.timelineSwiper', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '.swiper-pagination',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    1000: {
      direction: 'horizontal',
    }
  }
});
/* timeline 슬라이드 끝 */
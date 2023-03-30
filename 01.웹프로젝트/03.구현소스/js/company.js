import nav from "./nav.js";

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const create = (x) => document.createElement(x);

/* nav html 동적 생성 시작 */
/* const lnb = qs('.lnb');
const mbg = create('div');
mbg.classList.add('mbg');

const navUl = create('ul');

for(let i in nav.lnb){
	let navLi = create('li');

  let navLink = create('a');
  navLink.setAttribute('href', `javascript:alert('페이지 준비중입니다.');`);
  navLink.setAttribute('onfocus', `this.blur()`);

  navLink.textContent = `${i}`;
  
  navLi.appendChild(navLink);
	navUl.appendChild(navLi);
}

lnb.appendChild(mbg);
lnb.appendChild(navUl); */
/* nav html 동적 생성 끝 */

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
    768: {
      direction: 'horizontal',
    }
  }
});
/* timeline 슬라이드 끝 */
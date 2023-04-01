import history from "./history.js";

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const create = (x) => document.createElement(x);

/* history html 동적 생성 시작 */
for(let i in history){
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperSlide.dataset.year = `${i}`;

    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide_div');

    const yearCon = document.createElement('div');
    yearCon.classList.add('year_con');

    const timelineYear = document.createElement('span');
    timelineYear.classList.add('timeline-year');
    timelineYear.textContent = `${i}`;

    yearCon.appendChild(timelineYear);

    const listCon = document.createElement('div');
    listCon.classList.add('list_con');

    const ul = document.createElement('ul');

    for(let list of history[i]){
        const li = document.createElement('li');

        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.textContent = '•';

        const kor = document.createElement('span');
        kor.classList.add('kor');
        kor.textContent = `${list}`;

        li.appendChild(dot);
        li.appendChild(kor);

        ul.appendChild(li);
    }

    listCon.appendChild(ul);

    slideDiv.appendChild(yearCon);
    slideDiv.appendChild(listCon);

    swiperSlide.appendChild(slideDiv);

    qs(".swiper-wrapper").appendChild(swiperSlide);
}
/* history html 동적 생성 끝 */

/* timeline 슬라이드 시작 */
let timelineSwiper = new Swiper ('.timelineSwiper', {
    direction: 'vertical',
    loop: false,
    speed: 1600,
    pagination: '.swiper-pagination',
    paginationBulletRender: function (swiper, index, className) {
      let year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
      return '<span class="' + className + '">' + year + '</span>';
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      1200: {
        direction: 'horizontal',
      }
    }
  });
/* timeline 슬라이드 끝 */

/* history 배치 시작 */
window.addEventListener("DOMContentLoaded", () => {
    const body = qs("body");
    const slides = qsa(".timeline_slide .swiper-slide .slide_div");
    const year = qs(".timeline_slide .swiper-slide .year_con");
    const w_logo = qs("#top .w_con .logo img");
    const m_logo = qs("#top .m_con .logo img");

    if (body.offsetWidth > 1200){
        for(let i=0; i < slides.length; i++) {
            slides[i].style.paddingTop = `calc(${w_logo.offsetHeight}px + 4vh + min(5vh, 100px))`;
        }
    } else{
        qs("#company section.history > .contents_con").style.paddingTop = `calc(${m_logo.offsetHeight}px + 10vh)`;
        qs(".timeline_slide").style.height = `100%`;
        qs(".timeline_slide .swiper-slide").style.marginTop = `0`;
        qs(".timeline_slide .swiper-button-next").style.top = `calc(${m_logo.offsetHeight + year.offsetHeight/2}px + 10vh)`;
        qs(".timeline_slide .swiper-button-prev").style.top = `calc(${m_logo.offsetHeight + year.offsetHeight/2}px + 10vh)`;
    }

    window.addEventListener('resize', function() {
        if (body.offsetWidth > 1200){
              for(let i=0; i < slides.length; i++) {
                  slides[i].style.paddingTop = `calc(${w_logo.offsetHeight}px + 4vh + min(5vh, 100px))`;
              }
        } else{
            qs("#company section.history > .contents_con").style.paddingTop = `calc(${m_logo.offsetHeight}px + 10vh)`;
            qs(".timeline_slide").style.height = `100%`;
            qs(".timeline_slide .swiper-slide").style.marginTop = `0`;
            qs(".timeline_slide .swiper-button-next").style.top = `calc(${m_logo.offsetHeight + year.offsetHeight/2}px + 10vh)`;
            qs(".timeline_slide .swiper-button-prev").style.top = `calc(${m_logo.offsetHeight + year.offsetHeight/2}px + 10vh)`;
        }
    });
});
/* history 배치 끝 */


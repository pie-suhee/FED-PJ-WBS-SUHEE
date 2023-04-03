import artist from "./artist.js";
import nav from "./nav.js";

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const create = (x) => document.createElement(x);

/* nav html 동적 생성 시작 */
const lnb = qs(".lnb");
const mbg = create("div");
mbg.classList.add("mbg");

const navUl = create("ul");

for (let i in nav.lnb) {
    let navLi = create("li");
    let navLink = create("a");
    if (nav.lnb[i].connect === "#") {
        navLink.setAttribute("href", `javascript:alert('페이지 준비중입니다.');`);
    } else {
        navLink.setAttribute("href", `./${nav.lnb[i].low}/${nav.lnb[i].connect}.html`);
    }
    navLink.setAttribute("onfocus", `this.blur()`);

    navLink.textContent = `${i}`;

    navLi.appendChild(navLink);
    navUl.appendChild(navLi);
}

lnb.appendChild(mbg);
lnb.appendChild(navUl);
/* nav html 동적 생성 끝 */

/* nav 시작 */
const allNavLi = qsa(".lnb li");

allNavLi.forEach((ele) => {
    ele.onmouseenter = (e) => {
        let eLeft = ele.offsetLeft;
        let eWidth = ele.offsetWidth;
        let eHeight = ele.offsetHeight;

        mbg.style.left = eLeft + "px";
        mbg.style.width = eWidth + "px";
        mbg.style.height = eHeight + "px";
        mbg.style.opacity = 1;
    };

    ele.onmouseleave = (e) => {
        mbg.style.opacity = 0;
    };
});
/* nav 끝 */

/* slide html 동적 생성 시작 */
let newSection = create("div");
newSection.classList.add("slide_con");

let newContentsCon = create("div");
newContentsCon.classList.add("contents_con");

for (let i in artist) {
    let newImgCon = create("div");
    newImgCon.classList.add("img_con");

    let newLink = create("a");
    newLink.setAttribute("href", `javascript:alert('페이지 준비중입니다.');`);
    newLink.setAttribute("onfocus", `this.blur()`);

    let newImg = create("img");
    newImg.setAttribute("src", artist[i].url);
    newImg.setAttribute("alt", artist[i].name);

    newLink.appendChild(newImg);
    newImgCon.appendChild(newLink);
    newContentsCon.appendChild(newImgCon);
}

newSection.appendChild(newContentsCon);

qs(".main_con").appendChild(newSection);
/* slide html 동적 생성 끝 */

/* img_con 배치 & scroll 이벤트 시작 */
const wheel = qs(".contents_con");
const cards = qsa(".img_con");
const total = cards.length;
let protUp = 0;
let angle = 360 / total;
let deg = 0;
let prevMob;

function setup() {
    wheel.style.bottom = `calc(-${wheel.offsetWidth}px + 10vh)`;

    cards.forEach((ele, idx) => {
        ele.style.transform = `rotate(${idx * angle}deg) translateY(-${wheel.offsetWidth / 2 + ele.offsetHeight}px)`;
    });
}

function updateCards(mob) {
    // 전달값 없으면 0할당후 전달
    if (protUp) return;

    protUp = 1;

    setTimeout(() => {
        protUp = 0;
    }, 300);

    let dir = event.wheelDelta;

    // 모바일일때 mob에 전달값 있음!
    if (mob !== 1) {
      if (mob === prevMob) return;

      // 이전 호출의 값을 저장하여 기억함
      prevMob = mob;

      dir = mob;
    }

    if (dir < 0) deg = deg - angle;
    else deg = deg + angle;

    if (deg < -360) deg = -360;
    else if (deg > 0) deg = 0;

    wheel.style.transform = `translateX(-50%) rotate(${deg}deg)`;
}

setup();
window.addEventListener("resize", setup);
window.addEventListener("wheel", () => updateCards(1));
/* img_con 배치 & scroll 이벤트 끝 */

/* 모바일 drag 이벤트 시작 */
// 변수만들기
// (1) 드래그 상태변수 : true-드래그중, false-드래그아님
let drag = false;
// (2) 첫번째 위치포인트 first x, first y
let fx;
// (3) 마지막 위치포인트 last x, last y
let lx = 0; // 마지막위치는 처음에 0할당!
// (4) 움직일때 위치포인트 move x, move y
let mvx, mvy;
// (5) 위치이동 차이 결과변수 result x, result y
let rx; // -> rx를 함수바깥 전역으로!

// (1) 드래그상태 true
const dTrue = () => (drag = true);

// (2) 드래그상태 false
const dFalse = () => (drag = false);

// (3) 드래그 움질일때 작동함수
const dMove = () => {
    // 드래그 상태일때만 실행
    if (drag) {
        // 1. 드래그 상태에서 움직일때 위치값 : mvx,mvy
        mvx = event.pageX || event.changedTouches[0].pageX;
        // 모바일일때는 뒤엣것이 유효하므로 할당되어 사용된다!

        // 2. 움직일때 위치값 - 처음 위치값 : rx, ry
        // x축값은 left값, y축값은 top값 이동이다!
        rx = mvx - fx;
    } /////////// if : 드래그일때 ///////
}; ///////// dMove //////////////

// (4) 첫번째 위치포인트 셋팅함수
const firstPoint = () => {
    fx = event.pageX || event.changedTouches[0].pageX;
    // 변수 = 할당값1 || 할당값2;
    // -> undefined / null 값이 아닌값으로 할당된다!
    // -> 우선순위로 DT쪽을 먼저써준다!
    // fy = event.pageY;
};

// (1) 마우스 이벤트 : touchstart
window.addEventListener("touchstart", () => {
    dTrue();
    firstPoint();
});

// (2) 마우스 이벤트 : touchmove
window.addEventListener("touchmove", dMove);

// (3) 마우스 이벤트 : touchend
window.addEventListener("touchend", () => {
    dFalse();
    updateCards(rx);
});
/* 모바일 drag 이벤트 끝 */

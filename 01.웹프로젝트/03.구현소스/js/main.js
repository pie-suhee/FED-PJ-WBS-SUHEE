import artist from "./artist.js";
import nav from "./nav.js";

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const create = (x) => document.createElement(x);

/* nav html 동적 생성 시작 */
const lnb = qs('.lnb');
const mbg = create('div');
mbg.classList.add('mbg');

const navUl = create('ul');

for(let i in nav.lnb){
	let navLi = create('li');
  let navLink = create('a');
  if(nav.lnb[i].low === "#") {
    navLink.setAttribute('href', `javascript:alert('페이지 준비중입니다.');`);
  }
  else {
    navLink.setAttribute('href', `./${nav.lnb[i].low}.html`);
  }
  navLink.setAttribute('onfocus', `this.blur()`);

  navLink.textContent = `${i}`;
  
  navLi.appendChild(navLink);
	navUl.appendChild(navLi);
}

lnb.appendChild(mbg);
lnb.appendChild(navUl);
/* nav html 동적 생성 끝 */

/* nav 시작 */
const allNavLi = qsa(".lnb li");

allNavLi.forEach(ele=>{
  ele.onmouseenter = e => {
      let eLeft = ele.offsetLeft;
      let eWidth = ele.offsetWidth;
      let eHeight = ele.offsetHeight;
  
      mbg.style.left = eLeft+"px";
      mbg.style.width = eWidth+"px";
      mbg.style.height = eHeight+"px";
      mbg.style.opacity = 1;
  };

  ele.onmouseleave = e => {
      mbg.style.opacity = 0;
  };
});
/* nav 끝 */

/* slide html 동적 생성 시작 */
let newSection = create('div');
newSection.classList.add('slide_con');

let newContentsCon = create('div');
newContentsCon.classList.add('contents_con');

for(let i in artist){
	let newImgCon = create('div');
	newImgCon.classList.add('img_con');

  let newLink = create('a');
  newLink.setAttribute('href', `javascript:alert('페이지 준비중입니다.');`);
  newLink.setAttribute('onfocus', `this.blur()`);

	let newImg = create('img');
	newImg.setAttribute('src', artist[i].url);
	newImg.setAttribute('alt', artist[i].name);
  
  
	newLink.appendChild(newImg);
  newImgCon.appendChild(newLink);
	newContentsCon.appendChild(newImgCon);
}

newSection.appendChild(newContentsCon);

qs(".main_con").appendChild(newSection);

let newScrollDown = create('div');
newScrollDown.classList.add('scroll_down');
newScrollDown.textContent = 'Scroll down';

let newArrow = create('div');
newArrow.classList.add('arrow');

newScrollDown.appendChild(newArrow);

qs(".main_con").appendChild(newScrollDown);
/* slide html 동적 생성 끝 */

/* img_con 배치 & scroll 이벤트 시작 */
const wheel = qs(".contents_con");
const cards = qsa(".img_con");
const total = cards.length;
let protUp = 0;
let angle = 360/total; 
let deg = 0;

function setup(){
    wheel.style.bottom = `calc(-${wheel.offsetWidth}px + 10vh)`;

    cards.forEach((ele,idx)=>{
        ele.style.transform = `rotate(${idx*angle}deg) translateY(-${wheel.offsetWidth/2 + ele.offsetHeight}px)`;
    })
}

function updateCards() {
    if(protUp) return;

    protUp = 1;

    setTimeout(() => {
        protUp=0;
    }, 300);

    let dir = event.wheelDelta;
    console.log(dir);

    if(dir < 0)  deg = deg - angle;
    else deg = deg + angle;

    if(deg<-360) deg=-360;
    else if(deg>0) deg=0;

    wheel.style.transform = `translateX(-50%) rotate(${deg}deg)`; 
}

setup();
window.addEventListener("resize", setup);
window.addEventListener("wheel", updateCards);
/* img_con 배치 & scroll 이벤트 끝 */
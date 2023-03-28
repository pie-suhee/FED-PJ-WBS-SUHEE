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
  navLink.setAttribute('href', `javascript:alert('페이지 준비중입니다.');`);
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
const wheel = document.querySelector(".contents_con");
const cards = document.querySelectorAll(".img_con");
const total = cards.length;
const slice = 2 * Math.PI / total;
let scrollProgress = 0;

// function setup() {
//   const radius = 1500;
//   const center = 1500;

//   cards.forEach((card, index) => {
//     const angle = index * slice;
//     const inverseAngle = (index + total / 2) % total * slice;
//     const x = center + radius * Math.sin(angle);
//     const y = center - radius * Math.cos(angle);
//     const firstX = center + radius * Math.sin(0);
//     const inverseY = (center - radius * Math.cos(inverseAngle)) / 2;

//     card.style.transform = `translate(calc(${x - firstX}px - 50%), calc(${y - inverseY}px - 50%)) rotate(-${angle}rad)`;
//     card.querySelector("img").style.transform = `rotate(${angle * 2}rad)`;
//   });
// }

function setup(){
  cards.forEach((ele,idx)=>{
    ele.style.transform = `rotate(${idx*20}deg) translateY(-450%)`;
  })
}

setup();

let protUp = 0;
let angle = 360/32*1.76; 
let deg = 0;

function updateCards() {
  if(protUp) return;
  protUp = 1;
  setTimeout(() => {
    protUp=0;
  }, 300);

  let dir = event.wheelDelta;
  
  if(dir < 0)  deg = deg - angle;
  else deg = deg + angle;

  if(deg<-360) deg=-360;
  else if(deg>0) deg=0;

  console.log(dir,deg);
  
  wheel.style.transform = `translateX(-50%) rotate(${deg}deg)`;

   
}
// function updateCards() {
//   if(protUp) return;
//   protUp = 1;
//   setTimeout(() => {
//     protUp=0;
//   }, 500);
//   /* const radius = wheel.offsetWidth / 2;
//   const center = wheel.offsetWidth / 2; */
//   const radius = 500;
//   const center = 1500;
//   const scrollPosition = window.scrollY;
//   scrollProgress = scrollPosition / (document.body.offsetHeight - window.innerHeight);
  
//   cards.forEach((card, index) => {
//     if((index - scrollProgress * total) < 0){
//       index += total;
//     }
//     let angle = (index - scrollProgress * total) * slice; 
//     const inverseAngle = (index + total / 2 - scrollProgress * total) % total * slice;
//     const x = center + radius * Math.sin(angle);
//     const y = center - radius * Math.cos(angle);
//     const firstX = center + radius * Math.sin(0);
//     const inverseY = (center - radius * Math.cos(inverseAngle)) / 2;
    
//     card.style.transform = `translate(calc(${x - firstX}px - 50%), calc(${y - inverseY}px - 50%)) rotate(-${angle}rad)`;
//     card.querySelector("img").style.transform = `rotate(${angle * 2}rad)`;
//   });
// }

// setup();

window.addEventListener("wheel", updateCards);
/* img_con 배치 & scroll 이벤트 끝 */
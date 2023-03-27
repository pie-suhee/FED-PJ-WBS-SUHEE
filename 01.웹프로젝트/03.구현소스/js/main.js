import artist from "./artist.js";

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

/* nav 시작 */
const gnb = qsa(".gnb li");
const mbg = qs(".mbg");

gnb.forEach(ele=>{
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
let newSection = document.createElement('div');
newSection.classList.add('slide_con');

let newContentsCon = document.createElement('div');
newContentsCon.classList.add('contents_con');

for(let i in artist){
	let newImgCon = document.createElement('div');
	newImgCon.classList.add('img_con');

  let newLink = document.createElement('a');
  newLink.setAttribute('href', `javascript:alert('페이지 준비중입니다.');`);
  newLink.setAttribute('onfocus', `this.blur()`);

	let newImg = document.createElement('img');
	newImg.setAttribute('src', artist[i].url);
	newImg.setAttribute('alt', artist[i].name);
  
  
	newLink.appendChild(newImg);
  newImgCon.appendChild(newLink);
	newContentsCon.appendChild(newImgCon);
}

newSection.appendChild(newContentsCon);

qs(".main_con").appendChild(newSection);

let newScrollDown = document.createElement('div');
newScrollDown.classList.add('scroll_down');
newScrollDown.textContent = 'Scroll down';

let newArrow = document.createElement('div');
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

function setup() {
  const radius = 900;
  const center = 900;

  cards.forEach((card, index) => {
    const angle = index * slice;
    const inverseAngle = (index + total / 2) % total * slice;
    const x = center + radius * Math.sin(angle);
    const y = center - radius * Math.cos(angle);
    const firstX = center + radius * Math.sin(0);
    const inverseY = (center - radius * Math.cos(inverseAngle)) / 2;

    card.style.transform = `translate(calc(${x - firstX}px - 50%), calc(${y - inverseY}px - 50%)) rotate(-${angle}rad)`;
    card.querySelector("img").style.transform = `rotate(${angle * 2}rad)`;
  });
}

function updateCards() {
  /* const radius = wheel.offsetWidth / 2;
  const center = wheel.offsetWidth / 2; */
  const radius = 900;
  const center = 900;
  const scrollPosition = window.scrollY;
  scrollProgress = scrollPosition / (document.body.offsetHeight - window.innerHeight);
  
  cards.forEach((card, index) => {
    if((index - scrollProgress * total) < 0){
      index += total;
    }
    let angle = (index - scrollProgress * total) * slice; 
    const inverseAngle = (index + total / 2 - scrollProgress * total) % total * slice;
    const x = center + radius * Math.sin(angle);
    const y = center - radius * Math.cos(angle);
    const firstX = center + radius * Math.sin(0);
    const inverseY = (center - radius * Math.cos(inverseAngle)) / 2;
    
    card.style.transform = `translate(calc(${x - firstX}px - 50%), calc(${y - inverseY}px - 50%)) rotate(-${angle}rad)`;
    card.querySelector("img").style.transform = `rotate(${angle * 2}rad)`;
  });
}

setup();

window.addEventListener("scroll", updateCards);
window.addEventListener("resize", setup);
/* img_con 배치 & scroll 이벤트 끝 */
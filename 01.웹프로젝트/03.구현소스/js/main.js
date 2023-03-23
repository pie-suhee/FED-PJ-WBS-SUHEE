import artist from "./artist.js";
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

let newSection = document.createElement('div');
newSection.classList.add('slide_con');

let newContentsCon = document.createElement('div');
newContentsCon.classList.add('contents_con');

for(let i in artist){
	let newImgCon = document.createElement('div');
	newImgCon.classList.add('img_con');

	let newImg = document.createElement('img');
	newImg.setAttribute('src', artist[i].url);
	newImg.setAttribute('alt', artist[i].name);

	newImgCon.appendChild(newImg);
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

const wheel = document.querySelector(".contents_con");
const cards = document.querySelectorAll(".img_con");
const total = cards.length;
const slice = 2 * Math.PI / total;

function setup() {
  const radius = wheel.offsetWidth / 2;
  const center = wheel.offsetWidth / 2;
  
  cards.forEach((card, index) => {
    const angle = index * slice;
    const x = center + radius * Math.sin(angle);
    const y = center - radius * Math.cos(angle);
    
    card.style.transform = `translate(${x}px, ${y}px) rotate(-${angle}rad)`;
	card.querySelector("img").style.transform = `rotate(${angle*2}rad)`;
  });
}

setup();

window.addEventListener("resize", setup);

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
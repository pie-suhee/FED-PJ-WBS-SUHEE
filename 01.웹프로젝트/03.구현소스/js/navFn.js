const qs = (x) => document.querySelector(x);

function navFn() {
    const m_nav = qs("#m_nav");
    const navBtn = qs(".btn_con > a");
  
    if (m_nav.style.display === "" || m_nav.style.display === "none") {
        m_nav.style.display = "block";
        navBtn.style.display = "none";
        m_nav.classList.remove('close');
        m_nav.classList.add('open');
        m_nav.removeEventListener('animationend', aniNav);
        m_nav.addEventListener('animationend', aniNav);
    } else if(m_nav.style.display === "block") {
        m_nav.classList.remove('open');
        m_nav.classList.add('close');
        m_nav.removeEventListener('animationend', aniNav);
        m_nav.addEventListener('animationend', aniNav);
    }
  
    function aniNav(){
        m_nav.removeEventListener('animationend', aniNav);
        if(m_nav.classList.contains('close')) {
            m_nav.style.display = "none";
            navBtn.style.display = "block";
        }
    }
}

/* nav 시작 */

window.addEventListener("DOMContentLoaded", () => {
    const m_logo = qs("#top .m_con .logo img");

    /* nav html 동적 생성 시작 */

    /* nav html 동적 생성 끝 */
    qs("#m_nav > .contents_con .close_btn").style.top = `calc(4vh + ${m_logo.offsetHeight/2}px)`;
    qs("#top .btn_con").style.top =`calc(4vh + ${m_logo.offsetHeight/2}px)`;

    window.addEventListener('resize', function() {
      qs("#m_nav > .contents_con .close_btn").style.top = `calc(4vh + ${m_logo.offsetHeight/2}px)`;
      qs("#top .btn_con").style.top =`calc(4vh + ${m_logo.offsetHeight/2}px)`;
    });
});
/* nav 끝 */
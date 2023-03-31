const qs = (x) => document.querySelector(x);

function navFn() {
    const m_nav = qs("#m_nav");
    const navBg = qs("#nav_bg");
    const navBtn = qs(".btn_con > a");
    const height = `${document.documentElement.scrollHeight}px`;
    
    qs("#m_nav > .contents_con").style.height = height;
  
    if (m_nav.style.display === "" || m_nav.style.display === "none") {
        m_nav.style.display = "block";
        navBg.style.display = "block";
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
            navBg.style.display = "none";
            navBtn.style.display = "block";
        }
    }
}
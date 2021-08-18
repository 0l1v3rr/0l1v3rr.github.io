const skills = document.querySelectorAll('.skills-content');
const sections = document.querySelectorAll('section[id]');

skills.forEach(e => {
    e.onclick = () => {
        if(e.className == "skills-content skills-close") {
            for(let i = 0; i < skills.length; i++) {
                skills[i].className = "skills-content skills-close";
            }
            e.className = "skills-content skills-open";
        } else if(e.className == "skills-content skills-open") {
            for(let i = 0; i < skills.length; i++) {
                skills[i].className = "skills-content skills-close";
            }
        }
    }
});

const swiper = new Swiper('.project-container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
    },
    mousewheel: false,
    keyboard: false,
});

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(e => {
        const height = e.offsetHeight;
        const top = e.offsetTop - 50;
        let sectionId = e.getAttribute('id');

        if(scrollY > top && scrollY <= top + height) {
            document.querySelector(`.nav a[href*='${sectionId}']`).classList.add('active');
        } else {
            document.querySelector(`.nav a[href*='${sectionId}']`).classList.remove('active');
        }
    });
}

function scrollUp() {
    const up = document.getElementById('scroll-up');
    if(this.scrollY >= 500) up.classList.add('show-scroll');
    else up.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollActive);
window.addEventListener('scroll', scrollUp);
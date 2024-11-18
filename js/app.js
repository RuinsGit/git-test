const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const navlist = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {


    if (!nav.classList.contains('ruins')) {
        nav.classList.add('ruins');
    } else {
        nav.classList.remove('ruins')
    }


});


let lastScrollY = 0;


window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 1) {

        header.classList.add('scrolled');
        header.classList.remove('drop');
    } else if (window.scrollY < lastScrollY && window.scrollY > 1) {

        header.classList.add('drop');
        header.classList.remove('scrolled');
    }


    if (window.scrollY === 0) {
        header.classList.remove('scrolled', "drop");
    }

    lastScrollY = window.scrollY;
});











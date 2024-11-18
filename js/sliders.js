const slides = document.querySelectorAll('.slide');
const applyButtons = document.querySelectorAll('.apply-btn');
let currentSlide = 0;

function changeSlide() {

    applyButtons[currentSlide].style.animation = 'none';
    applyButtons[currentSlide].style.opacity = '0';
    applyButtons[currentSlide].style.transform = 'scale(0) translateX(100px)';


    slides[currentSlide].classList.remove('active');


    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add('active');


    setTimeout(() => {
        applyButtons[currentSlide].style.animation = 'buttonAppear 2s forwards, buttonSlideIn 1s forwards';
        applyButtons[currentSlide].style.opacity = '1';
        applyButtons[currentSlide].style.transform = 'scale(1) translateX(0)';
    }, 300); // animasyonu slider değiştikten sonra başlat
}


setInterval(changeSlide, 8000);



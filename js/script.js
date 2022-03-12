var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: {
        sensitivity: 1,
    }
});


let menuBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
})
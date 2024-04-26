let Navbar = document.querySelector('.navbar')
let Fabars = document.querySelector('.fa-bars')

Fabars.onclick = () => {
    Navbar.classList.toggle("active")
}

var swiper = new Swiper(".home-slid", {
    navigation : {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        loop: true,
        keyboardControl: true,
    }
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    // }
});

// var swiper = new Swiper('.home-slid', {
//     pagination: '#banner .swiper-pagination',
//     slidesPerView: 1,
//     paginationClickable: true,
//     centeredSlides: true,
//     spaceBetween: 30,
//     loop: true,
//     keyboardControl: true,
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
// });
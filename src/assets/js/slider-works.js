import Swiper, { Navigation, Autoplay } from "swiper";

new Swiper(".works-slider", {
    modules: [Navigation, Autoplay],
    slidesPerView: "auto",
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: false,
    
    grid: {
        rows: 1,
    },

    navigation: {
        prevEl: ".works-slider__btn--prev",
        nextEl: ".works-slider__btn--next",
    },

    autoplay: {
        delay: 700,
    },

    breakpoints: {
        1230: {
            centeredSlides: false,
            slidesPerView: 3,
        },
        768: {
            centeredSlides: false,
            slidesPerView: 2,
        },
        500: {
            centeredSlides: true,
            slidesPerView: "auto",
        },
        1: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,

            autoplay: {
                delay: 1000,
            },
            
            grid: {
                rows: 1,
            },
        }
    }
});
import Swiper, { Navigation } from "swiper";

new Swiper(".works-slider", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    
    grid: {
        rows: 1,
    },

    navigation: {
        prevEl: ".works-slider__btn--prev",
        nextEl: ".works-slider__btn--next",
    },

    breakpoints: {
        500: {
            loop: true,
            centeredSlides: true,
            slidesPerView: "auto",
            spaceBetween: 30,
            slidesPerGroup: 1,
            
            grid: {
                rows: 1,
            },
        }
    }
});
import Swiper, { Navigation } from "swiper";

let reviewSlider = new Swiper(".reviews-slider", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    grid: {
        rows: 1,
    },

    navigation: {
        prevEl: ".reviews-slider__btn--prev",
        nextEl: ".reviews-slider__btn--next",
    },
});
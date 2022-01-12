// selectivity-slider

import Swiper, { Pagination } from "swiper";

new Swiper('.selectivity-slider', {
    slidesPerView: 1,
    spaceBetween: 80,
    modules: [Pagination],
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});
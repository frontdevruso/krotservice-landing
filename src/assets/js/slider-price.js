// price slider

import Swiper, { Pagination } from "swiper";

document.addEventListener("DOMContentLoaded", () => {
    const priceSlider = document.querySelector(".price-slider");

    if (priceSlider) {
        let mySwiper;

        const initializeSlider = () => {

            mySwiper = new Swiper(priceSlider, {
                modules: [Pagination],
                slidesPerView: 1,
                spaceBetween: 25,

                pagination: {
                    el: ".prices-slider__pagination",
                    clickable: true,
                },
                breakpoints: {
                    769: {
                        slidesPerView: 2,
                    }
                }
            });

        };

        if (window.innerWidth <= 768) {
            initializeSlider();
            priceSlider.dataset.mobile = "true";
        }

        const mobileSlider = () => {
            if (window.innerWidth <= 1024 && priceSlider.dataset.mobile == "false") {
                initializeSlider();
                priceSlider.dataset.mobile = "true";
            }

            if (window.innerWidth > 1024) {

                priceSlider.dataset.mobile = "false";
                if (priceSlider.classList.contains("swiper-initialized")) {
                    mySwiper.destroy();
                }
            }
        };
        mobileSlider();

        window.addEventListener("resize", () => {
            mobileSlider();
        });
    }
});
// place-tariff-slider

import Swiper, { Pagination } from "swiper";

document.addEventListener("DOMContentLoaded", () => {
    const placeTariffSlider = document.querySelector(".place-tariff-slider");

    if (placeTariffSlider) {
        let mySwiper;

        const initializeSlider = () => {

            mySwiper = new Swiper(placeTariffSlider, {
                slidesPerView: 1,
                spaceBetween: 70,
                modules: [Pagination],
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });

        };

        if (window.innerWidth <= 768) {
            initializeSlider();
            placeTariffSlider.dataset.mobile = "true";
        }

        const mobileSlider = () => {
            if (window.innerWidth <= 1024 && placeTariffSlider.dataset.mobile == "false") {
                initializeSlider();
                placeTariffSlider.dataset.mobile = "true";
            }

            if (window.innerWidth > 1024) {
                placeTariffSlider.dataset.mobile = "false";
                if (placeTariffSlider.classList.contains("swiper-initialized")) {
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
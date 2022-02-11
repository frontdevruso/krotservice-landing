const reviewItems = document.querySelectorAll('.reviews-slider__item-info p');
const mainSliderItems = document.querySelectorAll('.main-service__desc');

if (reviewItems) {
    reviewItems.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}

if (mainSliderItems) {
    mainSliderItems.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}
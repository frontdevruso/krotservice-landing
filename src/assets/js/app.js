const reviewItem = document.querySelectorAll('.reviews-slider__item-info p');

if (reviewItem) {
    reviewItem.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}
import lozad from "lozad";

const allImg = document.querySelectorAll('img');
allImg.forEach(function(item) {
    item.classList.add('lazyload');
    item.classList.add('lozad');
})

const observer = lozad(".lozad");
observer.observe();

lazyload();
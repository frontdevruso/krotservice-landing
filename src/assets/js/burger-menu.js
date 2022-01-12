document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const html = document.querySelector("html");
    const links = document.querySelectorAll(".menu__links-item");
    const menu = document.getElementById("menu");
    const body = document.body;
    
    burger.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("isOpen");
        body.classList.toggle("menu-lock");
        menu.classList.toggle("m-open");
        if (body.classList.contains('menu-lock')) {
            html.style.overflow = "hidden";
        } else {
            html.style.overflow = "initial";
        }
    });

    links.forEach(function(item) {
        item.addEventListener('click', function () {
            burger.classList.remove("isOpen");
            body.classList.remove("menu-lock");
            menu.classList.remove('m-open');
            html.style.overflow = "initial";
        });
    })
});
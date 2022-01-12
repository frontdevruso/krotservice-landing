document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
        if(e.target.closest(".accordion")) {
            document.querySelector('.open').classList.remove('open');
            let self = e.target.closest(".accordion");

            if(e.target.closest(".accordion__control")) {
                self.classList.add("open");
            }

            if(e.target.closest(".accordion")) {
                self.classList.add("open");
            }
        }
    });
});
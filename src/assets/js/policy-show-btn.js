document.addEventListener("DOMContentLoaded", () => {
    const showBtn = document.querySelector('.policy__page-show')
    const allArticles = document.querySelectorAll('.modal__policy-desc');

    if (showBtn) {
        showBtn.addEventListener('click', function() {
            showBtn.style.display = 'none';
    
            allArticles.forEach(function(article) {
                article.style.display = 'flex';
            });
        });
    }
});
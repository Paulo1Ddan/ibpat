const responsiveBtn = document.querySelectorAll('.responsive-btn');
const mobileHeader = document.querySelector('.mobile-header');

responsiveBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        mobileHeader.classList.toggle('active');
    });
});
$(document).ready(function () {
    const $header = $('header');
    const $responsiveBtn = $('.responsive-btn');
    const $menuLinks = $('.menu-link'); // ajuste conforme sua classe real

    // Toggle do menu mobile
    $responsiveBtn.on('click', function () {
        $('.mobile-header').toggleClass('active');
    });

    // Efeito de scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $header.addClass('header-scrolled shadow-sm');
            $responsiveBtn.addClass('main-color');
            $menuLinks.addClass('text-black');
        } else {
            $header.removeClass('header-scrolled shadow-sm');
            $responsiveBtn.removeClass('main-color');
            $menuLinks.removeClass('text-black');
        }
    });
});

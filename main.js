// intercetto il click sull'icona dell'hamburger menu
$('.header-right > a').click(function() {
    // visualizzo menu mobile
    // $('.hamburger-menu').show();
    // $('.hamburger-menu').fadeIn();
    // $('.hamburger-menu').css('display', 'block');
    $('.hamburger-menu').addClass('active');
});

// intercetto il click sull'icona "X"
$('.close').click(function() {
    // nascondo il menu mobile
    // $('.hamburger-menu').hide();
    // $('.hamburger-menu').fadeOut();
    // $('.hamburger-menu').css('display', 'none');
    $('.hamburger-menu').removeClass('active');
});

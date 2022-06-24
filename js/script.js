$(document).ready(function(){


//---------- NAV BAR HOVER JS ------------//
$(".nav-item").hover(function() {

    let key = $(this).data('key');
    $(this).find('.hover-menu'+key).removeClass('d-none');

}, function() {
    $('.hover-menu').addClass('d-none');
});




});
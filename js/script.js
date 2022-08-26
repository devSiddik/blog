$(document).ready(function(){


//---------- NAV BAR HOVER JS ------------//
$(".nav-item").hover(function() {

    let key = $(this).data('key');
    $(this).find('.hover-menu'+key).removeClass('d-none');

}, function() {
    $('.hover-menu').addClass('d-none');
});




});



//---------- NAV BAR FIXED ON SCROLL JS ------------//
$(window).scroll(function(){
    var couting_scroll = $(window).scrollTop()

    if(couting_scroll>90){
        $(".main-navbar").addClass("scroll_navbar")
    }
    else{
        $(".main-navbar").removeClass("scroll_navbar")   
    }
    
})
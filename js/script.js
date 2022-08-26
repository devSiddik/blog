$(document).ready(function(){


//---------- NAV BAR HOVER JS ------------//
$(".nav-item").hover(function() {

    let key = $(this).data('key');
    $(this).find('.hover-menu'+key).removeClass('d-none');

}, function() {
    $('.hover-menu').addClass('d-none');
});




});



//---------- NAV BAR FIXED JS ------------//
$(window).scroll(function(){
    var couting_scroll = $(window).scrollTop()

    if(couting_scroll>90){
        $(".main-navbar").addClass("fixed_navbar_on_scroll")
    }
    else{
        $(".main-navbar").removeClass("fixed_navbar_on_scroll")   
    }
    
})
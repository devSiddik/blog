$(".featured-slider").slick({
    dots: !1,
    fade: !1,
    infinite: !0,
    autoplay: !0,
    arrows: !0,
    speed: 1000,
    autoplaySpeed: 1000,
    // centerMode: !0,
    // centerPadding: "250px",
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
    // focusOnSelect: !0,
    // asNavFor: ".preview-slider",
    prevArrow: '<i class="far fa-angle-right left-arrow"></i>',
    nextArrow: '<i class="far fa-angle-left right-arrow"></i>',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerPadding: "250px"
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerPadding: "130px"
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerPadding: "40px"
        }
    }, {
        breakpoint: 576,
        settings: {
            arrows: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerPadding: "10px",
            // variableWidth: !0,
        }
    }]
})
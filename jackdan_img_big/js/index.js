// Slick slider init

$('.slider').slick({
    // adaptiveHeight: true,
    // arrows: true,
    // dots: false,
    // infinite: true,
    // // speed: 500,
    // speed: 0,
    // slidesToShow: 1,
    // centerMode: true,
    // variableWidth: true,
    // draggable: true,
    // cssEase: 'ease',
    // ease: 'linear',
    // touchMove: true,
    // // initialSlide: parseInt(window.location.search.substr(11,1))
    arrows: true,
    dots: false,
    infinite: true,
    // speed: 500,
    speed: 0,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    draggable: true,
    initialSlide: parseInt(window.location.search.substr(11,1)),
});

$('.slider')
    .on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-list').addClass('do-transition')
    }).on('afterChange', function(){
        $('.slick-list').removeClass('do-transition')
    });
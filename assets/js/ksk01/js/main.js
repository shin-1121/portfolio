

$(function () {
    $("#js-gnav-btn").click(function () {
        $('body').toggleClass("show");
    });
});


var slider1 = new Swiper('.slider1', {
    effect: 'slide',


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
var slider2 = new Swiper('.slider2', {
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next_2',
        prevEl: '.swiper-button-prev_2',
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        // 368px以上の場合
        368: {
            slidesPerView: 2,
        },
        
        570: {
            slidesPerView: 3,
        
        },
        // 800px以上の場合  
        800: {
            slidesPerView: 4,

        },
        // 1200px以上の場合
        1180: {
            slidesPerView: 6,
        }
    },


});


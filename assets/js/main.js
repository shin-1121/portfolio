

$(function () {
    $("#js-gnav-btn").click(function () {
        $('body').toggleClass("show");
    });
});


var slider = new Swiper('.swiper-container', {
    effect: 'slide',
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    },

    breakpoints: {
        
        580: {
            slidesPerView: 1,

        },
        // 740px以上の場合  
        740: {
            slidesPerView: 2,

        },
        // 1200px以上の場合
        1200: {
            slidesPerView: 3,
        }
    },


});
//■page topボタン

$(function () {
    var topBtn = $('#pageTop');
    topBtn.hide();



    //◇ボタンの表示設定
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {

            //---- 画面を80pxスクロールしたら、ボタンを表示する
            topBtn.fadeIn();

        } else {

            //---- 画面が80pxより上なら、ボタンを表示しない
            topBtn.fadeOut();

        }
    });



    // ◇ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;

    });


});
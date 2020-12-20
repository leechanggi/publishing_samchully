function gnbFnc() {
    var $firstMenu = $('.gnb > li')
    $firstMenu.mouseover(function () {
            $(this).addClass('on')
            $(this).siblings().removeClass('on')
        })
        .mouseleave(function () {
            $(this).removeClass('on')
            $(this).siblings().removeClass('on')
        })
}

function allmenuFnc() {
    var btnAllmenu = $('#header > .header-section > .gnb-wrap > .btn-allmenu')
    var allmenuWrap = $('.allmenu-wrap')
    btnAllmenu.click(function () {
        if (allmenuWrap.hasClass('on')) {
            allmenuWrap.removeClass('on');
            btnAllmenu.removeClass('on');
            btnAllmenu.addClass('off');
            $('#header').css("z-index", "2");
        } else {
            allmenuWrap.addClass('on');
            btnAllmenu.removeClass('off');
            btnAllmenu.addClass('on');
            $('#header').css("z-index", "auto");
        }
    })
}

function swiperFnc() {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 30,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        effect: 'fade',
        autoHeight: false,
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        speed: 1300,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + '<span class="' + totalClass +
                    '"></span>';
            },
        },
        thumbs: {
            swiper: galleryThumbs,
        },
        on: {
            transitionEnd: function (swiper) {
                $('.slide-bar').addClass('on');
            },
            slideChange: function () {
                $('.slide-bar').removeClass('on');
            }
        }
    });
    var swiper = new Swiper('.newsroom-subslide', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper = new Swiper('.notice-subslide', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

$(function () {
    gnbFnc();
    allmenuFnc();
    swiperFnc();
});
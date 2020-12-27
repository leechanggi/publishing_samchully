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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            360: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
    var swiper = new Swiper('.notice-subslide', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            360: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
}

function fullpageFnc() {
    if ($('html').hasClass('pc')) {
        $(document).ready(function () {
            $('#container').fullpage({
                //options
                autoScrolling: true,
                scrollHorizontally: true,
                scrollBar: false,
                afterLoad: function (origin, destination, direction) {
                    if ($('.row1').hasClass('active')) {
                        $('#header').removeClass('on')
                    } else if ($('.row2').hasClass('active')) {
                        $('#header').addClass('on');
                        $(this).find('.hideme').addClass('showme');
                        $(this).find('.hideme').removeClass('hideme');
                    } else if ($('.row3').hasClass('active')) {
                        $('#header').addClass('on')
                        $(this).find('.hideme').addClass('showme');
                        $(this).find('.hideme').removeClass('hideme');
                    } else if ($('.row4').hasClass('active')) {
                        $('#header').addClass('on')
                        $(this).find('.hideme').addClass('showme');
                        $(this).find('.hideme').removeClass('hideme');
                    } else if ($('.row5').hasClass('active')) {
                        $('#header').addClass('on')
                        $(this).find('.hideme').addClass('showme');
                        $(this).find('.hideme').removeClass('hideme');
                    } else {
                        $('#header').addClass('on')
                    }
                }
            })
        })
    }else{

    }
}

$(document).ready(function () {
    $('.hideme').each(function (i) {
        var bottom_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
            $(this).addClass('showme');
        }
    });
    $(window).scroll(function () {
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('showme');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).removeClass('showme');
            }
        });
    });
});

$(function () {
    swiperFnc();
    fullpageFnc();
});
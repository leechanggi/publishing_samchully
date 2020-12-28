// html - pc || tab_mob
$(window).on('resize', windeowResizeHandler);

function windeowResizeHandler() {
    var winWidth = $(this).innerWidth();
    if (winWidth >= 1200) {
        $('html').removeClass('tab_mob')
        $('html').addClass('pc')
    } else {
        $('html').removeClass('pc')
        $('html').addClass('tab_mob')
    }
}
$(window).trigger('resize');

var filter = "win16|win32|win64|mac|macintel";
if (navigator.platform) {
    if (filter.indexOf(navigator.platform.toLowerCase()) >= 0) {
        $(document).ready(function () {
            var areaWidth = $("#footer").innerWidth();
            $("#footer").css("width", areaWidth)
            $(window).resize(function () {
                location.reload();
            })
        })
    } else {}
}

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
    var btnAllmenu = $('#header > .header-section > .gnb-wrap > .btn-allmenu');
    var allmenuWrapPC = $('.allmenu-wrap');
    var allmenuWrapMOB = $('.allmenu-wrap-MOB');
    btnAllmenu.click(function () {
        if ($('html').hasClass('pc')) {
            if (allmenuWrapPC.hasClass('on')) {
                allmenuWrapPC.removeClass('on');
                btnAllmenu.removeClass('on');
                btnAllmenu.addClass('off');
                $('#header').css("z-index", "3");
            } else {
                allmenuWrapPC.addClass('on');
                btnAllmenu.removeClass('off');
                btnAllmenu.addClass('on');
                $('#header').css("z-index", "auto");
            }
        } else{
            if (allmenuWrapMOB.hasClass('on')) {
                allmenuWrapMOB.removeClass('on');
                btnAllmenu.removeClass('on');
                btnAllmenu.addClass('off');
            } else {
                allmenuWrapMOB.addClass('on');
                btnAllmenu.removeClass('off');
                btnAllmenu.addClass('on');
            }
        }
    })
}

function submenuFnc() {
    var submenuList = $('.submenu > ul > li');
    submenuList.click(function () {
        if (submenuList.hasClass('on')) {
            $(this).siblings().removeClass('on');
            $(this).addClass('on');
        }else{
        }
    })
}

function allmenuMob() {
    var btnAllmenuToplist = $('.allmenuMob > li > a');
    btnAllmenuToplist.click(function () {
        btnAllmenuToplist.parent('li').siblings('li').removeClass('on');
        $(this).parent('li').addClass('on');
    })
}

function btnDetailViewFnc(){
    $('.btnDetailView').on('mouseenter', function (e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
    $('.btnDetailView').on('mouseout', function (e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
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
    gnbFnc();
    allmenuFnc();
    submenuFnc();
    allmenuMob();
    btnDetailViewFnc();
});
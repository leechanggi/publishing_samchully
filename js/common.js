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
    var btnAllmenu = $('#header > .header-section > .gnb-wrap > .btn-allmenu')
    var allmenuWrap = $('.allmenu-wrap')
    btnAllmenu.click(function () {
        if (allmenuWrap.hasClass('on')) {
            allmenuWrap.removeClass('on');
            btnAllmenu.removeClass('on');
            btnAllmenu.addClass('off');
            $('#header').css("z-index", "3");
        } else {
            allmenuWrap.addClass('on');
            btnAllmenu.removeClass('off');
            btnAllmenu.addClass('on');
            $('#header').css("z-index", "auto");
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

$(function () {
    gnbFnc();
    allmenuFnc();
    submenuFnc();
});
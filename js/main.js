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

$(function () {
    gnbFnc();
    allmenuFnc();
});
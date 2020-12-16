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

$(function () {
    gnbFnc();
});
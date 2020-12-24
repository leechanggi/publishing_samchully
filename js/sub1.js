function btnSubFnc() {
    var btnSub = $('.btnSub');
    var btnSubActive = $('.btnSubActive')
    btnSub.click(function () {
        if ($(this).hasClass('control1')) {
            $(this).siblings('.btnSub').removeClass('on');
            $(this).addClass('on');
            btnSubActive.removeClass('on');
            $('.table1').addClass('on');
        } else if ($(this).hasClass('control2')) {
            $(this).siblings('.btnSub').removeClass('on');
            $(this).addClass('on');
            btnSubActive.removeClass('on');
            $('.table2').addClass('on');
        } else if ($(this).hasClass('control3')) {
            $(this).siblings('.btnSub').removeClass('on');
            $(this).addClass('on');
            btnSubActive.removeClass('on');
            $('.table3').addClass('on');
        } else if ($(this).hasClass('control4')) {
            $(this).siblings('.btnSub').removeClass('on');
            $(this).addClass('on');
            btnSubActive.removeClass('on');
            $('.table4').addClass('on');
        } else {
            $(this).siblings('.btnSub').removeClass('on');
            $(this).addClass('on');
            btnSubActive.removeClass('on');
            $('.table5').addClass('on');
        }
    })
}

$(function () {
    btnSubFnc();
});
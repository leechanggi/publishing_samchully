function user1Fnc() {
    $('.userInfo input').on('change', function () {
        if ($(this).val() != '') {
            $(this).addClass('valid');
            if ($(this).attr('name') == 'userName') {
                var v = $(this).val();
                var reg = /^[가-힣]{2,5}$/g;
                if (reg.test(v)) {
                    $(this).next('span').removeClass('error');
                } else {
                    $(this).next('span').addClass('error');
                }
            } else if ($(this).attr('name') == 'userEmail') {
                var v = $(this).val();
                var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
                if (reg.test(v)) {
                    $(this).next('span').removeClass('error');
                } else {
                    $(this).next('span').addClass('error');
                }
            }
        } else {
            $(this).removeClass('valid');
        }
    });
}

function conformFnc() {
    $('.conform').click(function () {
        if ($('.userInfo input').hasClass('valid') && !$('.userInfo input').next().hasClass('error')) {
            location.href = "http://lxyex1379.dothome.co.kr/samchully/sub5.html";
        } else {
            alert('회원가입에 필요한 필수 항목을 입력해주세요.');
        }
    })
}

$(function () {
    user1Fnc();
    conformFnc();
});
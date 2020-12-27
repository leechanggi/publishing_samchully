function agreeAllFnc() {
    var btnAgree = $('.btnAgree');
    var agreeY = $('.agreeRequired');
    var agreeN = $('.agreeUnreq');
    var conform = $('.conform')
    agreeY.next().click(function () {
        $(this).prev().attr('checked','');
        $(this).parent().next().find('.agreeUnreq').removeAttr('checked');
    });
    agreeN.next().click(function () {
        $(this).prev().attr('checked','');
        $(this).parent().prev().find('.agreeRequired').removeAttr('checked');
    });
    btnAgree.click(function () {
        agreeY.attr('checked','');
    });
    conform.click(function () {
        if (agreeY.attr('checked') == 'checked') {
            location.href = "http://lxyex1379.dothome.co.kr/samchully/sub4.html";
        } else {
            alert('회원가입약관 및 개인정보처리방침안내 약관에 동의하셔야 회원가입 하실 수 있습니다.');
        }
    });
}

$(function () {
    agreeAllFnc();
});
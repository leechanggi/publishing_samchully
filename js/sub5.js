function user2Fnc() {
    $('.memberInput').on('change', function () {
        if ($(this).val() != '') {
            $(this).addClass('valid');
            if ($(this).attr('name') == 'userID') {
                var v = $(this).val();
                var reg = /^[a-z]+[a-z0-9]{4,11}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').prev('th').removeClass('error');
                } else {
                    $(this).closest('td').prev('th').addClass('error');
                }
            } else if ($(this).attr('name') == 'userPw') {
                var v = $(this).val();
                var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').prev('th').removeClass('error');
                } else {
                    $(this).closest('td').prev('th').addClass('error');
                }
            } else if ($(this).attr('name') == 're_userPw') {
                if ($('#userPw').val() == $('#re_userPw').val()) {
                    $('#re_userPw').closest('td').prev('th').removeClass('error');
                } else {
                    $('#re_userPw').closest('td').prev('th').addClass('error');
                }
            }else if ($(this).attr('name') == 'userPhone') {
                var v = $(this).val();
                var reg = /^[0-9]{9,11}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').prev('th').removeClass('error');
                } else {
                    $(this).closest('td').prev('th').addClass('error');
                }
            } else if ($(this).attr('name') == 'checkNum') {
                var v = $(this).val();
                var reg = /^[0-9]{6}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').prev('th').removeClass('error');
                } else {
                    $(this).closest('td').prev('th').addClass('error');
                }
            } else if ($(this).attr('name') == 'userHometel') {
                var v = $(this).val();
                var reg = /^[0-9]{8,11}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').prev('th').removeClass('error');
                } else {
                    $(this).closest('td').prev('th').addClass('error');
                }
            }
        } else {
            $(this).removeClass('valid');
        }
    })
}

function addrPopFnc() {
    $('#addrPop').click(function () {
        new daum.Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if (data.userSelectedType === 'R') {
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if (data.buildingName !== '' && data.apartment === 'Y') {
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if (extraAddr !== '') {
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                } else {
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('addrNum').value = data.zonecode;
                document.getElementById("address1").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("address2").focus();
            }
        }).open();
    })
}

function userSubmitFnc() {
    $('.conform').click(function () {
        if ($('.required').hasClass('valid') && !$('.memberInput').closest('td').prev('th').hasClass('error')) {
            alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
            location.href = "http://lxyex1379.dothome.co.kr/samchully/sub2.html";
        } else {
            alert('회원가입에 필요한 필수 항목을 입력해주세요.');
        }
    })
}

$(function () {
    user2Fnc();
    addrPopFnc();
    userSubmitFnc();
});
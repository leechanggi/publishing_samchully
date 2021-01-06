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
            var mapContainer = document.getElementById('map2');
            mapOption = {
                center: new kakao.maps.LatLng(37.18198468390901, 127.03212959652612),
                level: 4
            };
            var map = new kakao.maps.Map(mapContainer, mapOption);
            var mapTypeControl = new kakao.maps.MapTypeControl();
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
            var markerPosition = new kakao.maps.LatLng(37.18198468390901, 127.03212959652612);
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
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
            var mapContainer = document.getElementById('map3');
            mapOption = {
                center: new kakao.maps.LatLng(37.69496122260936, 127.34103045378839),
                level: 4
            };
            var map = new kakao.maps.Map(mapContainer, mapOption);
            var mapTypeControl = new kakao.maps.MapTypeControl();
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
            var markerPosition = new kakao.maps.LatLng(37.69496122260936, 127.34103045378839);
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
        } else {
            $(this).siblings('.btnSub').removeClass('on');
            $(this).addClass('on');
            btnSubActive.removeClass('on');
            $('.table5').addClass('on');
        }
    })
}

//(본사)table1 kakaomap
function kakaoMapFnc() {
    var mapContainer = document.getElementById('map1');
    mapOption = {
        center: new kakao.maps.LatLng(37.52091922561219, 126.92556497428329), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(37.52091922561219, 126.92556497428329);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
}

$(function () {
    btnSubFnc();
    kakaoMapFnc();
});
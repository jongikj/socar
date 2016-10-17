<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="container" class="box">
<div id="content">
	<h2><img id="booking_logo" src="resources/img/booking/booking_logo.gif"></h2>
<div id="map" style="width:100%; height:60%; margin-top: 50px"></div>
<div id="search_result_table" class="list" >
				<form name="socar" method="post" action="">
					<fieldset style="border:none;">
						<div class="list-header">
							<p class="select">
								<select>
									<option selected="selected">전체 쏘카보기</option>
								</select>
							</p><br>
							<table cellspacing="0">
							<!-- <colgroup><col width="149"><col width="529"><col width="214"><col width="170"><col width="100"></colgroup> -->
							<tbody>
							<tr>
								<th style="width: 14%"><a href="#">쏘카존</a></th>
								<th style="width: 48%">차량</th>
								<th style="width: 18%"><a href="#">대여요금</a></th>
								<th style="width: 10%">주행요금</th>
								<th style="width: 10%">&nbsp;</th>
							</tr>
							</tbody>
							</table>
						</div>
								<div class="section">
									<div class="arti" style="width: 13%">
										<sapn class="zone_info_popup" value="227">숙명여대</span>
										<em style="display:none;">227</em>
									</div>
								<div class="carInfo" style="widows: 47%">
										<p class="thumb"><a href="#" class="carDetail"><img src="resources/img/booking/car6_new3.png"></a></p>
											<div class="desc">
												<span>스파크 <strong>숙자</strong></span>
											<em style="display:none;">664</em>
											<div class="spec">
												유종 : <em>휘발유</em><br>
												옵션 : 오토변속기어, 내비게이션, 블랙박스
											</div>
										</div>
									</div>
									<!-- 대여요금 -->
									<div class="price price_info" style="width: 19%">
									<!-- 기준요금이  할인가보다  클  경우에만  기준요금  표시 -->
									
										<dl>
										<dt>기준 대여요금</dt>
										<dd id="price-r2"><strike>3,600원</strike></dd>
									
										<dt>SO회원 할인가</dt>
										<dd><strong id="price-s2">1,800원</strong></dd>
									
										<!-- 준회원 가격 정책이 정해질때까지 임시 숨김 -->
										<dt style="display:none;">프로모션 할인가</dt>
										<dd style="display:none;"><strong id="price-p2">1,800원</strong></dd>
										<!--// 준회원 가격 정책이 정해질때까지 임시 숨김 -->
									
										</dl>
									</div>
									<!-- //대여요금 -->

									<!-- 주행요금 -->
									
									<div class="oil" style="width: 10%">160원/km</div>
									
									<!-- //주행요금 -->

									<div class="rvBtn" style="width: 9%">
										
										<a id="round" class="btn_reserve" title="" href="#"><img src="resources/img/booking/btn_list_reservation.gif" alt="예약"></a>
										<em style="display:none;">227</em>
										<em style="display:none;">664</em>
									</div>
								</div>
								<div class="section">
									<div class="arti" style="width: 13%">
										<sapn class="zone_info_popup" value="227">숙명여대</span>
										<em style="display:none;">227</em>
									</div>
								<div class="carInfo" style="widows: 47%">
										<p class="thumb"><a href="#" class="carDetail"><img src="resources/img/booking/car6_new3.png"></a></p>
											<div class="desc">
												<span>스파크 <strong>숙자</strong></span>
											<em style="display:none;">664</em>
											<div class="spec">
												유종 : <em>휘발유</em><br>
												옵션 : 오토변속기어, 내비게이션, 블랙박스
											</div>
										</div>
									</div>
									<!-- 대여요금 -->
									<div class="price price_info" style="width: 19%">
									<!-- 기준요금이  할인가보다  클  경우에만  기준요금  표시 -->
									
										<dl>
										<dt>기준 대여요금</dt>
										<dd id="price-r2"><strike>3,600원</strike></dd>
									
										<dt>SO회원 할인가</dt>
										<dd><strong id="price-s2">1,800원</strong></dd>
									
										<!-- 준회원 가격 정책이 정해질때까지 임시 숨김 -->
										<dt style="display:none;">프로모션 할인가</dt>
										<dd style="display:none;"><strong id="price-p2">1,800원</strong></dd>
										<!--// 준회원 가격 정책이 정해질때까지 임시 숨김 -->
									
										</dl>
									</div>
									<!-- //대여요금 -->

									<!-- 주행요금 -->
									
									<div class="oil" style="width: 10%">160원/km</div>
									
									<!-- //주행요금 -->

									<div class="rvBtn" style="width: 9%">
										
										<a id="round" class="btn_reserve" title="" href="#"><img src="resources/img/booking/btn_list_reservation.gif" alt="예약"></a>
										<em style="display:none;">227</em>
										<em style="display:none;">664</em>
									</div>
								</div>
					</fieldset>
				</form>
			</div>
</div>

</div>

<script type="text/javascript" src="//apis.daum.net/maps/maps3.js?apikey=7572d5b3914cafa55c1a99de7e8a4836"></script>
<script>
var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new daum.maps.LatLng(37.552798, 126.937878),
        level: 9
    };
var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var mapTypeControl = new daum.maps.MapTypeControl();
map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);
var zoomControl = new daum.maps.ZoomControl();
map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
/* 마커 */
var imageSrc = 'resources/img/booking/pin.png', // 마커이미지의 주소입니다    
imageSize = new daum.maps.Size(40, 38), // 마커이미지의 크기입니다
imageOption = {offset: new daum.maps.Point(20, 38)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption),
markerPosition = new daum.maps.LatLng(37.552798, 126.937878); // 마커가 표시될 위치입니다

//마커를 생성합니다
var marker = new daum.maps.Marker({
position: markerPosition, 
image: markerImage // 마커이미지 설정 
});

//마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  
</script>		 
<!-- 		<div class="bookingbox">
			<div id="map">
				<img src="resources/img/booking/bookingsearchbox.jpg" alt="setting" >
			</div>
		</div>
	 -->



    

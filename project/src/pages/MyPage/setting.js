import React from 'react';
import './index.css';

const setting = () => {
    return (
        <div class="layout">
          <div class="menu">
            <button onClick = {"./reservation.js"}>예약 내역</button>
            <button onClick = {"./points.js"}>포인트</button>
            <button onClick = {"./coupon.js"}>쿠폰</button>
            <button onClick = {".info.js"}>내 정보 관리</button>
            <button onClick = {"setting.js"}>설정</button>
          </div>
          <div>
            <h1>예약 내역</h1>
            <p>현재 숙소 외 예약 내역은 여기어때 앱에서 확인 가능해요.</p>
            <div class="accmd">
            <button>국내숙소</button>
            <button>해외숙소</button>
            </div>
            <div>
            <h3>예정된 여행이 없습니다.</h3>
            <p>지금 새로운 예약을 진행해보세요.</p>
            <button>여행지 찾아보기</button>
            </div>
            <h3>이용완료 및 예약취소</h3>
            <p>해당되는 예약 내역이 없습니다.</p>
            </div> 
        </div>
    );
};

export default setting;
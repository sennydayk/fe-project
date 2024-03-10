import React from 'react';
import './index.css';

const coupon = () => {
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
            <div>
            <h1>쿠폰 0장</h1>
            <p>7일 이내 소멸예정 쿠폰 0장</p>
            <button>쿠폰 등록</button>
            </div>
            <p>레저, 티켓, 렌터카, 공간대여 쿠폰은 여기어때 앱에서 사용 가능해요.</p>
            <div class="coupons">
              <button>전체</button>
              <button>국내숙소</button>
              <button>해외숙소</button>
              <button>레저/티켓</button>
              <button>렌터카</button>
              <button>공간대여</button>
            </div>
            <div>
                <h3>사용 가능한 보유 쿠폰이 없어요.</h3>
                <p>사용한 쿠폰이나 유효기간이 만료된 쿠폰은 쿠폰함에 노출되지 않습니다.</p>
            </div>
          </div>         
        </div>
    );
};

export default coupon;
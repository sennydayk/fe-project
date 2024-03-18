import React from 'react';
import './index.css';

const Info = () => {
    return (
        <div class="layout">
            <div class="menu">
                <button onClick={"./Reservation.js"}>예약 내역</button>
                <button onClick={"./Points.js"}>포인트</button>
                <button onClick={"./Coupon.js"}>쿠폰</button>
                <button onClick={"./Info.js"}>내 정보 관리</button>
                <button onClick={"./Setting.js"}>설정</button>
            </div>
            <div>
                <h1>내 정보 관리</h1>
                <h3>회원 정보</h3>
                <p>현재 정보 수정은 여기어때 앱에서 가능해요.</p>
                <h5>닉네임</h5>
                <p>사회학적인차렵저고리</p>
                <h5>예약자 이릉</h5>
                <p>김말똥</p>
                <h5>휴대폰 번호</h5>
                <p>010-1234-9999</p>
                <h5>생년월일</h5>
                <p>1985.03.12</p>
                <h5>성별</h5>
                <p>여</p>
            </div>
        </div>
    );
};

export default Info;
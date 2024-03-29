import React from 'react';
import './index.css';

const Points = () => {
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
                <h1>포인트</h1>
                <div>
                    <h5>내 포인트</h5>
                    <h1>0 P</h1>
                    <p>30일 내 0 P가 소멸될 예정이에요.</p>
                </div>
                <div class="points">
                    <button>전체</button>
                    <button>적립</button>
                    <button>사용</button>
                    <button>소멸</button>
                </div>
                <h1>포인트 내역이 없어요</h1>
            </div>
        </div>
    );
};

export default Points;
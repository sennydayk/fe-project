import React from 'react';

const Reservation = () => {
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
                <h1>예약 내역</h1>
                <div class="accmd">
                    <button>국내숙소</button>
                    <button>해외숙소</button>
                </div>
                <div>
                    <h3>예정된 예약이 없습니다.</h3>
                    <p>지금 새로운 예약을 진행해보세요.</p>
                    <button>여행지 찾아보기</button>
                </div>
                <h3>이용완료 및 예약취소</h3>
            </div>
        </div>
    );
};

export default Reservation;
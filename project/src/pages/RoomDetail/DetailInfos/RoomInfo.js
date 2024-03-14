import React from 'react';
import SectionHeader from '../SectionHeader';
import * as S from '../styles/RoomInfoStyle'

const RoomInfo = () => {
  return (
    <article>
      <section>
        <SectionHeader sectionTitle="숙소 소개" />
        <S.RoomIntroWrap>
          <div className='icon icon1'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#C2C2C2" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" d="M7.637 12.022C7 10.145 9.3 7.058 11 6.646V5c-4.934 2.058-7 5.953-7 9.61 0 1.22.37 2.256 1.107 3.11.739.853 1.618 1.28 2.64 1.28.91 0 1.672-.328 2.282-.985.611-.656.916-1.463.916-2.42 0-.9-.31-1.692-.93-2.377-.62-.685-1.412-1.083-2.378-1.196zm9 0C16 10.145 18.3 7.058 20 6.646V5c-4.934 2.058-7 5.953-7 9.61 0 1.22.37 2.256 1.107 3.11.739.853 1.618 1.28 2.64 1.28.91 0 1.672-.328 2.282-.985.611-.656.916-1.463.916-2.42 0-.9-.31-1.692-.93-2.377-.62-.685-1.412-1.083-2.378-1.196z"></path>
            </svg>
          </div>
          <div className='text'>
            <p>
              강문해변 앞에 자리 잡아 객실에서 드넓고 아름다운 바다를 감상할 수 있습니다 <br />
              아름다운 대자연과 어우러지는 특별하고도 환상적인 경험을 느낄 수 있습니다
            </p>
          </div>
          <div className='icon icon2'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#C2C2C2" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.637 12.022C7 10.145 9.3 7.058 11 6.646V5c-4.934 2.058-7 5.953-7 9.61 0 1.22.37 2.256 1.107 3.11.739.853 1.618 1.28 2.64 1.28.91 0 1.672-.328 2.282-.985.611-.656.916-1.463.916-2.42 0-.9-.31-1.692-.93-2.377-.62-.685-1.412-1.083-2.378-1.196zm9 0C16 10.145 18.3 7.058 20 6.646V5c-4.934 2.058-7 5.953-7 9.61 0 1.22.37 2.256 1.107 3.11.739.853 1.618 1.28 2.64 1.28.91 0 1.672-.328 2.282-.985.611-.656.916-1.463.916-2.42 0-.9-.31-1.692-.93-2.377-.62-.685-1.412-1.083-2.378-1.196z"></path></svg>
          </div>
        </S.RoomIntroWrap>
      </section>
      <section>
        <SectionHeader sectionTitle="숙소 이용 정보" />
        <S.RoomUsageWrap>
          <div className='title'>공지사항</div>
          <ul>
            <li>
              당 호텔은 일회용 플라스틱 사용으로 인해 고통받는 지구를 살리고자 적극적인 지구 살리기 캠페인 진행
            </li>
            <li>
              샴푸,컨디셔너,바디워시,핸드워시는 친환경 다회용 제품으로 제공, 칫솔/치약/슬리퍼(1회 용품) 등 기타 객실 일회용 어메니티는 호텔 내 비치된 자판기로 구입 가능
            </li>
          </ul>
        </S.RoomUsageWrap>
        <S.RoomUsageWrap>
          <div className='title'>기본정보</div>
          <ul>
            <li>
              체크인: 16:00 | 체크아웃: 11:00
            </li>
            <li>
              22시 이후 체크인 시 호텔 프론트 문의
            </li>
            <li>
              무료 Wi-Fi
            </li>
            <li>
              전 객실 금연
            </li>
            <li>
              무료주차(1박 1차량 무료/초과 시 차량 박당 1만원 비용 발생)
            </li>
            <li>
              호텔 내부주차장 만차시 외부주차장 이용
            </li>
          </ul>
        </S.RoomUsageWrap>
        <S.RoomUsageWrap>
          <div className='title'>부대시설 정보</div>
          <ul>
            <li>
              와인앤다인 (레스토랑) / 1층 / 런치 11:30~15:00, 디너 17:00~21:00
            </li>
            <li>
              더 칼라 (펍 & 레스토랑) / 1층
            </li>
            <li>
              비스타 (카페) / 1층
            </li>
            <li>
              델리카트슨 (베이커리) / 1층
            </li>
            <li>
              피트니스 센터 / 지하 1층 / 06:00~21:30 / 투숙객 입장료 11,000원 / 13세 이하 입장불가
            </li>
            <li>
              사우나 / 06:00~22:00 / 유료
            </li>
          </ul>
        </S.RoomUsageWrap>
      </section>
      <section>
        <SectionHeader sectionTitle="취소 및 환불 규정" />
        <S.RoomUsageWrap>
          <ul>
            <li className='caution'>
              객실별 취소 정책이 상이하니 객실 상세정보에서 확인해주세요.
            </li>
          </ul>
        </S.RoomUsageWrap>
      </section>
    </article>
  );
};

export default RoomInfo;
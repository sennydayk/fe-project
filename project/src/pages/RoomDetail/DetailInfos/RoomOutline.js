import React from 'react';
import * as S from '../styles/DetailInfosStyle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RoomOutline = ({ id, params }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <S.OutlineContainer id={id}>
        <S.OutlineTitle>
          <div className='room_theme'>펜션</div>
          <h1 className='room_name'>{params.hotelId}</h1>
        </S.OutlineTitle>

        <S.OutlineReview>
          <div className='review_pre'>
            <span role="img" aria-label="star" className="anticon anticon-star"><svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="#FFAD04" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
            <div className='grade'>9.4</div>
            <div className='evaluation'>4,165명 평가</div>
            <button>리뷰보기</button>
          </div>

          <div className='review_slider'>
            <S.ReviewSlider {...settings}>
              <S.SliderCard>
                <div className='icon'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#C2C2C2" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M7.637 12.022C7 10.145 9.3 7.058 11 6.646V5c-4.934 2.058-7 5.953-7 9.61 0 1.22.37 2.256 1.107 3.11.739.853 1.618 1.28 2.64 1.28.91 0 1.672-.328 2.282-.985.611-.656.916-1.463.916-2.42 0-.9-.31-1.692-.93-2.377-.62-.685-1.412-1.083-2.378-1.196zm9 0C16 10.145 18.3 7.058 20 6.646V5c-4.934 2.058-7 5.953-7 9.61 0 1.22.37 2.256 1.107 3.11.739.853 1.618 1.28 2.64 1.28.91 0 1.672-.328 2.282-.985.611-.656.916-1.463.916-2.42 0-.9-.31-1.692-.93-2.377-.62-.685-1.412-1.083-2.378-1.196z"></path>
                  </svg>
                </div>
                <div className='text'>
                  <p>
                    지하철역 바로 인접하게 위치해있고 로비에 베이커리카페가 있어서 체크인할때 할인쿠폰 받아서. 잘 이용했어요 침구류도 깔끔하고 특히나 베개가 폭신한거랑 조금 딱딱한거랑 두가지 버전으로 준비가 되어 있어서 너무 좋았습니다. 준비된 티백 종류도 다양해서 티타임 잠시 가질수도 있었고 욕실도 딱 적정수준의 공간이었고 샴푸 바디워시 등도 품질이 괜찮아 보였습니다 밖에 뷰는 차도라서 별건 없지만 도심에 이정도 퀄리티에 이정도 위치면 파주랑도 인접해서 경기북부권으로 여행가기 좋은거같아요
                  </p>
                </div>
              </S.SliderCard>
              <S.SliderCard>
                <div className='icon'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#C2C2C2" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M7.637 12.022C7 10.145 9.3 7.058 11 6.646V5c-4.934 2.058-7 5.953-7 9.61 0 1.22.37 2.256 1.107 3.11.739.853 1.618 1.28 2.64 1.28.91 0 1.672-.328 2.282-.985.611-.656.916-1.463.916-2.42 0-.9-.31-1.692-.93-2.377-.62-.685-1.412-1.083-2.378-1.196zm9 0C16 10.145 18.3 7.058 20 6.646V5c-4.934 2.058-7 5.953-7 9.61 0 1.22.37 2.256 1.107 3.11.739.853 1.618 1.28 2.64 1.28.91 0 1.672-.328 2.282-.985.611-.656.916-1.463.916-2.42 0-.9-.31-1.692-.93-2.377-.62-.685-1.412-1.083-2.378-1.196z"></path>
                  </svg>
                </div>
                <div className='text'>
                  <p>
                    지하철역 바로 인접하게 위치해있고 로비에 베이커리카페가 있어서 체크인할때 할인쿠폰 받아서. 잘 이용했어요 침구류도 깔끔하고 특히나 베개가 폭신한거랑 조금 딱딱한거랑 두가지 버전으로 준비가 되어 있어서 너무 좋았습니다. 준비된 티백 종류도 다양해서 티타임 잠시 가질수도 있었고 욕실도 딱 적정수준의 공간이었고 샴푸 바디워시 등도 품질이 괜찮아 보였습니다 밖에 뷰는 차도라서 별건 없지만 도심에 이정도 퀄리티에 이정도 위치면 파주랑도 인접해서 경기북부권으로 여행가기 좋은거같아요
                  </p>
                </div>
              </S.SliderCard>
              <S.SliderCard>
                <div className='icon'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#C2C2C2" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M7.637 12.022C7 10.145 9.3 7.058 11 6.646V5c-4.934 2.058-7 5.953-7 9.61 0 1.22.37 2.256 1.107 3.11.739.853 1.618 1.28 2.64 1.28.91 0 1.672-.328 2.282-.985.611-.656.916-1.463.916-2.42 0-.9-.31-1.692-.93-2.377-.62-.685-1.412-1.083-2.378-1.196zm9 0C16 10.145 18.3 7.058 20 6.646V5c-4.934 2.058-7 5.953-7 9.61 0 1.22.37 2.256 1.107 3.11.739.853 1.618 1.28 2.64 1.28.91 0 1.672-.328 2.282-.985.611-.656.916-1.463.916-2.42 0-.9-.31-1.692-.93-2.377-.62-.685-1.412-1.083-2.378-1.196z"></path>
                  </svg>
                </div>
                <div className='text'>
                  <p>
                    지하철역 바로 인접하게 위치해있고 로비에 베이커리카페가 있어서 체크인할때 할인쿠폰 받아서. 잘 이용했어요 침구류도 깔끔하고 특히나 베개가 폭신한거랑 조금 딱딱한거랑 두가지 버전으로 준비가 되어 있어서 너무 좋았습니다. 준비된 티백 종류도 다양해서 티타임 잠시 가질수도 있었고 욕실도 딱 적정수준의 공간이었고 샴푸 바디워시 등도 품질이 괜찮아 보였습니다 밖에 뷰는 차도라서 별건 없지만 도심에 이정도 퀄리티에 이정도 위치면 파주랑도 인접해서 경기북부권으로 여행가기 좋은거같아요
                  </p>
                </div>
              </S.SliderCard>
            </S.ReviewSlider>
          </div>
        </S.OutlineReview>
      </S.OutlineContainer >
    </>
  );
};

export default RoomOutline;
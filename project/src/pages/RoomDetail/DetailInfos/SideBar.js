import React, { useEffect, useState } from 'react';
import * as S from '../styles/SideBarStyles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ad_banner1 from '../../../images/ad_banner1.png';
import ad_banner2 from '../../../images/ad_banner2.png';
import img_payment_tosspay from '../../../images/img_payment_tosspay.png';
import Map from './Map';
import MoreBtn from '../../../components/Button/MoreBtn';
import CopyBtn from '../../../components/Button/CopyBtn';


const SideBar = ({ linkLocation }) => {
  const [adSliderInit, SetAdSliderInit] = useState(false);

  useEffect(() => {
    SetAdSliderInit(true);
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <S.SideBarWrap>
      <S.Location>
        <Map width={350} height={136} latitude={linkLocation.state.mapy}
          longitude={linkLocation.state.mapx} />
        <div className='location_address'>
          <p>{linkLocation.state.address}</p>
          <CopyBtn />
        </div>
      </S.Location>

      <S.PaymentBenefits>
        <S.SliderWrap>
          {adSliderInit && <S.StyledSlider {...settings}>
            <div className='bannerImgWrap'>
              <img src={ad_banner1} alt='봄맞이이벤트' />
            </div>
            <div className='bannerImgWrap'>
              <img src={ad_banner2} alt='호텔특가이벤트' />
            </div>
          </S.StyledSlider>}
        </S.SliderWrap>

        <S.PaymentBenefitsInfos>
          <div className='payment_benefit_title'>
            <h2>결제혜택</h2>
            <MoreBtn buttonText='더보기' />
          </div>

          <div className='payment_benefit_lists'>
            <div className='title'>
              <img src={img_payment_tosspay} alt='토스페이 아이콘' />
              <span>토스페이</span>
            </div>
          </div>

          <ul className='lists_menu'>
            <li>
              <p>
                3만원 이상, 10% 최대 1만원 할인 (오전10시, 일400명)
              </p>
            </li>
            <li>
              <p>
                2만원 이상, 2천원 할인 (오후 4시, 일1,700명)
              </p>
            </li>
            <li>
              <p>
                + 생애 첫결제 시, 5천원 캐시백
              </p>
            </li>
          </ul>
        </S.PaymentBenefitsInfos>
      </S.PaymentBenefits>
    </S.SideBarWrap>
  );
};

export default SideBar;
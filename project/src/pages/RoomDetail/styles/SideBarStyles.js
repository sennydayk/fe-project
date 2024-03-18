import styled from "styled-components";
import Slider from 'react-slick';

export const SideBarWrap = styled.article`
  position: relative;
  padding-left: 44px;
  /* flex: 1; */

  & > aside {
    border: 1px solid ${(props) => props.theme.btnHover};
    border-radius: 12px;
  }
`;

// 사이드_지도
export const Location = styled.aside`
  & > .location_img {
    /* height: 136px; */
    border-radius: 12px 12px 0 0;
    background-color: ${(props) => props.theme.btnHover};
  }

  & > .location_address {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    & > p {
      color: ${(props) => props.theme.grayDeep};
    }
  }
`;

// 사이드_결제 이벤트
export const PaymentBenefits = styled.aside`
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 350px;
  margin: 20px 0;
  padding: 20px;
`;

export const SliderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.btnHover};
  padding-bottom: 24px;
`;

// slick Slider 스타일
export const StyledSlider = styled(Slider)`
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .bannerImgWrap {
    border-radius: 12px;
    img {
      width: 100%;
      border-radius: 12px;
      margin-bottom: 5px;
    }
  }
`;

export const PaymentBenefitsInfos = styled.div`
  width: 100%;
  max-width: 350px;
  overflow: hidden;
  margin-top: 8px;

  .payment_benefit_title {
    padding: 16px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: bold;
    }
  }

  .payment_benefit_lists {
    .title {
      height: 30px;
      display: flex;
      align-items: center;
      gap: 6px;

      & > img {
        height: 100%;
      }

      & > span {
        font-size: ${(props) => props.theme.fontSize_md};
        font-weight: bold;
      }
    }
  }

  .lists_menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding-bottom: 24px;
    
    & > li {
      list-style-position: inside;
      list-style-type: disc;
      padding-top: 5px;
      text-overflow: ellipsis;
      white-space:nowrap;
      overflow:hidden;
      
      & > p {
        display: inline-block;
        padding-left: 3px;
      }
    }
  }
`;

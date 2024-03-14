import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as NavArrowRightIcon } from "../assets/Group 2.svg";
import { ReactComponent as NavArrowLeftIcon } from "../assets/Group 1.svg";
import Busan from "../assets/부산.webp";
import Gapyeong from "../assets/가평.webp";
import Jeju from "../assets/제주도.webp";
import Haewoondae from "../assets/해운대.webp";
import Kangreung from "../assets/강릉.webp";
import Sokcho from "../assets/속초.webp";
import Incheon from "../assets/인천.webp";
import Yeosoo from "../assets/여수.webp";
import Gyeongju from "../assets/경주.webp";
import Seoul from "../assets/서울.webp";

const ImageList = styled.div``;

const CityName = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  margin-top: 15px;
`;
function NextArrow(props) {
  const { className, style, onClick, currentSlide, slideCount } = props;

  return (
    // 마지막 슬라이드 그룹에 도달했는지 확인합니다.
    currentSlide < slideCount - 6 ? (
      <Arrow className={`right`} onClick={onClick}>
        <NavArrowRightIcon />
      </Arrow>
    ) : null
  );
}

function PrevArrow(props: any) {
  const { onClick, currentSlide, slideCount } = props;
  return (
    // 첫 번째 이미지가 아니고, 현재 슬라이드가 총 슬라이드 개수보다 작을 때만 화살표를 보여줍니다.
    currentSlide > 0 && currentSlide < slideCount ? (
      <Arrow className="left" onClick={onClick}>
        <NavArrowLeftIcon />
      </Arrow>
    ) : null
  );
}

export const SliderImg = styled.img`
  position: relative;
  width: 900px;
  height: 520px;
  border-radius: 4px;
`;

export const Arrow = styled.p`
  position: absolute;
  top: 43%;
  transform: translateY(-50%);

  color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;
  z-index: 1;
  &.left {
    left: -20px;
  }

  &.right {
    right: -20px;
  }
`;

function DomesticSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container" style={{ position: "relative" }}>
      <Slider {...settings} className="slider">
        <ImageList>
          <img src={Busan} alt="부산" />
          <CityName>부산</CityName>
        </ImageList>
        <ImageList>
          <img src={Gapyeong} alt="가평" />
          <CityName>가평</CityName>
        </ImageList>
        <ImageList>
          <img src={Haewoondae} alt="해운대" />
          <CityName>해운대</CityName>
        </ImageList>
        <ImageList>
          <img src={Gyeongju} alt="경주" />
          <CityName>경주</CityName>
        </ImageList>
        <ImageList>
          <img src={Sokcho} alt="속초" />
          <CityName>속초</CityName>
        </ImageList>
        <ImageList>
          <img src={Yeosoo} alt="여수" />
          <CityName>여수</CityName>
        </ImageList>
        <ImageList>
          <img src={Incheon} alt="인천" />
          <CityName>인천</CityName>
        </ImageList>
        <ImageList>
          <img src={Kangreung} alt="강릉" />
          <CityName>강릉</CityName>
        </ImageList>
        <ImageList>
          <img src={Jeju} alt="제주" />
          <CityName>제주</CityName>
        </ImageList>
        <ImageList>
          <img src={Seoul} alt="서울" />
          <CityName>서울</CityName>
        </ImageList>
      </Slider>
    </div>
  );
}

export default DomesticSlider;

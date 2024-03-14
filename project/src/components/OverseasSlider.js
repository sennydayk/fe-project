import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as NavArrowRightIcon } from "../assets/Group 2.svg";
import { ReactComponent as NavArrowLeftIcon } from "../assets/Group 1.svg";
import Guam from "../assets/괌.webp";
import Kyoto from "../assets/교토.webp";
import Natrang from "../assets/나트랑.webp";
import Danang from "../assets/다낭.webp";
import Tokyo from "../assets/도쿄.webp";
import Bangkok from "../assets/방콕.webp";
import Singapore from "../assets/싱가포르.webp";
import Osaka from "../assets/오사카.webp";
import Kotakinabalu from "../assets/코타키나발루.webp";
import Fukuoka from "../assets/후쿠오카.webp";
import styled from "styled-components";
import "./Slider.css";

const ImageList = styled.div``;

const CityName = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  margin-top: 15px;
`;
function NextArrow(props) {
  const { className, style, onClick, currentSlide, slideCount } = props;

  return currentSlide < slideCount - 6 ? (
    <Arrow className={`right`} onClick={onClick}>
      <NavArrowRightIcon />
    </Arrow>
  ) : null;
}

function PrevArrow(props: any) {
  const { onClick, currentSlide, slideCount } = props;
  return currentSlide > 0 && currentSlide < slideCount ? (
    <Arrow className="left" onClick={onClick}>
      <NavArrowLeftIcon />
    </Arrow>
  ) : null;
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

function OverseasSlider() {
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
          <img src={Guam} alt="괌" />
          <CityName>괌</CityName>
        </ImageList>
        <ImageList>
          <img src={Kyoto} alt="교토" />
          <CityName>교토</CityName>
        </ImageList>
        <ImageList>
          <img src={Natrang} alt="나트랑" />
          <CityName>나트랑</CityName>
        </ImageList>
        <ImageList>
          <img src={Danang} alt="다낭" />
          <CityName>다낭</CityName>
        </ImageList>
        <ImageList>
          <img src={Tokyo} alt="도쿄" />
          <CityName>도쿄</CityName>
        </ImageList>
        <ImageList>
          <img src={Bangkok} alt="방콕" />
          <CityName>방콕</CityName>
        </ImageList>
        <ImageList>
          <img src={Singapore} alt="싱가포르" />
          <CityName>싱가폴</CityName>
        </ImageList>
        <ImageList>
          <img src={Osaka} alt="오사카" />
          <CityName>오사카</CityName>
        </ImageList>
        <ImageList>
          <img src={Kotakinabalu} alt="코타키나발루" />
          <CityName>코타키나발루</CityName>
        </ImageList>
        <ImageList>
          <img src={Fukuoka} alt="후쿠오카" />
          <CityName>후쿠오카</CityName>
        </ImageList>
      </Slider>
    </div>
  );
}

export default OverseasSlider;

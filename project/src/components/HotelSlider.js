import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as NavArrowRightIcon } from "../assets/Group 2.svg";
import { ReactComponent as NavArrowLeftIcon } from "../assets/Group 1.svg";
import Preview from "./Preview";
import Saint from "../assets/Saint.jpg";

const HotelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const HotelPreview = styled.img`
  width: 200px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 25%;
  transform: translateY(-50%);
  color: #fff;
  width: 43px;
  height: 43px;
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

const NextArrow = (props) => {
  const { className, style, onClick, currentSlide, slideCount } = props;
  return (
    // 마지막 슬라이드 그룹에 도달했는지 확인합니다.
    currentSlide < slideCount - 4 ? (
      <Arrow className={`right`} onClick={onClick}>
        <NavArrowRightIcon />
      </Arrow>
    ) : null
  );
};

const PrevArrow = (props) => {
  const { onClick, currentSlide, slideCount } = props;
  return (
    // 첫 번째 이미지가 아니고, 현재 슬라이드가 총 슬라이드 개수보다 작을 때만 화살표를 보여줍니다.
    currentSlide > 0 && currentSlide < slideCount ? (
      <Arrow className="left" onClick={onClick}>
        <NavArrowLeftIcon />
      </Arrow>
    ) : null
  );
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const hotels = [
  {
    image: Saint,
    category: "블랙·특급·호텔",
    title: "★당일특가★ 세인트존스 호텔",
    location: "강릉시·강문해변 앞",
    rating: "9.8",
    reviewCount: "6,533",
    price: "62,000",
    originalPrice: "352,000",
  },
  {
    image: Saint,
    category: "블랙·특급·호텔",
    title: "★당일특가★ 세인트존스 호텔",
    location: "강릉시·강문해변 앞",
    rating: "9.8",
    reviewCount: "6,533",
    price: "62,000",
    originalPrice: "352,000",
  },
  {
    image: Saint,
    category: "블랙·특급·호텔",
    title: "★당일특가★ 세인트존스 호텔",
    location: "강릉시·강문해변 앞",
    rating: "9.8",
    reviewCount: "6,533",
    price: "62,000",
    originalPrice: "352,000",
  },
  {
    image: Saint,
    category: "블랙·특급·호텔",
    title: "★당일특가★ 세인트존스 호텔",
    location: "강릉시·강문해변 앞",
    rating: "9.8",
    reviewCount: "6,533",
    price: "62,000",
    originalPrice: "352,000",
  },
  {
    image: Saint,
    category: "블랙·특급·호텔",
    title: "★당일특가★ 세인트존스 호텔",
    location: "강릉시·강문해변 앞",
    rating: "9.8",
    reviewCount: "6,533",
    price: "62,000",
    originalPrice: "352,000",
  },
  {
    image: Saint,
    category: "블랙·특급·호텔",
    title: "★당일특가★ 세인트존스 호텔",
    location: "강릉시·강문해변 앞",
    rating: "9.8",
    reviewCount: "6,533",
    price: "62,000",
    originalPrice: "352,000",
  },
  {
    image: Saint,
    category: "블랙·특급·호텔",
    title: "★당일특가★ 세인트존스 호텔",
    location: "강릉시·강문해변 앞",
    rating: "9.8",
    reviewCount: "6,533",
    price: "62,000",
    originalPrice: "352,000",
  },
  {
    image: Saint,
    category: "블랙·특급·호텔",
    title: "★당일특가★ 세인트존스 호텔",
    location: "강릉시·강문해변 앞",
    rating: "9.8",
    reviewCount: "6,533",
    price: "62,000",
    originalPrice: "352,000",
  },
  {
    image: Saint,
    category: "블랙·특급·호텔",
    title: "★당일특가★ 세인트존스 호텔",
    location: "강릉시·강문해변 앞",
    rating: "9.8",
    reviewCount: "6,533",
    price: "62,000",
    originalPrice: "352,000",
  },
  {
    image: Saint,
    category: "블랙·특급·호텔",
    title: "★당일특가★ 세인트존스 호텔",
    location: "강릉시·강문해변 앞",
    rating: "9.8",
    reviewCount: "6,533",
    price: "62,000",
    originalPrice: "352,000",
  },
  // 더 많은 호텔 데이터를 배열에 추가할 수 있습니다.
];

function HotelSlider() {
  return (
    <div className="slider-container" style={{ position: "relative" }}>
      <Slider {...settings}>
        {hotels.map((hotel, index) => (
          <HotelWrapper key={index}>
            <HotelPreview src={hotel.image} alt={hotel.title} />
            <Preview {...hotel} />
          </HotelWrapper>
        ))}
      </Slider>
    </div>
  );
}

export default HotelSlider;

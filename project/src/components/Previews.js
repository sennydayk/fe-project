import React from "react";
import Preview from "./Preview";
import Saint from "../assets/Saint.jpg";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotelWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px; /* 호텔 사진과 정보 간의 간격을 조정할 수 있습니다. */
`;

const HotelPreview = styled.img`
  width: 240px;
  border-radius: 8px;
  margin-bottom: 10px; /* 호텔 사진과 정보의 간격을 조정할 수 있습니다. */
`;

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function Previews() {
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

  return (
    <Slider {...settings}>
      {hotels.map((hotel, index) => (
        <HotelWrapper key={index} hotel={hotel} />
      ))}
    </Slider>
  );
}

export default Previews;

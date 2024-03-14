import React, { useState } from "react";
import styled from "styled-components";
import MainVisual from "./MainVisual";
import DomesticSlider from "./DomesticSlider";
import OverseasSlider from "./OverseasSlider";
import HotelSlider from "./HotelSlider";

const OrderButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -1px;
  border: #ececec 2px solid;
  background-color: ${(props) => (props.clicked ? "#1273E4" : "white")};
  color: ${(props) => (props.clicked ? "white" : "black")};
  border-radius: 15px;
  padding: 6px 15px;
  margin-right: 7px;
  margin-bottom: 50px;
`;

const Paragraph = styled.p`
  font-size: 21px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: -1px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const TripContainer = styled.div`
  padding: 0 150px;
`;

function Main() {
  const [activeButton, setActiveButton] = useState(3);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
  return (
    <>
      <>
        <MainVisual />
      </>
      <TripContainer>
        <Paragraph>국내 인기 여행지</Paragraph>
        <DomesticSlider />
        <Paragraph>해외 인기 여행지</Paragraph>
        <OverseasSlider />
        <>
          <Paragraph>인기 추천 숙소</Paragraph>
          <OrderButton
            clicked={activeButton === 3}
            onClick={() => handleButtonClick(3)}
          >
            전체
          </OrderButton>
          <OrderButton
            clicked={activeButton === 4}
            onClick={() => handleButtonClick(4)}
          >
            모텔
          </OrderButton>
          <OrderButton
            clicked={activeButton === 5}
            onClick={() => handleButtonClick(5)}
          >
            호텔·리조트
          </OrderButton>
          <OrderButton
            clicked={activeButton === 6}
            onClick={() => handleButtonClick(6)}
          >
            펜션·풀빌라
          </OrderButton>
          <OrderButton
            clicked={activeButton === 7}
            onClick={() => handleButtonClick(7)}
          >
            프리미엄 블랙
          </OrderButton>
          <OrderButton
            clicked={activeButton === 8}
            onClick={() => handleButtonClick(8)}
          >
            캠핑·글램핑
          </OrderButton>
          <OrderButton
            clicked={activeButton === 9}
            onClick={() => handleButtonClick(9)}
          >
            홈&빌라
          </OrderButton>
          <OrderButton
            clicked={activeButton === 10}
            onClick={() => handleButtonClick(10)}
          >
            게하·한옥
          </OrderButton>{" "}
          <HotelSlider />
        </>
      </TripContainer>
    </>
  );
}

export default Main;

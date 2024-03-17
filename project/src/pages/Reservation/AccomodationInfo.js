import React from "react";
import styled from "styled-components";
import hotel from "./img/hotelImg.png";

const Wrapper = styled.div`
  border: 1px solid #ebebeb;
  border-radius: 12px;
  padding-left: 24px;
  padding-right: 24px;
  width: 340px;
  display: flex;
  flex-direction: column;
  line-height: 4em;
  margin: 20px;
`;

const H4 = styled.h4`
  font-size: ${(props) => props.theme.fontSize_xl};
  font-weight: bold;
`;

const P = styled.p`
  font-size: ${(props) => props.theme.fontSize_md};
  color: #888888;
`;

function AccomodationInfo() {
  return (
    <Wrapper>
      <H4>세인트존스 호텔</H4>
      <img src={hotel} alt="Hotel" style={{ borderRadius: "10px" }}></img>
      <P>객실</P>
      <p>슈페리어 더블 (노오션뷰 / Room Only)</p>
      <P>일정</P>
      <p>3월 19일 - 3월 20일</p>
      <P>기준인원</P>
      <p>2명</p>
    </Wrapper>
  );
}

export default AccomodationInfo;

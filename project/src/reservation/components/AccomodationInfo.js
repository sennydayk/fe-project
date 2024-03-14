import React from "react";
import styled from "styled-components";
import Theme from "../styles/Theme";
import hotel from "../img/호텔.jpeg";

function AccomodationInfo() {
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

  return (
    <Wrapper>
      <H4>세인트존스 호텔</H4>
      <img src={hotel} alt="Hotel" style={{ borderRadius: "10px" }}></img>
      <P>객실</P>
      <P>일정</P>
      <P>기준인원</P>
    </Wrapper>
  );
}

export default AccomodationInfo;

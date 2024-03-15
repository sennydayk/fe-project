import React from "react";
import styled from "styled-components";

import PersonInfo from "./PersonInfo";
import PaymentsMethod from "./PaymentsMethod";
import Theme from "../../styles/Theme";
import AccomodationInfo from "./AccomodationInfo";
import PaymentsInfo from "./PaymentsInfo";

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 40px 96px;
  `;

const Hr = styled.hr`
    background: #f5f5f5;
    border: 0;
    height: 2px;
  `;
const MainLeft = styled.div``;

const MainRight = styled.div``;

function Reservation() {
  return (
    <>
      <Main>
        <MainLeft>
          <PersonInfo theme={Theme}></PersonInfo>
          <Hr></Hr>
          <PaymentsMethod theme={Theme}></PaymentsMethod>
        </MainLeft>
        <MainRight>
          <AccomodationInfo></AccomodationInfo>
          <Hr></Hr>
          <PaymentsInfo></PaymentsInfo>
        </MainRight>
      </Main>
    </>
  );
}
export default Reservation;

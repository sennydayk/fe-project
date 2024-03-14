import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import PersonInfo from "./components/PersonInfo";
import PaymentsMethod from "./components/PaymentsMethod";
import Theme from "./styles/Theme";
import AccomodationInfo from "./components/AccomodationInfo";
import PaymentsInfo from "./components/PaymentsInfo";
import styled from "styled-components";

function App() {
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

  return (
    <>
      <header></header>
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
      <footer></footer>
    </>
  );
}

export default App;

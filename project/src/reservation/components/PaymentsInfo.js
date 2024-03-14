import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../styles/Theme";

function PaymentsInfo() {
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
    color: ${(props) => props.theme.black};
  `;

  const Hr = styled.hr`
    background: #f5f5f5;
    border: 0;
    height: 2px;
    width: 100%;
  `;

  const Button = styled.button`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    border-style: none;
    border-radius: 10px;
    font-size: ${(props) => props.theme.fontSize_lg};
    font-weight: bold;
    background-color: ${(props) => props.theme.blue};
    color: white;
  `;

  return (
    <Wrapper>
      <H4>결제 정보</H4>
      <P style={{ fontWeight: "lighter" }}>객실 가격</P>
      <Hr />
      <P style={{ fontWeight: "bold" }}>총 결제 금액</P>
      <Terms></Terms>
      <Button>결제하기</Button>
    </Wrapper>
  );
}

function Terms() {
  const A = styled.a`
    font-size: ${(props) => props.theme.fontSize_md};
    color: ${(props) => props.theme.black};
  `;

  const [termsBoolean, setTermsBoolean] = useState(false);

  const showTerms = (prev) => {
    setTermsBoolean(!termsBoolean);
    console.log(termsBoolean);
  };

  const checkedHandler = () => {
    if (termsBoolean == true) {
      const obj_1 = document.getElementById("1");
      const obj_2 = document.getElementById("2");
      const obj_3 = document.getElementById("3");
      const obj_4 = document.getElementById("4");
      obj_1.checked = !obj_1.checked;
      obj_2.checked = !obj_2.checked;
      obj_3.checked = !obj_3.checked;
      obj_4.checked = !obj_4.checked;
    }
  };
  return (
    <>
      <div>
        <input onClick={checkedHandler} type="checkbox"></input>
        <A
          onClick={showTerms}
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          약관 전체동의 ↓
        </A>
      </div>
      {termsBoolean == true ? <TermsList></TermsList> : null}
    </>
  );
}

function TermsList() {
  const A = styled.a`
    font-size: ${(props) => props.theme.fontSize_md};
    color: ${(props) => props.theme.black};
  `;

  const Hr = styled.hr`
    background: #f5f5f5;
    border: 0;
    height: 2px;
  `;

  return (
    <>
      <div style={{ lineHeight: "2em" }}>
        <div>
          <input id="1" type="checkbox"></input>
          <A>숙소 이용규칙 및 취소/환불규정 동의(필수)</A>
        </div>
        <Hr></Hr>
        <div>
          <input id="2" type="checkbox"></input>
          <A>개인정보 수집 및 이용 동의(필수)</A>
        </div>
        <Hr></Hr>
        <div>
          <input id="3" type="checkbox"></input>
          <A>개인정보 제3자 제공 동의(필수)</A>
        </div>
        <Hr></Hr>
        <div>
          <input id="4" type="checkbox"></input>
          <A>만 14세 이상 확인(필수)</A>
        </div>
        <Hr></Hr>
      </div>
    </>
  );
}

export default PaymentsInfo;

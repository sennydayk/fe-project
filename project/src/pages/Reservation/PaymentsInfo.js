import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기
import styled from "styled-components";

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
  height: 70px;
  margin-bottom: 20px;
  padding-bottom: 70px;
  border-style: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  background-color: ${(props) => props.theme.blue};
  color: white;
`;

const A = styled.a`
  font-size: ${(props) => props.theme.fontSize_md};
  color: ${(props) => props.theme.black};
`;

function Terms() {
  const [termsBoolean, setTermsBoolean] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 가져오기

  const showTerms = () => {
    setTermsBoolean(!termsBoolean);
  };

  const checkedHandler = () => {
    setTermsBoolean(!termsBoolean);
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
      {termsBoolean && <TermsList />}
    </>
  );
}

function TermsList() {
  return (
    <>
      <div style={{ lineHeight: "2em" }}>
        <div>
          <input id="1" type="checkbox"></input>
          <A>숙소 이용규칙 및 취소/환불규정 동의(필수)</A>
        </div>
        <Hr />
        <div>
          <input id="2" type="checkbox"></input>
          <A>개인정보 수집 및 이용 동의(필수)</A>
        </div>
        <Hr />
        <div>
          <input id="3" type="checkbox"></input>
          <A>개인정보 제3자 제공 동의(필수)</A>
        </div>
        <Hr />
        <div>
          <input id="4" type="checkbox"></input>
          <A>만 14세 이상 확인(필수)</A>
        </div>
        <Hr />
      </div>
    </>
  );
}

function PaymentsInfo() {
  const navigate = useNavigate(); // useNavigate 훅 가져오기

  const handlePayment = () => {
    // 결제 완료 시 처리하는 함수
    alert("결제가 완료되었습니다.");
    navigate("/home"); // useNavigate를 통해 "/home"으로 이동
  };

  return (
    <Wrapper>
      <Terms />
      <H4>결제 정보</H4>
      <P style={{ fontWeight: "lighter" }}>객실 가격</P>
      <p>113,000원</p>
      <P style={{ fontWeight: "bold" }}>총 결제 금액</P>
      <p>113,000원</p>
      <Button onClick={handlePayment}>결제하기</Button>{" "}
      {/* 결제하기 버튼에 handlePayment 함수 연결 */}
    </Wrapper>
  );
}

export default PaymentsInfo;

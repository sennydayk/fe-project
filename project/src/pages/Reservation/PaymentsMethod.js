import React, { useState } from "react";
import styled from "styled-components";

import kakao from "./logo/kakao.png";
import kbpay from "./logo/kbpay.png";
import npay2 from "./logo/npay2.png";
import payco from "./logo/payco.png";
import tosspay from "./logo/tosspay.png";

function PaymentsMethod(props) {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 4em;
    margin: 20px;
  `;

  const H1 = styled.h1`
    font-size: ${(props) => props.theme.fontSize_xxl};
    font-weight: bold;
  `;

  const H4 = styled.h4`
    font-size: ${(props) => props.theme.fontSize_xl};
    font-weight: bold;
  `;

  const P = styled.p`
    font-size: ${(props) => props.theme.fontSize_base};
  `;

  return (
    <Wrapper>
      <H4>결제 수단</H4>
      <EachPayment></EachPayment>
      <P>
        <input type="checkbox"></input>이 결제 수단을 다음에도 사용
      </P>
    </Wrapper>
  );
}

function EachPayment() {
  const PaymentList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    margin: 10px 0 20px 0;
    width: calc(100% + 6px);
  `;

  const PaymentItem = styled.div`
    background-color: #fff;
    border: 1.5px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    color: #333;
    cursor: pointer;
    height: 48px;
    line-height: 46px;
    margin: 0 6px 8px 0;
    position: relative;
    text-align: center;
  `;

  const [modalBooleanKakao, setModalBooleanKakao] = useState(false);
  const [modalBooleanToss, setModalBooleanToss] = useState(false);

  const clickMethodKaKao = (prev) => {
    setModalBooleanKakao(!modalBooleanKakao);
    setModalBooleanToss(false);
  };

  const clickMethodToss = (prev) => {
    setModalBooleanToss(!modalBooleanToss);
    setModalBooleanKakao(false);
  };

  return (
    <>
      <PaymentList>
        <PaymentItem onClick={clickMethodKaKao}>
          <img
            src={kakao}
            alt="Kakao"
            style={{ width: "100px", height: "45px", verticalAlign: "middle" }}
          ></img>
        </PaymentItem>
        <PaymentItem onClick={clickMethodToss}>
          <img
            src={tosspay}
            alt="Tosspay"
            style={{ width: "100px", height: "25px", verticalAlign: "middle" }}
          ></img>
        </PaymentItem>
        <PaymentItem>신용/체크 카드</PaymentItem>
        <PaymentItem>
          <img
            src={kbpay}
            alt="Kbpay"
            style={{ width: "100px", height: "45px", verticalAlign: "middle" }}
          ></img>
        </PaymentItem>
        <PaymentItem>
          <img
            src={npay2}
            alt="Npay2"
            style={{ width: "100px", height: "45px", verticalAlign: "middle" }}
          ></img>
        </PaymentItem>
        <PaymentItem>
          <img
            src={payco}
            alt="Payco"
            style={{ width: "100px", height: "45px", verticalAlign: "middle" }}
          ></img>
        </PaymentItem>
        <PaymentItem>법인 카드</PaymentItem>
        <PaymentItem>휴대폰 결제</PaymentItem>
      </PaymentList>
      {modalBooleanKakao == true ? <ModalKakao></ModalKakao> : null}
      {modalBooleanToss == true ? <ModalToss></ModalToss> : null}
    </>
  );
}

function ModalKakao() {
  const ModalWrapper = styled.div`
    line-height: 1.5em;
  `;
  const P = styled.p`
    font-size: ${(props) => props.theme.fontSize_base};
    font-weight: bold;
  `;

  const Box = styled.div`
    background-color: #f4f7fa;
    border: none;
    border-radius: 5px;
    padding: 20px;
    font-size: ${(props) => props.theme.fontSize_md};
  `;

  return (
    <ModalWrapper>
      <P>카카오페이</P>
      <Box>
        <p>호텔/펜션 - 7만원 이상, 10% 할인(오전0시, 일 850명)</p>
        <p style={{ fontWeight: "bold" }}>최대 할인금액 1만원</p>
        <p>
          모텔 - 2만원 이상, <a style={{ fontWeight: "bold" }}>2천원 할인</a>
          (오전0시, 일 850명)
        </p>
      </Box>
    </ModalWrapper>
  );
}

function ModalToss() {
  const ModalWrapper = styled.div`
    line-height: 1.5em;
  `;
  const P = styled.p`
    font-size: ${(props) => props.theme.fontSize_base};
    font-weight: bold;
  `;

  const Box = styled.div`
    background-color: #f4f7fa;
    border: none;
    border-radius: 5px;
    padding: 20px;
    font-size: ${(props) => props.theme.fontSize_md};
  `;

  return (
    <ModalWrapper>
      <P>토스페이</P>
      <Box>
        <p>
          3만원 이상, 10% <a style={{ fontWeight: "bold" }}>최대 1만원 할인</a>
          (오전10시, 일400명)
        </p>
        <p>
          2만원 이상, <a style={{ fontWeight: "bold" }}>2천원 할인</a>(오후4시,
          일1700명)
        </p>
        <p>
          +생애 첫결제 시, <a style={{ fontWeight: "bold" }}>5천원 캐시백</a>
        </p>
      </Box>
    </ModalWrapper>
  );
}

export default PaymentsMethod;

import React, { useState } from "react";
import styled from "styled-components";

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
  font-size: ${(props) => props.theme.fontSize_md};
  color: #888888;
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.inputColor};
  width: 300px;
  height: 70px;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSize_lg};
`;
const Button = styled.button`
  width: 150px;
  height: 50px;
  margin: 20px;
  padding-bottom: 70px;
  border-style: none;
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontSize_lg};
  font-weight: bold;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: lightgrey;
`;

function PersonInfo(props) {
  const [modalBoolean, setModalBoolean] = useState(false);
  const showModal = () => {
    const username = document.getElementById("username").value;
    const userphone = document.getElementById("userphone").value;
    if (username !== "" && userphone !== "") {
      setModalBoolean(true);
    }
  };

  return (
    <Wrapper>
      <H1>
        {" "}
        <a>←</a> 예약 확인 및 결제
      </H1>
      <H4>예약자 정보</H4>
      <div>
        <P>예약자 이름</P>
        <Input id="username" type="text" placeholder="홍길동"></Input>
      </div>
      <div>
        <P>휴대폰 번호</P>
        <Input id="userphone" type="tel" placeholder="010-1234-5678"></Input>
        <Button onClick={showModal}>인증번호 전송</Button>
        {modalBoolean == true ? (
          <CertificationNumModal
            setModalBoolean={setModalBoolean}
          ></CertificationNumModal>
        ) : null}
        <P>개인 정보 보호를 위해 안심번호로 숙소에 전송됩니다.</P>
      </div>
    </Wrapper>
  );
}

function CertificationNumModal({ setModalBoolean }) {
  const Modal = styled.div`
    width: 300px;
    height: 150px;
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: lightgrey;
    padding: 20px;
    justify-content: center;
    text-align: center;
  `;
  const CloseButton = styled.button`
    width: 50px;
    height: 30px;
    background-color: ${(props) => props.theme.blue};
    color: white;
    font-size: 17px;
    border: none;
    border-radius: 3px;
    text-align: center;
    font-weight: bold;
  `;

  // const Shadow = styled.div`
  //   position: fixed;
  //   left: 0;
  //   top: 0;
  //   background: rgba(0, 0, 0, 0.52);
  //   width: 100%;
  //   height: 100%;
  //   z-index: 1;
  //   display: none;
  // `;

  const closeModal = () => {
    setModalBoolean(false);
  };

  return (
    <Modal>
      인증번호가 발송 되었습니다.
      <p>
        <CloseButton onClick={closeModal}>닫기</CloseButton>
      </p>
    </Modal>
  );
}
export default PersonInfo;

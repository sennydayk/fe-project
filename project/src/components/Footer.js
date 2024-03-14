import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 130px repeat(6, 1fr) 130px;
  width: 100%; /* 전체 너비에서 마진을 뺀 값 */
  margin-top: 80px;
  background-color: #fafafa;
`;

const Item = styled.div`
  padding: 20px;
  height: 150px;
  margin-top: 30px;
  width: 230px;
  background-color: #fafafa;
`;

const SpannedItem = styled(Item)`
  grid-column: 2 / Span 3; /* 아이템이 3칸에 걸쳐 있도록 설정 */
  width: 420px;
`;

const Content = styled.div`
  background-color: #fafafa;
  width: 100%;
  padding: 30px 145px 0 145px;
`;

const Btn = styled.button`
  background-color: #ffffff;
  border: 2px solid #ebebeb;
  border-radius: 6px;
  margin: 6px 9px 6px 0;
  padding: 10px;
`;

const Div = styled.div`
  font-size: 17px;
  color: gray;
  font-weight: 500;
  padding-bottom: 9px;
`;

const Div2 = styled.div`
  font-size: 19px;
  color: black;
  font-weight: 600;
  padding-bottom: 15px;
`;

const Div3 = styled.div`
  font-size: 13px;
  color: gray;
  font-weight: 400;
  padding-bottom: 6px;
`;

const Span = styled.span`
  padding-right: 15px;
  font-size: 16px;
  font-weight: 500;
  color: #9ca0a6;
`;

function Footer() {
  return (
    <>
      <Container>
        <SpannedItem>
          <Div2>고객센터</Div2>
          <Div>오전 9시 ~ 새벽 3시 운영</Div>
          <Btn>1670-6250</Btn>
          <Btn>카카오 문의</Btn>
        </SpannedItem>
        {/* 3칸에 걸쳐 있는 아이템 */}
        <Item>
          <Div2>회사</Div2>
          <Div>회사소개</Div>
        </Item>{" "}
        {/* 단일 칸 아이템 */}
        <Item>
          {" "}
          <Div2>서비스</Div2>
          <Div>공지사항</Div>
          <Div>자주 묻는 질문</Div>
          <Div>기업 출장/복지 서비스 문의</Div>
        </Item>{" "}
        {/* 단일 칸 아이템 */}
        <Item>
          <Div2>혜택</Div2>
          <Div>트립홀릭 혜택 안내</Div>
          <Div>비즈니스 회원 혜택 안내</Div>
          <Div>여기어때 상품권 조회</Div>
        </Item>
      </Container>

      <Content>
        <Div3>(주)여기어때컴퍼니</Div3>
        <Div3>
          주소 : 서울특별시 강남구 봉은사로 479, 479타워 11층 | 대표이사 :
          정명훈 | 사업자등록번호 : 742-86-00224사업자정보확인
        </Div3>
        <Div3>
          전자우편주소 : help@goodchoice.kr | 통신판매번호 : 2017-서울강남-01779
          | 관광사업자 등록번호 : 제1026-24호 | 전화번호 : 1670-6250 |
          호스팅서비스제공자의 상호 표시 : (주)여기어때컴퍼니
        </Div3>
        <Div3>
          (주)여기어때컴퍼니는 통신판매중개자로서 통신판매의 당사자가 아니며,
          상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게
          있습니다.
        </Div3>
        <Div style={{ marginTop: "25px" }}>
          <Span>이용약관</Span>
          <Span style={{ color: "#4a4138" }}>개인정보처리방침</Span>
          <Span>소비자 분쟁해결 기준</Span>
          <Span>콘텐츠산업진흥법에 의한 표시</Span>
        </Div>
        <Div3 style={{ paddingTop: "50px", paddingBottom: "70px" }}>
          <span>Copyright GC COMPANY Corp. All rights reserved.</span>
        </Div3>
      </Content>
    </>
  );
}
export default Footer;

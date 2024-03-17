import React from "react";
import * as S from "../styles/RoomFacilityStyle";
import SectionHeader from "../SectionHeader";
import MoreBtn from "../../../components/Button/MoreBtn";

const RoomFacility = ({ id }) => {
  return (
    <S.FacilityContainer id={id}>
      <S.FacilityTitleWrap>
        <SectionHeader sectionTitle="서비스 및 부대시설" />
        <MoreBtn buttonText="더보기" />
      </S.FacilityTitleWrap>
      <S.FacilityWrap>
        <ul>
          <li>피트니스</li>
          <li>반려견 동반</li>
          <li>사우나</li>
          <li>와이파이</li>
          <li>레스토랑</li>
          <li>드라이기</li>
          <li>주차장</li>
          <li>엘레베이터</li>
        </ul>
      </S.FacilityWrap>
    </S.FacilityContainer>
  );
};

export default RoomFacility;

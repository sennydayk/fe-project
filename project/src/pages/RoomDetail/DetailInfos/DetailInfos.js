import React from 'react';
import RoomOutline from './RoomOutline';
import styled from "styled-components";
import RoomFacility from './RoomFacility';
import RoomType from './RoomType';
import RoomInfo from './RoomInfo';

const DetailInfos = ({ params }) => {
  return (
    <DetailInfosWrap>
      <RoomOutline id='overview' params={params} />
      <RoomFacility id='facilities' />
      <RoomType id='rooms' />
      <RoomInfo />
    </DetailInfosWrap>
  );
};

export const DetailInfosWrap = styled.div`
  flex: 2;
  max-width: 700px;
`;

export default DetailInfos;
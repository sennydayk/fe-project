import React from 'react';
import styled from "styled-components";
import DetailInfos from './DetailInfos/DetailInfos';
import SideBar from './DetailInfos/SideBar';

const RoomDetailInfos = () => {
  return (
    <Wrap>
      <DetailInfos />
      <SideBar width={350} height={136} />
    </Wrap>
  );
};

export const Wrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export default RoomDetailInfos;
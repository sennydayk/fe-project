import React from 'react';
import styled from 'styled-components';
import GalleryGroup from './GalleryGroup';
import RoomDetailInfos from './RoomDetailInfos';
import Location from './Location';
import Review from './Review';

const RoomDetailMain = () => {
  return (
    <Main>
      <div>
        <GalleryGroup />
        <RoomDetailInfos />
        <Location id='location' />
        <Review id='reviews' />
      </div>
    </Main >
  );
};


// RoomDetailMain 스타일
const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 40px;
`;

export default RoomDetailMain;
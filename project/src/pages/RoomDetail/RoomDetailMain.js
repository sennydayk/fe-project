import React from 'react';
import styled from 'styled-components';
import GalleryGroup from './GalleryGroup';
import RoomDetailInfos from './RoomDetailInfos';
import Location from './Location';
import { useLocation, useParams } from 'react-router-dom';

const RoomDetailMain = () => {
  const params = useParams();
  const linkLocation = useLocation();

  if (!linkLocation || !linkLocation.state || !linkLocation.state.img) {
    return null;
  }

  return (
    <Main>
      <div>
        <GalleryGroup linkLocation={linkLocation} />
        <RoomDetailInfos params={params} linkLocation={linkLocation} />
        <Location id='location' linkLocation={linkLocation} />
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
import React, { useEffect } from 'react';
import * as S from '../RoomDetail/styles/LocationStyle'
import SectionHeader from './SectionHeader';
import Map from './DetailInfos/Map';
import CopyBtn from '../../components/Button/CopyBtn';

const Location = ({ id, linkLocation }) => {

  return (
    <article id={id}>
      <SectionHeader sectionTitle="위치" />
      <S.LocationInfos>
        <Map width={1200} height={400} latitude={linkLocation.state.mapy}
          longitude={linkLocation.state.mapx} />
        <S.LocationText>
          <div className='address'>
            <p>{linkLocation.state.address}</p>
            <CopyBtn />
          </div>
          <ul>
            <li>바닷가 해변 앞</li>
            <li>경포대 차량 7분</li>
            <li>오죽헌 차량 11분</li>
          </ul>
        </S.LocationText>
      </S.LocationInfos>
    </article>
  );
};

export default Location;
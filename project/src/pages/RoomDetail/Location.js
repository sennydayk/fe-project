import React from 'react';
import * as S from '../RoomDetail/styles/LocationStyle'
import SectionHeader from './SectionHeader';
import Map from './DetailInfos/Map';
import CopyBtn from '../../components/Button/CopyBtn';

const Location = ({ id }) => {
  return (
    <section id={id}>
      <SectionHeader sectionTitle="위치" />
      <S.LocationInfos>
        <Map width={1200} height={400} />
        <S.LocationText>
          <div className='address'>
            <p>강원 강릉시 강문동 1-1</p>
            <CopyBtn />
          </div>
          <ul>
            <li>강릉 강문해변 앞</li>
            <li>경포대 차량 7분</li>
            <li>오죽헌 차량 11분</li>
          </ul>
        </S.LocationText>
      </S.LocationInfos>
    </section>
  );
};

export default Location;
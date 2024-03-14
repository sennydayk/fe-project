import React from 'react';
import * as S from '../styles/RoomTypeStyle';
import SectionHeader from '../SectionHeader';
import room1 from '../../../images/room1.png';
import MoreBtn from '../../../components/Button/MoreBtn';
import PrimaryBtn from '../../../components/Button/PrimaryBtn';

const RoomType = ({ id }) => {
  return (
    <article id={id}>
      <SectionHeader sectionTitle="객실 선택" />
      <S.RoomCard>
        <S.RoomTypeImage>
          <img src={room1} alt='숙소이미지' />
        </S.RoomTypeImage>
        <S.RoomTypeInfo>
          <S.RoomTypeName>
            <h3>슈페리어 더블 (노오션뷰 / Room Only)</h3>
            <MoreBtn buttonText='상세정보' />
          </S.RoomTypeName>
          <S.RoomTypeText>
            <div className='top_box box'>
              <div className='time_info'>
                <p>입실 16:00</p>
                <p>퇴실 11:00</p>
              </div>
              <div>
                <div className='price'>113,600원</div>
                <PrimaryBtn text='객실예약' />
              </div>
            </div>
            <div className='bottom_box box'>
              <p className='sub_title'>객실정보</p>
              <p className='sub_text'>기준2인 · 최대2인</p>
            </div>
          </S.RoomTypeText>
        </S.RoomTypeInfo>
      </S.RoomCard>

      <S.RoomCard>
        <S.RoomTypeImage>
          <img src={room1} alt='숙소이미지' />
        </S.RoomTypeImage>
        <S.RoomTypeInfo>
          <S.RoomTypeName>
            <h3>슈페리어 더블 (노오션뷰 / Room Only)</h3>
            <MoreBtn buttonText='상세정보' />
          </S.RoomTypeName>
          <S.RoomTypeText>
            <div className='top_box box'>
              <div className='time_info'>
                <p>입실 16:00</p>
                <p>퇴실 11:00</p>
              </div>
              <div>
                <div className='price'>113,600원</div>
                <PrimaryBtn text='객실예약' />
              </div>
            </div>
            <div className='bottom_box box'>
              <p className='sub_title'>객실정보</p>
              <p className='sub_text'>기준2인 · 최대2인</p>
            </div>
          </S.RoomTypeText>
        </S.RoomTypeInfo>
      </S.RoomCard>
    </article >
  );
};

export default RoomType;
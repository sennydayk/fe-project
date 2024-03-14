import React from 'react';
import styled from 'styled-components';
import roomImg from '../../images/roomImg.webp';

const GalleryGroup = () => {
  return (
    <ImgContainer>
      <ImageLists>
        <ImageList className='big_image'>
          <ImgItem src={roomImg} alt='객실사진' />
        </ImageList>
        <ImageList className='small_image'>
          <ImgItem src={roomImg} alt='객실사진' />
        </ImageList>
      </ImageLists>
    </ImgContainer>
  );
};


// RoomThumbnail 스타일
const ImgContainer = styled.section`
  height: 512px;
  margin-bottom: 20px;
  grid-auto-flow: column;
`;

const ImageLists = styled.ul`
  height: 100%;
  display: flex;
  gap: 8px;
  `;

const ImageList = styled.li`
&.big_image {
  flex: 1.5;
}

&.small_image {
    flex: 1;
  }
`;

const ImgItem = styled.img`
  width: 100%;
  height: 100%;
`;

export default GalleryGroup;
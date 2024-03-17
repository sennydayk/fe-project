import React from 'react';
import SectionHeader from './SectionHeader';
import styled from 'styled-components';

const Review = ({ id }) => {
  return (
    <ReviewContainer id={id}>
      <SectionHeader sectionTitle="리얼 리뷰" />
    </ReviewContainer>
  );
};

const ReviewContainer = styled.article`
  height: 500px;
`;
export default Review;
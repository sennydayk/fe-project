import React from "react";

import styled from "styled-components";

const PCategory = styled.div`
  font-size: 13px;
  color: #727272;
`;
const PTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #333333;
`;
const PLoc = styled.div`
  color: #737373;
  font-size: 15px;
`;
const PStar = styled.div`
  font-size: 14px;
  color: #333333;
  background-color: #ffad0a;
  border-radius: 5px;
  padding: 1px 3px 1px 3px;
  font-weight: 600;
  margin-right: 5px;
`;
const PReview = styled.div`
  font-size: 14px;
  color: #727272;
`;
const PPrice = styled.div`
  font-size: 18px;
  color: #333333;
`;
const PPrice2 = styled.div`
  font-size: 15px;
  text-decoration: line-through;
`;

const PFlex = styled.div`
  display: flex;
`;

function Preview({
  category,
  title,
  location,
  rating,
  reviewCount,
  price,
  originalPrice,
}) {
  return (
    <div style={{ lineHeight: "23px", marginRight: "60px" }}>
      <PCategory>{category}</PCategory>
      <PTitle>{title}</PTitle>
      <PLoc>{location}</PLoc>
      <PFlex>
        <PStar>★{rating}</PStar>
        <PReview>{reviewCount}명 평가</PReview>
      </PFlex>
      <PFlex>
        <PPrice>{price}원</PPrice>
        <PPrice2>{originalPrice}</PPrice2>
      </PFlex>
    </div>
  );
}

export default Preview;

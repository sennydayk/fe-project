import Slider from "react-slick";
import styled from "styled-components";

export const OutlineContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.btnHover};
`;

export const OutlineTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 700;
  padding-bottom: 16px;

  .room_theme {
    color: ${(props) => props.theme.grayDeep};
    padding-bottom: 10px;
  }

  .room_name {
    font-size: ${(props) => props.theme.fontSize_xxl};
    overflow-wrap: break-word;
  }
  `;

export const OutlineReview = styled.div`
  .review_pre {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    font-weight: bold;

    .evaluation {
      color: ${(props) => props.theme.grayDark};
    }

    & > button {
      background: transparent;
      color: ${(props) => props.theme.blue};
      font-weight: 600;
      font-size: ${(props) => props.theme.fontSize_base};
    }
  }
`;

export const ReviewSlider = styled(Slider)`
  .slick-slide {
    max-width: 450px;
    margin-right: 20px;
  }
  `;


export const SliderCard = styled.div`
  height: 153px;
  background: ${(props) => props.theme.inputColor};
  padding: 20px 22px 20px 20px;
  border-radius: 12px;
  margin: 20px 0;

  .icon {
    width: 10%;
    margin-right: 6px;
  }
  .text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 5;
  }
`;

import styled from "styled-components";

export const RoomIntroWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.btnHover};
  
  .icon1 {
    width: 100%;
    text-align: start;
  }
  .icon2 {
    width: 100%;
    transform: rotate(180deg);
    text-align: justify;
  }
  p {
    font-weight: 400;
    line-height: 20px;
    color: ${(props) => props.theme.grayDeep};
  }
`;

export const RoomUsageWrap = styled.div`
    border-radius: 8px;
    padding-top: 16px;
    padding-bottom: 8px;

  .sub_title {
    text-align: start;
    font-weight: 700;
    margin-bottom: 12px;
    color: ${(props) => props.theme.grayDeep};
  }

  ul {
    position: relative;
    li {
      text-align: start;
      list-style-type: disc;
      list-style-position: inside;
      margin-top: 2px;
      margin-bottom: 8px;
      padding-left: 13px;
      line-height: 22px;
      color: ${(props) => props.theme.grayDark};

      &.caution {
        font-weight: 700;
      }
    }
  }
`;
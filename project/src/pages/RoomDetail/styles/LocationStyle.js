import styled from "styled-components";

export const LocationInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationText = styled.div`
  text-align: start;
  padding-top: 20px;

  & > div {
    display: flex;
  }

  .address {
    font-weight: 700;
    color: ${(props) => props.theme.grayDeep};
  }

  & > ul {
    border-radius: 8px;
    padding-top: 16px;
    padding-bottom: 8px;

    li {
      list-style-type: disc;
      list-style-position: inside;
      line-height: 30px;
      color: ${(props) => props.theme.grayDark};
    }
  }
`;
import styled from "styled-components";

export const FacilityContainer = styled.article`
  border-bottom: 1px solid ${(props) => props.theme.btnHover};
`;
export const FacilityTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

export const FacilityWrap = styled.div`
  height: 200px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      list-style-type: circle;
      list-style-position: inside;
      margin-right: 10px;
      line-height: 30px;
    }
  }
  
`;
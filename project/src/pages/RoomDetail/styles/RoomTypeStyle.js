import styled from "styled-components";

export const RoomCard = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.boxColor};
  padding: 24px;
  gap: 20px;
  border-radius: 16px;
  border-bottom: 1px solid ${(props) => props.theme.btnHover};
  margin-bottom: 20px;
`;

export const RoomTypeImage = styled.div`
  flex: 1;
  height: 224px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const RoomTypeInfo = styled.div`
  flex: 2;
  
  display: flex;
  flex-direction: column;
  gap: 12px;
  `;

export const RoomTypeName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    
    h3 {
      text-align: start;
      font-size: ${(props) => props.theme.fontSize_xl};
      font-weight: 700;
    }
    `;

export const RoomTypeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .box {
    padding: 16px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.white};
  }

  .top_box {
    display: flex;
    justify-content: space-between;
  }

  .time_info {
    font-size: ${(props) => props.theme.fontSize_sm};
    p {
      margin-bottom: 8px;
    }
  }

  .price {
    font-size: ${(props) => props.theme.fontSize_lg};
    font-weight: 700;
    margin-bottom: 10px;
  }

  .bottom_box {
    display: flex;
    font-size: ${(props) => props.theme.fontSize_sm};
  }

`;
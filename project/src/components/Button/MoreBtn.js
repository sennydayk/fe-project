import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const MoreBtn = ({ buttonText }) => {
  return (
    <>
      <MoreButton>
        <span>{buttonText}</span>
        <RightOutlined />
      </MoreButton>
    </>
  );
};

const MoreButton = styled.button`
  background: transparent;
  color: ${(props) => props.theme.blue};
  font-size: ${(props) => props.theme.fontSize_md};
  font-weight: bold;
  text-align: end;
`;

export default MoreBtn;
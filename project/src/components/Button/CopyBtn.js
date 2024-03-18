import { CopyOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const CopyBtn = () => {
  return (
    <CopyButton>
      <CopyOutlined />
      <span>주소복사</span>
    </CopyButton>
  );
};

const CopyButton = styled.button`
  color: ${(props) => props.theme.blue};
  background: transparent;
  font-size: ${(props) => props.theme.fontSize_md};

  & > span {
    padding-left: 3px;
  }
`;
export default CopyBtn;
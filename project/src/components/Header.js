import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  border: 1px solid black;
  width: 100%;
  max-width: 1200px;
  height: 76px;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <HeaderWrap>
      헤더영역입니다.
    </HeaderWrap>
  );
};

export default Header;
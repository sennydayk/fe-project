import React from 'react';
import styled from 'styled-components';

const SectionHeader = ({ sectionTitle }) => {
  return (
    <>
      <SectionHeaderTitle>
        {sectionTitle}
      </SectionHeaderTitle>
    </>
  );
};

const SectionHeaderTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize_lg};
  font-weight: 700;
  padding: 16px 0px;
  text-align: start; 
`;

export default SectionHeader;
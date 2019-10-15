import React from 'react';
import styled from '@emotion/styled';

const FLAG_WIDTH = 500;
const FLAG_HEIGHT= 300;

const Wrapper = styled.div`
  background-color: blue;
  /* 3:5 aspect ratio */
  height: ${FLAG_HEIGHT}px;
  width: ${FLAG_WIDTH}px;
  position: relative;
`;

const LeftTriangle = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  border-style: solid;
  border-width: ${FLAG_HEIGHT}px 0 0 ${FLAG_WIDTH}px;
  border-color: transparent transparent transparent rgba(0, 0, 0, 1);
`;

const RightTriangle = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 50%;
  width: 100%;
  border-style: solid;
  border-width: ${FLAG_HEIGHT}px ${FLAG_WIDTH}px 0 0;
  border-color: transparent rgba(255, 255, 255, 1) transparent transparent;
`;

const Flag = () => (
  <Wrapper>
    <LeftTriangle />
    <RightTriangle />
  </Wrapper>
);

export default Flag;

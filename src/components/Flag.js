import React from 'react';
import styled from '@emotion/styled';
import { scaleLinear } from 'd3-scale';

const FLAG_WIDTH = 500;
const FLAG_HEIGHT= 300;

const sizeScale = scaleLinear()
  .domain([0, 100])
  .range([0, 100]);

const opacityScale = scaleLinear()
  .domain([0, 100])
  .range([0, 1]);

const bgColorScale = scaleLinear()
  .domain([0, 100])
  .range(['#0000FF', '#FF0000']);

const Wrapper = styled.div`
  background-color: ${props => props.bgColor};
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
  width: ${props => props.size}%;
  border-style: solid;
  border-width: ${props => `${FLAG_HEIGHT}px 0 0 ${FLAG_WIDTH * (props.size / 100)}px`};
  border-color: ${props => `transparent transparent transparent rgba(0, 0, 0, ${props.opacity})`};
`;

const RightTriangle = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  height: ${props => props.size}%;
  width: 100%;
  border-style: solid;
  border-width: ${props => `${FLAG_HEIGHT * (props.size / 100)}px ${FLAG_WIDTH}px 0 0`};
  border-color: ${props => `transparent rgba(255, 255, 255, ${props.opacity}) transparent transparent`};
`;

const Flag = ({
  leftSize = 50,
  leftOpacity = 50,
  rightSize = 50,
  rightOpacity = 50,
  bgColor = 50
}) => (
  <Wrapper bgColor={bgColorScale(bgColor)}>
    <LeftTriangle size={sizeScale(leftSize)} opacity={opacityScale(leftOpacity)} />
    <RightTriangle size={sizeScale(rightSize)} opacity={opacityScale(rightOpacity)} />
  </Wrapper>
);

export default Flag;

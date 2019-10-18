import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 60%;

  > * + * {
    margin-top: 2rem;
  }
`;

const Control = styled.div`
  label {
    display: block;
  }

  input {
    width: 100%;
  }

  > * + * {
    margin-top: 0.5rem;
  }
`;

const Sliders = ({ flagData, handleChange }) => {
  return (
    <Wrapper>
      {Object.keys(flagData).map(flagProperty => (
        <Control key={flagProperty}>
          <label htmlFor={flagProperty}>{flagProperty}</label>
          <input
            name={flagProperty}
            type="range"
            min="0"
            max="100"
            step="1"
            onChange={e => handleChange(flagProperty, e.target.value)}
          />
        </Control>
      ))}
    </Wrapper>
  );
};

export default Sliders;

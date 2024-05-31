// src/components/Spinner.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #b89d42;
    border-color: #b89d42 transparent #b89d42 transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const Spinner = () => {
  return <SpinnerContainer />;
};

export default Spinner;

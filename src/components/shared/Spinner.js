import React from 'react';
import styled from 'styled-components';

const PrimarySpinner = styled.div`
  display: ${props => (props.isLoading ? 'block' : 'none')};
  position: absolute;
  right: 12px;
  top: 50%;
  margin-top: -12px;

  .loader,
  .loader:after {
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }
  .loader {
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 2px solid rgba(${props => props.color}, 0.1);
    border-right: 2px solid rgba(${props => props.color}, 0.1);
    border-bottom: 2px solid rgba(${props => props.color}, 0.1);
    border-left: 2px solid ${props => props.color};
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;
    z-index: 99;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const LightSpinner = PrimarySpinner.extend`
  left: 50%;
  top: 50%;
  margin-left: -12px;
  margin-top: -12px;

  .loader,
  .loader:after {
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }
`;

export const InputSpinner = ({ isLoading, color }) => (
  <PrimarySpinner isLoading={isLoading} color={color}>
    <div className="loader" />
  </PrimarySpinner>
);

export const ButtonSpinner = ({ isLoading, color }) => (
  <LightSpinner isLoading={isLoading} color={color}>
    <div className="loader" />
  </LightSpinner>
);

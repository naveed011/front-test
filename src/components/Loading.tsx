import React from "react";
import styled from "styled-components";
import { LoadingProps } from '../types/LoadingTypes';



const LoadingIndicator = styled.div<LoadingProps>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  animation: spin 1s linear infinite;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(300deg);
    }
    66% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loading: React.FC<LoadingProps> = ({ visible }) => {
  return <LoadingIndicator visible={visible} />;
};

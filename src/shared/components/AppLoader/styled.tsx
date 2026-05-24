import styled, { keyframes } from 'styled-components';

export const AppLoaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AppLoaderContent = styled.div`
  height: 4rem;
  width: 4rem;
  animation: ${rotate} 2s linear infinite;
  border-radius: 50%;
  border: solid #999 2px;
  border-top: transparent;
`;

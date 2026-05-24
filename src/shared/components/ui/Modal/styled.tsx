import styled from 'styled-components';

export const ModalWrap = styled.div`
  align-items: center;
  background: #0f0f0f;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 16px 24px;
  width: min-content;

  a {
    align-items: center;
    background: #e62429;
    border-radius: 5px;
    display: flex;
    height: 32px;
    justify-content: center;
    text-decoration: none;
    width: 100px;

    & + a {
      margin-left: 24px;
    }
  }
`;

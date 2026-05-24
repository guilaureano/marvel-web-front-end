import styled from 'styled-components';

export const CardWrap = styled.div`
  section {
    display: flex;
    flex-direction: column;
    background: #0f0f0f;
    border-radius: 8px;
    text-decoration: none;
    height: 252px;
    width: 170px;

    &:hover {
      transform: translateY(-4px) translateX(4px);
      transition: background-color 0.5s;
      background: #e62429;
    }

    div {
      display: flex;
      line-height: 14px;
      height: 52px;
      justify-content: space-between;
      align-items: center;
      padding: 8px 8px;

      strong {
        color: #fff;
        font-size: 12px;
        padding-right: 16px;
        text-transform: uppercase;
      }

      svg {
        color: #fff;
      }
    }

    img {
      border-radius: 5px 5px 0px 0px;
      height: 200px;
      width: 170px;
    }
  }
`;

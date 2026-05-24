import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scrollbar-gutter: stable;
  }

  body {
    background-color: #1f1f1f;
    -webkit-font-smoothing: antialiased;
    font: 16px Roboto, sans-serif;
  }

  button, input{
    font: 18px Roboto, sans-serif;
    border-radius: 5px;
  }

  h6 {
    color: #fff;
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 1026px;
    margin: 0 auto;
    padding: 48px 24px;
  }

  button {
    cursor: pointer;
  }

  footer {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 40px;
    width: 100%;

    #copy {
      background-color: #fff;
      color: #1f1f1f;
      font: 14px Montserrat, sans-serif;
      font-weight: bold;
      line-height: 20px;
      padding: 16px 0px;
      text-align: center;
      width: 100%;
    }
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --orange-100: #f89c1c;
    --purple-100: #86376e;
    --purple-200: #dac3d3;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: veneer, sans-serif;
    color: var(--purple-100);
    font-weight: 400;
  }

  h1 {
    font-size: 48px;
    line-height: 1.1;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 25px;
  }

  h4 {
    font-size: 18px;
  }

  button {
    font-family: veneer, sans-serif;
  }

  p {
    font-family: owners-text, sans-serif;
    font-size: 18px;
    color: var(--purple-100);
  }

`
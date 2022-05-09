import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
  body {
    font-family: "Roboto Mono", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #181818;
    /* background: rgb(248,255,254);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,255,254,1) 100%);
    background-repeat: no-repeat; */
    background-color: #9c88ff;
    margin: 24px;
  }
`;

export default StyledGlobal;

import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

export default createGlobalStyle`

${reset}

body{
    font-family: 'Inter', sans-serif;
    background-color: ${theme.colors.backgroundBlue};
    height: 100vh; 
    font-size: 1.6rem;
}

html {
      font-size: 62.5%;
    }

button {
    cursor: pointer;
}

input{
    box-sizing:border-box;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #707479;
    } 

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  
  .react-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: -320px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(1, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    z-index: 999;

    @media screen and (max-width: 780px) {
      right: -10px;

}

}
.react-modal-content {

  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xsmall};
    width: 100%;
    max-width: 420px;
    background: #ffffff;
    border: 1px solid ${theme.colors.backgroundBlue};
    border-radius: ${theme.border.radius};
  `}
}
.react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: 0;
    transition: filter 0.2s ease-in-out;
    
    &:hover {
      filter: brightness(0.8);
    }
  }


`;

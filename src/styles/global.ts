import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";
import media from "styled-media-query";

export default createGlobalStyle`

${reset}

body{
    font-family: 'Roboto', sans-serif;
    background-color: ${theme.colors.backgroundBlue};
    height: 100vh;
    
  
}

button {
    cursor: pointer;
}

input{
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
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
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(1, 0, 0, 0.1);
    backdrop-filter: blur(2px);

}
.react-modal-content {
    position: relative;
    padding: 1rem;
    width: 100%;
    max-width: 576px;
    background: #FFFFFF;
    border: 1px solid #E1E1E5;
    border-radius: 15px;
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

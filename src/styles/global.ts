import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'


export default createGlobalStyle`

${reset}


body{
    font-family: 'Roboto', sans-serif;
}

button {
    cursor: pointer;
}

input{box-sizing:border-box} 

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

`;
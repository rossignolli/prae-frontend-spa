import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'


export default createGlobalStyle`

${reset}


body{
    font-family: 'Inter', sans-serif;
}

button {
    cursor: pointer;
}

`;
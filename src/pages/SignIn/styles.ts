import styled, { keyframes } from 'styled-components';
import signInBackgroundImg from '../../assets/temp_assets/girlit.jpg'
export const Container = styled.div`
display: flex;
height: 100vh;

`;

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;



export const Content = styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromLeft} 2s;

    img {
        max-width: 300px;
        padding: 10px;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
    }



    h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 60px;
        line-height: 73px;
        color: #000000;
        margin-bottom: 16px;
    }

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`;

export const ADBIG = styled.section`



    width: 70%;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;


    @media screen and (max-width: 930px) {

    display: none;
    }


`

export const Form = styled.form`
    display: flex;
    width: 100%;
    padding: 22px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 420px;


    input {
        margin-bottom: 16px;
        width: 100%;
        height: 62px;
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid #A5A5A5;
        border-radius: 8px;
    }

    button{
        width: 100%;
        height: 72px;
        background: #7367F0;
        box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        color: #FFFFFF;
        border: none;
        outline: none;
        margin-bottom: 66px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
   }





`;
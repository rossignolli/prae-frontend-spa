import styled from 'styled-components';

export const Container = styled.div`
display: flex;
height: 100vh;
align-items: stretch;
`;



export const Content = styled.section`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



    h1 {
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 60px;
        line-height: 73px;
        color: #000000;
        margin-bottom: 16px;
    }

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`;

export const Ad_big = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;


    span {
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 180px;
        line-height: 242px;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-stroke-color: transparent;
        background-image: linear-gradient(90deg, #007cf0, #00dfd8)
    }

    `;

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        margin-bottom: 16px;
        width: 340px;
        height: 30px;
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid #A5A5A5;
        border-radius: 8px;
    }

    button{
        width: 340px;
        height: 72px;
        background: #000000;
        box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        color: #FFFFFF;
        border: none;
        outline: none;
        margin-bottom: 66px;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
   }





`;
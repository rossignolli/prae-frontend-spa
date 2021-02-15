import styled from 'styled-components';


export const Container = styled.div`
        display: flex;
        height: 100vh;
        background-color: #E5E5E5;
        flex-direction: column;
    `;


    
export const EquipamentsContent = styled.div`
    margin-top: 20px;
    margin-left: 340px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    margin-right: 20px;


    section {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        margin-right: 20px;


        button {
            margin-left: 10px;
        }


    }

    table {
        border-radius: 15px;
        width: 100%;
        background-color: #FFFFFF;
    }

    tr:nth-child(even){
        border-top: solid 1px #E5E5E5;
        border-bottom: solid 1px #E5E5E5;


        }

        th {
            height: 50px;
            vertical-align: middle;
            text-align: center;
            font-weight: bold;
        }


    td {
    height: 40px;
    font-size: 16px;
    padding: 10px;
    vertical-align: middle;
    text-align: center;
    img {
        display: inline-flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        vertical-align: middle;
        margin-right: 10px;

    }

    }

    .button-holder{
      display: flex;
      justify-content: flex-end;
      margin-top: 40px;

    button{
        margin-left: 20px;
    }

  }


@media screen and (max-width: 800px) {
margin-left: 20px;
}

`;


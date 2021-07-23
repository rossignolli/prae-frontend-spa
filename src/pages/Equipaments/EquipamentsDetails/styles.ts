import styled from 'styled-components';


export const Container = styled.div`
        display: flex;
        height: 100vh;
        background-color: #E5E5E5;
        flex-direction: column;

    `;


    
export const NewEquipamentsContent = styled.div`
    margin-top: 20px;
    margin-left: 340px;
    background-color: #E5E5E5;
    display: flex;
    padding: 50px;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;


    background-color: #FFFFFF;
    border-radius: 15px;

    div {
        margin-bottom: 20px;
    }


    // FAZER COMPONENTES DESSES INPUTS PARA USAR EM OUTROS LUGARES

    input {
        width: 100%;
        background: #F1F1F1;
        border-radius: 15px;
        outline: none;
        color: #95979A;
        height: 58px;
        padding: 10px;
        border: 1px solid #DDDDDD;
    }
    textarea {
        width: 100%;
        background: #F1F1F1;
        border-radius: 15px;
        outline: none;
        color: #95979A;
        height: 58px;
        padding: 10px;
        border: 1px solid #DDDDDD;
        height: 120px;
    }

    label {
        display: flex;
        color: #000000;
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: bold;

    }

    p {
        color: #95979A;
        margin-bottom: 20px;
    }

    select {
        background: #F1F1F1;
        border-radius: 15px;
        outline: none;
        width: 100%;
        color: #95979A;
        height: 58px;
        padding: 10px;
        border: 1px solid #DDDDDD;
        
        option {
        color: black;
         background: #F1F1F1;
        }



    }

    .warning {
        color: #EA5455;
  }

  .warning-equip{
    color: #95979A;
    margin-bottom: 0px;

  }

  
  .button-holder{
      display: flex;
      justify-content: flex-end;
      margin-top: 40px;

    button{
        margin-left: 20px;
    }

  }

  .input-block-check{

      display: flex;
      align-items: center;

    label {
        display: inline-block;
        color: #95979A;
        font-weight: normal;
    }

      input {
          width: auto;
          margin-bottom: 10px;
          margin-right: 10px;
      }
  }


    @media screen and (max-width: 800px) {
    margin-left: 20px;
    }   






`;


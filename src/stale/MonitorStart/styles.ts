import styled from 'styled-components';


export const Container = styled.div`
        display: flex;
        height: 100vh;
        background-color: #E5E5E5;
        flex-direction: column;

    `;


export const ContenderHolder = styled.div`
        display: flex;
        width: 100%;
        display: flex;
        padding: 20px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        border-radius: 15px;
        margin-left: 20px;

    
    

      



    `;




    
export const MonitorContent = styled.div`
    
    margin-top: 20px;
    margin-left: 340px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    margin-bottom: 20px;


    



    border-radius: 15px;

    div {
        margin-bottom: 20px;
    }


    .warning {
        color: #EA5455;
  }

  .svgdiv {
        padding: 20px;
        border-radius: 50%;
        background-color: #E5E5E5; 
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


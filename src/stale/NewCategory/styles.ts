import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #e5e5e5;
  flex-direction: column;
`;

export const NewCategoryContent = styled.div`
  margin-top: 20px;
  margin-left: 340px;
  background-color: #e5e5e5;
  display: flex;
  padding: 20px;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 15px;

  div {
    margin-bottom: 20px;
  }

  // FAZER COMPONENTES DESSES INPUTS PARA USAR EM OUTROS LUGARES

  input {
    width: 100%;
    background: #f1f1f1;
    border-radius: 15px;
    outline: none;
    color: #95979a;
    height: 58px;
    padding: 10px;
    border: 1px solid #dddddd;
  }
  textarea {
    width: 100%;
    background: #f1f1f1;
    border-radius: 15px;
    outline: none;
    color: #95979a;
    height: 58px;
    padding: 10px;
    border: 1px solid #dddddd;
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
    color: #95979a;
    margin-bottom: 20px;
  }

  select {
    background: #f1f1f1;
    border-radius: 15px;
    outline: none;
    width: 100%;
    color: #95979a;
    height: 58px;
    padding: 10px;
    border: 1px solid #dddddd;

    option {
      color: black;
      background: #f1f1f1;
    }
  }

  .warning {
    color: #ea5455;
  }

  .warning-equip {
    color: #95979a;
    margin-bottom: 0px;
  }

  .input-block-check {
    display: flex;
    align-items: center;

    label {
      display: inline-block;
      color: #95979a;
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

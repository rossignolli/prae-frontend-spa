import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;

  background-color: #e5e5e5;
  flex-direction: column;
`;

export const EquipamentsContent = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  background-color: red;

  
  }

  table {
    border-radius: 15px;
    width: 100%;
    background-color: #ffffff;
  }

  tr:nth-child(even) {
    border-top: solid 1px #e5e5e5;
    border-bottom: solid 1px #e5e5e5;
  }

  th {
    height: 50px;
    vertical-align: middle;
    text-align: center;
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

  .button-holder {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;

    button {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 800px) {
    margin-left: 20px;
  }
`;

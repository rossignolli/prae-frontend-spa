import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #e1e1e5;
  flex-direction: column;
  height: 100vh;
`;

export const CategoryContent = styled.div`
  margin-top: 20px;
  margin-left: 340px;
  background-color: #e1e1e5;
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

  @media screen and (max-width: 800px) {
    margin-left: 20px;
  }
`;

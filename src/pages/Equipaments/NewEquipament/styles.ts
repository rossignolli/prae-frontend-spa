import styled from "styled-components/macro";

export const ContainerNewEquipament = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const NewEquipamentsContent2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5fa;
  border-radius: 15px;
  margin-bottom: 32px;
`;

export const NewEquipamentsContent = styled.div`
  background-color: #e5e5e5;
  display: flex;
  padding: 50px;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 15px;

  h1 {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #8257e5;
  }

  p {
    color: #95979a;
    margin-bottom: 20px;
  }
`;

export const ButtonHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;

  button {
    margin-left: 20px;
  }
`;

export const Progressbar = styled.div`
  // PROGRESS BAR
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;

    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background-color: #8257e5;
      color: white;
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: 700;
    }

    span {
      color: #8257e5;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

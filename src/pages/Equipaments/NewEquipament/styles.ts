import styled, { css } from 'styled-components';

export const ContainerNewEquipament = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NewEquipamentsContent2 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f5f5fa;
  border-radius: 15px;
  margin-bottom: 32px;
`;

export const NewEquipamentsContent = styled.div`
  ${({ theme }) => css`
    background-color: #e5e5e5;
    display: flex;
    padding: 50px;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 15px;
    margin: ${theme.spacings.medium} ${theme.spacings.xxsmall};

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
  `}
`;

export const ButtonHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;

  button {
    margin-left: 20px;
  }
`;

export const ProgressbarContainer = styled.div`
  width: 100%;
`;

export const Internalbar = styled.div`
  position: absolute;
  height: 20px;
  border-radius: 16px;
  background-color: #28c76f;
  top: 16px;
  left: 85px;
  z-index: 1;
  width: 350px;
`;

export const NumberContainer = styled.div`
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
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    text-decoration: none;
    text-decoration-style: none;
    padding: ${theme.spacings.xsmall} 0 ${theme.spacings.xsmall};
    display: flex;

    div {
      margin-right: ${theme.spacings.xsmall};
    }

    img {
      width: 96px;
      height: 96px;
      object-fit: cover;
      border-radius: ${theme.border.radius};
    }

    span {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: red;
      cursor: pointer;
    }
  `}
`;

import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.xsmall};
  `}
`;

export const ContainerInputs = styled.div`
  ${({ theme }) => css`
    background-color: #e5e5e5;
    display: flex;
    padding: ${theme.spacings.medium};
    flex-direction: column;
    margin: 16px;
    background-color: #ffffff;
    border-radius: 15px;
  `}
`;

export const ActionHolderContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    padding: ${theme.spacings.xsmall};
    padding-bottom: 0;

    justify-content: flex-end;
    button + button {
      padding: ${theme.spacings.xsmall};
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

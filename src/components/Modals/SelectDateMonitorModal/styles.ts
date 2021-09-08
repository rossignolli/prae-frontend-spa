import styled, { css } from "styled-components/macro";

export const ContainerModal = styled.form`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.colors.backgroundBlue};
    width: 100%;
    max-width: 420px;
    background: #ffffff;
  `}
`;

export const ModalTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.heading};
    margin-bottom: ${theme.spacings.xsmall};
    text-align: center;
  `}
`;

export const IconContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.spacings.xsmall};
  `}
`;

export const ModalDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.bodyText};
    text-align: center;
  `}
`;

export const ButtonHolder = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    button {
      :first-of-type {
        margin-right: 1rem;
      }
    }
  `}
`;

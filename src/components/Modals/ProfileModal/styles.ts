import styled, { css } from 'styled-components/macro';

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

export const QRCodeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.spacings.xsmall};
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

export const ModalContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    canvas {
      border-radius: 50%;
      margin-bottom: ${theme.spacings.small};
    }

    h1 {
      margin-bottom: ${theme.spacings.xxsmall};
      color: ${theme.colors.primary};
    }

    input[type='range'] {
      -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
      width: 100%; /* Specific width is required for Firefox. */
      background: #f5f8fa; /* Otherwise white in Chrome */
      border-radius: 15px;
      height: 16px;
      width: 209px;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
    }

    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background-color: ${theme.colors.primary};
      cursor: pointer;
    }

    img {
      border-radius: 50%;
    }
  `}
`;

export const Userdiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.xsmall};

    img {
      margin-bottom: ${theme.spacings.small};
      width: 100px;
      height: 100px;
    }
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

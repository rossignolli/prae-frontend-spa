import styled, { css, keyframes } from 'styled-components';

import signInBackgroundImg from '../../../assets/temp_assets/girlholdingcoffe.jpg';
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    background: ${theme.colors.lightBg};
  `}
`;

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromLeft} 2s;
    background: ${theme.colors.lightBg};
    margin: ${theme.spacings.small};

    img {
      margin-bottom: ${theme.spacings.small};
    }

    a {
      text-decoration: none;
    }
  `}
`;

export const ADBIG = styled.section`
  width: 60%;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;

  @media screen and (max-width: 930px) {
    display: none;
  }
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${theme.spacings.small};
    max-width: 360px;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};

    button,
    h3 {
      margin-top: ${theme.spacings.xsmall};
      text-align: center;
    }

    h3 {
      color: ${theme.colors.red};
    }

    h2 {
      margin-top: ${theme.spacings.xsmall};
      text-align: center;
      color: ${theme.colors.heading};
      font-weight: ${theme.font.bold};

      a {
        color: inherit;
      }
    }
  `}
`;

export const SignUpHintContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${theme.spacings.xxsmall};

    h1 {
      margin-top: ${theme.spacings.xxsmall};
      color: ${theme.colors.primary};
      font: ${theme.font.bold};
    }
  `}
`;

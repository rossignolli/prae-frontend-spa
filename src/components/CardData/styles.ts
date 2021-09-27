import styled, { css } from 'styled-components';

export const SvgContainer = styled.div`
  ${({ theme }) => css`
    padding: 15px;
    background: ${theme.colors.lightBg};
    border-radius: 50%;
  `}
`;

export const CardData = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-width: 300px;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.xsmall};
    margin-right: ${theme.spacings.xsmall};
    width: 100%;
    background-color: #ffffff;
    border-radius: 15px;
    border: 2px solid ${theme.colors.grayBorder};
  `}
`;

export const Numbers = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    font-size: ${theme.font.sizes.xxlarge};

    font-weight: ${theme.font.bold}
    color: ${theme.colors.black};
  }

  span {
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.bodyText};
  }
`}
`;

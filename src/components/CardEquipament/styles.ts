import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const CardData = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    width: 100%;
    background-color: #ffffff;
    border-radius: 15px;
    border: 2px solid ${theme.colors.grayBorder};
    margin: ${theme.spacings.xsmall};
    margin-left: 0;
  `}
`;

export const SvgContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 15px;
    align-items: center;
    svg {
      margin-left: 16px;
    }
  `}
`;

export const Numbers = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;

    h1 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.heading};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.bodyText};
    }
  `}
`;

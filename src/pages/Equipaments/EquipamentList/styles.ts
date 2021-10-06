import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.xsmall};
  `}
`;

export const ActionHolderContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    justify-content: flex-start;

    div {
      margin: ${theme.spacings.xxsmall};
    }

    button + button {
      padding: ${theme.spacings.xsmall};
      margin: ${theme.spacings.xsmall};
    }
  `}
`;

export const CircleExpired = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.colors.red};
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const CircleOK = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.colors.green};
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const CircleWarning = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.colors.yellow};
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const EmptyState = styled.div`
  ${({ theme }) => css`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    h2 {
      text-align: center;
    }
  `}
`;

export const PaginationContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
  `}
`;

export const TitleEmpty = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.heading};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const DescriptionEmpty = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.bodyText};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
    margin: ${theme.spacings.xsmall} 0 ${theme.spacings.xsmall};
  `}
`;

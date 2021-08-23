import styled, { css } from "styled-components";

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
    button + button {
      padding: ${theme.spacings.xsmall};
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const EmptyState = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 85vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionHolderContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    padding: ${theme.spacings.xsmall};
    justify-content: flex-end;
    button + button {
      padding: ${theme.spacings.xsmall};
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const EmptyState = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 95vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

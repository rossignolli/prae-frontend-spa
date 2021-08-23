import styled, { css } from "styled-components";

export const PaginationContainer = styled.h1`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;

    ul {
      display: flex;
    }

    li {
      padding: ${theme.spacings.xxsmall};
    }

    button {
      padding: 1rem;
      outline: none;
      border: solid 1px;
      border-color: ${theme.colors.grayBorder};
      background-color: ${theme.colors.white};

      height: 45px;
      width: 45px;
      border-radius: 50%;
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};

      &:hover {
        transition: all 0.5s ease;
        background-color: ${theme.colors.lightGray};
      }
    }
  `}
`;

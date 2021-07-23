import styled, { css } from "styled-components/macro";

export const ContainerGeneral = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.backgroundBlue};
    padding: ${theme.spacings.xsmall};
  `}
`;

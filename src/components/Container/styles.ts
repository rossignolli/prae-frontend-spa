import styled, { css } from "styled-components/macro";
import media from "styled-media-query";

export const GlobalDashContainer = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.backgroundBlue};
    padding: ${theme.spacings.xsmall};

    padding-left: 360px;
    ${media.lessThan("large")`
    /* screen width is less than 768px (medium) */
      padding-left: 0px;
    `}
  `}
`;

import styled, { css } from "styled-components/macro";
import media from "styled-media-query";

export const HeaderContainer = styled.main`
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.heading};
      margin: ${theme.spacings.xsmall} 0 ${theme.spacings.xsmall};
    }

    p {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      color: ${theme.colors.bodyText};
      margin: ${theme.spacings.xsmall} 0 ${theme.spacings.xsmall};
    }
  `}
`;

import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';

import { ButtonProps } from '.';

export type WrapperProps = {
  hasIcon: boolean;
  customColor: string;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  customColor: (customColor: string, theme: DefaultTheme) => css`
    background: ${customColor};
    color: ${darken(0.5, customColor)};

    &:hover {
      background: ${darken(0.1, customColor)};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${darken(0.5, customColor)};
    }
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};
    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
      background: none;
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled, customColor }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.bodyText};
    }
    &:hover {
      background: ${darken(0.1, theme.colors.primary)};
    }

    a {
      text-decoration: none;
      color: inherit;
      width: 100%;
      height: 100%;
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!customColor && wrapperModifiers.customColor(customColor, theme)};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`;

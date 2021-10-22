import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const StyledTable = styled.div`
  ${({ theme }) => css`
    background-color: #e5e5e5;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.border.radius};
    background-color: #ffffff;

    border: 1px #2222 solid;

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease-in;
      &:hover {
        color: ${theme.colors.primary};
      }
    }

    table {
      width: 100%;
      border-radius: ${theme.border.radius};
    }
    th {
      font-size: ${theme.font.sizes.large};
      :first-child {
        border-top-left-radius: 15px;
      }
      :last-child {
        border-top-right-radius: 15px;
      }
      background-color: ${theme.colors.lightGray};
    }

    th {
      height: 50px;
      vertical-align: middle;
      text-align: center;
      border-bottom: 1px ${theme.colors.grayBorder} solid;
      padding: 12px 24px;

      ${media.lessThan('medium')`
      padding: 2px 6px;
      `};

      font-weight: normal;
    }

    tr {
      border-bottom: 1px ${theme.colors.grayBorder} solid;
    }

    td {
      height: 40px;
      font-size: 16px;
      padding: 12px 24px;
      vertical-align: middle;
      text-align: left;

      ${media.lessThan('medium')`
      padding: 2px 6px;
      `};

      img {
        display: inline-flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        vertical-align: middle;
        margin-right: 10px;
      }

      button {
        background: none;
        outline: none;
        border-style: none;
      }

      svg {
        vertical-align: middle;
        font-size: ${theme.font.sizes.xlarge};
        margin-left: 35px;
        cursor: pointer;
        color: ${theme.colors.darkGray};

        ${media.lessThan('small')`
        margin-left: 0px;
        `};
      }
    }

    section {
      background-color: ${theme.colors.lightGray};
      padding: 24px;
      text-align: center;
      color: ${theme.colors.gray};
      border-bottom-left-radius: ${theme.border.radius};
      border-bottom-right-radius: ${theme.border.radius};
    }
  `}
`;

// eslint-disable-next-line import/no-anonymous-default-export

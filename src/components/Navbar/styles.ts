import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import media from "styled-media-query";

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    justify-items: center;
    position: fixed;
    left: ${isOpen ? "0" : "-360px"};
    top: 0;
    transition: left 0.3s ease;
    height: 100%;
    z-index: 99;

    ${media.greaterThan("large")`
      left: 0;
    `}
  `}
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  background-color: #ffffff;

  a {
    text-decoration: none;
    text-decoration-style: none;
    color: #717478;
  }

  svg {
    cursor: pointer;
  }

  ${({ theme }) => css`
    a {
      text-decoration: none;
      text-decoration-style: none;
      color: ${theme.colors.heading};
    }
  `}
`;

export const NavigationBarHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgLogo = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 206px;
    margin-top: 40px;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;

  svg {
    cursor: pointer;
    margin-left: 12px;
    margin-top: 12px;
  }
`;

export const Userdiv = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayBorder};
  `}

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 60px;
  width: 270px;
  height: 73px;
  border-radius: 15px;

  padding: 10px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  h2 {
    color: black;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 19px;
    margin-left: 10px;
  }

  h3 {
    color: #717479;
    font-size: 14px;
    margin-top: 6px;
    margin-left: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  svg {
    margin-left: 10px;
  }
`;

export const TitleMenu = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    margin-left: ${theme.spacings.small};
    color: ${theme.colors.heading};
  `}
`;

const activeClassName = "active";
export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
  padding: 10px;
  height: 45px;
  border-left: 5px solid #fff;

  svg {
    margin-left: 20px;
    margin-right: 10px;
  }

  &.${activeClassName} {
    color: #7367f0;
    border-left: 5px solid #7367f0;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  background-color: #e5e5e5;
`;

export const NotificationCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
`;

import styled, { css } from "styled-components";

interface InputProps {
  isOpened: boolean;
}

export const FormAction = styled.div<InputProps>`
  position: absolute;
  right: 0;
  z-index: 1;
  width: 12rem;
  background-color: #ffff;
  border-radius: 10px;
  box-shadow: -5px 5px 10px #9aa0b933;

  ${(props) =>
    props.isOpened &&
    css`
      border: 2px solid #8257e5;
    `}
`;

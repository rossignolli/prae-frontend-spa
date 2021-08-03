import styled, { css } from "styled-components";

export const ContainerInput = styled.div``;

interface InputProps {
  isFocused: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  background: #f1f1f1;
  border-radius: 15px;
  outline: none;
  color: #95979a;
  height: 58px;
  padding: 10px;
  border: 1px solid #e1e1e5;
  transition: border 0.2s ease-in;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #8257e5;
    `}
`;

export const LabelForm = styled.label`
  display: flex;
  color: #000000;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
`;

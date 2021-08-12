import styled, { css } from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

interface InputProps {
  isFocused: boolean;
}

export const Input = styled.input<InputProps>`
  display: none;

  ::placeholder {
    color: #95979a;
  }

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #8257e5;
    `}
`;

export const LabelForm = styled.label`
  height: 96px;
  min-width: 100px;
  background: #f5f8fa;
  border: 1px dashed #8257e5;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelFormTitle = styled.label`
  display: flex;
  color: #000000;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

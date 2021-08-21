import styled, { css } from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 15px;
  outline: none;
  color: #95979a;
  height: 58px;
  padding: 10px;
  border: 1px solid #e1e1e5;
  transition: border 0.2s ease-in;

  svg {
    margin-right: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  background: #f1f1f1;
  border: none;

  ::placeholder {
    color: #95979a;
  }
`;

export const LabelForm = styled.label`
  display: flex;
  color: #000000;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const ErrorContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: #ff1e1e;
    padding: ${theme.spacings.xsmall} 0 ${theme.spacings.xsmall};
  `}
`;

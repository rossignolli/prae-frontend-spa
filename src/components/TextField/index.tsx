import { InputHTMLAttributes, useCallback, useState } from "react";
import * as S from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  errorMesage?: string | false;
}

export default function InputTextField({
  name,
  label,
  placeholder,
  onBlur,
  value,
  onChange,
  errorMesage,
  ...rest
}: InputTextProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <S.ContainerInput>
      {label && <S.LabelForm htmlFor={name}>{label}</S.LabelForm>}
      <S.Input
        id={name}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={(e) => {
          if (onBlur) {
            onBlur(e);
            handleInputBlur();
          }
        }}
        isFocused={isFocused}
        onFocus={handleInputFocus}
        hasError={errorMesage ? true : false}
        placeholder={placeholder}
      />
      {errorMesage && <S.ErrorContainer>{errorMesage}</S.ErrorContainer>}
    </S.ContainerInput>
  );
}

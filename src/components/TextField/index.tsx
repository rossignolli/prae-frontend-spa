import { InputHTMLAttributes, useCallback, useState } from "react";
import * as S from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function InputTextField({
  name,
  label,
  placeholder,
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
      <S.LabelForm htmlFor={name}>{label}</S.LabelForm>
      <S.Input
        id={name}
        type="text"
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
      />
    </S.ContainerInput>
  );
}

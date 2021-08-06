import { InputHTMLAttributes, useCallback, useState } from "react";
import { FiPlus } from "react-icons/fi";
import * as S from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function InputImageFile({
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
      <S.LabelFormTitle>Adiciona as imagens do equipamento</S.LabelFormTitle>
      <S.LabelForm htmlFor={name}>
        <FiPlus size={24} color="#8257e5" />
      </S.LabelForm>

      <S.Input
        id={name}
        multiple
        type="file"
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
      />
    </S.ContainerInput>
  );
}

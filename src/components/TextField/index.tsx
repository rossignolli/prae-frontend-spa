import { useCallback, useState } from "react";
import * as S from "./styles";

interface InputTextProps {
  name: string;
}

export default function InputTextField({ name }: InputTextProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <S.ContainerInput>
      <S.LabelForm>{name}</S.LabelForm>
      <S.Input
        type="text"
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </S.ContainerInput>
  );
}

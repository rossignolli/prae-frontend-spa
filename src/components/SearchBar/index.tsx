import { InputHTMLAttributes, useCallback, useState } from "react";
import { BsSearch } from "react-icons/bs";
import * as S from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMesage?: string | false;
}

export default function InputSearchBar({
  name,
  placeholder,
  onBlur,
  value,
  onChange,
  errorMesage,
  ...rest
}: InputTextProps) {
  return (
    <S.ContainerInput>
      <S.Input
        id={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <BsSearch size={18} />
    </S.ContainerInput>
  );
}

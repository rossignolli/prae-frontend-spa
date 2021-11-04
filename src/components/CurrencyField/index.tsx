/* eslint-disable react/jsx-no-duplicate-props */
import { InputHTMLAttributes, useCallback, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import * as S from './styles';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
  setFieldValue: (name: string, value: string) => void;
  errorMesage?: string | false;
}

export default function InputCurrencyField({
  name,
  label,
  type = 'text',
  placeholder,
  onBlur,
  value,
  setFieldValue,
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
    <S.ContainerInput isFocused={isFocused} hasError={errorMesage ? true : false}>
      {label && <S.LabelForm htmlFor={name}>{label}</S.LabelForm>}
      <CurrencyInput
        placeholder="Ex: R$ 20,40"
        decimalsLimit={2}
        fixedDecimalLength={2}
        onValueChange={(value, name) => {
          if (value) {
            setFieldValue('pricePerJob', value);
          }
        }}
        id={name}
        prefix={'R$'}
        value={value}
        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
        onBlur={e => {
          if (onBlur) {
            onBlur(e);
            handleInputBlur();
          }
        }}
        onFocus={handleInputFocus}
      />

      {errorMesage && <S.ErrorContainer>{errorMesage}</S.ErrorContainer>}
    </S.ContainerInput>
  );
}

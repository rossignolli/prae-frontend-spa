import Select, { Props } from 'react-select';
import { colors } from 'react-select/src/theme';
import { CSSObject } from 'styled-components';
import * as S from './styles';

interface InputTextProps extends Props {
  name: string;
  label: string;
  onChange: any;
  value: any;
}

const customStyles = {
  input: () => ({
    padding: 10,
    height: 58,
  }),
  control: (provided: CSSObject, state: any) => ({
    ...provided,
    cursor: 'pointer',
    borderRadius: 15,
    borderColor: '#e1e1e5',
    backgroundColor: '#f1f1f1',
    boxShadow: state.isFocused && '0 0 0 2px #8257e5',
    transition: 'all 0.3s ease',
    '&:hover': { borderColor: 'none' },
  }),
  option: (provided: CSSObject, state: any) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: state.isSelected && '#8257e5',
    color: state.isSelected && '#ffffff',
    transition: 'all 0.3s ease',
    '&:hover': { backgroundColor: '#d3c7ee', color: '#ffffff' },
  }),
  dropdownIndicator: (provided: CSSObject, state: any) => ({
    ...provided,
    cursor: 'pointer',
    svg: {
      fill: '#8257e5',
    },
  }),
  menu: (provided: CSSObject, state: any) => ({
    ...provided,
    borderRadius: 15,
  }),
  menuList: (provided: CSSObject, state: any) => ({
    ...provided,
    borderRadius: 15,
    padding: '0',
  }),
};

export default function InputSelectField({ name, label, options, onChange, value, errorMesage, ...rest }: InputTextProps) {
  return (
    <S.ContainerInput>
      <S.LabelForm htmlFor={name}>{label}</S.LabelForm>
      <Select {...rest} styles={customStyles} options={options} onChange={value => onChange(value)} />
      {errorMesage && <S.ErrorContainer>{errorMesage}</S.ErrorContainer>}
    </S.ContainerInput>
  );
}

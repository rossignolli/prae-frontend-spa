import Select, { Props } from "react-select";
import { CSSObject } from "styled-components";
import * as S from "./styles";

interface InputTextProps extends Props {
  name: string;
  label: string;
}

const customStyles = {
  input: () => ({
    // none of react-select's styles are passed to <Control />
    padding: 10,

    height: 58,
  }),
  control: (provided: CSSObject, state: any) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    borderRadius: 15,
    borderColor: "#e1e1e5",
    backgroundColor: "#f1f1f1",
    boxShadow: state.isFocused && "0 0 0 2px #8257e5",
    transition: "all 0.3s ease",
    "&:hover": { borderColor: "none" }, // border style on hover
  }),
};

export default function InputSelectField({
  name,
  label,
  ...rest
}: InputTextProps) {
  return (
    <S.ContainerInput>
      <S.LabelForm htmlFor={name}>{label}</S.LabelForm>
      <Select {...rest} styles={customStyles} />
    </S.ContainerInput>
  );
}

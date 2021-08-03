import Select, { Props } from "react-select";
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
  control: (provided: any) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    borderRadius: 15,
    backgroundColor: "#f1f1f1",
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

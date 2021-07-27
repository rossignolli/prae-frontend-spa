import * as S from "./styles";

export default function InputTextField() {
  return (
    <S.ContainerInput>
      <S.LabelForm htmlFor="name">Apelido</S.LabelForm>
      <S.Input type="text" />
    </S.ContainerInput>
  );
}

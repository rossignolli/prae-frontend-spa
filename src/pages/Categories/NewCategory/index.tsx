import React from "react";

import { useHistory } from "react-router-dom";
import Button from "../../../components/Button";
import { GlobalDashContainer } from "../../../components/Container/styles";
import Header from "../../../components/Header";
import NavigationBar from "../../../components/Navbar";
import InputTextField from "../../../components/TextField";
import { ThreeDots } from "react-loading-icons";
import * as S from "./styles";

export default function NewCategory() {
  const history = useHistory();

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.Container>
        <S.ContainerInputs>
          <Header
            title="Categorias"
            description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          />
          <form>
            <InputTextField
              name="name"
              label="Nome da categoria"
              placeholder={"Ex: Macbook Air"}
            />
            <InputTextField
              name="description"
              label="Descrição da categoria"
              placeholder={"Ex: Computadores de executivos"}
            />
          </form>
          <S.ActionHolderContainer>
            <Button
              minimal
              customColor="#FFFFFF"
              onClick={() => history.goBack()}
            >
              Voltar
            </Button>
            <Button onClick={() => history.push(`/category/new`)}>
              <ThreeDots style={{ width: `42px` }} />
            </Button>
          </S.ActionHolderContainer>
        </S.ContainerInputs>
      </S.Container>
    </GlobalDashContainer>
  );
}

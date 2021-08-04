import React from "react";

import {
  ButtonPurple,
  ButtonPurpleInverted,
} from "../../../components/button/styles";
import NavigationBar from "../../../components/Navbar";

import * as S from "./styles";
import InputTextField from "../../../components/TextField";
import Select from "react-select";
import InputSelectField from "../../../components/SelectField";
import GlobalDashContainer from "../../../components/Container";

export default function NewEquipament() {
  const options = [
    { value: "chocolate", label: "Desktops" },
    { value: "strawberry", label: "Maquinas de analises Clinicas" },
    { value: "vanilla", label: "Refrigeradores" },
  ];

  return (
    <GlobalDashContainer>
      <S.ContainerNewEquipament>
        <NavigationBar />
        <S.NewEquipamentsContent2>
          <S.ProgressBarContainer>
            <S.Internalbar />
          </S.ProgressBarContainer>
          <S.ProgressBarContainer>
            <S.NumberContainer>
              <h1>1</h1>
              <span>Informações Basicas</span>
            </S.NumberContainer>
            <S.NumberContainer>
              <h1>2</h1>
              <span>Imagens</span>
            </S.NumberContainer>
            <S.NumberContainer>
              <h1>3</h1>
              <span>Detalhes</span>
            </S.NumberContainer>
            <S.NumberContainer>
              <h1>4</h1>
              <span>Informações Extras</span>
            </S.NumberContainer>
          </S.ProgressBarContainer>
        </S.NewEquipamentsContent2>
        <S.NewEquipamentsContent>
          <h1>Informações Básica do Equipamento</h1>
          <p>
            Insira os dados do equipamento que será adicionado na base de dados
            de monitoramento. Todo equipamento por padrão é adicionado com
            monitoramento desligado
          </p>
          <form action="">
            <InputTextField
              name="Apelido"
              label="Apelido"
              placeholder={"Ex: Ar-condicionado Servidor"}
            />
            <InputTextField
              name="model"
              label="Modelo"
              placeholder="Ar Condicionado Portátil Elgin Eco Cub, 9000 BTUs"
            />
            <InputSelectField
              name="brand"
              label="Marcas"
              placeholder="Selecione uma marca"
              options={options}
            />
            <InputSelectField
              name="Apelido"
              label="Categorias"
              placeholder="Selecione uma categoria"
              options={options}
            />
          </form>

          <S.ButtonHolder>
            <ButtonPurpleInverted>Voltar</ButtonPurpleInverted>
            <ButtonPurple>Adicionar</ButtonPurple>
          </S.ButtonHolder>
        </S.NewEquipamentsContent>
      </S.ContainerNewEquipament>
    </GlobalDashContainer>
  );
}

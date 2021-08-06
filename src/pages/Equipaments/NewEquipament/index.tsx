import React from "react";

import {
  ButtonPurple,
  ButtonPurpleInverted,
} from "../../../components/button/styles";
import NavigationBar from "../../../components/Navbar";

import * as S from "./styles";
import InputTextField from "../../../components/TextField";
import InputSelectField from "../../../components/SelectField";
import GlobalDashContainer from "../../../components/Container";
import InputImageFile from "../../../components/ImageField";

export default function NewEquipament() {
  const brandsOptions = [
    { value: "chocolate", label: "Apple" },
    { value: "strawberry", label: "LG" },
    { value: "vanilla", label: "HP" },
  ];

  const criticaloptions = [
    { value: "false", label: "Sim" },
    { value: "true", label: "Não" },
    { value: "vanilla", label: "Refrigeradores" },
  ];

  const categoriesloptions = [
    { value: "false", label: "Desktop" },
    { value: "true", label: "Refrigeradores" },
    { value: "teste", label: "Casa de máquinas" },
  ];

  return (
    <GlobalDashContainer>
      <S.ContainerNewEquipament>
        <NavigationBar />
        <S.NewEquipamentsContent>
          <h1>Adicionar Equipamento</h1>
          <p>
            Insira os dados do equipamento que será adicionado na base de dados
            de monitoramento. Todo equipamento por padrão é adicionado com
            monitoramento desligado!!!
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
              name="brands"
              label="Marcas"
              placeholder="Selecione uma marca"
              options={brandsOptions}
            />
            <InputSelectField
              name="nickname"
              label="Categorias"
              placeholder="Selecione uma categoria"
              options={criticaloptions}
            />
            <InputSelectField
              name="critical"
              label="Critico"
              placeholder="Seleciona a importancia do equipamento"
              options={categoriesloptions}
            />
            <InputTextField
              name="description"
              label="Descrição"
              placeholder="O conceito de ar-condicionado Portátil proporciona praticidade e fácil instalação, podendo ser feita pelo consumidor sem a necessidade de contratação de instaladores credenciados."
            />
            <InputImageFile name="critical" label="Critico" />
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

import React, { useEffect, useState } from "react";
import {
  FiAlertTriangle,
  FiAlignLeft,
  FiBarChart,
  FiBell,
  FiDelete,
  FiEdit2,
  FiHardDrive,
  FiPlus,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import manProfile from "../../assets/temp_assets/man-profile.jpg";
import {
  ButtonPurple,
  ButtonPurpleInverted,
} from "../../../components/button/styles";
import NavigationBar from "../../../components/Navbar";

// import { useAuth } from '../../hooks/AuthContext';
import api from "../../../services/api";
import { HeadersContents } from "../../Dashboard/styles";
import * as S from "./styles";
import InputTextField from "../../../components/TextField";

const NewEquipament: React.FC = () => {
  return (
    <S.ContainerNewEquipament>
      <NavigationBar />
      <S.NewEquipamentsContent2>
        <S.ProgressBarContainer>
          <div>
            <h1>1</h1>
            <span>Informações Basicas</span>
          </div>
          <div>
            <h1>2</h1>
            <span>Imagens</span>
          </div>
          <div>
            <h1>3</h1>
            <span>Detalhes</span>
          </div>
          <div>
            <h1>4</h1>
            <span>Informações Extras</span>
          </div>
        </S.ProgressBarContainer>
      </S.NewEquipamentsContent2>
      <S.NewEquipamentsContent>
        <h1>Informações Básica do Equipamento</h1>
        <p>
          Insira os dados do equipamento que será adicionado na base de dados de
          monitoramento. Todo equipamento por padrão é adicionado com
          monitoramento desligado
        </p>
        <form action="">
          <InputTextField />
        </form>

        <S.ButtonHolder>
          <ButtonPurpleInverted>Voltar</ButtonPurpleInverted>
          <ButtonPurple>Adicionar</ButtonPurple>
        </S.ButtonHolder>
      </S.NewEquipamentsContent>
    </S.ContainerNewEquipament>
  );
};

export default NewEquipament;

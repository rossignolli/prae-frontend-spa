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
} from "../../components/button/styles";
import NavigationBar from "../../components/navbar";

// import { useAuth } from '../../hooks/AuthContext';
import api from "../../services/api";
import { HeadersContents } from "../Dashboard/styles";
import {
  NewEquipamentsContent,
  Container,
  ProgressBarContainer,
  NewEquipamentsContent2,
} from "./styles";

const NewEquipament: React.FC = () => {
  return (
    <Container>
      <NavigationBar />
      <NewEquipamentsContent2>
        <ProgressBarContainer>
          <div>
            <h1>1</h1>
            <span>Informações Basicas</span>
          </div>
          <div>
            <h1>2</h1>
            <span>Informações Basicas</span>
          </div>
          <div>
            <h1>3</h1>
            <span>Informações Basicas</span>
          </div>
          <div>
            <h1>4</h1>
            <span>Informações Basicas</span>
          </div>
        </ProgressBarContainer>
      </NewEquipamentsContent2>
      <NewEquipamentsContent>
        <h1>Informações Básica do Equipamento</h1>
        <p>
          Insira os dados do equipamento que será adicionado na base de dados de
          monitoramento. Todo equipamento por padrão é adicionado com
          monitoramento desligado
        </p>
        <form action="">
          <div className="input-block">
            <label htmlFor="about">Nome do equipamento</label>
            <input type="text" />
          </div>
        </form>

        <div className="button-holder">
          <ButtonPurpleInverted>Voltar</ButtonPurpleInverted>
          <ButtonPurple>Adicionar</ButtonPurple>
        </div>
      </NewEquipamentsContent>
    </Container>
  );
};

export default NewEquipament;

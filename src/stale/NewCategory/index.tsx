import React from "react";

import { useHistory } from "react-router-dom";

import NavigationBar from "../../components/Navbar";

import { NewCategoryContent, Container } from "./styles";

const NewCategory: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <NavigationBar />

      <NewCategoryContent>
        <p>
          Insira os dados do equipamento que será adicionado na base de dados de
          monitoramento. Todo equipamento por padrão é adicionado com
          monitoramento desligado
        </p>
        <form action="">
          <div className="input-block">
            <label htmlFor="about">Nome da categoria</label>
            <input type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="about">Descrição</label>
            <textarea />
          </div>
        </form>
        <div className="button-holder">
         
        </div>
      </NewCategoryContent>
    </Container>
  );
};

export default NewCategory;

import React, { useEffect, useState } from "react";
import { FiBarChart, FiDelete, FiEdit2, FiPlus } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import manProfile from "../../../assets/temp_assets/man-profile.jpg";
import NavigationBar from "../../../components/Navbar";

import api from "../../../services/api";
import { EquipamentsContent, Container } from "./styles";
import {
  ButtonPurple,
  ButtonPurpleInverted,
} from "../../../components/button/styles";

interface Equipaments {
  created_at: Date;
  description: string;
  id: string;
  name: string;
  expired: boolean;
  updated_at: Date;
}

export default function Equipament() {
  const [equipaments, setEquipaments] = useState<Equipaments[]>();

  const history = useHistory();

  useEffect(() => {
    api.get(`/equipaments`).then((response) => {
      setEquipaments(response.data);
    });
  }, []);

  return (
    <Container>
      <NavigationBar />
      <EquipamentsContent>
        <section>
          <ButtonPurpleInverted>
            <FiBarChart />
            Gerar relatório
          </ButtonPurpleInverted>

          <ButtonPurple
            onClick={() => {
              history.push("equipaments/new");
            }}
          >
            <FiPlus />
            Adicionar
          </ButtonPurple>
        </section>

        <table>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Criado por</th>
            <th>Data de vencimento</th>
            <th>Marca</th>
            <th>Crítico</th>
            <th>Expiração</th>

            <th>Ações</th>
          </tr>
          {equipaments?.map((equipament) => (
            <tr key={equipament.id}>
              <td>
                <Link to={`/equipaments/details/${equipament.id}`}>
                  {equipament.name}
                </Link>
              </td>
              <td>Estação de trabalho</td>
              <td>
                <img src={manProfile} alt="" />
                Jeny Irland
              </td>

              <td>{equipament.description}</td>
              {equipament.expired ? <td>Vencida</td> : <td>OK</td>}
              <td>Sim</td>
              <td>Expirado</td>

              <td>
                <FiEdit2 />
                <FiDelete />
              </td>
            </tr>
          ))}
        </table>
      </EquipamentsContent>
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { FiBarChart, FiDelete, FiEdit2, FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Link, useHistory } from "react-router-dom";

import manProfile from "../../../assets/temp_assets/man-profile.jpg";
import NavigationBar from "../../../components/Navbar";

import api from "../../../services/api";
import { EquipamentsContent, Container } from "./styles";

import { GlobalDashContainer } from "../../../components/Container/styles";

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
    <GlobalDashContainer>
      <Container>
        <NavigationBar />
        <EquipamentsContent>
          <table>
            <thead>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Criado por</th>
              <th>Data de vencimento</th>
              <th>Marca</th>
              <th>Crítico</th>
              <th>Expiração</th>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Link to={`/equipaments/details/`}>Teste</Link>
                </td>
                <td>Estação de trabalho</td>
                <td>
                  <img src={manProfile} alt="" />
                  Jeny Irland
                </td>
                <td>Pc muito bom</td>
                <td>Vencida</td>
                <td>Sim</td>
                <td>
                  Expirado
                  <BsThreeDotsVertical />
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={`/equipaments/details/`}>Teste</Link>
                </td>
                <td>Estação de trabalho</td>
                <td>
                  <img src={manProfile} alt="" />
                  Jeny Irland
                </td>
                <td>Pc muito bom</td>
                <td>Vencida</td>
                <td>Sim</td>
                <td>
                  Expirado
                  <BsThreeDotsVertical />
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={`/equipaments/details/`}>Teste</Link>
                </td>
                <td>Estação de trabalho</td>
                <td>
                  <img src={manProfile} alt="" />
                  Jeny Irland
                </td>
                <td>Pc muito bom</td>
                <td>Vencida</td>
                <td>Sim</td>
                <td>
                  Expirado
                  <BsThreeDotsVertical />
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={`/equipaments/details/`}>Teste</Link>
                </td>
                <td>Estação de trabalho</td>
                <td>
                  <img src={manProfile} alt="" />
                  Jeny Irland
                </td>
                <td>Pc muito bom</td>
                <td>Vencida</td>
                <td>Sim</td>
                <td>
                  Expirado
                  <BsThreeDotsVertical />
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={`/equipaments/details/`}>Teste</Link>
                </td>
                <td>Estação de trabalho</td>
                <td>
                  <img src={manProfile} alt="" />
                  Jeny Irland
                </td>
                <td>Pc muito bom</td>
                <td>Vencida</td>
                <td>Sim</td>
                <td>
                  Expirado
                  <BsThreeDotsVertical />
                </td>
              </tr>
            </tbody>
          </table>
          <caption>
            <span>Equipamentos adicionados na base de dados</span>
          </caption>
        </EquipamentsContent>
      </Container>
    </GlobalDashContainer>
  );
}

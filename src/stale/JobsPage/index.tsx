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
import { AiOutlineDelete } from "react-icons/ai";

import { Link, useHistory } from "react-router-dom";

import manProfile from "../../assets/temp_assets/man-profile.png";
import NavigationBar from "../../components/Navbar";

// import { useAuth } from '../../hooks/AuthContext';

import api from "../../services/api";
import { HeadersContents } from "../../pages/Dashboard/styles";
import { CategoryContent, Container } from "./styles";

interface Categories {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
  technician_id: string;
  category_id: string;
  supply_id: string;
  supply: any;
  category: any;
  user: any;
}

const Jobs: React.FC = () => {
  // const hookAu = useAuth();
  const [equipaments, setEquipaments] = useState<Categories[]>();

  const history = useHistory();

  useEffect(() => {
    api.get(`/jobs`).then((response) => {
      setEquipaments(response.data);
    });
  }, []);

  // if (!equipaments){
  //   return <p>Carregando....</p>
  // }

  return (
    <Container>
      <NavigationBar />

      <CategoryContent>
        <section></section>

        <table>
          <tr>
            <th>Nome do procedimento</th>
            <th>Descrição</th>
            <th>Adicionado por</th>
            <th>Categoria</th>
            <th>Suprimentos</th>
            <th>Ações</th>
          </tr>
          {equipaments?.map((equipament) => (
            <tr key={equipament.id}>
              <td>
                {" "}
                <input type="checkbox" /> {equipament.name}
              </td>
              <td>{equipament.description}</td>
              <td>{equipament.user.name}</td>
              <td>{equipament.category.name}</td>
              <td>{equipament.supply.name}</td>
              <td>
                <FiEdit2 size={22} />
                <AiOutlineDelete size={22} />
              </td>
            </tr>
          ))}
        </table>
      </CategoryContent>
    </Container>
  );
};

export default Jobs;

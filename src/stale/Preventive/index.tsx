import React, { useEffect, useState } from "react";
import { FiBarChart, FiEdit2, FiPlus } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import { Link, useHistory } from "react-router-dom";


import manProfile from "../../assets/temp_assets/man-profile.jpg";
import NavigationBar from "../../components/Navbar";

// import { useAuth } from '../../hooks/AuthContext';

import api from "../../services/api";
import { CategoryContent, Container } from "./styles";

interface Categories {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
}

const Category: React.FC = () => {
  // const hookAu = useAuth();
  const [equipaments, setEquipaments] = useState<Categories[]>();

  const history = useHistory();

  useEffect(() => {
    api.get(`/categories`).then((response) => {
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
        <section>

        </section>

        <table>
          <tr>
            <th>Nome da Categoria</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
          {equipaments?.map((equipament) => (
            <tr key={equipament.id}>
              <td>
                {" "}
                <input type="checkbox" /> {equipament.name}
              </td>
              <td>{equipament.description}</td>

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

export default Category;

import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import manProfile from "../../../assets/temp_assets/man-profile.jpg";
import NavigationBar from "../../../components/Navbar";
// import { useAuth } from '../../hooks/AuthContext';
import api from "../../../services/api";
import { GlobalDashContainer } from "../../../components/Container/styles";
import { BsThreeDotsVertical } from "react-icons/bs";
import { StyledTable } from "../../../components/StyledTable/styles";
import * as S from "./styles";

interface Categories {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
}

export default function Category() {
  const [category, setcategory] = useState<Categories[]>();

  useEffect(() => {
    api.get(`/categories`).then((response) => {
      setcategory(response.data);
    });
  }, []);

  return (
    <GlobalDashContainer>
      <NavigationBar />

      <S.Container>
        <NavigationBar />
        <StyledTable>
          <table>
            <thead>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Criado por</th>
            </thead>

            <tbody>
              {category?.map((category) => (
                <tr key={category.id}>
                  <td>
                    <Link to={`/equipaments/details/`}>{category.name}</Link>
                  </td>
                  <td>{category.description}</td>
                  <td>
                    <img src={manProfile} alt="" />
                    Vitor Rossignolli
                    <BsThreeDotsVertical />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <caption>
            <span>Categorias cadastradas na base de dados</span>
          </caption>
        </StyledTable>
      </S.Container>
    </GlobalDashContainer>
  );
}

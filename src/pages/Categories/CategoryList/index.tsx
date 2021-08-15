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
import { FormAction } from "../../../components/Dropdown/styles";
import InputSelectFieldAction from "../../../components/SelectFieldAction";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import ConfirmationModal from "../../../components/Modals/ConfirmationModal";
interface Categories {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
}

export default function Category() {
  const [category, setcategory] = useState<Categories[]>();
  const [isOpenMenu, setOpen] = useState(false);

  useEffect(() => {
    api.get(`/categories`).then((response) => {
      setcategory(response.data);
    });
  }, []);

  const brandsOptions = [
    { value: "chocolate", label: "Apple" },
    { value: "strawberry", label: "LG" },
    { value: "vanilla", label: "HP" },
  ];

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handlecloseNewTransactionsModal() {
    setIsNewTransactionModalOpen(false);
  }

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
                    <Menu
                      menuButton={
                        <MenuButton>
                          <BsThreeDotsVertical />
                        </MenuButton>
                      }
                    >
                      <MenuItem>Editar</MenuItem>
                      <MenuItem>Excluir</MenuItem>
                    </Menu>
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
      <ConfirmationModal
        title="Equipamento ja está sendo monitorado"
        description="Caso deseje editar o ciclo de monitoramento, clique em editar."
        type="info"
        isOpen={true}
        onRequestClose={handlecloseNewTransactionsModal}
      />
    </GlobalDashContainer>
  );
}

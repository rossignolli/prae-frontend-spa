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
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import ConfirmationModal from "../../../components/Modals/ConfirmationModal";
import {
  ActionHolderContainer,
  DescriptionEmpty,
  EmptyState,
  TitleEmpty,
} from "./styles";
import Button from "../../../components/Button";
import { FiFileText } from "react-icons/fi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
interface Categories {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
}

export default function Category() {
  const [category, setcategory] = useState<Categories[]>();
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [butonsOption, setButtonsOption] = useState(true);
  const history = useHistory();
  const [modalType, setModalType] = useState<
    "warning" | "error" | "sucess" | "info" | undefined
  >("warning");

  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] =
    useState(false);

  useEffect(() => {
    api.get(`/categories`).then((response) => {
      setcategory(response.data);
    });
  }, []);

  function handleDeleteAction() {
    setModalTitle("Você tem certeza?");
    setModalDescription("Essa ação não pode ser desfeita.");
    setIsNewTConfirmationModalOpen(true);
  }
  async function handleConfimedDeletedAction() {
    const response = await api.delete(`categories/${selectedCategory}`);

    if (response.status !== 200) {
      setModalTitle("Ops... Algo deu errado.");
      setModalDescription("Tente novamente mais tarde");
      setModalType("error");
      setButtonsOption(false);
      return;
    }

    if (category) {
      setcategory(
        category.filter((value) => {
          return value.id !== selectedCategory;
        })
      );
    }

    setIsNewTConfirmationModalOpen(false);
  }

  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
  }

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.Container>
        <NavigationBar />
        <SkeletonTheme color="#FFFF" highlightColor="#e6e1e139" />
        {!category ? (
          <>
            <ActionHolderContainer>
              <Skeleton
                duration={0.5}
                width={140}
                count={3}
                height={40}
                style={{ borderRadius: `15px`, marginRight: `10px` }}
              />
            </ActionHolderContainer>
            <StyledTable>
              <>
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Descrição</th>
                      <th>Criado por</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                      <td>
                        <Skeleton
                          duration={0.5}
                          height={20}
                          style={{ borderRadius: `15px` }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <section>
                  <span>Categorias cadastradas na base de dados</span>
                </section>
              </>
            </StyledTable>
          </>
        ) : (
          <>
            <ActionHolderContainer>
              <Button
                minimal
                customColor="#FFFFFF"
                onClick={() => history.goBack()}
              >
                Voltar
              </Button>
              <Button customColor="#FFFFFF">Gerar Relatório</Button>
              <Button onClick={() => history.push(`/category/new`)}>
                Adicionar Catgoria
              </Button>
            </ActionHolderContainer>
            <StyledTable>
              {category.length > 0 ? (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Criado por</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category?.map((category) => (
                        <tr key={category.id}>
                          <td>
                            <Link to={`/equipaments/details/`}>
                              {category.name}
                            </Link>
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
                              <MenuItem
                                onClick={() => {
                                  handleDeleteAction();
                                  setSelectedCategory(category.id);
                                }}
                              >
                                Excluir
                              </MenuItem>
                            </Menu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <section>
                    <span>Categorias cadastradas na base de dados</span>
                  </section>
                </>
              ) : (
                <EmptyState>
                  <FiFileText size={82} color={`#8257e5`} />
                  <TitleEmpty>Nada para mostrar aqui.</TitleEmpty>
                  <DescriptionEmpty>
                    Você não possui categorias cadastradas no sistemas.
                  </DescriptionEmpty>
                  <Button>Adicionar Catgoria</Button>
                </EmptyState>
              )}
            </StyledTable>
          </>
        )}
      </S.Container>
      <ConfirmationModal
        title={modalTitle}
        description={modalDescription}
        type={modalType}
        isOpen={isNewTConfirmationModalOpen}
        onRequestConfirmation={() => handleConfimedDeletedAction()}
        onRequestCancel={() => handleCloseConfirmationModal()}
        buttons={butonsOption}
      />
    </GlobalDashContainer>
  );
}

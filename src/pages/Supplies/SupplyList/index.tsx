/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import manProfile from "../../../assets/temp_assets/man-profile.png";
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
import { FiFolder } from "react-icons/fi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import InputSearchBar from "../../../components/SearchBar";
import Pagination from "../../../components/Pagination";
interface Supplies {
  id: string;
  name: string;
  pricePerJob: string;
  created_at: Date;
  description: string;
  updated_at: Date;
}

export default function Supply() {
  const [category, setCategory] = useState<Supplies[] | undefined>();
  const [categoryDefault, setCategoryDefault] = useState<Supplies[]>();

  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [butonsOption, setButtonsOption] = useState(true);
  const [input, setInput] = useState("");
  const history = useHistory();
  const [modalType, setModalType] = useState<
    "warning" | "error" | "sucess" | "info" | undefined
  >("warning");
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage, setIssuesPerPage] = useState(8);

  const IndexOfLastPost = currentPage * issuesPerPage;
  const indexfFirstPost = IndexOfLastPost - issuesPerPage;

  const currentCategories = category?.slice(indexfFirstPost, IndexOfLastPost);

  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] =
    useState(false);

  useEffect(() => {
    api.get(`/supplies`).then((response) => {
      setCategory(response.data);
      setCategoryDefault(response.data);
    });
  }, []);

  function handleDeleteAction() {
    setModalTitle("Você tem certeza?");
    setModalDescription("Essa ação não pode ser desfeita.");
    setIsNewTConfirmationModalOpen(true);
  }
  async function handleConfimedDeletedAction() {
    const response = await api.delete(`supplies/${selectedCategory}`);

    if (response.status !== 200) {
      setModalTitle("Ops... Algo deu errado.");
      setModalDescription("Tente novamente mais tarde");
      setModalType("error");
      setButtonsOption(false);
      return;
    }

    if (category) {
      setCategory(
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

  const updateInput = async (e: any) => {
    if (!category) return;

    const filtered = category.filter((country) => {
      return country.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setInput(e.target.value);
    setCategory(filtered);

    if (!e.target.value || /^\s*$/.test(e.target.value)) {
      setCategory(categoryDefault);
    }
  };

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

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
                      <th>Preço</th>
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
                  <span>Suprimentos cadastradas na base de dados</span>
                </section>
              </>
            </StyledTable>
            <div>testes</div>
          </>
        ) : (
          <>
            <ActionHolderContainer>
              <InputSearchBar
                name="search"
                placeholder="Pesquisar"
                value={input}
                onChange={updateInput}
              />
              <Button
                minimal
                customColor="#FFFFFF"
                onClick={() => history.push(`dashboard`)}
              >
                Voltar
              </Button>
              <Button customColor="#FFFFFF">Gerar Relatório</Button>
              <Button onClick={() => history.push(`/supply/new`)}>
                Adicionar Suprimento
              </Button>
            </ActionHolderContainer>
            <StyledTable>
              {category.length > 0 ? (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Criado por</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCategories?.map((category) => (
                        <tr key={category.id}>
                          <td>{category.name}</td>
                          <td>{category.pricePerJob}</td>
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
                              <MenuItem>
                                <Link to={`supply/edit/${category.id}`}>
                                  Editar
                                </Link>
                              </MenuItem>
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
                    <span>Suprimentos cadastradas na base de dados</span>
                  </section>
                </>
              ) : (
                <EmptyState>
                  <FiFolder size={82} color={`#8257e5`} />
                  <TitleEmpty>Nada para mostrar aqui.</TitleEmpty>
                  <DescriptionEmpty>
                    {input
                      ? `Nao encontramos nenhum suprimentos relacionada com a sua busca`
                      : `Você não possui suprimentos cadastradas no sistemas.`}
                  </DescriptionEmpty>
                  <Button onClick={() => history.push(`/supplies/new`)}>
                    Adicionar Suprimento
                  </Button>
                </EmptyState>
              )}
            </StyledTable>
            <S.PaginationContainer>
              <Pagination
                issuesPerPage={issuesPerPage}
                totalIssues={category.length}
                paginate={paginate}
              />
            </S.PaginationContainer>
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

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import manProfile from '../../../assets/temp_assets/man-profile.png';
import NavigationBar from '../../../components/Navbar';
// import { useAuth } from '../../hooks/AuthContext';
import api from '../../../services/api';
import { GlobalDashContainer } from '../../../components/Container/styles';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { StyledTable } from '../../../components/StyledTable/styles';
import * as S from '../../Equipaments/EquipamentList/styles';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';

import Button from '../../../components/Button';
import { FiFolder } from 'react-icons/fi';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import InputSearchBar from '../../../components/SearchBar';
import Pagination from '../../../components/Pagination';
import { useMediaQuery } from 'react-responsive';

interface Supplies {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export default function UserList() {
  const [category, setCategory] = useState<Supplies[] | undefined>();
  const [categoryDefault, setCategoryDefault] = useState<Supplies[]>();

  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [butonsOption, setButtonsOption] = useState(true);
  const [input, setInput] = useState('');
  const history = useHistory();
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('warning');
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage, setIssuesPerPage] = useState(8);

  const IndexOfLastPost = currentPage * issuesPerPage;
  const indexfFirstPost = IndexOfLastPost - issuesPerPage;

  const currentCategories = category?.slice(indexfFirstPost, IndexOfLastPost);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);

  useEffect(() => {
    api.get(`/users`).then(response => {
      setCategory(response.data);
      setCategoryDefault(response.data);
    });
  }, []);

  function handleDeleteAction() {
    setModalTitle('Você tem certeza?');
    setModalDescription('Essa ação não pode ser desfeita.');
    setModalType('warning');
    setIsNewTConfirmationModalOpen(true);
    setButtonsOption(true);
  }
  async function handleConfimedDeletedAction() {
    try {
      await api.delete(`supplies/${selectedCategory}`);
      if (category) {
        setCategory(
          category.filter(value => {
            return value.id !== selectedCategory;
          })
        );
      }
      setIsNewTConfirmationModalOpen(false);
    } catch {
      setModalTitle('Ops... Algo deu errado.');
      setModalDescription('Tente novamente mais tarde');
      setModalType('error');
      setButtonsOption(false);
    }
  }

  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
  }

  const updateInput = async (e: any) => {
    if (!category) return;

    const filtered = category.filter(country => {
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
            <S.ActionHolderContainer>
              <Skeleton duration={0.5} width={140} count={3} height={40} style={{ borderRadius: `15px`, marginRight: `10px` }} />
            </S.ActionHolderContainer>
            <StyledTable>
              <>
                <table>
                  <thead>
                    <tr>
                      <th>E-mail</th>
                      <th>Nome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                      <td>
                        <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <section>
                  <span>Técnicos cadastradas na base de dados</span>
                </section>
              </>
            </StyledTable>
            <div>testes</div>
          </>
        ) : (
          <>
            <S.ActionHolderContainer>
              <InputSearchBar name="search" placeholder="Pesquisar" value={input} onChange={updateInput} />
              <Button minimal customColor="#FFFFFF" onClick={() => history.push(`dashboard`)}>
                Voltar
              </Button>
              <Button customColor="#FFFFFF">Gerar Relatório</Button>
            </S.ActionHolderContainer>
            <StyledTable>
              {category.length > 0 ? (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>E-mail</th>
                        {!isMobile && <th>Nome</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {currentCategories?.map(category => (
                        <tr key={category.id}>
                          <td>{category.email}</td>
                          {!isMobile && (
                            <td>
                              <img src={category.avatar ? category.avatar : manProfile} alt="Portrait User" />
                              {category.name}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <section>
                    <span>Técnicos cadastrados na base de dados</span>
                  </section>
                </>
              ) : (
                <S.EmptyState>
                  <FiFolder size={82} color={`#8257e5`} />
                  <S.TitleEmpty>Nada para mostrar aqui.</S.TitleEmpty>
                  <S.DescriptionEmpty>
                    {input ? `Nao encontramos nenhum suprimentos relacionada com a sua busca` : `Você não possui suprimentos cadastradas no sistemas.`}
                  </S.DescriptionEmpty>
                  <Button onClick={() => history.push(`/supply/new`)}>Adicionar Suprimento</Button>
                </S.EmptyState>
              )}
            </StyledTable>
            <S.PaginationContainer>
              <Pagination issuesPerPage={issuesPerPage} totalIssues={category.length} paginate={paginate} />
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

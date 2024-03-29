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
import { FiFolder, FiTool } from 'react-icons/fi';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import InputSearchBar from '../../../components/SearchBar';
import Pagination from '../../../components/Pagination';
import { useMediaQuery } from 'react-responsive';
import EmptySpace from '../../../components/EmptyStatus';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
interface Supplies {
  id: string;
  name: string;
  supply: {
    name: string;
    pricePerJob: string;
  };
  category: {
    name: string;
  };
  technician: {
    avatar: string;
    name: string;
  };
}

export default function JobList() {
  const [category, setCategory] = useState<Supplies[] | undefined>();
  const [categoryDefault, setCategoryDefault] = useState<Supplies[]>();
  const [url, setUrl] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [butonsOption, setButtonsOption] = useState(true);
  const [input, setInput] = useState('');
  const history = useHistory();
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('warning');
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage, setIssuesPerPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const IndexOfLastPost = currentPage * issuesPerPage;
  const indexfFirstPost = IndexOfLastPost - issuesPerPage;
  const currentCategories = category?.slice(indexfFirstPost, IndexOfLastPost);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    api.get(`/jobs`).then(response => {
      setCategory(response.data);
      setCategoryDefault(response.data);
    });

    api.get(`jobs/report`, { responseType: 'blob' }).then(response => {
      setUrl(window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' })));
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
      setIsLoading(true);
      await api.delete(`jobs/${selectedCategory}`);
      if (category) {
        setCategory(
          category.filter(value => {
            return value.id !== selectedCategory;
          })
        );
      }
      setIsNewTConfirmationModalOpen(false);
      setIsLoading(false);
      toast.success('Deletado com sucesso.');
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
      <Helmet>
        <title>Prae - Procedimentos</title>
        <meta property="og:title" content="Prae - Gerencia seus assets com inteligência" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/393816255993479179/887888085256388658/unknown.png" />
        <meta property="og:url" content="https://prae.vigarani.dev/" />
      </Helmet>
      <NavigationBar />
      <S.Container>
        <NavigationBar />
        <SkeletonTheme color="#FFFF" highlightColor="#e6e1e139" />
        {!category ? (
          <EmptySpace />
        ) : (
          <>
            <S.ActionHolderContainer>
              <InputSearchBar name="search" placeholder="Pesquisar" value={input} onChange={updateInput} />
              <Button minimal customColor="#FFFFFF" onClick={() => history.push('dashboard')}>
                Voltar
              </Button>
              <Link to={{ pathname: url }} target="_blank">
                <Button customColor="#FFFFFF">Gerar Relatório</Button>
              </Link>
              <Button onClick={() => history.push(`/job/new`)}>Adicionar Procedimento</Button>
            </S.ActionHolderContainer>
            <StyledTable>
              {category.length > 0 ? (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        {!isMobile && <th>Criado por</th>}
                        <th>Suprimento</th>
                        <th>Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCategories?.map(job => (
                        <tr key={job.id}>
                          <td style={{ textAlign: 'left' }}>{job.name}</td>
                          <td style={{ textAlign: 'left' }}>{job.category.name}</td>
                          <td style={{ textAlign: 'left' }}>
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(parseFloat(job.supply.pricePerJob))}
                          </td>
                          <td style={{ textAlign: 'left' }}>
                            {!isMobile && <img src={job.technician.avatar ? job.technician.avatar : manProfile} alt="Portrait User" />}
                            {!isMobile && job.technician.name}
                          </td>
                          <td style={{ textAlign: 'left' }}>{job.supply.name}</td>
                          <td style={{ textAlign: 'center' }}>
                            <Menu
                              menuButton={
                                <MenuButton>
                                  <BsThreeDotsVertical />
                                </MenuButton>
                              }>
                              <MenuItem
                                onClick={() => {
                                  handleDeleteAction();
                                  setSelectedCategory(job.id);
                                }}>
                                <Link to={`job/edit/${job.id}`}>Editar</Link>
                              </MenuItem>
                              <MenuItem
                                onClick={() => {
                                  handleDeleteAction();
                                  setSelectedCategory(job.id);
                                }}>
                                Excluir
                              </MenuItem>
                            </Menu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <section>
                    <span>Procedimentos cadastradas na base de dados</span>
                  </section>
                </>
              ) : (
                <S.EmptyState>
                  <FiTool size={64} color={`#8257e5`} />
                  <S.TitleEmpty>Nada para mostrar aqui.</S.TitleEmpty>
                  <S.DescriptionEmpty>
                    {input ? 'Nao encontramos nenhum suprimentos relacionada com a sua busca' : 'Não existe procedimentos cadastradas no sistemas.'}
                  </S.DescriptionEmpty>
                  <Button onClick={() => history.push(`/job/new`)}>Adicionar Procedimento</Button>
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
        isLoading={isLoading}
      />
    </GlobalDashContainer>
  );
}

import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import manProfile from '../../../assets/temp_assets/man-profile.png';
import NavigationBar from '../../../components/Navbar';
import api from '../../../services/api';
import { GlobalDashContainer } from '../../../components/Container/styles';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { StyledTable } from '../../../components/StyledTable/styles';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';
import * as S from '../../Equipaments/EquipamentList/styles';
import Button from '../../../components/Button';
import { FiFileText } from 'react-icons/fi';
import { SkeletonTheme } from 'react-loading-skeleton';
import InputSearchBar from '../../../components/SearchBar';
import Pagination from '../../../components/Pagination';
import { useMediaQuery } from 'react-responsive';
import EmptySpace from '../../../components/EmptyStatus';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { Helmet } from 'react-helmet';

interface Categories {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
  technician: {
    avatar: string;
    name: string;
  };
}

export default function Category() {
  const [category, setCategory] = useState<Categories[] | undefined>();
  const [categoryDefault, setCategoryDefault] = useState<Categories[]>();

  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [butonsOption, setButtonsOption] = useState(true);
  const [input, setInput] = useState('');
  const history = useHistory();
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('warning');
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage] = useState(8);
  const [url, setUrl] = useState('');
  const IndexOfLastPost = currentPage * issuesPerPage;
  const indexfFirstPost = IndexOfLastPost - issuesPerPage;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const currentCategories = category?.slice(indexfFirstPost, IndexOfLastPost);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get(`/categories`).then(response => {
      setCategory(response.data);
      setCategoryDefault(response.data);
    });
    api.get(`categories/report`, { responseType: 'blob' }).then(response => {
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

      await api.delete(`categories/${selectedCategory}`);

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
    } catch (e: unknown) {
      const error = e as AxiosError;

      if (error.response) {
        if (error.response.status === 401) {
          setModalTitle('Categoria em uso');
          setModalDescription('Remova os procedimentos e os equipamentos que estão utilizando essa categoria antes de remover.');
          setModalType('info');
          setButtonsOption(false);
        }
      }
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
        <title>Prae - Categorias</title>
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
              <Button minimal customColor="#FFFFFF" onClick={() => history.push(`dashboard`)}>
                Voltar
              </Button>
              <Link to={{ pathname: url }} target="_blank">
                <Button customColor="#FFFFFF">Gerar Relatório</Button>
              </Link>
              <Button onClick={() => history.push(`/category/new`)}>Adicionar Categoria</Button>
            </S.ActionHolderContainer>
            <StyledTable>
              {category.length > 0 ? (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        {!isMobile && <th>Descrição</th>}
                        {!isMobile ? <th>Criado por</th> : <th>Ação</th>}
                        <th>Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCategories?.map(category => (
                        <tr key={category.id}>
                          <td style={{ textAlign: 'left' }}>{category.name}</td>
                          {!isMobile && <td style={{ textAlign: 'left' }}>{category.description ? category.description : 'Sem descrição'}</td>}
                          <td style={{ textAlign: 'left' }}>
                            {!isMobile && <img src={category.technician.avatar ? category.technician.avatar : manProfile} alt="Portrait User" />}
                            {!isMobile && category.technician.name}
                          </td>
                          <td>
                            <Menu
                              menuButton={
                                <MenuButton>
                                  <BsThreeDotsVertical />
                                </MenuButton>
                              }>
                              <MenuItem>
                                <Link to={`category/edit/${category.id}`}>Editar</Link>
                              </MenuItem>
                              <MenuItem
                                onClick={() => {
                                  handleDeleteAction();
                                  setSelectedCategory(category.id);
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
                    <span>Categorias cadastradas na base de dados</span>
                  </section>
                </>
              ) : (
                <S.EmptyState>
                  <FiFileText size={64} color={`#8257e5`} />
                  <S.TitleEmpty>Nada para mostrar aqui.</S.TitleEmpty>
                  <S.DescriptionEmpty>
                    {input ? `Nao encontramos nenhuma categoria relacionada com a sua busca` : `Não existe categorias cadastrada no sistema.`}
                  </S.DescriptionEmpty>
                  <Button onClick={() => history.push(`/category/new`)}>Adicionar Categoria</Button>
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

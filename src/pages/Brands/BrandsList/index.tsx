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
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import InputSearchBar from '../../../components/SearchBar';
import Pagination from '../../../components/Pagination';
import { MdLibraryBooks } from 'react-icons/md';
import { TransitionGroup } from 'react-transition-group';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

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
  const [url, setUrl] = useState('');
  const history = useHistory();
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('warning');
  const [currentPage, setCurrentPage] = useState(1);
  const [inProp] = useState(false);
  const [issuesPerPage] = useState(8);
  const IndexOfLastPost = currentPage * issuesPerPage;
  const indexfFirstPost = IndexOfLastPost - issuesPerPage;
  const currentCategories = category?.slice(indexfFirstPost, IndexOfLastPost);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get(`/brands`).then(response => {
      setCategory(response.data);
      setCategoryDefault(response.data);
    });

    api.get(`brands/report`, { responseType: 'blob' }).then(response => {
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

      await api.delete(`brands/${selectedCategory}`);

      if (category) {
        setCategory(
          category.filter(value => {
            return value.id !== selectedCategory;
          })
        );
      }
      setIsNewTConfirmationModalOpen(false);
      setIsLoading(false);
      toast.success('Deletada com sucesso.');
    } catch (e: unknown) {
      const error = e as AxiosError;

      if (error.response) {
        if (error.response.status === 401) {
          setModalTitle('Marca em uso');
          setModalDescription('Remova os equipamentos que estão utilizando essa marca antes de remover.');
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
    <>
      <TransitionGroup in={inProp} timeout={500} classNames="alert">
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
                          <th>Nome</th>
                          <th>Descrição</th>
                          <th>Criado por</th>
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
                      <span>Marcas cadastradas na base de dados</span>
                    </section>
                  </>
                </StyledTable>
              </>
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
                  <Button onClick={() => history.push(`/brands/new`)}>Adicionar Marca</Button>
                </S.ActionHolderContainer>
                <StyledTable>
                  {category.length > 0 ? (
                    <>
                      <table>
                        <thead>
                          <tr>
                            <th>Nome</th>
                            <th>Criado por</th>
                            <th>Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentCategories?.map(category => (
                            <tr key={category.id}>
                              <td style={{ textAlign: 'left' }}>{category.name}</td>
                              <td style={{ textAlign: 'left' }}>
                                <img src={category.technician.avatar ? category.technician.avatar : manProfile} alt="" />
                                {category.technician.name}
                              </td>
                              <td style={{ textAlign: 'center' }}>
                                {' '}
                                <Menu
                                  menuButton={
                                    <MenuButton>
                                      <BsThreeDotsVertical />
                                    </MenuButton>
                                  }>
                                  <MenuItem>
                                    <Link to={`brands/edit/${category.id}`}>Editar</Link>
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
                        <span>Marcas cadastradas na base de dados</span>
                      </section>
                    </>
                  ) : (
                    <S.EmptyState>
                      <MdLibraryBooks size={62} color={`#8257e5`} />

                      <S.TitleEmpty>Nada para mostrar aqui.</S.TitleEmpty>
                      <S.DescriptionEmpty>
                        {input ? `Nao encontramos nenhuma marca relacionada com a sua busca` : `Você não possui marcas cadastradas no sistemas.`}
                      </S.DescriptionEmpty>
                      <Button onClick={() => history.push(`/brands/new`)}>Adicionar Marca</Button>
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
      </TransitionGroup>
    </>
  );
}

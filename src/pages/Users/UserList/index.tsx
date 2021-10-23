import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import manProfile from '../../../assets/temp_assets/man-profile.png';
import NavigationBar from '../../../components/Navbar';
import api from '../../../services/api';
import { GlobalDashContainer } from '../../../components/Container/styles';
import { StyledTable } from '../../../components/StyledTable/styles';
import * as S from '../../Equipaments/EquipamentList/styles';
import '@szhsin/react-menu/dist/index.css';
import EmptySpace from '../../../components/EmptyStatus';
import Button from '../../../components/Button';
import { FiUsers } from 'react-icons/fi';
import { SkeletonTheme } from 'react-loading-skeleton';
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
  const [input, setInput] = useState('');
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage] = useState(8);
  const [url, setUrl] = useState('');
  const IndexOfLastPost = currentPage * issuesPerPage;
  const indexfFirstPost = IndexOfLastPost - issuesPerPage;
  const currentCategories = category?.slice(indexfFirstPost, IndexOfLastPost);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    api.get(`/users`).then(response => {
      setCategory(response.data);
      setCategoryDefault(response.data);
    });

    api.get(`users/report`, { responseType: 'blob' }).then(response => {
      setUrl(window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' })));
    });
  }, []);

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

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <GlobalDashContainer>
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
                  <FiUsers size={82} color={`#8257e5`} />
                  <S.TitleEmpty>Nada para mostrar aqui.</S.TitleEmpty>
                  <S.DescriptionEmpty>
                    {input ? `Não encontramos nenhum técnico relacionada com a sua busca` : `Você não possui técnicos cadastrados no sistemas.`}
                  </S.DescriptionEmpty>
                </S.EmptyState>
              )}
            </StyledTable>
            <S.PaginationContainer>
              <Pagination issuesPerPage={issuesPerPage} totalIssues={category.length} paginate={paginate} />
            </S.PaginationContainer>
          </>
        )}
      </S.Container>
    </GlobalDashContainer>
  );
}

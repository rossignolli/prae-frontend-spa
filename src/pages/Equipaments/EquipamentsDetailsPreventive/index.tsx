import { GlobalDashContainer } from '../../../components/Container/styles';
import NavigationBar from '../../../components/Navbar';
import * as S from '../EquipamentsDetailsPreventive/styles';
import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { StyledTable } from '../../../components/StyledTable/styles';
import Button from '../../../components/Button';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Link, useHistory } from 'react-router-dom';
import EmptySpace from '../../../components/EmptyStatus';
interface DetailsPreventive {
  id: string;
}

interface Jobs {
  id: string;
  preventive: {
    isCorrective: boolean;
  };
  job_name: string;
  supply_name: string;
  supply_price: string;
}

export default function EquipamentsDetailsPreventive() {
  const [jobs, setJobs] = useState<Jobs[]>();
  const [url, setUrl] = useState('');

  const { id } = useParams<DetailsPreventive>();
  const history = useHistory();

  useEffect(() => {
    api.get(`/preventives/details/${id}`).then(response => {
      setJobs(response.data);
    });
    api.get(`preventives/report/${id}`, { responseType: 'blob' }).then(response => {
      setUrl(window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' })));
    });
  }, [id]);

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.ContainerEquipaments>
        {!jobs && <EmptySpace />}
        {jobs && (
          <>
            <S.HeaderTitle>
              <Button minimal onClick={() => history.goBack()}>
                Voltar
              </Button>
              <Link to={{ pathname: url }} target="_blank">
                <Button>Baixar Extrato</Button>
              </Link>
              <b>Ação #{jobs && jobs[0].id}</b> <b>Tipo:</b> {jobs && jobs[0].preventive.isCorrective ? `Corretiva` : `Preventiva`}
            </S.HeaderTitle>

            <StyledTable>
              <table>
                <thead>
                  <tr>
                    <th>Procedimento</th>
                    <th>Suprimento</th>
                    <th>Custo</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs?.map(job => (
                    <tr key={job.id}>
                      <td>{job.job_name}</td>
                      <td>{job.supply_name}</td>
                      <td>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(parseFloat(job.supply_price))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <section>
                <span>Detalhes da Ações</span>
              </section>
            </StyledTable>
            <S.HeaderTitle>
              <b>Custo total dos procedimentos:</b> R$:{' '}
              {jobs
                ?.map(item => parseFloat(item.supply_price))
                .reduce((prev, next) => prev + next)
                ?.toFixed(2)}
            </S.HeaderTitle>
          </>
        )}
      </S.ContainerEquipaments>
    </GlobalDashContainer>
  );
}

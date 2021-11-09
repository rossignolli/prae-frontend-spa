/* eslint-disable array-callback-return */
import { GlobalDashContainer } from '../../../components/Container/styles';
import NavigationBar from '../../../components/Navbar';
import * as S from '../EquipamentsDetails/styles';
import ImageGallery from 'react-image-gallery';
import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { StyledTable } from '../../../components/StyledTable/styles';
import Button from '../../../components/Button';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import api from '../../../services/api';
import Header from '../../../components/Header';
import { format, parseISO } from 'date-fns';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';
import { Link, useHistory } from 'react-router-dom';
import SelectDateMonitorModal from '../../../components/Modals/SelectDateMonitorModal';
import { ptBR } from 'date-fns/locale';
import { DescriptionEmpty, EmptyState, TitleEmpty } from '../EquipamentList/styles';
import { FiTool } from 'react-icons/fi';
import EmptySpace from '../../../components/EmptyStatus';
import Skeleton from 'react-loading-skeleton';

interface EditCategoryParams {
  id: string;
}

interface Images {
  id: string;
  path: string;
}

interface ImagesGalery {
  original: string;
  originalWidth: number;
  originalHeight: number;
  thumbnail: string;
}

interface Preventive {
  id: string;
  name: string;
  created_at: string;
  description: string;
  updated_at: Date;
  brand: {
    name: string;
  };
  images: Images[];
  isCorrective: boolean;
  technician: {
    name: string;
  };
  equipament: {
    id: string;
    technician: {
      name: string;
    };
  };
}

interface Equipament {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  monitor: boolean;
  dateOfExpiration: string;
  updated_at: Date;
  images: Images[];
  brand: {
    name: string;
  };
  category: {
    id: string;
    name: string;
  };
  daysWithoutCorrective: number;
  maintenanceTotal: number;
}

export default function EquipamentsDetails() {
  const [equipament, setEquipament] = useState<Equipament>();
  const [preventives, setPreventives] = useState<Preventive[]>();
  const [url, setUrl] = useState('');
  const [url2, setUrl2] = useState('');
  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [modalDescription, setModalDescription] = useState('Equipamento adicionada com sucesso.');
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [isConfirmationMonitorModalOpen, setIsConfirmationMonitorModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');
  const [imagesToShow, setImagesToShow] = useState<ImagesGalery[]>([]);

  const { id } = useParams<EditCategoryParams>();
  const history = useHistory();

  useEffect(() => {
    api.get(`/equipaments/details/${id}`).then(response => {
      setEquipament(response.data);

      api.get(`/preventives/equipament/${id}`).then(response => {
        setPreventives(response.data);
      });

      api.get(`equipaments/qrcode/${id}`, { responseType: 'blob' }).then(response => {
        setUrl(window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' })));
      });

      api.get(`equipaments/report/${id}`, { responseType: 'blob' }).then(response => {
        setUrl2(window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' })));
      });

      if (response.data.images.length === 0) {
        imagesToShow.push({
          original: 'https://static-prae.s3.us-east-2.amazonaws.com/Others/no-image.png',
          originalWidth: 360,
          originalHeight: 360,
          thumbnail: 'https://static-prae.s3.us-east-2.amazonaws.com/Others/no-image.png',
        });

        setImagesToShow(imagesToShow);

        return;
      }

      response.data.images.map((image: Images) => {
        console.log(image.id);
        imagesToShow.push({
          original: image.path,
          originalWidth: 360,
          originalHeight: 360,
          thumbnail: image.path,
        });
        setImagesToShow(imagesToShow);
      });
    });
  }, [id, imagesToShow]);

  function handleCloseConfirmationModalMonitoring() {
    setIsConfirmationMonitorModalOpen(false);
  }

  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
  }

  function handleOpenMonitoringModal() {
    if (equipament?.monitor) {
      setModalTitle('Aviso');
      setModalDescription('Esse equipamento já está sendo monitorado.');
      setModalType('warning');
      setButtonsOption(false);
      setIsNewTConfirmationModalOpen(true);
      return;
    }

    setIsConfirmationMonitorModalOpen(true);
  }

  function newAction() {
    if (!equipament?.monitor) {
      setModalTitle('Ops... Erro.');
      setModalDescription('Somente equipamento monitorados podem receber ações.');
      setModalType('error');
      setButtonsOption(false);
      setIsNewTConfirmationModalOpen(true);
      return;
    }

    history.push(`actions/new/${equipament?.category.id}/${equipament?.id}`);
  }

  async function handleStarMonitoringEquipament(date: string) {
    const MonitoringDate = {
      date,
    };
    const response = await api.post(`preventives/monitor/${id}`, MonitoringDate);

    if (response.status !== 200) {
      setModalTitle('Ops... Algo deu errado.');
      setModalDescription('Tente novamente mais tarde');
      setModalType('error');
      setButtonsOption(false);
      setIsNewTConfirmationModalOpen(true);
      return;
    }

    if (equipament) {
      setEquipament({ ...equipament, monitor: true, dateOfExpiration: date });
    }

    setModalTitle('Sucesso.');
    setModalDescription('Equipamento está sendo monitorado.');
    setModalType('sucess');
    setButtonsOption(false);
    setIsConfirmationMonitorModalOpen(false);
    setIsNewTConfirmationModalOpen(true);
  }

  if (!equipament) {
    return (
      <>
        <GlobalDashContainer>
          <NavigationBar />
          <S.ContainerEquipaments>
            <Skeleton duration={0.5} height={500} style={{ borderRadius: `15px` }} />
            <Skeleton duration={0.5} height={40} style={{ borderRadius: `15px`, marginTop: '16px' }} />
          </S.ContainerEquipaments>
          <S.ContainerEquipaments>
            <Skeleton duration={0.5} height={300} style={{ borderRadius: `15px` }} />
          </S.ContainerEquipaments>
        </GlobalDashContainer>
      </>
    );
  }

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.ContainerEquipaments>
        <S.HeaderEquipament>
          <S.GalleryEquipament>{imagesToShow && <ImageGallery items={imagesToShow} />}</S.GalleryEquipament>
          <S.EquipamentDetails>
            <S.EquipamentTitle>{equipament?.name}</S.EquipamentTitle>
            <S.EquipamentDescription>{equipament?.description ? equipament.description : 'Sem descrição'}</S.EquipamentDescription>
            <S.ResumeEquipament>
              <S.ResumeInfo>
                <h1>{equipament?.brand.name}</h1>
                <span>Marca</span>
              </S.ResumeInfo>
              {equipament?.daysWithoutCorrective !== 0 && (
                <S.ResumeInfo>
                  <h1>{equipament?.daysWithoutCorrective}</h1>
                  <span>dias sem corretivas</span>
                </S.ResumeInfo>
              )}
              <S.ResumeInfo>
                <h1>{equipament?.maintenanceTotal}</h1>
                <span>manutenções executadas</span>
              </S.ResumeInfo>
            </S.ResumeEquipament>
            <S.ResumeContainer>
              <S.CardInfoHightlight>
                <span>Expiração</span>
                <p>
                  {!equipament?.dateOfExpiration
                    ? 'Não monitorado'
                    : equipament && equipament?.dateOfExpiration && format(parseISO(equipament?.dateOfExpiration), 'dd MMMM yyyy', { locale: ptBR })}
                </p>
              </S.CardInfoHightlight>
            </S.ResumeContainer>
          </S.EquipamentDetails>
        </S.HeaderEquipament>
        <S.ButtonContainer>
          <div style={{ flex: '1' }}>
            <Button minimal onClick={() => history.goBack()}>
              Voltar
            </Button>
          </div>
          <Link to={{ pathname: url2 }} target="_blank">
            <Button customColor="#24A3FF">Relatório</Button>
          </Link>
          {!equipament?.monitor && (
            <Button customColor="#28C76F" onClick={handleOpenMonitoringModal}>
              Monitorar
            </Button>
          )}
          <Link to={{ pathname: url }} target="_blank">
            <Button>QR CODE</Button>
          </Link>
          <Button customColor="#FF787A" onClick={newAction}>
            Iniciar Ação
          </Button>
        </S.ButtonContainer>
      </S.ContainerEquipaments>
      <S.ContainerEquipaments>
        {preventives && preventives.length > 0 ? (
          <>
            <Header title="Preventivas" description="Listagem completa de todas as preventivas executadas no equipamento" />
            <StyledTable>
              <table>
                <thead>
                  <tr>
                    <th>Data de execução</th>
                    <th>Tipo</th>
                    <th>Realizado por</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {preventives?.map(preventive => (
                    <tr key={preventive.id}>
                      <td>{preventives && format(parseISO(preventive.created_at), " dd 'de' MMMM'", { locale: ptBR })}</td>
                      <td>{preventive.isCorrective ? 'Corretiva' : 'Preventiva'}</td>
                      <td>{preventive.technician.name}</td>
                      <td>
                        <Link to={`preventive/${preventive.id}`}>Ver detalhes</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <section>
                <span>Manutenções executadas nesse equipamento</span>
              </section>
            </StyledTable>
          </>
        ) : (
          <>
            {!preventives ? (
              <Skeleton duration={0.5} height={300} style={{ borderRadius: `15px` }} />
            ) : (
              <EmptyState>
                <FiTool size={62} color={`#8257e5`} />
                <TitleEmpty>Nada para mostrar aqui.</TitleEmpty>
                <DescriptionEmpty>Não existem manutenções cadastrados no sistemas.</DescriptionEmpty>
                <Button onClick={newAction}>Adicionar Manutenção</Button>
              </EmptyState>
            )}
          </>
        )}
      </S.ContainerEquipaments>
      <SelectDateMonitorModal
        title={modalTitle}
        description={modalDescription}
        type={modalType}
        isOpen={isConfirmationMonitorModalOpen}
        onRequestCancel={() => handleCloseConfirmationModalMonitoring()}
        onRequestConfirmation={date => handleStarMonitoringEquipament(date)}
        buttons={butonsOption}
      />
      <ConfirmationModal
        title={modalTitle}
        description={modalDescription}
        type={modalType}
        isOpen={isNewTConfirmationModalOpen}
        onRequestCancel={() => handleCloseConfirmationModal()}
        buttons={butonsOption}
      />
    </GlobalDashContainer>
  );
}

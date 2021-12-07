import NavigationBar from '../../components/Navbar';
import { GlobalDashContainer } from '../../components/Container/styles';
import * as S from './styles';
import CardData from '../../components/CardData';
import Chart from 'react-apexcharts';
import CardEquipament from '../../components/CardEquipament';
import { FiMonitor, FiUsers } from 'react-icons/fi';
import { MdLibraryBooks } from 'react-icons/md';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Helmet } from 'react-helmet';

interface HomeData {
  equipamentsTotal: number;
  preventiveTotal: number;
  brandTotal: number;
  userTotal: number;
  percentage: {
    operational: number;
    expired: number;
    expiring: number;
    notBeingMonitored: number;
  };
  equipaments: Array<{
    id: string;
    name: string;
    status: 'expired' | 'running' | 'expiring';
    category: {
      name: string;
    };
  }>;
}

export default function Dashboard() {
  const [homeData, setHomedata] = useState<HomeData>();

  useEffect(() => {
    api.get(`/equipaments/home`).then(response => {
      setHomedata(response.data);
    });
  }, []);

  const series = [
    homeData?.percentage.operational !== null ? homeData?.percentage.operational : 1,
    homeData?.percentage.expired !== null ? homeData?.percentage.expired : 1,
    homeData?.percentage.expiring !== null ? homeData?.percentage.expiring : 1,
    homeData?.percentage.notBeingMonitored !== null ? homeData?.percentage.notBeingMonitored : 1,
  ];
  const options = {
    labels: ['Operando', 'Expirados', 'Expirando', 'Não Monitorados'],
    colors: ['#04D361', '#FF6347', '#FFB167', '#3CD3C1'],
    tooltip: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 1600,
        options: {
          chart: {
            height: '400px',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    fill: {
      colors: ['#04D361', '#FF6347', '#FFB167', '#3CD3C1'],
    },
    states: {
      active: {
        filter: {
          type: 'none',
        },
      },
      filter: {
        filter: {
          type: 'ligthen',
        },
      },
    },
  };

  if (!homeData) {
    return (
      <GlobalDashContainer>
        <Helmet>
          <title>Prae - Dashboard</title>
          <meta property="og:title" content="Prae - Gerencia seus assets com inteligência" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://cdn.discordapp.com/attachments/393816255993479179/887888085256388658/unknown.png" />
          <meta property="og:url" content="https://prae.vigarani.dev/" />
        </Helmet>
        <SkeletonTheme color="#FFFF" highlightColor="#e6e1e139" />
        <NavigationBar />
        <S.ContainerDash>
          <S.EquipamentsContainer>
            <S.TitleSection>Vencimentos</S.TitleSection>
            <S.SubTitleSection>Esses equipamentos precisarão de atenção em breve</S.SubTitleSection>
            <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
            <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
            <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
            <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
            <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
            <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
            <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
          </S.EquipamentsContainer>
          <S.DataCardsContainer>
            <S.ChartContainer>
              <S.TitleSection>Visão Geral da Organização</S.TitleSection>
              <S.SubTitleSection>Resumo da situação da organização</S.SubTitleSection>
              <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
              <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
              <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
            </S.ChartContainer>
            <S.TitleSection>Estatísticas de Entidades</S.TitleSection>
            <S.SubTitleSection>Esses equipamentos precisarão de atenção em breve</S.SubTitleSection>
            <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
            <Skeleton duration={0.5} height={80} style={{ borderRadius: `15px`, marginTop: `15px` }} />
          </S.DataCardsContainer>
        </S.ContainerDash>
      </GlobalDashContainer>
    );
  }

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.ContainerDash>
        <S.EquipamentsContainer>
          {homeData && homeData.equipaments.length <= 0 ? (
            <S.TitleSection>Nenhum equipamento necessita de atenção.</S.TitleSection>
          ) : (
            <>
              <S.TitleSection>Vencimentos</S.TitleSection>
              <S.SubTitleSection>Esses equipamentos precisarão de atenção em breve</S.SubTitleSection>
            </>
          )}
          {homeData?.equipaments.map(equipament => {
            return (
              <CardEquipament id={equipament.id} key={equipament.id} title={equipament.name} status={equipament.status} subtitle={equipament.category.name} />
            );
          })}
        </S.EquipamentsContainer>
        <S.DataCardsContainer>
          <S.ChartContainer>
            <S.TitleSection>Visão Geral da Organização</S.TitleSection>
            <S.SubTitleSection>Resumo da situação da organização</S.SubTitleSection>
            {homeData?.percentage && <Chart options={options} type="donut" series={series} />}
          </S.ChartContainer>
          <S.TitleSection>Estatísticas de Entidades</S.TitleSection>
          <S.SubTitleSection>Esses equipamentos precisarão de atenção em breve</S.SubTitleSection>
          <S.DataCardsInsideContainer>
            <CardData title={homeData?.equipamentsTotal} icon={<FiMonitor size={32} color={'#8257E5'} />} subtitle="Equipamentos" />
            <CardData title={homeData?.preventiveTotal} icon={<FiMonitor size={32} color={'#8257E5'} />} subtitle="Manutenções" />
          </S.DataCardsInsideContainer>
          <S.DataCardsInsideContainer>
            <CardData title={homeData?.brandTotal} icon={<MdLibraryBooks size={32} color={'#8257E5'} />} subtitle="Marcas" />
            <CardData title={homeData?.userTotal} icon={<FiUsers size={32} color={'#8257E5'} />} subtitle="Técnicos" />
          </S.DataCardsInsideContainer>
        </S.DataCardsContainer>
      </S.ContainerDash>
    </GlobalDashContainer>
  );
}

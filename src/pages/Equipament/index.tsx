import React, {useEffect, useState} from 'react'
import { FiAlertTriangle, FiAlignLeft, FiBarChart, FiBell, FiDelete, FiEdit2, FiHardDrive, FiPlus } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import manProfile from '../../assets/temp_assets/man-profile.jpg'
import NavigationBar from '../../components/navbar';

// import { useAuth } from '../../hooks/AuthContext';




import api from '../../services/api';
import { HeadersContents } from '../Dashboard/styles';
import { EquipamentsContent, Container } from './styles';
import {ButtonPurple,ButtonPurpleInverted} from '../../components/button/styles'
import Category from '../Category';
import { differenceInDays, parseISO } from 'date-fns';

interface Equipaments {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    monitor: boolean;
    critical: boolean;
    levelToManage: number;
    dateStartedMonitoring: Date;
    dateOfExpiration: string;
    dateLastStopMonitor: Date;
    timesStopped: number;
    expired: boolean;
    technician: any;
    category: any;
  }
  

  


const Equipament: React.FC = ()=>{

    // const hookAu = useAuth();
  const [equipaments, setEquipaments] = useState<Equipaments[]>();


  const history = useHistory();

  


  useEffect(()=>{
    api.get(`/equipaments`).then(response =>{
      setEquipaments(response.data)
    })
  },[equipaments])

  
  // if (!equipaments){
  //   return <p>Carregando....</p>
  // }

    return(
        <Container>
          <NavigationBar/>
                     
          <EquipamentsContent>
            <section>
           
            <ButtonPurpleInverted >
            <FiBarChart/>
              Gerar relatório
            </ButtonPurpleInverted>

            <ButtonPurple onClick={()=>{
              history.push('equipaments/new')
            }} >
            <FiPlus/>
              Adicionar
            </ButtonPurple>

            </section>
            
          <table>
            <tbody>
              <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Criado por</th>
                <th>Dias para expirar</th>
                <th>Marca</th>
                <th>Crítico</th>
                <th>Expirado</th>



                <th>Ações</th>
              </tr>
              {equipaments?.map((equipament) => (
                  <tr key={equipament.id}>



                      <td>
                      <Link to={`/equipaments/details/${equipament.id}`}>
                       {equipament.name}
                    </Link>
                       
                       
                       </td>
                      <td>{equipament.category.name}</td>
                      <td><img src={manProfile} alt=""/>{equipament.technician.name}</td>


                      <td>{equipament.dateOfExpiration ? `${differenceInDays(parseISO(equipament.dateOfExpiration), new Date())}`: `Não iniciado`}</td>
                      <td>Apple</td>
                      <td>{equipament.critical ? 'Sim': 'Não'}</td>

                      <td>{equipament.expired ? 'Sim': 'Não'}</td>

                      <td><FiEdit2/><FiDelete/></td>
                  </tr>
              ))}
              </tbody>
              </table>

             


          
          </EquipamentsContent>
           


        </Container>
    )
}

export default Equipament;
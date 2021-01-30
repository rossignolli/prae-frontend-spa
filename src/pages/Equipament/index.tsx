import React, {useEffect, useState} from 'react'
import { FiAlertTriangle, FiAlignLeft, FiBell, FiDelete, FiEdit2, FiHardDrive } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import NavigationBar from '../../components/navbar';

// import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';
import { HeadersContents } from '../Dashboard/styles';
import { EquipamentsContent, Container } from './styles';

interface Equipaments {
    created_at: Date;
    description: string;
    id: string;
    name: string;
    expired: boolean;
    updated_at: Date;
  }
  

  


const Equipament: React.FC = ()=>{

    // const hookAu = useAuth();
  const [equipaments, setEquipaments] = useState<Equipaments[]>();


  
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
                     
          <HeadersContents>
              <div>
                <FiAlignLeft size={26} color='#000000'/>
                <h3>Equipamentos</h3>
              </div>
                  <div>
                  <Link to=''>
                  <FiAlertTriangle size={26} color='#000000' />
                  <span>4</span>
                </Link>
                <Link to=''>
                  <FiHardDrive size={26} color='#000000' />
                  <span>4</span>
                </Link>
                <Link to=''>
                  <FiBell size={26} color='#000000' />
                  <span>4</span>
                </Link>
                  </div>                          
            </HeadersContents>
          <EquipamentsContent>
            <div>
            <input type="text"/>
            <button type="button">Gerar relatório</button>
            <button type="button">Adicionar Equipamento</button>
            </div>
            
          <table>
              <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Criado por</th>
                <th>Data de vencimento</th>
                <th>Marca</th>
                <th>Crítico</th>
                <th>Expiração</th>



                <th>Ações</th>
              </tr>
              {equipaments?.map((equipament) => (
                  <tr key={equipament.id}>



                      <td> <input type="checkbox" /> {equipament.name}</td>
                      <td>Estação de trabalho</td>
                      <td>Jeny Irland</td>


                      <td>{equipament.description}</td>
                      {equipament.expired ? (
                        <td>Vencida</td>
                      ) : (
                          <td>OK</td>
                      )}
                      <td>Sim</td>
                      <td>Expirado</td>

                      <td><FiEdit2/><FiDelete/></td>
                  </tr>
              ))}
              </table>


          
          </EquipamentsContent>
           


        </Container>
    )
}

export default Equipament;
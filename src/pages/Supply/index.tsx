import React, {useEffect, useState} from 'react'
import { FiAlertTriangle, FiAlignLeft, FiBarChart, FiBell, FiDelete, FiEdit2, FiHardDrive, FiPlus } from 'react-icons/fi';
import {  AiOutlineDelete } from 'react-icons/ai';

import { Link, useHistory } from 'react-router-dom';

import { ButtonPurpleInverted, ButtonPurple } from '../../components/button/styles';
import manProfile from '../../assets/temp_assets/man-profile.jpg'
import NavigationBar from '../../components/navbar';

// import { useAuth } from '../../hooks/AuthContext';




import api from '../../services/api';
import { HeadersContents } from '../Dashboard/styles';
import { CategoryContent, Container } from './styles';

interface Supplies {
    id: string;
    name: string;
    pricePerJob: number;
    created_at: Date;
    description: string;
    updated_at: Date;
  }
  

  


const Supplies: React.FC = ()=>{

    // const hookAu = useAuth();
  const [equipaments, setEquipaments] = useState<Supplies[]>();


  const history = useHistory();

  


  useEffect(()=>{
    api.get(`/supplies`).then(response =>{
      setEquipaments(response.data)
    })
  },[])

  
  // if (!equipaments){
  //   return <p>Carregando....</p>
  // }

    return(
        <Container>
          <NavigationBar/>
                    
          <CategoryContent>
            <section>
           
            <ButtonPurpleInverted >
            <FiBarChart/>
              Gerar relatório
            </ButtonPurpleInverted>

            <ButtonPurple onClick={()=>{
              history.push('category/new')
            }} >
            <FiPlus/>
              Adicionar
            </ButtonPurple>

            </section>
            
          <table>
              <tr>
                <th>Nome da Categoria</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
              {equipaments?.map((equipament) => (
                  <tr key={equipament.id}>
                      <td> <input type="checkbox" /> {equipament.name}</td>
                      <td>{equipament.pricePerJob}</td>
                      <td><FiEdit2 size={22} /><AiOutlineDelete size={22}/></td>
                  </tr>
              ))}
              </table>


          
          </CategoryContent>
           


        </Container>
    )
}

export default Supplies;
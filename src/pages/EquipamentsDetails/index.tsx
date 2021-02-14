import React, {useEffect, useState} from 'react'
import { FiAlertTriangle, FiAlignLeft, FiBarChart, FiBell, FiDelete, FiEdit2, FiHardDrive, FiPlus } from 'react-icons/fi';
import { Link, useHistory, useParams } from 'react-router-dom';

import manProfile from '../../assets/temp_assets/man-profile.jpg'
import { ButtonPurple, ButtonPurpleInverted, GreenButton, SalmonButton } from '../../components/button/styles';
import NavigationBar from '../../components/navbar';

// import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';
import { HeadersContents } from '../Dashboard/styles';
import { NewEquipamentsContent, Container } from './styles';


  
interface Equipaments {
  created_at: Date;
  description: string;
  id: string;
  name: string;
  expired: boolean;
  updated_at: Date;
}


interface EquipamentParams{
  id: string;
}


const EquipamentsDetails: React.FC = ()=>{


  const params = useParams<EquipamentParams>()
  const [equipament, setEquipament] = useState<Equipaments>();

  const history = useHistory();


  useEffect(()=>{
    api.get(`equipaments/details/${params.id}`).then(response =>{
      setEquipament(response.data)
    })
  },[params.id])


  console.log(params.id)
  


    return(
        <Container>
          <NavigationBar/>
          <NewEquipamentsContent>
            <h1>Name</h1>
            <p>{equipament?.name}</p>  
            <h1>Descrição</h1>

            <p>{equipament?.description}</p>  


              
         
            
              <div className="button-holder">
              <ButtonPurpleInverted>Voltar</ButtonPurpleInverted>
              <ButtonPurple>Adicionar</ButtonPurple>
              <GreenButton>Registrar Preventiva</GreenButton>
              <SalmonButton onClick={()=>{
                history.push(`/monitor/${params.id}`)
              }} >Iniciar</SalmonButton>


              </div>
              
              
          
          </NewEquipamentsContent>
           


        </Container>
    )
}

export default EquipamentsDetails;
import React, {useCallback, useEffect, useState} from 'react'
import { FiAlertTriangle, FiAlignLeft, FiBarChart, FiBell, FiDelete, FiEdit2, FiHardDrive, FiPlus } from 'react-icons/fi';
import { MdDevices } from 'react-icons/md';

import { Link, useHistory, useParams } from 'react-router-dom';

import manProfile from '../../assets/temp_assets/man-profile.jpg'
import { ButtonPurple, ButtonPurpleInverted, GreenButton, SalmonButton } from '../../components/button/styles';
import NavigationBar from '../../components/navbar';

// import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';
import { HeadersContents } from '../Dashboard/styles';
import { MonitorContent, Container, ContenderHolder } from './styles';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css'
import { differenceInDays } from 'date-fns';



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


const MonitorStart: React.FC = ()=>{


  const params = useParams<EquipamentParams>()
  const [equipament, setEquipament] = useState<Equipaments>();


  const [date, onChange] = useState(new Date());
  const history = useHistory();


  async function handleSubmit(event: any){

    const equipament = {
      date,
      equipamentId: params.id
    }

    await api.post('preventives/monitor', equipament);



  }


  useEffect(()=>{
    api.get(`equipaments/details/${params.id}`).then(response =>{
      setEquipament(response.data)
    })


  },[params.id])




    return(
        <Container>
          <NavigationBar/>
          <MonitorContent>


          <ContenderHolder>
            <div className="svgdiv">
              <MdDevices fontSize={80}/>
            </div>
            <h1>{equipament?.name}</h1>
            <DateTimePicker onChange={onChange}value={date}/>
            {differenceInDays(date, new Date())}
            <ButtonPurple onClick={handleSubmit}>Confirmar</ButtonPurple>
          </ContenderHolder>
          
          </MonitorContent>
          
           


        </Container>
    )
}

export default MonitorStart;
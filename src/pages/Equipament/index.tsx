import React, {useEffect, useState} from 'react'

import NavigationBar from '../../components/navbar';

// import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

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

  
  if (!equipaments){
    return <p>Carregando....</p>
  }

    return(
        <div className="">
          <NavigationBar/>
           {equipaments.map((equipament) => (
          <div key={equipament.id} className="wrapper">
              <h1>{equipament.name}</h1>
              <h1>{equipament.description}</h1>
               {equipament.expired ? (
                 <h1>Vencida</h1>
              ) : (
                  <h1>OK</h1>
              )}

          </div>
       ))}


        </div>
    )
}

export default Equipament;
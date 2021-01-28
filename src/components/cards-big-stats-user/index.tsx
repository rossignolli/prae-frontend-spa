import React, {useEffect, useState} from 'react'
import {RiComputerLine } from 'react-icons/ri';


import { ContainerCard } from './styles';



const SmallCard: React.FC = ()=>{



    return(
        <ContainerCard>

          <div>
            <h1>1,232</h1>
            <strong>Total de equipamentos</strong>
          </div>
          <RiComputerLine/>
       

        </ContainerCard>
    )
}

export default SmallCard;
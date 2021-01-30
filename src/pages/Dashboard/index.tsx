import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../../hooks/AuthContext';
import {Container, HeadersContents, DashBoardContent} from './styles'
import { FiAlertTriangle, FiAlignLeft, FiBell, FiHardDrive} from 'react-icons/fi'
import NavigationBar from '../../components/navbar';
import SmallCard from '../../components/card-small';
// import SmallCard from '../../components/card-small';



const Dashboard: React.FC = ()=>{

    const { user } = useAuth();
    

    


    console.log(user)

    return(
        <Container>
          <NavigationBar/>
            <HeadersContents>
              <div>
                <FiAlignLeft size={26} color='#000000'/>
                <h3>Dashboard</h3>
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

            <DashBoardContent>
              <SmallCard/>




            </DashBoardContent>

        </Container>
    )
}

export default Dashboard;
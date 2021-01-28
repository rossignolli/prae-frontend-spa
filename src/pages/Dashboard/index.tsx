import React, {useEffect} from 'react'
import {Link, useHistory, NavLink} from 'react-router-dom'
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';
import {Container, Navbar, HeadersContents, Userdiv, DashBoardContent} from './styles'
import { FiAlertTriangle, FiAlignLeft, FiAlignRight, FiBell, FiHardDrive, FiSearch} from 'react-icons/fi'
import { BsBellFill} from 'react-icons/bs'
import logodash from '../../assets/temp_assets/logo.svg'
import perfil from '../../assets/temp_assets/perfil.jpg'
import NavigationBar from '../../components/navbar';




const Dashboard: React.FC = ()=>{

    const {signOut, user } = useAuth();
    const history = useHistory()


    


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
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3><h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3><h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3><h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3><h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3><h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>
            <h3>Hello world</h3>

            </DashBoardContent>

        </Container>
    )
}

export default Dashboard;
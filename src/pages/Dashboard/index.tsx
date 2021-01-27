import React, {useEffect} from 'react'
import {Link, useHistory, NavLink} from 'react-router-dom'
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';
import {Container, Navbar, Content, Userdiv} from './styles'
import {FiArrowDown, FiHome} from 'react-icons/fi'
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
            <Content>
              <div>
              <h1>Hello, {user.id}</h1>
                <Link to="/equipaments">
              <h3 style={{
                color: "#0070F3",
                }} >Ver todos os equipamentos</h3>
              </Link>
              </div>
            </Content>

           

        </Container>
    )
}

export default Dashboard;
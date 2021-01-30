import React from 'react'
import { FiArrowDown, FiBarChart2, FiCalendar, FiEdit2, FiFileText, FiHardDrive, FiHome, FiPocket, FiUsers } from 'react-icons/fi';
import manProfile from '../../assets/temp_assets/man-profile.jpg'
import logosvg from '../../assets/temp_assets/logomin.png'
 import { useAuth } from '../../hooks/AuthContext';
import { Container, ImgLogo, Navbar, NavigationBarHeader, StyledNavLink, TitleMenu, Userdiv } from './styles';


const NavigationBar: React.FC = ()=>{



     const {user} = useAuth();

    return(
        <Container>
            <Navbar>
              <NavigationBarHeader>
              <ImgLogo>
                <img src={logosvg} alt=""/>
              </ImgLogo>
                  <Userdiv>
                    <img src={manProfile} alt=""/>
                    <div>
                    <h2>{user.name}</h2>
                    <h3>infra-supervisor</h3>
                    </div>
                    <FiArrowDown/>
                </Userdiv>
              </NavigationBarHeader>
              <TitleMenu>Principal</TitleMenu>
            <StyledNavLink  to='/dashboard' ><FiHome/>Dashboard</StyledNavLink>
            <StyledNavLink  to='/equipaments'><FiHardDrive/>Equipamentos</StyledNavLink>
            <StyledNavLink  to='/preventives'><FiEdit2/>Preventivas</StyledNavLink>
            <StyledNavLink  to='/corretives'><FiPocket/>Corretivas</StyledNavLink>
            <TitleMenu>Outros</TitleMenu>
            <StyledNavLink  to='/reports' ><FiBarChart2/>Relatórios</StyledNavLink>
            <StyledNavLink  to='/technicians'><FiUsers/>Técnicos</StyledNavLink>
            <StyledNavLink  to='/calendar'><FiCalendar/>Calendário</StyledNavLink>
            <StyledNavLink  to='/plan'><FiFileText/>Plano</StyledNavLink>
            </Navbar>
        </Container>
    )
}

export default NavigationBar;
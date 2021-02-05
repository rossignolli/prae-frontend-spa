import React from 'react'
import { FiArrowDown, FiBarChart2, FiCalendar, FiFileText, FiPocket, FiUsers } from 'react-icons/fi';
import { FcMultipleDevices, FcHome,FcAreaChart,FcGenealogy, FcCalendar, FcSupport, FcHighPriority, FcPackage, FcDocument } from 'react-icons/fc';

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
            <StyledNavLink  to='/dashboard' ><FcHome/>Dashboard</StyledNavLink>
            <StyledNavLink  to='/equipaments' ><FcMultipleDevices/>Equipamentos</StyledNavLink>
            <StyledNavLink  to='/preventives'><FcSupport/>Preventivas</StyledNavLink>
            <StyledNavLink  to='/category'><FcDocument/>Categorias</StyledNavLink>
            <StyledNavLink  to='/supplies'><FcPackage/>Suprimentos</StyledNavLink>


            <TitleMenu>Outros</TitleMenu>
            <StyledNavLink  to='/reports' ><FcAreaChart/>Relatórios</StyledNavLink>
            <StyledNavLink  to='/technicians'><FiUsers/>Técnicos</StyledNavLink>
            <StyledNavLink  to='/calendar'><FcCalendar/>Calendário</StyledNavLink>
            <StyledNavLink  to='/plan'><FcGenealogy/>Plano</StyledNavLink>
            
            </Navbar>
        </Container>
    )
}

export default NavigationBar;
import React, {useEffect, useState} from 'react'
import { FiArrowDown, FiBarChart2, FiCalendar, FiEdit2, FiFileText, FiHardDrive, FiHome, FiPlusCircle, FiPocket, FiUsers } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import manProfile from '../../assets/temp_assets/man-profile.jpg'
import logosvg from '../../assets/temp_assets/logomin.png'

// import { useAuth } from '../../hooks/AuthContext';
import { Container, ImgLogo, Navbar, NavigationBarHeader, StyledNavLink, TitleMenu, Userdiv } from './styles';



const NavigationBar: React.FC = ()=>{

    // const hookAu = useAuth();

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
                    <h2>Jeny Irland</h2>
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
            <StyledNavLink  to='/dashawfawfawsboard' ><FiBarChart2/>Relatórios</StyledNavLink>
            <StyledNavLink  to='/equipaments'><FiUsers/>Técnicos</StyledNavLink>
            <StyledNavLink  to='/preventives'><FiCalendar/>Calendário</StyledNavLink>
            <StyledNavLink  to='/corretives'><FiFileText/>Plano</StyledNavLink>

            
            


            </Navbar>
        </Container>
    )
}

export default NavigationBar;
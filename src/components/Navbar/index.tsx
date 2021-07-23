import React from "react";
import {
  FiArrowDown,
  FiUsers,
  FiHome,
  FiMonitor,
  FiTool,
  FiFileText,
  FiFolder,
  FiBarChart,
  FiCalendar,
  FiTrello,
} from "react-icons/fi";
import {
  FcMultipleDevices,
  FcHome,
  FcAreaChart,
  FcGenealogy,
  FcCalendar,
  FcSupport,
  FcHighPriority,
  FcPackage,
  FcDocument,
} from "react-icons/fc";

import manProfile from "../../assets/temp_assets/man-profile.jpg";
import logosvg from "../../assets/temp_assets/logomin.png";
import { useAuth } from "../../hooks/AuthContext";
import {
  Container,
  ImgLogo,
  Navbar,
  NavigationBarHeader,
  StyledNavLink,
  TitleMenu,
  Userdiv,
} from "./styles";

export default function NavigationBar() {
  const { user } = useAuth();

  return (
    <Container>
      <Navbar>
        <NavigationBarHeader>
          <ImgLogo>
            <img src={logosvg} alt="Prae - Preventivas" />
          </ImgLogo>
          <Userdiv>
            <img src={manProfile} alt="" />
            <div>
              <h2>{user.name}</h2>
              <h3>infra-supervisor</h3>
            </div>
            <FiArrowDown />
          </Userdiv>
        </NavigationBarHeader>
        <TitleMenu>Principal</TitleMenu>
        <StyledNavLink to="/dashboard">
          <FiHome />
          Dashboard
        </StyledNavLink>
        <StyledNavLink to="/equipaments">
          <FiMonitor />
          Equipamentos
        </StyledNavLink>
        <StyledNavLink to="/preventives">
          <FiTool />
          Preventivas
        </StyledNavLink>
        <StyledNavLink to="/category">
          <FiFileText />
          Categorias
        </StyledNavLink>
        <StyledNavLink to="/job">
          <FiTool />
          Procedimentos
        </StyledNavLink>
        <StyledNavLink to="/supply">
          <FiFolder />
          Suprimentos
        </StyledNavLink>

        <TitleMenu>Outros</TitleMenu>
        <StyledNavLink to="/reports">
          <FiBarChart />
          Relatórios
        </StyledNavLink>
        <StyledNavLink to="/technicians">
          <FiUsers />
          Técnicos
        </StyledNavLink>
        <StyledNavLink to="/calendar">
          <FiCalendar />
          Calendário
        </StyledNavLink>
        <StyledNavLink to="/plan">
          <FiTrello />
          Plano
        </StyledNavLink>
      </Navbar>
    </Container>
  );
}

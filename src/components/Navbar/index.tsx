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
  FiMenu,
  FiArrowLeft,
} from "react-icons/fi";

import manProfile from "../../assets/temp_assets/man-profile.jpg";
import logosvg from "../../assets/temp_assets/logomin.svg";
import { useAuth } from "../../hooks/AuthContext";
import { useMediaQuery } from "react-responsive";
import {
  Container,
  ImgLogo,
  Navbar,
  NavigationBarHeader,
  StyledNavLink,
  TitleMenu,
  Userdiv,
  MobileContainer,
} from "./styles";
import { useState } from "react";

export default function NavigationBar() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1170px)" });

  return (
    <>
      <Container isOpen={isOpen}>
        <Navbar>
          <FiArrowLeft
            size={32}
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          />
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

      {isTabletOrMobile && (
        <MobileContainer>
          <FiMenu
            size={32}
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          />
        </MobileContainer>
      )}
    </>
  );
}

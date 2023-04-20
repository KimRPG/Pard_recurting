import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarWrapper = styled.nav`
  background-color: #1A1A1A;
  height: 70px;
  display: flex; 
  align-items: center; 
`;

const Logo = styled.div`
  img {
    height: 45px;
    width: 140px;
  }
  margin-right: auto; 
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const NavItem = styled.li`
  margin-right: 1rem;

  a {
    color: white;
    text-decoration: none;
  }
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      <Logo>
        <img src={require("../assets/img/Logo.png")} alt="Logo" />
      </Logo>
      <NavLinks>
        <NavItem>
          <Link to="/About">소개</Link>
        </NavItem>
        <NavItem>
          <Link to="/Project">프로젝트</Link>
        </NavItem>
        <NavItem>
          <Link to="/Inquiry">문의</Link>
        </NavItem>
        <NavItem>
          <Link to="/Recruting">리크루팅</Link>
        </NavItem>
      </NavLinks>
    </NavBarWrapper>
  );
};

export default NavBar;

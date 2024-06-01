import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';  // Import the Logo component

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
   background-image:url("image/header.jpeg");
  background-size: cover;
  background-position: center;
  font-family:"Poppins", sans-serif;
  font-size:25px;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  font-weight:10px;
  text-decoration: none;
  padding: 8px 16px;
  font-family: "Poppins", sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;
const Title= styled.h1`
font-family:Georgia, 'Times New Roman', Times, serif;
color:goldenrod;

`

const Navbar = () => (
  <NavbarContainer>
    <div className="logo">
      <Logo />
      <Title>Харунов hotel</Title>
     
    </div>
    <div className="nav-links">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/booking">Booking</NavLink>
    </div>
  </NavbarContainer>
);

export default Navbar;

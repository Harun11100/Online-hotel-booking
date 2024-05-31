
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Define the styled component for the logo image
const LogoImage = styled.img`
  height: 100px;
  width: auto;
  margin-right: 16px;
`;

// Create a Logo component that links to the homepage
const Logo = () => (
  <Link to="/">
    <LogoImage src="/image/logo-light.png" alt="Hotel Logo" />
  </Link>
);

export default Logo;

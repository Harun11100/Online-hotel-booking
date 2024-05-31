// src/components/Footer.jsx

import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #e8f6fc;
    padding: 20px;
    text-align: center;
    border-top: 1px solid #ddd;
    margin-top: 20px;
    font-family: "Poppins", sans-serif;
`;

const FooterSection = styled.div`
    margin-bottom: 15px;
    
    h4 {
        margin-bottom: 10px;
        color: #555;
    }

    p, a {
        color: #777;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

const Footer = () => (
    <FooterContainer>
        <FooterSection>
            <h4>Customer Support</h4>
            <p>Email: support@harunovhotel.com</p>
            <p>Phone: 800-123-4567</p>
        </FooterSection>
        <FooterSection>
            <h4>Hotel Locations</h4>
            <p>kashimpur</p>
            <p>Gazipur</p>
            <p>Dhaka</p>
        </FooterSection>
        <FooterSection>
            <p>&copy; 2024 Harunovhotels. All rights reserved.</p>
        </FooterSection>
    </FooterContainer>
);

export default Footer;

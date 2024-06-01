// src/components/ContactPage.jsx

import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #e4d49e;
  font-family: "Poppins", sans-serif;
  width: 100%;
`;

const FormContainer = styled.div`
  width: 50%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-left:6px;
  border: none;
  background-color:#cdcdc187;
  border-radius: 5px;
  width: 90%;
  height: 20px;
  font-size:17px;
  
`;

const TextArea = styled.textarea`
  padding: 10px;
  border:none;
  background-color:#cdcdc187;
  border-radius: 5px;
  width:96%;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #b89d42;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #9c7b33;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const SocialMediaLink = styled.a`
  margin: 0 10px;
  color: #000;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: #b89d42;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactContainer>
      <FormContainer>
        <Title>Contact Us</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Send Message</Button>
        </Form>
      </FormContainer>
      <SocialMediaLinks>
  <SocialMediaLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebookF} />
  </SocialMediaLink>
  <SocialMediaLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} />
  </SocialMediaLink>
  <SocialMediaLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </SocialMediaLink>
  <SocialMediaLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </SocialMediaLink>
  <SocialMediaLink href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faWhatsapp} />
  </SocialMediaLink>
</SocialMediaLinks>
    </ContactContainer>
  );
};

export default ContactPage;

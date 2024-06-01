import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const CardContainer = styled.div`
  border: 1px solid #ddd;
  margin: 10px;
  width: calc(25% - 40px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardBody = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardLink = styled.button`
  display: inline-block;
  margin-top: 10px;
  margin-left: 5px;
  padding: 10px 20px;
  background-color: #b89d42;
  color: white;
  text-decoration:none;
  border: none;
  border-radius: 5px;
  /* flex-grow: 1; */
  /* text-align: center; */
  
  cursor: pointer;

  &:hover {
    background-color: #9c7b33;
  }
`;



const ImageButton = styled.button`
  display: block;
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const TitleWithPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;

  h3 {
    margin: 0;
  }
`;

const StyledDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color:#b89d42;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  font-family: "Poppins", sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;

const Card = ({ image, title, discount, description, price, cabinId }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleBookNowClick = () => {
    navigate(`/booking?cabinId=${cabinId}&price=${price}`);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };



  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };

  return (
    <CardContainer>
      <ImageButton onClick={openModal}>
        <img src={image} alt={title} />
      </ImageButton>
      <CardBody>
        <TitleWithPrice>
          <h3>{title}</h3>
          <span>{discount !== 0 ? `Discount: $${discount}` : ''}</span>
          <span>Price: ${price}</span>
        </TitleWithPrice>
        <StyledDescription>
          {isDescriptionExpanded ? description : truncateText(description, 50)}
          <ToggleButton onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
            {isDescriptionExpanded ? 'Show Less' : 'Show More'}
          </ToggleButton>
        </StyledDescription>
        <CardFooter>
          <CardLink onClick={handleBookNowClick}><span>Book Now</span></CardLink>
         
        </CardFooter>
      </CardBody>
      {isModalOpen && (
        <ModalBackdrop onClick={closeModal}>
          <ModalContent>
            <ModalImage src={image} alt={title} />
          </ModalContent>
        </ModalBackdrop>
      )}
    </CardContainer>
  );
};

export default Card;

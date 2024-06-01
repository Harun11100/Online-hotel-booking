
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 50px;
  background-color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  color: #333;
`;

const Header = styled.h1`
  text-align: center;
  color: #b89d42;
`;

const Section = styled.section`
  margin: 20px 0;
`;

const SectionHeader = styled.h2`
  margin-bottom: 10px;
  color: #9c7b33;
`;

const Paragraph = styled.p`
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <Header>About Us</Header>
      <Section>
        <SectionHeader>Welcome to Our Hotel</SectionHeader>
        <Paragraph>
          Nestled in the heart of nature, our hotel offers a serene and luxurious retreat from the hustle and bustle of everyday life. With world-class amenities and breathtaking views, we provide an unparalleled experience for all our guests.
        </Paragraph>
      </Section>
      <Section>
        <SectionHeader>Our Mission</SectionHeader>
        <Paragraph>
          Our mission is to deliver exceptional hospitality and create memorable experiences for every guest. We strive to exceed expectations through our commitment to excellence, personalized service, and attention to detail.
        </Paragraph>
      </Section>
      <Section>
        <SectionHeader>Our Story</SectionHeader>
        <Paragraph>
          Established in 2023, our hotel has quickly become a preferred destination for travelers seeking comfort and tranquility. Our dedicated team works tirelessly to ensure that each stay is nothing short of perfection.
        </Paragraph>
      </Section>
    </AboutContainer>
  );
};

export default About;

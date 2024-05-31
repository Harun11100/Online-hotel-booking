// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import Modal from './components/Modal';
import BookingForm from './components/BookingForm';
import { SupabaseProvider, useSupabase } from './assets/context/SupabaseContext';
import Spinner from './components/Spinner';
import ContactPage from './components/contactPage';

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`;

const Cards = () => {
    const { data, loading } = useSupabase();
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    if (loading) {
        return <Spinner />
    }
    console.log(data)
    

    return (
        <>
            {data.map((item) => (
                <Card
                    key={item.id}
                    image={item.image}
                    title={item.name}
                    price={item.regularPrice}
                    discount={item.discount}
                    cabinId={item.id}
                    description={item.description}
                    onImageClick={() => openModal(item.image)}
                />
            ))}
            <Modal show={modalImage !== null} onClose={closeModal}>
                <img src={modalImage} alt="Modal" />
            </Modal>
        </>
    );
};

function App() {

// if(loading)return<Spinner/> 

    return (
        <SupabaseProvider>
        <Router>
            <div>
                <Navbar />
                <Content>
                    <Routes>
                        <Route path="/" element={<Cards />} />
                        <Route path="/booking" element={<BookingForm />} />
                        <Route path="/contact" element={<ContactPage />} />
                        
                    </Routes>
                </Content>
                <Footer />
            </div>
        </Router>
    </SupabaseProvider>
    )
}


export default App;

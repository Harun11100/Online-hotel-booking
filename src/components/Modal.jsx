// Modal.jsx
import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    position: fixed;
    background-color: white;
    width: 60%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
`;

const Modal = ({ show, onClose, children }) => (
    <ModalBackdrop show={show} onClick={onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
            {children}
        </ModalContent>
    </ModalBackdrop>
);

export default Modal;

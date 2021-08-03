import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { Overlay, ModalContainer } from './Modal.styles';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            onClose();
        }
    };

    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            onClose();
        }
    };

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalContainer>{children}</ModalContainer>
        </Overlay>,
        modalRoot,
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

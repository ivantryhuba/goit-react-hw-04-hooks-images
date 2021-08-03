import React from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalContainer } from './Modal.styles';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
        }
    };

    render() {
        const { children } = this.props;
        const backdropClick = this.handleBackdropClick;
        return createPortal(
            <Overlay onClick={backdropClick}>
                <ModalContainer>{children}</ModalContainer>
            </Overlay>,
            modalRoot,
        );
    }
}

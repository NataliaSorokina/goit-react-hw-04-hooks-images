import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';

export default function Modal({ onClose, fullImage }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <img src={fullImage.largeImageURL} alt={fullImage.tags} />
      </ModalWindow>
    </Overlay>
  );
}

Overlay.propTypes = {
  fullImage: PropTypes.object,
  onClose: PropTypes.func,
};

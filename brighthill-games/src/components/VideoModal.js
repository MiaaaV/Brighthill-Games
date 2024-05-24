import React from 'react';
import './styles/VideoModal.css';
import'./styles/MediaQueries/VideoModalQuery.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          width="800"
          height="500"
          src={`https://www.youtube.com/embed/fyVjhQDyswo?autoplay=1&amp;volume=50`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Modal;

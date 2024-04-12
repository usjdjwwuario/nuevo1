import React from 'react';

const Modal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>¿Estás seguro de que deseas eliminar este elemento?</h2>
        <div className="modal-buttons">
          <button onClick={onDelete}>Sí</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

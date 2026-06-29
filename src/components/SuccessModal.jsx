import React from 'react';

const SuccessModal = ({ open, onClose, message = 'Thanks! Your message has been sent.' }) => {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">Message Sent</h3>
        <p className="modal-body">{message}</p>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;

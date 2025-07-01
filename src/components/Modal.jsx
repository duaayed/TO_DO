import React, { useEffect, useState } from "react";

const Modal = ({ open, onClose , onDelete}) => {
  const [shouldRender, setShouldRender] = useState(open);


  useEffect(() => {
    if (open) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 300); // Match with CSS duration
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!shouldRender) return null;

  const modalClass = `modalStyle ${open ? 'fadeIn' : 'fadeOut'}`;

  return (
    <>
      <div className='overlay' onClick={onClose}></div>
      <div className={modalClass} >
        <button className='btn modal-x' onClick={onClose}>
          ✕
        </button>
        <div className='container'>
          <h3 style={{color:"red"}}>Are you sure you want to delete this task!</h3>
        </div>
        <button className="btn modalDel" onClick={onDelete}>Delete!</button>
      </div>
    </>
  );
};

export default Modal;

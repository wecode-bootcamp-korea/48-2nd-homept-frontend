import React, { useRef, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './DetailModal.scss';

const DetailModal = ({
  name,
  content,
  closeModal,
  imageUrl,
  currentModalData,
}) => {
  const ref = useRef();

  const handleCloseMenuModal = e => {
    if (currentModalData && (!ref.current || !ref.current.contains(e.target)))
      closeModal();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseMenuModal);
    return () => {
      document.removeEventListener('mousedown', handleCloseMenuModal);
    };
  }, []);
  return (
    <div className="detailModal">
      <div className="modal" ref={ref}>
        {imageUrl && <img src={`${imageUrl}`} alt="IMG" className="img" />}
        <div className="name">{name}</div>
        <div className="content">{content}</div>
        <AiOutlineClose className="closeIcon" onClick={() => closeModal()} />
      </div>
    </div>
  );
};

export default DetailModal;

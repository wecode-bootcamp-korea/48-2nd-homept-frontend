import React, { useRef, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FcAddImage } from 'react-icons/fc';
import ButtonS from '../../components/ButtonS/ButtonS';
import postDietImage from '../../API/personalTrainingAPI/postDietImage';
import './DetailModal.scss';

const DetailModal = ({
  id,
  name,
  content,
  closeModal,
  imageUrl,
  currentModalData,
}) => {
  const ref = useRef();
  const ImgRef = useRef();
  const [imgFile, setImgFile] = useState('');

  const saveImgFile = () => {
    const file = ImgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };
  const handleCloseModal = e => {
    if (currentModalData && (!ref.current || !ref.current.contains(e.target)))
      closeModal();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseModal);
    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, []);

  return (
    <div className="detailModal">
      <div className="modal scroll" ref={ref}>
        {imageUrl ? (
          <div className="imgBox">
            <img src={`${imageUrl}`} alt="IMG" className="exerciseImage" />
          </div>
        ) : (
          <form className="formDietImage" enctype="multipart/form-data">
            <label className="dietImageLabel" htmlFor="dietImg">
              {imgFile ? (
                <div className="wrap">
                  <div className="imgBox">
                    <img
                      src={imgFile}
                      className="previewDietImage"
                      alt="previewDietImage"
                    />
                  </div>
                  <ButtonS text="제출" onClick={() => postDietImage()} />
                </div>
              ) : (
                <div className="dietImageUploadBox">
                  <FcAddImage className="imgaeUploadIcon" />
                  <div className="dietImageUploadText">식단 사진 첨부</div>
                </div>
              )}
            </label>
            <input
              className="dietImageInput"
              type="file"
              accept="image/*"
              id="dietImg"
              onChange={() => saveImgFile()}
              ref={ImgRef}
            />
          </form>
        )}
        <div className="name">{name}</div>
        <div className="content">{content}</div>
        <AiOutlineClose className="closeIcon" onClick={() => closeModal()} />
      </div>
    </div>
  );
};

export default DetailModal;

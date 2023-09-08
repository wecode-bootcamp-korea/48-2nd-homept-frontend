import React from 'react';
import './ButtonM.scss';

const ButtonM = ({ text, className, onClick }) => {
  return (
    <button className={`buttonM ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonM;

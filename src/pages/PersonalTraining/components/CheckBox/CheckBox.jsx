import React from 'react';
import './CheckBox.scss';

const CheckBox = ({ name, imageUrl }) => (
  <div className="checkBox">
    <div className="imgBox">
      <img src={`${imageUrl}`} className="exerciseImg" alt="exerciseIMG" />
    </div>
    <div className="textBox">
      <div className="title">{name}</div>
    </div>
  </div>
);

export default CheckBox;

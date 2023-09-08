import React from 'react';
import Input from '../Input/Input';

function FormItem({ className, infoName, type, placeholder }) {
  return (
    <div className={`formItem ${className}`}>
      <span>{infoName}</span>
      <Input type={type} placeholder={placeholder} />
    </div>
  );
}

export default FormItem;

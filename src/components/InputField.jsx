import React from 'react';
import { Input } from 'antd';


function InputField({ label, id, type = 'text', placeholder }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="inputForm"
      />
    </div>
  );
}
export default InputField;

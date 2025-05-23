import React from 'react';
import { Input } from 'antd';

function PasswordField() {
  return (
    <div className="input-wrapper">
      <label htmlFor="password">Heslo *</label>
      <Input.Password
        id="password"
        placeholder="********"
        className="inputForm"
      />
    </div>
  );
}

export default PasswordField;

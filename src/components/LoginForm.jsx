import React, { useState } from 'react';
import InputField from './InputField';
import PasswordField from './PasswordField';

import Divider from './Divider';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import { Link } from 'react-router-dom';

function LoginForm() {

  const [formError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: validace nebo API volání
  };

  return (
    <>
      {formError && <div className="error-msg">{formError}</div>}

      <form className="login-form" onSubmit={handleSubmit}>
        <InputField
          label="Email *"
          type="email"
          id="email"
          placeholder="Zadejte Váš email"
        />

        <PasswordField/>

        <Link to="/zapomenute-heslo" className="forgot-password">
          🔒 Zapomenuté heslo

        </Link>

        <Link to="/clanky">
          <Button type="primary"  className="login-btn">
            Přihlásit se
          </Button>
        </Link>

        <Divider text="nebo" />

        <Link to="/create">
          <Button type="primary"  className="create-account-btn">
            Vytvořit nový účet Moje Amber
          </Button>
        </Link>

        <p className="help-text">
          Jste náš stávající dárce a nemůžete se přihlásit?{' '}
          Klikněte zde a nastavte si heslo.
        </p>
      </form>
    </>
  );
}

export default LoginForm;

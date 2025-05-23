import { Form, Input, Button } from 'antd';
import logoTop from '../../public/images/kytka.svg';
import logoMain from '../../public/images/moje_amber.svg';
import logoBottom from '../../public/images/ruka.svg';

function ForgotPasswordPage() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Email pro reset:', values.email);
    // zde bude volání API nebo zobrazení potvrzení
  };

  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="container">
          <img src={logoTop} alt="Amber Plasma Logo" className="logo" />
        </div>
      </header>

      <main>
        <img src={logoMain} alt="Moje Amber Logo" className="main-logo" />

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="login-form"
        >
          <Form.Item
            label="Zadejte váš e-mail"
            name="email"
            rules={[
              { required: true, message: 'Zadejte e-mail' },
              { type: 'email', message: 'Neplatná e-mailová adresa' },
            ]}
          >
            <Input placeholder="např. vase@email.cz" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="reset-btn">
              Resetovat heslo
            </Button>
          </Form.Item>
        </Form>
      </main>

      <footer>
        <img src={logoBottom} alt="Dekorace dole" className="logo-dole" />
      </footer>
    </div>
  );
}

export default ForgotPasswordPage;

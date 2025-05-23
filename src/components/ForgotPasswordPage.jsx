import { Form, Input, Button } from 'antd';

import logoMain from '../images/moje_amber.svg';


function ForgotPasswordPage() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Email pro reset:', values.email);
    // zde bude volání API nebo zobrazení potvrzení
  };

  return (
    <div className="page-wrapper">
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

    </div>
  );
}

export default ForgotPasswordPage;

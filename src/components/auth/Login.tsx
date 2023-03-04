import React from "react";
import { Form, Row, Col, Input, Typography, Button } from "../../utils/Desing";

interface loginInterfaz {
  formStateLogin: (value: boolean) => void;
}

const Login  = ({ formStateLogin }: loginInterfaz) => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <Form onFinish={onFinish}>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Typography.Text>Email</Typography.Text>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Ingrese un email",
              },
            ]}
          >
            <Input size="small" type="email" placeholder="Ingrese el email" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Typography.Text>Password</Typography.Text>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Ingrese una contrasenia",
              },
            ]}
          >
            <Input.Password
              size="small"
              type="email"
              placeholder="Ingrese el email"
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Button
            htmlType="submit"
            type="primary"
            size="small"
            style={{ width: "100%" }}
          >
            Ingresar
          </Button>
        </Col>

        <Col span={24}>
          <Button
            htmlType="submit"
            type="link"
            size="small"
            onClick={() => formStateLogin(true)}
          >
            Registrate
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;

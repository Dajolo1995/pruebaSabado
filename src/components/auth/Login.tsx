import React, { useEffect, useState, useContext } from "react";
import { Form, Row, Col, Input, Typography, Button } from "../../utils/Desing";
import { HomeworkContext } from "../../context/userContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface loginInterfaz {
  formStateLogin: (value: boolean) => void;
}

const Login = ({ formStateLogin }: loginInterfaz) => {
  const { dataLogin, dataUserAuth } = useContext(HomeworkContext);
  const navigate = useNavigate()

  const onFinish = async (value) => {
    try {
      dataUserAuth(value);

      await validations();
    } catch (error) {
      console.log(error);
    }
  };

  const validations = () => {
    console.log(dataLogin);

    try {
      if (dataLogin.length === 0) {
        Swal.fire({
          text: "Email o password incorrect",
          icon: "error",
          title: "Ooops!!",
        });
      } else if (dataLogin[0]?.state === false) {
        Swal.fire({
          text: "Usuario inactivo comuniquese con administrador",
          icon: "error",
          title: "Ooops!!",
        });
      } else {
        localStorage.setItem("user", dataLogin[0]?.name);
        localStorage.setItem("rol", dataLogin[0]?.state);

        navigate("/home")
      }
    } catch (error) {
      console.log(error);
    }
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

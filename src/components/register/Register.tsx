import React, { useEffect, useState, useContext } from "react";
import {
  Form,
  Row,
  Col,
  Input,
  Typography,
  Button,
  InputNumber,
  Select,
} from "../../utils/Desing";

import clienteAxios from "../../config/clienteAxios";
import { HomeworkContext } from "../../context/userContext";
import Swal from "sweetalert2";

const { Option } = Select;

interface registerInterfaz {
  formStateLogin: (value: boolean) => void;
}

const Register = ({ formStateLogin }: registerInterfaz) => {
  const [dataSource, SetDataSource] = useState([] as any);

  const { dataEmail, dataUserEmail } = useContext(HomeworkContext);

  const dependecyData = async () => {
    try {
      const res = await clienteAxios.get("/dependency");
      SetDataSource(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dependecyData();
  }, []);

  const addRegister = async (value) => {
    try {
      dataUserEmail(value.email);

      await validations(value);
    } catch (error) {
      console.log(error);
    }
  };

  const validations = async (value) => {
    try {
      if (dataEmail === true) {
        if (value.password !== value.passwordRecover) {
          Swal.fire({
            text: "Contrasenia no son iguales",
            icon: "error",
            title: "Opps!!",
          });
        }

        const dataVariable = dataSource.filter(
          (f: any) => f.id === value.dependency
        );

        let variable = {
          id: `${Math.floor(Math.random() * 100000) + 1}`,
          ...value,
          dependency: dataVariable[0],
          rol:"Empleado",
          state:false
        };

        console.log(variable);

        const user = await clienteAxios.post("/user", variable);


        formStateLogin(false)
      } else {
        Swal.fire({
          text: "Email ya existe",
          icon: "error",
          title: "Opps!!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onFinish={addRegister}>
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <Typography.Text>Nombre</Typography.Text>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Ingrese su nombre",
              },
            ]}
          >
            <Input size="small" placeholder="Ingrese su nombre" />
          </Form.Item>
        </Col>

        {/* {} */}
        <Col span={8}>
          <Typography.Text>Apellidos</Typography.Text>
          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: "Ingrese su apellidos",
              },
            ]}
          >
            <Input size="small" placeholder="Ingrese su apellidos" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Typography.Text>Telefono o Celular</Typography.Text>
          <Form.Item
            name="cel"
            rules={[
              {
                required: true,
                message: "Ingrese su nombre",
              },
            ]}
          >
            <InputNumber
              size="small"
              min={10}
              placeholder="Ingeses su numero celular"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* {} */}
        <Col span={8}>
          <Typography.Text>Email</Typography.Text>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Ingrese un correo electronico",
              },
            ]}
          >
            <Input size="small" type="email" placeholder="Ingrese un correo" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Typography.Text>Contrasena</Typography.Text>
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
              min={6}
              placeholder="Ingese la contrasenia"
            />
          </Form.Item>
        </Col>

        {/* {} */}
        <Col span={8}>
          <Typography.Text>Recuerde su contrasenia</Typography.Text>
          <Form.Item
            name="passwordRecover"
            rules={[
              {
                required: true,
                message: "Ingrese un correo electronico",
              },
            ]}
          >
            <Input.Password
              size="small"
              min={6}
              placeholder="Ingese la contrasenia"
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Typography.Text>Dependncia</Typography.Text>
          <Form.Item
            name="dependency"
            rules={[
              {
                required: true,
                message: "Ingrese un correo electronico",
              },
            ]}
          >
            <Select size="small">
              {dataSource.map((m: any) => (
                <Option value={m.id}>{m.name}</Option>
              ))}
            </Select>
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
            onClick={() => formStateLogin(false)}
          >
            Login
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Register;

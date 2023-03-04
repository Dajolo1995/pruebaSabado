import React from "react";
import { Row, Col } from "../../utils/Desing";
import "./Login.css";
import Content from "./Content";

const Login: React.FC = () => {
  return (
    <Row>
      <Col xs={0} md={12} lg={12} style={{ minHeight: "100vh" }}></Col>
      <Col
        xs={24}
        md={12}
        lg={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center ",
          height: "100vh",
          padding: "20px",
        }}
      >
        <Content />
      </Col>
    </Row>
  );
};

export default Login;

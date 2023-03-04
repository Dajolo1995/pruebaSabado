import React, { useState } from "react";
import { Card, Typography, Row, Col } from "../../utils/Desing";
import Login from "../../components/auth/Login";
import Register from "../../components/register/Register";

const Content: React.FC = () => {
  const [stateForm, setStateForm] = useState(false);

  const formStateLogin = (value: boolean) => {
    setStateForm(value);
  };

  return (
    <Card>
      {stateForm === false ? (
        <Row>
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Typography.Text style={{ textAlign: "center" }}>
              Login
            </Typography.Text>
          </Col>

          <Login formStateLogin={formStateLogin} />
        </Row>
      ) : (
        <Row>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Typography.Text style={{ textAlign: "center" }}>
            Registrate
          </Typography.Text>
        </Col>

        <Register formStateLogin={formStateLogin} />
      </Row>
      )}
    </Card>
  );
};

export default Content;

import { Layout, Row, Col, Dropdown } from "../../utils/Desing";

import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const { Header, Footer, Sider, Content } = Layout;

function LayoutPrivate({ children }) {
  const navigate = useNavigate();

  const users = localStorage.getItem("user");

  const exit = () => {
    localStorage.clear();

    Swal.fire({
      icon: "success",
      title: "Saliendo ...",
      showConfirmButton: false,
      timer: 4000,
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a onClick={exit} target="_blank" rel="noopener noreferrer">
          Salir
        </a>
      ),
    },
  ];

  return (
    <Layout>
      <Header>
        <Row>
          <Col span={24} style={{ display: "flex", justifyContent: "end" }}>
            <Dropdown menu={{ items }}>
              <a style={{ color: "#fff" }} onClick={(e) => e.preventDefault()}>
                {users?.toUpperCase()}
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>

      <Content style={{ padding: "20px", minHeight: "80vh" }}>
        {children}
      </Content>
      <Footer style={{ display: "flex", justifyContent: "center" }}>
        PRUEBA DE FRONT
      </Footer>
    </Layout>
  );
}

export default LayoutPrivate;

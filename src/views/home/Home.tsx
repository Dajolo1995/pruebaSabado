import React, { useEffect, useState, useContext } from "react";
import LayoutPrivate from "../../components/layoutPrivate/LayoutPrivate";
import { Table, Row, Col, Input } from "../../utils/Desing";
import Swal from "sweetalert2";
import { HomeworkContext } from "../../context/userContext";

const Home = () => {
  const { data, dataUser } = useContext(HomeworkContext);

  const [dataSource, setDataSource] = useState([]);
  const [copiaData, setDataCopia] = useState([]);

  const [stateInput, setStateInput] = useState("");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellido",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Correo",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Celular",
      dataIndex: "cel",
      key: "cel",
    },
    {
      title: "Rol",
      dataIndex: "rol",
      key: "rol",
    },
    {
      title: "Dependencia",
      dataIndex: "dependency",
      key: "dependency",
    },
    {
      title: "Estado",
      dataIndex: "state",
      key: "state",
    },
  ];

  const TableData = (data) => {
    let tableData: any = [];
    data.forEach((i: any) => {
      tableData.push({
        id: i.id,
        name: i.name,
        lastName: i.lastName,
        cel: i.cel,
        email: i.email,
        dependency: i.dependency.name,
        state: i.state === true ? "Activo" : "Inactivo",
        rol: i.rol,
      });
    });

    setDataCopia(tableData);
    return tableData;
  };

  useEffect(() => {
    dataUser();
  }, []);

  useEffect(() => {
    setDataSource(TableData(data));
  }, [data]);

  const onSearch = (value) => {
    let filters;

    let copia = copiaData;
    if (value.lenght === 0) {
      filters = copia;
    } else {
      filters = copia.filter(
        (u: any) =>
          u.id === value ||
          u.name.toLowerCase().includes(value.toLowerCase()) ||
          u.lastName.toLowerCase().includes(value.toLowerCase()) ||
          u.email.toLowerCase().includes(value.toLowerCase()) ||
          u.dependency.toLowerCase().includes(value.toLowerCase())
      );
    }
    setDataSource(filters);
  };

  useEffect(() => {
    onSearch(stateInput);
  }, [stateInput]);

  console.log(data);

  return (
    <LayoutPrivate>
      <Row>
        <Col span={12}>
          <Input
            size="small"
            onChange={(e) => setStateInput(e.target.value)}
            placeholder="Buscar"
          />
        </Col>
      </Row>

      <br />

      <Table size="small" columns={columns} dataSource={dataSource} />
    </LayoutPrivate>
  );
};

export default Home;

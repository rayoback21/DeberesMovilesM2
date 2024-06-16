import React from "react";
import { List, Table } from "antd";

const UserTable: React.FC = () => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Edad",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Dirección",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Bryan Bonilla",
      age: 30,
      address: "AV. Ricaurte",
    },
    {
      key: "2",
      name: "Solange",
      age: 27,
      address: "Calle 9 de Octubre",
    },
    {
      key: "8",
      name: "Cristhian Farfan",
      age: 31,
      address: "Av Quito",
    },
  ];

  return (
    <List>
      <Table columns={columns} dataSource={data} />;
    </List>
  );
};

export default UserTable;

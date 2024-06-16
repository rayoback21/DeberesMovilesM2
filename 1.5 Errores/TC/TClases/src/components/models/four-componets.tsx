import React from "react";
import { Select } from "antd";

const { Option } = Select;

const CustomSelect: React.FC = () => {
  return (
    <Select defaultValue="opcion1" style={{ width: 200 }}>
      <Option value="opcion1">Open</Option>
      <Option value="opcion2">Select</Option>
      <Option value="opcion3">Open3</Option>
    </Select>
  );
};

export default CustomSelect;

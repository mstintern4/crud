import React, { useState } from "react";
import InputField from "./InputField";

import TableInput from "./TableInput";

const Table = () => {
  let [tableData, settableData] = useState([]);
  let [inputData, setInputData] = useState({
    name: "fullName",
    name: "email",
    name: "contact",
    name: "address",
    name: "age",
    name: "dob",
  });
  let [index, setIndex] = useState();
  let [bolin, setBolin] = useState(false);
  let { fullName, email, contact, address, age, dob } = inputData;

  function data(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function addInputData() {
    settableData([
      ...tableData,
      { fullName, email, contact, address, age, dob },
    ]);
    // console.log(inputData);
    setInputData({
      fullName: "",
      email: "",
      contact: "",
      address: "",
      age: "",
      dob: "",
    });
  }
  //   console.log("set tableData", tableData);
  function deleteData(i) {
    let total = [...tableData];
    total.splice(i, 1);
    settableData(total);
  }

  function updateData(i) {
    let { fullName, email, contact, address, age, dob } = tableData[i];
    setInputData({ fullName, email, contact, address, age, dob });
    setBolin(true);
    setIndex(i);
  }
  function updateinfo() {
    let total = [...tableData];
    total.splice(index, 1, { fullName, email, contact, address, age, dob });
    settableData(total);
    setBolin(false);
    setInputData({
      fullName: "",
      email: "",
      contact: "",
      address: "",
      age: "",
      dob: "",
    });
  }
  return (
    <div className="container">
      <InputField
        inputData={inputData}
        bolin={bolin}
        data={data}
        addInputData={addInputData}
        updateinfo={updateinfo}
      />
      <TableInput
        tableData={tableData}
        deleteData={deleteData}
        updateData={updateData}
      />
    </div>
  );
};

export default Table;

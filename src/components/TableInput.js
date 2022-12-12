import React from "react";

const TableInput = ({ tableData, updateData, deleteData }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Adderss</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
                <td>{item.dob}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger mx-2"
                    onClick={() => updateData(i)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger mx-2"
                    onClick={() => deleteData(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableInput;

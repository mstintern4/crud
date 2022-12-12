import React from "react";

const InputField = (props) => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-sm-12 px-5 mb-2">
          <div className="form-row row mb-4">
            <div className="col">
              <input
                type="text"
                onChange={props.data}
                value={props.inputData.fullName || ""}
                name="fullName"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                onChange={props.data}
                value={props.inputData.email || ""}
                name="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="col">
              <input
                type="text"
                onChange={props.data}
                value={props.inputData.contact || ""}
                name="contact"
                className="form-control"
                placeholder="Contact"
              />
            </div>
            <div className="col">
              <input
                type="text"
                onChange={props.data}
                value={props.inputData.address || ""}
                name="address"
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div className="col">
              <input
                type="text"
                onChange={props.data}
                value={props.inputData.age || ""}
                name="age"
                className="form-control"
                placeholder="Age"
              />
            </div>
            <div className="col">
              <input
                type="text"
                onChange={props.data}
                value={props.inputData.dob || ""}
                name="dob"
                className="form-control"
                placeholder="DOB"
              />
            </div>
            <button
              className="btn btn-primary mt-3"
              onClick={!props.bolin ? props.addInputData : props.updateinfo}
            >
              {!props.bolin ? `Add Data` : `Update Data`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;

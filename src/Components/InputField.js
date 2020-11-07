import React from "react";

const InputField = ({description, handleChange, stateValue, inputType }) => {
         return (
            <div style={{ padding: "40px" }}>
            <div className="row my-1">
              <input
                style={{ textAlign: "center" }}
                className="col-sm"
                type={inputType}
                name={description}
                value={stateValue}
                placeholder={description}
                onChange={handleChange}
              />
            </div>
          </div>
         )
}

export default InputField
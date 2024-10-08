import React from "react";

const FormErrMsg = ({ errors, inputName }) => {
  return <span className="errorMessage">{errors[inputName]?.message}</span>;
};

export default FormErrMsg;

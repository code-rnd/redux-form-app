import React from "react";

import "./style.scss";

export const CustomInputComponent = ({
  placeholder,
  type,
  input,
  meta,
  ...props
}) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className={`customInput ${hasError ? "error" : ""}`}>
      <input type={type} placeholder={placeholder} {...input} {...props} />
    </div>
  );
};

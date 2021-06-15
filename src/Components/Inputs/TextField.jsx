import React from "react";
import { Field } from "formik";

export function TextField(props) {
  const { name, label, type, placeholder, required, ...rest } = props;

  return (
    <>
      {label && <label>{label}</label>}
      <Field
        name={name}
        type={type}
        placeholder={placeholder || ""}
        required={required}
        {...rest}
      />
    </>
  );
}

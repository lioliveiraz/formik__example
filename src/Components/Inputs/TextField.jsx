import React, { useEffect } from "react";
import { Field } from "formik";

export function TextField(props) {
  const { name, label, type, placeholder, required } = props;

  useEffect(() => {});

  return (
    <>
      {label && <label>{label}</label>}
      <Field
        name={name}
        type={type}
        placeholder={placeholder || ""}
        required={required}
      />
    </>
  );
}

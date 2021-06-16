import React, { useEffect } from "react";
import { Field, useFormikContext } from "formik";

export function TextField(props) {
  const { name, label, type, placeholder, required, error, ...rest } = props;
  const context = useFormikContext();

  useEffect(() => {
    console.log(context.touched);
  });
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

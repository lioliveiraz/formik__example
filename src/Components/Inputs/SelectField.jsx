import React from "react";
import { Field } from "formik";

export function SelectFields(props) {
  const { name, label, type, options, required } = props;

  return (
    <>
      {label && <label>{label}</label>}
      <Field name={name} component={type} required={required}>
        <option value=""> Select {label}</option>
        {options.map((opt, index) => (
          <option value={opt.value} label={opt.label} key={index} />
        ))}
      </Field>
    </>
  );
}

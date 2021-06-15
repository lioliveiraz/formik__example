import React from "react";
import { useFormikContext } from "formik";

export function SubmitButton(props) {
  const { title, ...rest } = props;

  const { isSubmitting } = useFormikContext();

  return <button type="submit">Submit</button>;
}

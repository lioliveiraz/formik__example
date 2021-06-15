import React from "react";
import { useFormikContext } from "formik";

export function SubmitButton(props) {
  const { isSubmitting } = useFormikContext();

  return (
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  );
}

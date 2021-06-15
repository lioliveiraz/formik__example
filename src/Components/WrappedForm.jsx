import React from "react";
import { Form, Formik } from "formik";

export function WrappedForm(props) {
  return (
    <Formik {...props}>
      <Form onSubmit={props.onSubmit}>{props.children}</Form>
    </Formik>
  );
}

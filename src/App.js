import React, { useState, useEffect } from "react";
import "./App.css";

import { formSchema } from "./data/data";

import { WrappedForm } from "./Components/WrappedForm";
import { validationSchema } from "./helpers/validation";
import { Formik } from "formik";

export default function App() {
  const [page, setPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState(formSchema[page]);
  const [inputValues, setValues] = useState();
  const [formData, setFormData] = useState();

  useEffect(() => {
    const upComingPageData = formSchema[page];
    setCurrentPageData(upComingPageData);
    setValues((currentValues) => {
      const newValues = currentPageData.fields.reduce((object, field) => {
        if (field.component === "field_group") {
          for (const subfield of field.fields) {
            if (subfield.type === "checkbox") {
              object[subfield._uid] = false;
            } else {
              object[subfield._uid] = "";
            }
          }
        } else {
          if (field.type === "checkbox") {
            object[field._uid] = false;
          } else {
            object[field._uid] = "";
          }
        }
        return object;
      }, {});
      return Object.assign({}, newValues, currentValues);
    });
  }, [page, currentPageData]);

  if (!inputValues) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Formik
        initialValues={inputValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFormData(values);
        }}
      >
        <WrappedForm
          setPage={setPage}
          page={page}
          currentPageData={currentPageData}
          formSchema={formSchema}
        />
      </Formik>

      {formData ? (
        <div>
          <p>{formData["7f885969-f8ba-40b9-bf5d-0d57bc9c6a8d"]}</p>
        </div>
      ) : null}
    </>
  );
}

import React, { useState, useEffect } from "react";
import "./App.css";

import { formSchema } from "./data/data";
import { TextField } from "./Components/Inputs/TextField";
import { SelectFields } from "./Components/Inputs/SelectField";
import { SubmitButton } from "./Components/Base/SubmitButton";
import { WrappedForm } from "./Components/WrappedForm";
import { validationSchema } from "./helpers/validation";

export default function App() {
  const [page, setPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState(formSchema[page]);
  const [inputValues, setValues] = useState();

  useEffect(() => {
    const upComingPageData = formSchema[page];
    setCurrentPageData(upComingPageData);
    setValues((currentValues) => {
      const newValues = currentPageData.fields.reduce((object, field) => {
        if (field.component === "field_group") {
          for (const subfield of field.fields) {
            object[subfield._uid] = "";
          }
        } else {
          object[field._uid] = "";
        }
        return object;
      }, {});

      return Object.assign({}, newValues, currentValues);
    });
  }, [page, currentPageData]);

  const getElement = (elementSchema) => {
    const { _uid, label, options, type, required, component, ...rest } =
      elementSchema;
    let props = {
      name: _uid,
      label: label,
      type: type,
      required: required,
      ...rest,
    };

    if (component != "options") {
      return (
        <div key={_uid}>
          <TextField {...props} />
        </div>
      );
    } else {
      props["options"] = options;
      return (
        <div key={_uid}>
          <SelectFields {...props} />{" "}
        </div>
      );
    }
  };

  if (!inputValues) {
    return <div>Loading...</div>;
  }

  const fieldMeetsCondition = (values) => (fields) => {
    if (fields.conditional && fields.conditional.field) {
      const segments = fields.conditional.field.split("_");
      const fieldId = segments[segments.length - 1];
      return values[fieldId] === fields.conditional.value;
    }
    return true;
  };

  const navigatePages = (direction, values) => {
    const findNextPage = (page) => {
      const upcomingPageData = formSchema[page];
      if (upcomingPageData.conditional && upcomingPageData.conditional.field) {
        const segments = upcomingPageData.conditional.field.split("_");
        const fieldId = segments[segments.length - 1];
        const fieldToMatchValue = values[fieldId];

        if (fieldToMatchValue !== upcomingPageData.conditional.value) {
          return findNextPage(direction == "next" ? page + 1 : page - 1);
        }
      }
      return page;
    };

    setPage(findNextPage(direction === "next" ? page + 1 : page - 1));
  };

  return (
    <>
      <WrappedForm
        initialValues={inputValues}
        onSubmit={(values) => console.log("values")}
        render={({ values }) => {
          return (
            <>
              <h2>{currentPageData.label}</h2>
              {currentPageData.fields
                .filter(fieldMeetsCondition(values))
                .map((field) => {
                  switch (field.component) {
                    case "field_group":
                      return field.fields.map((input) => getElement(input));
                    default:
                      return getElement(field);
                  }
                })}

              {page > 0 && (
                <button onClick={() => navigatePages("prev", values)}>
                  Previous Step
                </button>
              )}
              {page + 1 < formSchema.length ? (
                <button
                  onClick={() => {
                    navigatePages("next", values);
                  }}
                >
                  Next Step
                </button>
              ) : (
                <SubmitButton title="SUBMIT" />
              )}
            </>
          );
        }}
      />
    </>
  );
}

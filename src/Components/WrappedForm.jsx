import React from "react";
import { Form, useFormikContext } from "formik";
import { TextField } from "./Inputs/TextField";
import { SelectFields } from "./Inputs/SelectField";
import { SubmitButton } from "./Base/SubmitButton";

export function WrappedForm(props) {
  const { handleSubmit, values, ...ctxProps } = useFormikContext();
  const { page, currentPageData, formSchema, setPage } = props;

  const getElement = (elementSchema) => {
    const { _uid, label, options, type, required, component, ...rest } =
      elementSchema;
    const error = ctxProps.errors[_uid];

    let props = {
      name: _uid,
      label: label,
      type: type,
      required: required,
      error,
      ...rest,
    };

    if (component !== "options") {
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
          return findNextPage(direction === "next" ? page + 1 : page - 1);
        }
      }
      return page;
    };

    setPage(findNextPage(direction === "next" ? page + 1 : page - 1));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
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
          <div onClick={() => navigatePages("prev", values)}>Previous Step</div>
        )}
        {page + 1 < formSchema.length ? (
          <div
            onClick={() => {
              navigatePages("next", values);
            }}
          >
            Next Step
          </div>
        ) : (
          <SubmitButton title="SUBMIT" />
        )}
      </Form>
    </>
  );
}

import React from "react";
import { Field } from "redux-form";

import { CustomInputComponent } from "./CustomInput";
import { CustomButtonComponent } from "./CustomButton";

import { validateUtil, parsValueUtil, dateParseUtil } from "../../utils/Form";

export const CustomFormComponent = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        placeholder={"с: "}
        name={"startDate"}
        type={"text"}
        validate={[validateUtil]}
        parse={dateParseUtil}
        component={CustomInputComponent}
      />
      <Field
        placeholder={"по: "}
        name={"endDate"}
        type={"text"}
        validate={[validateUtil]}
        component={CustomInputComponent}
      />
      <CustomButtonComponent value={"submit"} />
    </form>
  );
};

import { CustomFormComponent } from "../../components/CustomForm";
import { reduxForm } from "redux-form";

export const CustomReduxFormContainer = reduxForm({
  form: "date"
})(CustomFormComponent);

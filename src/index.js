import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import { CustomReduxFormContainer } from "./containers/CustomForm";

import "./styles/style.scss";

const handleSubmit = e => {
  console.log(">>>handleSubmit", e);
};

ReactDOM.render(
  <Provider store={store}>
    <CustomReduxFormContainer onSubmit={handleSubmit} />
  </Provider>,
  document.getElementById("root")
);

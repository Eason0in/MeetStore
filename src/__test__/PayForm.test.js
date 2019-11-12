import React from "react";
import ReactDOM from "react-dom";
import PayForm from "../components/customer/PayForm";

it("renders without crashing", () => {
  const form = document.createElement("form");
  ReactDOM.render(<PayForm />, form);
});

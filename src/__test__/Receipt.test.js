import React from "react";
import ReactDOM from "react-dom";

import "@testing-library/jest-dom/extend-expect";

import Receipt from "../components/customer/Receipt";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Receipt />, div);
});

import { render } from "@testing-library/react";
import App from "../App";
import { React } from "react";

test("React is imported", () => {
  // eslint-disable-next-line jest/valid-expect
  expect(React);
});

test("renders 'hello world'", () => {
  let { getByText } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const helloText = getByText(/.*Hello World.*/i);
  expect(helloText).toBeInTheDocument();
});

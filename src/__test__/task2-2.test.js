import { render } from "@testing-library/react";
import MyContainer from "../components/MyContainer";

jest.mock("../components/MyList.js", () => () => <div data-testid="list" />);

test("Week component has List component inside it", () => {
  let { getAllByTestId } = render(<MyContainer />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getAllByTestId(/list/)).toBeTruthy();
});

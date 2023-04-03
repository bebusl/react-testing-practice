import { render, screen, fireEvent } from "@testing-library/react";
import Index from "./Index";

test("button has correct initial color", () => {
  render(<Index />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<Index />);

  // button will be enabled when checkbox not checked
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // button will be disabled when checkbox checked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("checkbox clicking", () => {
  //once click => checkbox는 checked된 상태여야 하고, button은 disabled
  //twice click => checkbox는 not checked, button은 enable
  render(<Index />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox");

  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});
